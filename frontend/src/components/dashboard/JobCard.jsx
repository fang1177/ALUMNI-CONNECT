import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Briefcase, DollarSign, Users, Zap } from 'lucide-react'

const JobCard = ({ job, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">
            {job.company.slice(0, 2)}
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-gray-900 text-lg">{job.title}</h3>
              {job.isHot && (
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
          <p className="text-lg font-bold text-green-600">{job.salary}</p>
          <p className="text-sm text-gray-500">{job.experience}</p>
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
          <span>{job.type}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>{job.posted}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-blue-600">
          <Users className="h-4 w-4" />
          <span>{job.alumniCount} alumni work here</span>
        </div>
      </div>

      {/* Skills */}
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
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
          >
            {job.quickApply ? 'Quick Apply' : 'Apply Now'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default JobCard