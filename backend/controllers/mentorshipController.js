const Mentorship = require('../models/Mentorship');
const User = require('../models/User');
const { matchingController } = require('./matchingController');
const catchAsync = require('../middleware/catchAsyncErrors');

exports.requestMentorship = catchAsync(async (req, res, next) => {
  const { mentorId, topics, goals, frequency, duration } = req.body;
  const menteeId = req.user.id;

  const existingRequest = await Mentorship.findOne({
    mentor: mentorId,
    mentee: menteeId,
    status: { $in: ['pending', 'active'] }
  });

  if (existingRequest) {
    return next(new Error('Mentorship request already exists'));
  }

  const mentorship = await Mentorship.create({
    mentor: mentorId,
    mentee: menteeId,
    topics,
    goals,
    frequency,
    duration
  });

  // Send notification to mentor
  await this.sendMentorshipNotification(mentorId, menteeId);

  res.status(201).json({
    success: true,
    data: mentorship
  });
});

exports.getMentorshipMatches = catchAsync(async (req, res, next) => {
  const matches = await matchingController.findMatchingMentors(req.user.id, req.query);
  
  res.status(200).json({
    success: true,
    data: matches
  });
});

// Backwards-compatible alias used by routes
exports.getMentors = exports.getMentorshipMatches;

// Return mentorship sessions relevant to the authenticated user
exports.getMentorshipSessions = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const mentorships = await Mentorship.find({
    $or: [{ mentor: userId }, { mentee: userId }]
  });

  const sessions = mentorships.reduce((acc, m) => {
    const data = m.sessions.map(s => ({
      mentorshipId: m._id,
      mentor: m.mentor,
      mentee: m.mentee,
      ...s.toObject()
    }));
    return acc.concat(data);
  }, []);

  res.status(200).json({ success: true, data: sessions });
});

exports.updateMentorshipStatus = catchAsync(async (req, res, next) => {
  const { mentorshipId } = req.params;
  const { status } = req.body;

  const mentorship = await Mentorship.findById(mentorshipId);
  
  if (!mentorship) {
    return next(new Error('Mentorship not found'));
  }

  if (req.user.id !== mentorship.mentor.toString()) {
    return next(new Error('Not authorized to update this mentorship'));
  }

  mentorship.status = status;
  await mentorship.save();

  res.status(200).json({
    success: true,
    data: mentorship
  });
});

exports.logMentorshipSession = catchAsync(async (req, res, next) => {
  const { mentorshipId } = req.params;
  const { date, duration, notes, rating, feedback } = req.body;

  const mentorship = await Mentorship.findById(mentorshipId);
  
  if (!mentorship) {
    return next(new Error('Mentorship not found'));
  }

  mentorship.sessions.push({
    date: date || new Date(),
    duration,
    notes,
    rating,
    feedback
  });

  await mentorship.save();

  // Update user stats
  await this.updateUserStats(mentorship.mentor, mentorship.mentee);

  res.status(200).json({
    success: true,
    data: mentorship
  });
});

exports.sendMentorshipNotification = async (mentorId, menteeId) => {
  // Implementation for sending email/push notifications
  console.log(`Mentorship request sent to mentor ${mentorId} from mentee ${menteeId}`);
};

exports.updateUserStats = async (mentorId, menteeId) => {
  await User.findByIdAndUpdate(mentorId, {
    $inc: { 'stats.mentorshipSessions': 1 }
  });
  
  await User.findByIdAndUpdate(menteeId, {
    $inc: { 'stats.mentorshipSessions': 1 }
  });
};