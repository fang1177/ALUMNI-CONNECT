const Job = require('../models/Job')

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Private
exports.getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find({ isActive: true })
      .populate('postedBy', 'name email profile role')
      .populate('applicants.user', 'name email')
      .sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      count: jobs.length,
      data: jobs
    })
  } catch (error) {
    next(error)
  }
}

// @desc    Create job
// @route   POST /api/jobs
// @access  Private
exports.createJob = async (req, res, next) => {
  try {
    req.body.postedBy = req.user.id
    
    const job = await Job.create(req.body)

    res.status(201).json({
      success: true,
      data: job
    })
  } catch (error) {
    next(error)
  }
}

// @desc    Apply for job
// @route   POST /api/jobs/:id/apply
// @access  Private
exports.applyJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id)

    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      })
    }

    // Check if already applied
    const alreadyApplied = job.applicants.find(
      applicant => applicant.user.toString() === req.user.id
    )

    if (alreadyApplied) {
      return res.status(400).json({
        success: false,
        message: 'Already applied for this job'
      })
    }

    job.applicants.push({
      user: req.user.id
    })

    await job.save()

    res.status(200).json({
      success: true,
      message: 'Application submitted successfully'
    })
  } catch (error) {
    next(error)
  }
}