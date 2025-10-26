import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Filter,
  Search,
  Plus,
  Star,
  Bookmark,
  Share2,
  Video,
  Globe,
  Award,
  TrendingUp
} from 'lucide-react'

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState('upcoming')

  const categories = ['All', 'Networking', 'Workshop', 'Career Fair', 'Conference', 'Webinar', 'Meetup']

  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Industry Networking Mixer',
      description: 'Join us for an evening of networking with tech professionals from various companies. Connect with industry leaders, share experiences, and explore new opportunities.',
      date: 'Dec 20, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'San Francisco, CA',
      venue: 'Tech Hub SF',
      attendees: 45,
      maxAttendees: 100,
      category: 'Networking',
      price: 'Free',
      organizer: 'AlumniConnect',
      image: '/api/placeholder/400/250',
      tags: ['networking', 'tech', 'career'],
      isFeatured: true,
      isOnline: false
    },
    {
      id: 2,
      title: 'Mentorship Workshop: Building Meaningful Relationships',
      description: 'Learn how to build and maintain effective mentorship relationships. This interactive workshop covers best practices for both mentors and mentees.',
      date: 'Dec 22, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Online',
      venue: 'Zoom',
      attendees: 78,
      maxAttendees: 150,
      category: 'Workshop',
      price: 'Free',
      organizer: 'AlumniConnect',
      image: '/api/placeholder/400/250',
      tags: ['mentorship', 'workshop', 'relationships'],
      isFeatured: false,
      isOnline: true
    },
    {
      id: 3,
      title: 'Career Fair: Startup Edition',
      description: 'Connect with innovative startups and explore exciting career opportunities. Meet founders, learn about company cultures, and discover your next role.',
      date: 'Dec 28, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'New York, NY',
      venue: 'Convention Center',
      attendees: 23,
      maxAttendees: 200,
      category: 'Career Fair',
      price: '$25',
      organizer: 'Startup Network',
      image: '/api/placeholder/400/250',
      tags: ['career-fair', 'startups', 'jobs'],
      isFeatured: true,
      isOnline: false
    },
    {
      id: 4,
      title: 'AI & Machine Learning Conference 2024',
      description: 'Explore the latest trends and innovations in AI and machine learning. Hear from industry experts and network with fellow professionals.',
      date: 'Jan 15, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Seattle, WA',
      venue: 'Seattle Convention Center',
      attendees: 156,
      maxAttendees: 500,
      category: 'Conference',
      price: '$150',
      organizer: 'AI Professionals',
      image: '/api/placeholder/400/250',
      tags: ['ai', 'machine-learning', 'conference'],
      isFeatured: false,
      isOnline: false
    }
  ]

  const pastEvents = [
    {
      id: 5,
      title: 'Women in Tech Leadership Summit',
      description: 'A day of inspiration and networking for women in technology leadership roles.',
      date: 'Nov 15, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Austin, TX',
      venue: 'Austin Convention Center',
      attendees: 234,
      maxAttendees: 300,
      category: 'Conference',
      price: '$75',
      organizer: 'Women in Tech',
      image: '/api/placeholder/400/250',
      tags: ['women-in-tech', 'leadership', 'summit'],
      isFeatured: false,
      isOnline: false,
      isPast: true
    }
  ]

  const featuredSpeakers = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'VP of Engineering',
      company: 'Google',
      image: '/api/placeholder/80/80',
      expertise: 'AI/ML, Leadership',
      event: 'AI & Machine Learning Conference 2024'
    },
    {
      name: 'Michael Chen',
      title: 'Founder & CEO',
      company: 'TechStart Inc.',
      image: '/api/placeholder/80/80',
      expertise: 'Entrepreneurship, Product',
      event: 'Career Fair: Startup Edition'
    },
    {
      name: 'Priya Patel',
      title: 'Head of Design',
      company: 'Meta',
      image: '/api/placeholder/80/80',
      expertise: 'UX/UI, Innovation',
      event: 'Tech Industry Networking Mixer'
    }
  ]

  const stats = [
    { number: '500+', label: 'Events Hosted' },
    { number: '25K+', label: 'Attendees' },
    { number: '50+', label: 'Cities' },
    { number: '95%', label: 'Satisfaction Rate' }
  ]

  const filteredEvents = upcomingEvents.filter(event => 
    selectedCategory === 'All' || event.category === selectedCategory
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
              Upcoming <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Join our community events to network, learn, and grow with fellow students and alumni.
            </p>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search events..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="flex items-center space-x-2">
                    <Filter className="h-5 w-5 text-gray-600" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* View Mode */}
                  <div className="flex bg-gray-100 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('upcoming')}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                        viewMode === 'upcoming' 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Upcoming
                    </button>
                    <button
                      onClick={() => setViewMode('past')}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                        viewMode === 'past' 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Past Events
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {viewMode === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
            </h2>
            <p className="text-gray-600">Discover amazing events happening in our community</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {(viewMode === 'upcoming' ? filteredEvents : pastEvents).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Event Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                  {event.isFeatured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-sm font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="text-center text-white">
                    <Calendar className="h-16 w-16 mx-auto mb-2" />
                    <p className="text-lg font-semibold">{event.category}</p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Event Info */}
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {event.category}
                    </span>
                    {event.isOnline && (
                      <span className="px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                        Online
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{event.description}</p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees}/{event.maxAttendees} attendees</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex items-center space-x-2 mb-4">
                    {event.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-gray-900">{event.price}</div>
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Bookmark className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Share2 className="h-5 w-5" />
                      </motion.button>
                      {viewMode === 'upcoming' && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                        >
                          Register
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Speakers</h2>
            <p className="text-gray-600">Meet the industry experts speaking at our events</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {speaker.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{speaker.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{speaker.title}</p>
                <p className="text-gray-600 mb-3">{speaker.company}</p>
                <p className="text-sm text-gray-500 mb-3">{speaker.expertise}</p>
                <p className="text-xs text-gray-400">{speaker.event}</p>
              </motion.div>
            ))}
          </div>
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
              Host Your Own Event
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Have an idea for an event? We'd love to help you bring it to life and share it with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                Create Event
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Become a Speaker
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Events
