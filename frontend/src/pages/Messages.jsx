import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Send, MoreVertical, Phone, Video, Smile } from 'lucide-react'

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1)
  const [message, setMessage] = useState('')

  const conversations = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Senior Product Manager',
      company: 'Google',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Thanks for the great session yesterday!',
      timestamp: '2 min ago',
      unread: 2,
      status: 'online'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Software Engineer',
      company: 'Microsoft',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'I can help you with that React project',
      timestamp: '1 hour ago',
      unread: 0,
      status: 'offline'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Data Scientist',
      company: 'Amazon',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Let\'s schedule another mentorship session',
      timestamp: '3 hours ago',
      unread: 1,
      status: 'online'
    }
  ]

  const messages = [
    {
      id: 1,
      sender: 'Sarah Chen',
      content: 'Hi! I saw your profile and I\'m really interested in learning more about product management.',
      timestamp: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Hi Sarah! I\'d be happy to help. What specific aspects of product management are you most curious about?',
      timestamp: '10:32 AM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Sarah Chen',
      content: 'I\'m particularly interested in user research and how to prioritize features. Do you have any experience with that?',
      timestamp: '10:35 AM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'You',
      content: 'Absolutely! I\'ve been doing user research for the past 3 years. I can share some frameworks and tools that have worked well for me.',
      timestamp: '10:37 AM',
      isOwn: true
    },
    {
      id: 5,
      sender: 'Sarah Chen',
      content: 'That would be amazing! Would you be available for a quick call this week?',
      timestamp: '10:40 AM',
      isOwn: false
    },
    {
      id: 6,
      sender: 'You',
      content: 'Sure! I\'m free on Thursday afternoon. Does 2 PM work for you?',
      timestamp: '10:42 AM',
      isOwn: true
    },
    {
      id: 7,
      sender: 'Sarah Chen',
      content: 'Perfect! I\'ll send you a calendar invite. Thanks for the great session yesterday!',
      timestamp: '2 min ago',
      isOwn: false
    }
  ]

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim()) {
      // Here you would typically send the message to the backend
      console.log('Sending message:', message)
      setMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Messages
          </h1>
          <p className="text-gray-600">
            Connect and communicate with your professional network
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex h-[600px]">
            {/* Conversations List */}
            <div className="w-1/3 border-r border-gray-200 bg-gray-50">
              {/* Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
              </div>

              {/* Conversations */}
              <div className="overflow-y-auto">
                {conversations.map((conversation) => (
                  <motion.div
                    key={conversation.id}
                    whileHover={{ backgroundColor: '#f3f4f6' }}
                    onClick={() => setSelectedChat(conversation.id)}
                    className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
                      selectedChat === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {conversation.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                          conversation.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">
                            {conversation.name}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {conversation.timestamp}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 truncate">
                          {conversation.lastMessage}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-blue-600">
                            {conversation.role} at {conversation.company}
                          </p>
                          {conversation.unread > 0 && (
                            <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                              {conversation.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {conversations.find(c => c.id === selectedChat)?.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {conversations.find(c => c.id === selectedChat)?.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {conversations.find(c => c.id === selectedChat)?.role} at {conversations.find(c => c.id === selectedChat)?.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Video className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <MoreVertical className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      msg.isOwn 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{msg.content}</p>
                      <p className={`text-xs mt-1 ${
                        msg.isOwn ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {msg.timestamp}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Smile className="h-5 w-5" />
                  </motion.button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    <Send className="h-5 w-5" />
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
