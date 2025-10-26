import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { usersAPI, mentorshipAPI, jobsAPI } from '../utils/api'
import { 
  Users, 
  Briefcase, 
  MessageSquare, 
  TrendingUp, 
  Star,
  Calendar,
  Target,
  Zap
} from 'lucide-react'
import MentorCard from '../components/dashboard/MentorCard'
import JobCard from '../components/dashboard/JobCard'
import StatsCard from '../components/dashboard/StatsCard'
import CompatibilityScore from '../components/ai-matching/CompatibilityScore'

const Dashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    connections: 0,
    mentorshipSessions: 0,
    jobApplications: 0,
    profileCompletion: 65
  })
  const [recommendedMentors, setRecommendedMentors] = useState([])
  const [featuredJobs, setFeaturedJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      // Simulate API calls
      setTimeout(() => {
        setStats({
          connections: 12,
          mentorshipSessions: 5,
          jobApplications: 8,
          profileCompletion: 85
        })

        setRecommendedMentors([
          {
            id: 1,
            name: 'Sarah Chen',
            role: 'Senior Product Manager',
            company: 'Google',
            avatar: '/api/placeholder/80/80',
            skills: ['Product Management', 'UX Design', 'Leadership'],
            rating: 4.9,
            sessions: 47,
            compatibility: 92
          },
          {
            id: 2,
            name: 'Michael Rodriguez',
            role: 'Software Engineer',
            company: 'Microsoft',
            avatar: '/api/placeholder/80/80',
            skills: ['React', 'Node.js', 'AWS'],
            rating: 4.8,
            sessions: 32,
            compatibility: 88
          },
          {
            id: 3,
            name: 'Priya Patel',
            role: 'Data Scientist',
            company: 'Amazon',
            avatar: '/api/placeholder/80/80',
            skills: ['Python', 'Machine Learning', 'SQL'],
            rating: 4.7,
            sessions: 28,
            compatibility: 85
          }
        ])

        setFeaturedJobs([
          {
            id: 1,
            title: 'Frontend Developer',
            company: 'TechCorp',
            location: 'Bangalore, India',
            type: 'Full-time',
            salary: '₹12-18 LPA',
            posted: '2 days ago',
            skills: ['React', 'JavaScript', 'CSS'],
            isHot: true
          },
          {
            id: 2,
            title: 'Product Manager Intern',
            company: 'StartupXYZ',
            location: 'Remote',
            type: 'Internship',
            salary: '₹25k-35k/month',
            posted: '1 week ago',
            skills: ['Product Strategy', 'Analytics', 'UX'],
            isHot: false
          },
          {
            id: 3,
            title: 'Backend Engineer',
            company: 'CloudSystems',
            location: 'Hyderabad, India',
            type: 'Full-time',
            salary: '₹15-22 LPA',
            posted: '3 days ago',
            skills: ['Node.js', 'Python', 'MongoDB'],
            isHot: true
          }
        ])

        setLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      setLoading(false)
    }
  }

  const statsData = [
    {
      icon: Users,
      value: stats.connections,
      label: 'Connections',
      change: '+3 this week',
      color: 'blue'
    },
    {
      icon: MessageSquare,
      value: stats.mentorshipSessions,
      label: 'Mentorship Sessions',
      change: '+2 scheduled',
      color: 'purple'
    },
    {
      icon: Briefcase,
      value: stats.jobApplications,
      label: 'Job Applications',
      change: '1 pending',
      color: 'green'
    },
    {
      icon: TrendingUp,
      value: `${stats.profileCompletion}%`,
      label: 'Profile Complete',
      change: 'Complete for better matches',
      color: 'orange'
    }
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's what's happening in your professional network today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {statsData.map((stat, index) => (
            <StatsCard key={stat.label} stat={stat} delay={index * 0.1} />
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Recommended Mentors */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* AI Matching Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <span>AI-Powered Matches</span>
                </h2>
                <CompatibilityScore score={92} />
              </div>
              <p className="text-gray-600 mb-6">
                Based on your profile and interests, we've found these perfect matches for you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedMentors.map((mentor, index) => (
                  <MentorCard 
                    key={mentor.id} 
                    mentor={mentor} 
                    delay={0.3 + index * 0.1}
                  />
                ))}
              </div>
            </div>

            {/* Featured Jobs */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-blue-500" />
                  <span>Featured Jobs</span>
                </h2>
                <span className="text-sm text-gray-500">{featuredJobs.length} opportunities</span>
              </div>
              
              <div className="space-y-4">
                {featuredJobs.map((job, index) => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    delay={0.4 + index * 0.1}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Quick Actions & Updates */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {[
                  { icon: Target, label: 'Update Career Goals', color: 'blue' },
                  { icon: Users, label: 'Find More Mentors', color: 'green' },
                  { icon: Briefcase, label: 'Browse Jobs', color: 'purple' },
                  { icon: Calendar, label: 'Schedule Session', color: 'orange' }
                ].map((action, index) => {
                  const Icon = action.icon
                  return (
                    <motion.button
                      key={action.label}
                      whileHover={{ x: 5 }}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className={`p-2 rounded-lg bg-${action.color}-100`}>
                        <Icon className={`h-4 w-4 text-${action.color}-600`} />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{action.label}</span>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { type: 'connection', text: 'You connected with Alex Johnson', time: '2 hours ago' },
                  { type: 'mentorship', text: 'Mentorship session scheduled with Sarah', time: '1 day ago' },
                  { type: 'job', text: 'Applied for Senior Developer at TechCorp', time: '2 days ago' },
                  { type: 'profile', text: 'Profile completeness increased to 85%', time: '3 days ago' }
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'connection' ? 'bg-green-500' :
                      activity.type === 'mentorship' ? 'bg-blue-500' :
                      activity.type === 'job' ? 'bg-purple-500' : 'bg-orange-500'
                    }`}></div>
                    <div>
                      <p className="text-sm text-gray-700">{activity.text}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Profile Completion */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Profile Strength</h3>
              <p className="text-blue-100 text-sm mb-4">
                Complete your profile to get better matches
              </p>
              <div className="w-full bg-blue-500 rounded-full h-2 mb-2">
                <div 
                  className="bg-white rounded-full h-2 transition-all duration-500"
                  style={{ width: `${stats.profileCompletion}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm">
                <span>{stats.profileCompletion}% Complete</span>
                <button className="underline hover:no-underline">Complete Profile</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard