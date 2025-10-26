import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Calendar, 
  MapPin,
  Filter,
  Search,
  Star,
  Heart,
  Share2,
  Bookmark,
  Plus,
  Award,
  Target,
  Globe
} from 'lucide-react'

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions')
  const [searchTerm, setSearchTerm] = useState('')

  const tabs = [
    { id: 'discussions', label: 'Discussions', count: 1247 },
    { id: 'events', label: 'Events', count: 89 },
    { id: 'groups', label: 'Groups', count: 156 },
    { id: 'mentors', label: 'Featured Mentors', count: 234 }
  ]

  const discussions = [
    {
      id: 1,
      title: 'Career Transition from Finance to Tech - Any Advice?',
      author: 'Sarah Chen',
      authorRole: 'Recent Graduate',
      avatar: '/api/placeholder/40/40',
      category: 'Career Advice',
      replies: 23,
      likes: 45,
      timeAgo: '2 hours ago',
      isPinned: true,
      tags: ['career-change', 'tech', 'finance']
    },
    {
      id: 2,
      title: 'Best Practices for Remote Work Productivity',
      author: 'Michael Rodriguez',
      authorRole: 'Product Manager',
      avatar: '/api/placeholder/40/40',
      category: 'Workplace',
      replies: 18,
      likes: 32,
      timeAgo: '4 hours ago',
      isPinned: false,
      tags: ['remote-work', 'productivity', 'tips']
    },
    {
      id: 3,
      title: 'Networking Tips for Introverts - Share Your Strategies',
      author: 'Priya Patel',
      authorRole: 'UX Designer',
      avatar: '/api/placeholder/40/40',
      category: 'Networking',
      replies: 31,
      likes: 67,
      timeAgo: '6 hours ago',
      isPinned: false,
      tags: ['networking', 'introverts', 'strategies']
    },
    {
      id: 4,
      title: 'AlumniConnect Success Story: How I Found My Dream Job',
      author: 'David Kim',
      authorRole: 'Software Engineer',
      avatar: '/api/placeholder/40/40',
      category: 'Success Stories',
      replies: 15,
      likes: 89,
      timeAgo: '1 day ago',
      isPinned: true,
      tags: ['success-story', 'job-search', 'alumni']
    }
  ]

  const events = [
    {
      id: 1,
      title: 'Tech Industry Networking Mixer',
      date: 'Dec 20, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'San Francisco, CA',
      attendees: 45,
      maxAttendees: 100,
      category: 'Networking',
      description: 'Join us for an evening of networking with tech professionals from various companies.'
    },
    {
      id: 2,
      title: 'Mentorship Workshop: Building Meaningful Relationships',
      date: 'Dec 22, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Online',
      attendees: 78,
      maxAttendees: 150,
      category: 'Workshop',
      description: 'Learn how to build and maintain effective mentorship relationships.'
    },
    {
      id: 3,
      title: 'Career Fair: Startup Edition',
      date: 'Dec 28, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'New York, NY',
      attendees: 23,
      maxAttendees: 200,
      category: 'Career Fair',
      description: 'Connect with innovative startups and explore exciting career opportunities.'
    }
  ]

  const groups = [
    {
      id: 1,
      name: 'Women in Tech',
      description: 'Supporting and empowering women in technology careers',
      members: 1247,
      posts: 89,
      category: 'Professional',
      isPrivate: false,
      tags: ['women-in-tech', 'diversity', 'career']
    },
    {
      id: 2,
      name: 'Startup Founders',
      description: 'Connect with fellow entrepreneurs and startup founders',
      members: 567,
      posts: 156,
      category: 'Entrepreneurship',
      isPrivate: true,
      tags: ['startups', 'entrepreneurship', 'founders']
    },
    {
      id: 3,
      name: 'Data Science Professionals',
      description: 'Share insights and discuss trends in data science',
      members: 892,
      posts: 234,
      category: 'Technical',
      isPrivate: false,
      tags: ['data-science', 'analytics', 'machine-learning']
    }
  ]

  const featuredMentors = [
    {
      id: 1,
      name: 'Dr. Jennifer Liu',
      title: 'VP of Engineering',
      company: 'Google',
      avatar: '/api/placeholder/60/60',
      rating: 4.9,
      sessions: 156,
      specialties: ['Leadership', 'Engineering', 'Career Growth'],
      availability: 'Available',
      responseTime: 'Within 24 hours'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      title: 'Product Director',
      company: 'Microsoft',
      avatar: '/api/placeholder/60/60',
      rating: 4.8,
      sessions: 89,
      specialties: ['Product Management', 'Strategy', 'Innovation'],
      availability: 'Available',
      responseTime: 'Within 12 hours'
    },
    {
      id: 3,
      name: 'Dr. Aisha Patel',
      title: 'Data Science Lead',
      company: 'Amazon',
      avatar: '/api/placeholder/60/60',
      rating: 4.9,
      sessions: 203,
      specialties: ['Data Science', 'AI/ML', 'Research'],
      availability: 'Limited',
      responseTime: 'Within 48 hours'
    }
  ]

  const renderDiscussions = () => (
    <div className="space-y-4">
      {discussions.map((discussion, index) => (
        <motion.div
          key={discussion.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {discussion.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                {discussion.isPinned && (
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">
                    Pinned
                  </span>
                )}
                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                  {discussion.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                {discussion.title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                <span>{discussion.author} • {discussion.authorRole}</span>
                <span>{discussion.timeAgo}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{discussion.replies}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{discussion.likes}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {discussion.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  const renderEvents = () => (
    <div className="space-y-4">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                  {event.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date} at {event.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-2">
                {event.attendees}/{event.maxAttendees} attendees
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Join Event
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  const renderGroups = () => (
    <div className="space-y-4">
      {groups.map((group, index) => (
        <motion.div
          key={group.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                  {group.category}
                </span>
                {group.isPrivate && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Private
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{group.name}</h3>
              <p className="text-gray-600 mb-4">{group.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{group.members} members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{group.posts} posts</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {group.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Join Group
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  )

  const renderFeaturedMentors = () => (
    <div className="space-y-4">
      {featuredMentors.map((mentor, index) => (
        <motion.div
          key={mentor.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {mentor.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900">{mentor.name}</h3>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(mentor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">{mentor.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{mentor.title} at {mentor.company}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                <span>{mentor.sessions} sessions</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  mentor.availability === 'Available' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {mentor.availability}
                </span>
                <span>Responds {mentor.responseTime}</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                {mentor.specialties.map((specialty, specIndex) => (
                  <span key={specIndex} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                    {specialty}
                  </span>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Connect
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Connect, learn, and grow with thousands of students and alumni from around the world.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search discussions, events, groups, or mentors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-2">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activeTab === tab.id ? 'bg-white bg-opacity-20' : 'bg-gray-200'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'discussions' && renderDiscussions()}
          {activeTab === 'events' && renderEvents()}
          {activeTab === 'groups' && renderGroups()}
          {activeTab === 'mentors' && renderFeaturedMentors()}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the Conversation
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Be part of a vibrant community of learners, mentors, and professionals who are shaping the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                Start a Discussion
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Create an Event
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Community
