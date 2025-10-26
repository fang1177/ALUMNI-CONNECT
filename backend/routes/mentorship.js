const express = require('express')
const {
  getMentors,
  requestMentorship,
  getMentorshipSessions
} = require('../controllers/mentorshipController')
const { protect } = require('../middleware/auth')

const router = express.Router()

router.use(protect)

router.get('/mentors', getMentors)
router.post('/request', requestMentorship)
router.get('/sessions', getMentorshipSessions)

module.exports = router