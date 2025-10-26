import React from 'react'
import { motion } from 'framer-motion'

const LoadingSpinner = ({ size = 'large', text = 'Loading...' }) => {
  const sizes = {
    small: 'h-6 w-6',
    medium: 'h-12 w-12',
    large: 'h-16 w-16'
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className={`${sizes[size]} border-4 border-blue-200 border-t-blue-600 rounded-full`}
      />
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 font-medium"
        >
          {text}
        </motion.p>
      )}
    </div>
  )
}

export default LoadingSpinner