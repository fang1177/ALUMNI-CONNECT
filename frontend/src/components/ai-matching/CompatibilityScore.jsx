import React from 'react'
import { motion } from 'framer-motion'

const CompatibilityScore = ({ score }) => {
  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 80) return 'text-blue-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBg = (score) => {
    if (score >= 90) return 'bg-green-50'
    if (score >= 80) return 'bg-blue-50'
    if (score >= 70) return 'bg-yellow-50'
    return 'bg-red-50'
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      className={`inline-flex items-center space-x-2 px-3 py-2 rounded-full ${getScoreBg(score)}`}
    >
      <div className="relative w-8 h-8">
        <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-gray-200"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={getScoreColor(score)}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${score}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-xs font-bold ${getScoreColor(score)}`}>
            {score}
          </span>
        </div>
      </div>
      <span className={`text-sm font-medium ${getScoreColor(score)}`}>
        Match
      </span>
    </motion.div>
  )
}

export default CompatibilityScore