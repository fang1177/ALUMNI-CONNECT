const User = require('../models/User');

// @desc    Find matching mentors for a user
// @route   GET /api/mentorship/matches
// @access  Private
exports.findMatchingMentors = async (userId, queryParams = {}) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Find mentors who are available for mentorship
    const mentors = await User.find({
      _id: { $ne: userId },
      role: 'alumni',
      isAvailableForMentorship: true
    }).select('-password');

    // Simple matching algorithm based on skills and interests
    const matches = mentors.map(mentor => {
      let compatibilityScore = 0;
      
      // Calculate skill overlap
      if (user.profile?.skills && mentor.profile?.skills) {
        const userSkills = user.profile.skills;
        const mentorSkills = mentor.profile.skills;
        const commonSkills = userSkills.filter(skill => 
          mentorSkills.some(mentorSkill => 
            mentorSkill.toLowerCase().includes(skill.toLowerCase()) ||
            skill.toLowerCase().includes(mentorSkill.toLowerCase())
          )
        );
        compatibilityScore += (commonSkills.length / Math.max(userSkills.length, 1)) * 50;
      }

      // Calculate interest overlap
      if (user.profile?.interests && mentor.profile?.interests) {
        const userInterests = user.profile.interests;
        const mentorInterests = mentor.profile.interests;
        const commonInterests = userInterests.filter(interest => 
          mentorInterests.some(mentorInterest => 
            mentorInterest.toLowerCase().includes(interest.toLowerCase()) ||
            interest.toLowerCase().includes(mentorInterest.toLowerCase())
          )
        );
        compatibilityScore += (commonInterests.length / Math.max(userInterests.length, 1)) * 30;
      }

      // Add base score for being available
      compatibilityScore += 20;

      return {
        ...mentor.toObject(),
        compatibilityScore: Math.round(compatibilityScore)
      };
    });

    // Sort by compatibility score
    matches.sort((a, b) => b.compatibilityScore - a.compatibilityScore);

    return matches;
  } catch (error) {
    throw error;
  }
};

module.exports = { matchingController: exports };