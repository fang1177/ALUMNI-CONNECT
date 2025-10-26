const mongoose = require('mongoose');

const mentorshipSchema = new mongoose.Schema({
  mentor: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  mentee: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'completed', 'cancelled'],
    default: 'pending'
  },
  areas: [String],
  goals: String,
  preferredSchedule: String,
  sessions: [{
    date: Date,
    duration: Number,
    notes: String,
    status: {
      type: String,
      enum: ['scheduled', 'completed', 'cancelled'],
      default: 'scheduled'
    }
  }],
  startDate: Date,
  endDate: Date,
  rating: {
    score: Number,
    feedback: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Mentorship', mentorshipSchema);