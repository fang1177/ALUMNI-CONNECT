import React from 'react'
import { motion } from 'framer-motion'

const StatsCard = ({ stat, delay = 0 }) => {
  const Icon = stat.icon
  
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600'
  }

  const bgColorClasses = {
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
    green: 'bg-green-50',
    orange: 'bg-orange-50'
  }

  const iconColorClasses = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-green-600',
    orange: 'text-orange-600'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
          <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
          <p className="text-sm text-gray-500">{stat.change}</p>
        </div>
        <div className={`p-4 rounded-2xl ${bgColorClasses[stat.color]}`}>
          <Icon className={`h-8 w-8 ${iconColorClasses[stat.color]}`} />
        </div>
      </div>
    </motion.div>
  )
}

export default StatsCard