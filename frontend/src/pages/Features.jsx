import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Briefcase, 
  MessageSquare, 
  Zap, 
  Shield, 
  BarChart3,
  Search,
  Calendar,
  Star,
  Globe,
  Lock,
  Smartphone
} from 'lucide-react'

const Features = () => {
  const mainFeatures = [
    {
      icon: Zap,
      title: 'AI-Powered Matching',
      description: 'Our intelligent algorithm analyzes your profile, skills, and goals to connect you with the most relevant alumni mentors.',
      benefits: ['Smart compatibility scoring', 'Personalized recommendations', 'Continuous learning algorithm']
    },
    {
      icon: Users,
      title: 'Mentorship Programs',
      description: 'Structured mentorship programs that help you build meaningful relationships with experienced professionals.',
      benefits: ['Structured guidance', 'Goal-oriented sessions', 'Progress tracking']
    },
    {
      icon: Briefcase,
      title: 'Career Opportunities',
      description: 'Access exclusive job openings and internship opportunities shared by alumni from top companies.',
      benefits: ['Exclusive job postings', 'Alumni referrals', 'Career guidance']
    },
    {
      icon: MessageSquare,
      title: 'Real-time Communication',
      description: 'Seamless messaging platform for instant communication with your connections and mentors.',
      benefits: ['Instant messaging', 'Video calls', 'File sharing']
    }
  ]

  const additionalFeatures = [
    {
      icon: Search,
      title: 'Advanced Search',
      description: 'Find mentors and opportunities using powerful filters and search capabilities.'
    },
    {
      icon: Calendar,
      title: 'Session Scheduling',
      description: 'Easy scheduling system for mentorship sessions and networking events.'
    },
    {
      icon: Star,
      title: 'Rating & Reviews',
      description: 'Rate and review your mentorship experiences to help others make informed decisions.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with alumni from universities and companies around the world.'
    },
    {
      icon: Shield,
      title: 'Verified Profiles',
      description: 'All profiles are verified to ensure authenticity and build trust in the community.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track your networking progress and mentorship journey with detailed analytics.'
    }
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All your conversations and data are protected with industry-standard encryption.'
    },
    {
      icon: Shield,
      title: 'Privacy Controls',
      description: 'Granular privacy settings to control who can see your information and contact you.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Security',
      description: 'Secure mobile app with biometric authentication and secure data storage.'
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
              Powerful <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to build meaningful professional relationships and advance your career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed with cutting-edge technology to provide the best networking experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More tools and capabilities to enhance your networking experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security & Privacy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data and privacy are our top priorities. We use industry-leading security measures to protect your information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
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
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students and alumni who are already using AlumniConnect to build their professional networks.
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

export default Features
