import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
})

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Handle responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getMe: () => api.get('/auth/me'),
}

export const usersAPI = {
  getUsers: () => api.get('/users'),
  getUser: (id) => api.get(`/users/${id}`),
  updateProfile: (data) => api.put('/users/profile', data),
}

export const mentorshipAPI = {
  getMentors: () => api.get('/mentorship/mentors'),
  requestMentorship: (data) => api.post('/mentorship/request', data),
  getMentorshipSessions: () => api.get('/mentorship/sessions'),
}

export const jobsAPI = {
  getJobs: () => api.get('/jobs'),
  createJob: (data) => api.post('/jobs', data),
  applyJob: (jobId) => api.post(`/jobs/${jobId}/apply`),
}

export default api