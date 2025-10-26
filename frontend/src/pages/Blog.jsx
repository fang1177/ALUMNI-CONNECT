import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Tag,
  ArrowRight,
  Filter,
  TrendingUp
} from 'lucide-react'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Career Tips', 'Networking', 'Mentorship', 'Industry News', 'Success Stories']

  const featuredPost = {
    title: 'The Future of Professional Networking: How AI is Changing the Game',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way we connect professionally and what it means for your career.',
    author: 'Sarah Johnson',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Industry News',
    image: '/api/placeholder/600/300',
    featured: true
  }

  const blogPosts = [
    {
      title: '5 Essential Networking Tips for Introverts',
      excerpt: 'Networking doesn\'t have to be overwhelming. Here are practical strategies to help introverts build meaningful professional relationships.',
      author: 'Michael Chen',
      date: 'December 12, 2024',
      readTime: '5 min read',
      category: 'Networking',
      image: '/api/placeholder/400/250',
      tags: ['networking', 'introverts', 'career']
    },
    {
      title: 'How to Find the Perfect Mentor: A Step-by-Step Guide',
      excerpt: 'Learn how to identify, approach, and build lasting relationships with mentors who can accelerate your career growth.',
      author: 'Priya Patel',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Mentorship',
      image: '/api/placeholder/400/250',
      tags: ['mentorship', 'career growth', 'guidance']
    },
    {
      title: 'From Student to Professional: Making the Transition',
      excerpt: 'Navigate the challenging transition from student life to professional career with these practical tips and insights.',
      author: 'David Rodriguez',
      date: 'December 8, 2024',
      readTime: '7 min read',
      category: 'Career Tips',
      image: '/api/placeholder/400/250',
      tags: ['career transition', 'students', 'professional development']
    },
    {
      title: 'Building Your Personal Brand in the Digital Age',
      excerpt: 'Create a compelling personal brand that opens doors and creates opportunities in today\'s digital-first world.',
      author: 'Emily Watson',
      date: 'December 5, 2024',
      readTime: '9 min read',
      category: 'Career Tips',
      image: '/api/placeholder/400/250',
      tags: ['personal brand', 'digital marketing', 'career']
    },
    {
      title: 'Success Story: How I Landed My Dream Job Through AlumniConnect',
      excerpt: 'Read about how Sarah used AlumniConnect to connect with the right people and land her dream job at a top tech company.',
      author: 'Sarah Chen',
      date: 'December 3, 2024',
      readTime: '4 min read',
      category: 'Success Stories',
      image: '/api/placeholder/400/250',
      tags: ['success story', 'job search', 'alumni network']
    },
    {
      title: 'The Art of Follow-Up: Keeping Professional Relationships Alive',
      excerpt: 'Master the follow-up process to maintain and strengthen your professional relationships over time.',
      author: 'James Wilson',
      date: 'December 1, 2024',
      readTime: '5 min read',
      category: 'Networking',
      image: '/api/placeholder/400/250',
      tags: ['follow-up', 'relationships', 'networking']
    }
  ]

  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === 'All' || post.category === selectedCategory
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
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Insights, tips, and stories to help you build meaningful professional relationships and advance your career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
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
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <TrendingUp className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Featured Article</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with the latest insights and tips</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Tag className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">{post.category}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      <span>Read</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest articles, tips, and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog
