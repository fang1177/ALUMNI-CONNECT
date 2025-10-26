import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, MapPin, Clock, Briefcase, Users, Zap } from 'lucide-react'
import { jobsAPI } from '../utils/api'
import LoadingSpinner from '../components/LoadingSpinner'
import toast from 'react-hot-toast'

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    experience: ''
  })
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      setLoading(true)
      const response = await jobsAPI.getJobs()
      setJobs(response.data.data || [])
    } catch (error) {
      console.error('Error fetching jobs:', error)
      toast.error('Failed to fetch jobs')
    } finally {
      setLoading(false)
    }
  }

  const handleApply = async (jobId) => {
    try {
      await jobsAPI.applyJob(jobId)
      toast.success('Application submitted successfully!')
      fetchJobs() // Refresh to update applicant count
    } catch (error) {
      console.error('Error applying for job:', error)
      toast.error(error.response?.data?.message || 'Failed to apply for job')
    }
  }

  const formatDate = (date) => {
    const now = new Date()
    const postedDate = new Date(date)
    const diffTime = Math.abs(now - postedDate)
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    return `${Math.floor(diffDays / 30)} months ago`
  }

  const formatSalary = (salary) => {
    if (!salary) return 'Not specified'
    if (salary.min && salary.max) {
      return `₹${salary.min}-${salary.max} LPA`
    }
    return 'Not specified'
  }

  const JobCard = ({ job, index }) => {
    const isHot = new Date(job.createdAt).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000
    const hasApplied = job.applicants?.some(applicant => applicant.status !== 'rejected')
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
              {job.company?.slice(0, 2).toUpperCase() || 'JD'}
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-gray-900 text-lg">{job.title}</h3>
                {isHot && (
                  <div className="flex items-center space-x-1 bg-orange-50 px-2 py-1 rounded-full">
                    <Zap className="h-3 w-3 text-orange-500 fill-current" />
                    <span className="text-xs font-medium text-orange-600">Hot</span>
                  </div>
                )}
              </div>
              <p className="text-gray-600">{job.company}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-green-600">{formatSalary(job.salary)}</p>
          </div>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Briefcase className="h-4 w-4" />
            <span className="capitalize">{job.type?.replace('-', ' ')}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{formatDate(job.createdAt)}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-blue-600">
            <Users className="h-4 w-4" />
            <span>{job.applicants?.length || 0} applications</span>
          </div>
        </div>

        {/* Skills */}
        {(job.skills && job.skills.length > 0) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {job.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            View Details
          </button>
          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-400 transition-colors"
            >
              Save
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleApply(job._id)}
              disabled={hasApplied}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {hasApplied ? 'Applied' : 'Apply Now'}
            </motion.button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find Your Dream Job
          </h1>
          <p className="text-gray-600">
            Discover opportunities from our alumni network at top companies
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs by title, company, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {/* Filter Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-xl hover:border-gray-400 transition-colors"
            >
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filters</span>
            </motion.button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{jobs.length}</div>
              <div className="text-sm text-gray-600">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">42</div>
              <div className="text-sm text-gray-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Alumni Referral</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">24h</div>
              <div className="text-sm text-gray-600">Avg. Response</div>
            </div>
          </div>
        </motion.div>

        {/* Jobs Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <LoadingSpinner />
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No jobs available at the moment.</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {jobs.map((job, index) => (
              <JobCard key={job._id} job={job} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Jobs