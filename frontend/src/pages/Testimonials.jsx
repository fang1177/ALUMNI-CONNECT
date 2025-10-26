import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      company: 'Google',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'AlumniConnect helped me find my mentor who guided me through my transition from student to professional. The AI matching was spot-on - we had so much in common!',
      category: 'Mentorship'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      company: 'Microsoft',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'I landed my dream job at Microsoft through an alumni connection I made on this platform. The networking opportunities are incredible.',
      category: 'Career Growth'
    },
    {
      name: 'Priya Patel',
      role: 'Data Scientist',
      company: 'Amazon',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'As an alumni, I love giving back by mentoring students. The platform makes it so easy to connect with mentees who are genuinely interested in my field.',
      category: 'Giving Back'
    },
    {
      name: 'David Kim',
      role: 'UX Designer',
      company: 'Apple',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The mentorship sessions I had through AlumniConnect were transformative. My mentor helped me build a portfolio that got me noticed by top companies.',
      category: 'Skill Development'
    },
    {
      name: 'Emily Watson',
      role: 'Marketing Director',
      company: 'Meta',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'I\'ve made lifelong professional relationships through this platform. The community is supportive and the connections are meaningful.',
      category: 'Networking'
    },
    {
      name: 'James Wilson',
      role: 'DevOps Engineer',
      company: 'Netflix',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The AI matching algorithm is incredible. It connected me with mentors who had exactly the experience I needed for my career goals.',
      category: 'AI Matching'
    }
  ]

  const stats = [
    { number: '95%', label: 'User Satisfaction' },
    { number: '25K+', label: 'Successful Connections' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '100+', label: 'Universities' }
  ]

  const categories = ['All', 'Mentorship', 'Career Growth', 'Giving Back', 'Skill Development', 'Networking', 'AI Matching']

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
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Community</span> Says
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real stories from students and alumni who have transformed their careers through AlumniConnect.
            </p>
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

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AlumniConnect has helped thousands of professionals achieve their goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-100">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                    {testimonial.category}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Watch Their Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our community members about their AlumniConnect experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((video, index) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-video"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="h-8 w-8" />
                    </div>
                    <p className="text-lg font-semibold">Video Testimonial {video}</p>
                    <p className="text-sm opacity-80">Click to play</p>
                  </div>
                </div>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students and alumni who are already building meaningful connections and advancing their careers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
