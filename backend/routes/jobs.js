const express = require('express')
const {
  getJobs,
  createJob,
  applyJob
} = require('../controllers/jobController')
const { protect } = require('../middleware/auth')

const router = express.Router()

router.use(protect)

router.get('/', getJobs)
router.post('/', createJob)
router.post('/:id/apply', applyJob)

module.exports = router