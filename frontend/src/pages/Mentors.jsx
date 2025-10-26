import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Users, Star, MapPin, Briefcase } from 'lucide-react'
import MentorCard from '../components/dashboard/MentorCard'

const Mentors = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    industry: '',
    skills: '',
    availability: ''
  })

  const mentors = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Senior Product Manager',
      company: 'Google',
      avatar: '/api/placeholder/80/80',
      skills: ['Product Management', 'UX Design', 'Leadership', 'Agile'],
      rating: 4.9,
      sessions: 47,
      compatibility: 92,
      location: 'San Francisco, CA',
      experience: '8 years'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Software Engineer',
      company: 'Microsoft',
      avatar: '/api/placeholder/80/80',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
      rating: 4.8,
      sessions: 32,
      compatibility: 88,
      location: 'Seattle, WA',
      experience: '6 years'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Data Scientist',
      company: 'Amazon',
      avatar: '/api/placeholder/80/80',
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
      rating: 4.7,
      sessions: 28,
      compatibility: 85,
      location: 'New York, NY',
      experience: '5 years'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'UX Designer',
      company: 'Apple',
      avatar: '/api/placeholder/80/80',
      skills: ['Figma', 'User Research', 'Prototyping', 'UI/UX'],
      rating: 4.8,
      sessions: 35,
      compatibility: 82,
      location: 'Cupertino, CA',
      experience: '7 years'
    },
    {
      id: 5,
      name: 'Emily Watson',
      role: 'Marketing Director',
      company: 'Meta',
      avatar: '/api/placeholder/80/80',
      skills: ['Digital Marketing', 'Brand Strategy', 'Social Media'],
      rating: 4.6,
      sessions: 24,
      compatibility: 78,
      location: 'Austin, TX',
      experience: '9 years'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'DevOps Engineer',
      company: 'Netflix',
      avatar: '/api/placeholder/80/80',
      skills: ['Kubernetes', 'Docker', 'CI/CD', 'AWS'],
      rating: 4.7,
      sessions: 31,
      compatibility: 91,
      location: 'Los Gatos, CA',
      experience: '6 years'
    }
  ]

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
            Find Your Mentor
          </h1>
          <p className="text-gray-600">
            Connect with experienced alumni who can guide your career journey
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
                placeholder="Search mentors by name, skills, or company..."
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
              <div className="text-2xl font-bold text-gray-900">{mentors.length}</div>
              <div className="text-sm text-gray-600">Available Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">4.8</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">95%</div>
              <div className="text-sm text-gray-600">Response Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Mentors Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mentors.map((mentor, index) => (
            <MentorCard key={mentor.id} mentor={mentor} delay={index * 0.1} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Mentors