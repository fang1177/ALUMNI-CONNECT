import React from 'react'
import { motion } from 'framer-motion'
import { Star, MapPin, Users, MessageSquare, Calendar } from 'lucide-react'

const MentorCard = ({ mentor, delay = 0 }) => {
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
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {mentor.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{mentor.name}</h3>
            <p className="text-gray-600 text-sm">{mentor.role}</p>
            <p className="text-blue-600 text-sm font-medium">{mentor.company}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1 mb-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">{mentor.rating}</span>
          </div>
          <p className="text-xs text-gray-500">{mentor.sessions} sessions</p>
        </div>
      </div>

      {/* Location */}
      {mentor.location && (
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
          <MapPin className="h-4 w-4" />
          <span>{mentor.location}</span>
        </div>
      )}

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {mentor.skills.slice(0, 3).map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
        {mentor.skills.length > 3 && (
          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
            +{mentor.skills.length - 3} more
          </span>
        )}
      </div>

      {/* Compatibility Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Compatibility</span>
          <span className="text-sm font-bold text-green-600">{mentor.compatibility}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-400 to-green-500 rounded-full h-2 transition-all duration-500"
            style={{ width: `${mentor.compatibility}%` }}
          ></div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-400 transition-colors"
        >
          <MessageSquare className="h-4 w-4" />
          <span>Message</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
        >
          <Calendar className="h-4 w-4" />
          <span>Request Session</span>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default MentorCard