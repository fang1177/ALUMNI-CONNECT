import axios, { AxiosResponse } from 'axios';
import { AuthResponse, LoginData, RegisterData, User, DashboardData, ProfileUpdateData } from '../types';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API endpoints
export const authAPI = {
  login: (data: LoginData): Promise<AxiosResponse<AuthResponse>> =>
    api.post('/auth/login', data),
  
  register: (data: RegisterData): Promise<AxiosResponse<AuthResponse>> =>
    api.post('/auth/register', data),
  
  logout: (): Promise<AxiosResponse<{ message: string }>> =>
    api.post('/auth/logout'),
  
  verifyToken: (): Promise<AxiosResponse<{ user: User; message: string }>> =>
    api.get('/auth/verify'),
  
  refreshToken: (): Promise<AxiosResponse<{ token: string; message: string }>> =>
    api.post('/auth/refresh'),
};

// User API endpoints
export const userAPI = {
  getProfile: (): Promise<AxiosResponse<{ user: User }>> =>
    api.get('/user/profile'),
  
  updateProfile: (data: ProfileUpdateData): Promise<AxiosResponse<{ user: User; message: string }>> =>
    api.put('/user/profile', data),
  
  getDashboard: (): Promise<AxiosResponse<DashboardData>> =>
    api.get('/user/dashboard'),
  
  getStats: (): Promise<AxiosResponse<{ stats: any }>> =>
    api.get('/user/stats'),
};

export default api;
