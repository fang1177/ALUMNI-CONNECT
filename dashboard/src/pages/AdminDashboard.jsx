import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  GraduationCap, 
  Briefcase, 
  MessageSquare, 
  TrendingUp,
  Activity
} from 'lucide-react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import StatsCard from '../components/StatsCard'

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12% from last month',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Alumni',
      value: '1,234',
      change: '+8% from last month',
      icon: GraduationCap,
      color: 'green'
    },
    {
      title: 'Job Postings',
      value: '156',
      change: '+23% from last month',
      icon: Briefcase,
      color: 'purple'
    },
    {
      title: 'Mentorship Sessions',
      value: '489',
      change: '+15% from last month',
      icon: MessageSquare,
      color: 'orange'
    }
  ]

  const recentActivities = [
    { user: 'Sarah Chen', action: 'posted a new job', time: '2 minutes ago' },
    { user: 'Mike Johnson', action: 'completed mentorship session', time: '15 minutes ago' },
    { user: 'Priya Patel', action: 'joined as alumni', time: '1 hour ago' },
    { user: 'David Kim', action: 'updated profile', time: '2 hours ago' },
    { user: 'Emily Wilson', action: 'applied for job', time: '3 hours ago' }
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        
        <main className="flex-1 p-6">
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <StatsCard key={stat.title} {...stat} delay={index * 0.1} />
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="admin-card"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Activity className="h-5 w-5 text-blue-600" />
                <span>Recent Activity</span>
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Platform Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="admin-card"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span>Platform Analytics</span>
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">User Registration</span>
                    <span className="font-semibold text-green-600">+24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Mentorship Growth</span>
                    <span className="font-semibold text-blue-600">+18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Job Applications</span>
                    <span className="font-semibold text-purple-600">+32%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Platform Engagement</span>
                    <span className="font-semibold text-orange-600">+12%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard