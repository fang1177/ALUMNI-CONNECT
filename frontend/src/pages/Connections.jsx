import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Users, MessageSquare, UserPlus, Filter } from 'lucide-react'

const Connections = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [connections, setConnections] = useState([
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Senior Product Manager',
      company: 'Google',
      avatar: '/api/placeholder/80/80',
      status: 'online',
      lastActive: '2 minutes ago',
      mutualConnections: 5,
      skills: ['Product Management', 'UX Design', 'Leadership']
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Software Engineer',
      company: 'Microsoft',
      avatar: '/api/placeholder/80/80',
      status: 'offline',
      lastActive: '1 hour ago',
      mutualConnections: 3,
      skills: ['React', 'Node.js', 'AWS']
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Data Scientist',
      company: 'Amazon',
      avatar: '/api/placeholder/80/80',
      status: 'online',
      lastActive: '5 minutes ago',
      mutualConnections: 7,
      skills: ['Python', 'Machine Learning', 'SQL']
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'UX Designer',
      company: 'Apple',
      avatar: '/api/placeholder/80/80',
      status: 'away',
      lastActive: '30 minutes ago',
      mutualConnections: 2,
      skills: ['Figma', 'User Research', 'Prototyping']
    }
  ])

  const ConnectionCard = ({ connection, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {connection.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
              connection.status === 'online' ? 'bg-green-500' :
              connection.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
            }`}></div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{connection.name}</h3>
            <p className="text-gray-600">{connection.role}</p>
            <p className="text-blue-600 text-sm font-medium">{connection.company}</p>
            <p className="text-xs text-gray-500 mt-1">
              {connection.status === 'online' ? 'Online' : 
               connection.status === 'away' ? 'Away' : 'Offline'} • {connection.lastActive}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">{connection.mutualConnections} mutual connections</p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {connection.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
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
          <UserPlus className="h-4 w-4" />
          <span>Connect</span>
        </motion.button>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            My Connections
          </h1>
          <p className="text-gray-600">
            Manage your professional network and discover new opportunities
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search connections by name, company, or skills..."
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
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{connections.length}</div>
              <div className="text-sm text-gray-600">Total Connections</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {connections.filter(c => c.status === 'online').length}
              </div>
              <div className="text-sm text-gray-600">Online Now</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">New This Week</div>
            </div>
          </div>
        </motion.div>

        {/* Connections Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {connections.map((connection, index) => (
            <ConnectionCard key={connection.id} connection={connection} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Connections
