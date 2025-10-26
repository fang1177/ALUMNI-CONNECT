import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  HelpCircle,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Video,
  FileText,
  Users,
  Settings,
  Shield,
  CreditCard
} from 'lucide-react'

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedFaq, setExpandedFaq] = useState(null)

  const categories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn the basics of using AlumniConnect',
      articles: 12
    },
    {
      icon: Users,
      title: 'Account & Profile',
      description: 'Manage your account and profile settings',
      articles: 8
    },
    {
      icon: MessageCircle,
      title: 'Messaging & Communication',
      description: 'How to connect and communicate with others',
      articles: 15
    },
    {
      icon: Settings,
      title: 'Platform Features',
      description: 'Explore all the features and tools available',
      articles: 20
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Keep your account secure and private',
      articles: 6
    },
    {
      icon: CreditCard,
      title: 'Billing & Subscriptions',
      description: 'Manage your subscription and payments',
      articles: 4
    }
  ]

  const faqs = [
    {
      question: 'How do I create an account on AlumniConnect?',
      answer: 'Creating an account is easy! Click the "Sign Up" button on our homepage, fill in your details including your university email, and verify your email address. Once verified, you can complete your profile and start connecting with alumni.'
    },
    {
      question: 'How does the AI matching algorithm work?',
      answer: 'Our AI matching algorithm analyzes your profile, skills, interests, and career goals to find the most compatible alumni mentors. It considers factors like industry experience, location, availability, and shared interests to provide personalized recommendations.'
    },
    {
      question: 'Is AlumniConnect free to use?',
      answer: 'Yes! AlumniConnect offers a free tier with access to basic features including profile creation, limited messaging, and basic search. We also offer premium plans with additional features like unlimited messaging, advanced search filters, and priority support.'
    },
    {
      question: 'How do I find mentors in my field?',
      answer: 'Use our advanced search filters to find mentors by industry, company, skills, or location. You can also browse our mentor directory or let our AI algorithm suggest compatible mentors based on your profile and goals.'
    },
    {
      question: 'Can I use AlumniConnect on my mobile device?',
      answer: 'Absolutely! AlumniConnect is fully responsive and works great on all devices. We also have mobile apps available for iOS and Android that provide the same great experience as our web platform.'
    },
    {
      question: 'How do I report inappropriate behavior?',
      answer: 'If you encounter any inappropriate behavior, you can report it directly through our messaging system or by contacting our support team. We take all reports seriously and investigate them promptly to maintain a safe community environment.'
    }
  ]

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond within 24 hours',
      availability: 'Response within 24h',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      availability: 'Mon-Fri, 9AM-6PM PST',
      action: 'Call Now'
    }
  ]

  const popularArticles = [
    {
      title: 'How to Set Up Your Profile for Maximum Visibility',
      category: 'Getting Started',
      views: '2.3k views'
    },
    {
      title: 'Best Practices for Networking Messages',
      category: 'Messaging',
      views: '1.8k views'
    },
    {
      title: 'Understanding AI Matching Scores',
      category: 'Platform Features',
      views: '1.5k views'
    },
    {
      title: 'Privacy Settings Guide',
      category: 'Privacy & Security',
      views: '1.2k views'
    }
  ]

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
              Help <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to your questions and get the support you need to make the most of AlumniConnect.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{method.title}</h3>
                      <p className="text-sm text-gray-500">{method.availability}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    {method.action}
                  </motion.button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600">Find help articles organized by topic</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                      <p className="text-sm text-gray-500">{category.articles} articles</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>Browse Articles</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Articles</h2>
            <p className="text-gray-600">Most viewed help articles</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{article.category}</p>
                    <p className="text-sm text-gray-400">{article.views}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HelpCenter
