import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import UserManagement from './pages/UserManagement'
import Analytics from './pages/Analytics'

function App() {
  // Simple admin auth check (in real app, use proper authentication)
  const isAdminAuthenticated = localStorage.getItem('adminToken')

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route 
            path="/admin/login" 
            element={
              isAdminAuthenticated ? 
              <Navigate to="/admin/dashboard" replace /> : 
              <AdminLogin />
            } 
          />
          <Route 
            path="/admin/dashboard" 
            element={
              isAdminAuthenticated ? 
              <AdminDashboard /> : 
              <Navigate to="/admin/login" replace />
            } 
          />
          <Route 
            path="/admin/users" 
            element={
              isAdminAuthenticated ? 
              <UserManagement /> : 
              <Navigate to="/admin/login" replace />
            } 
          />
          <Route 
            path="/admin/analytics" 
            element={
              isAdminAuthenticated ? 
              <Analytics /> : 
              <Navigate to="/admin/login" replace />
            } 
          />
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App