import axios, { AxiosResponse, AxiosError } from 'axios';
import { AuthResponse, User, DashboardData, ApiError, LoginFormData, RegisterFormData, ProfileFormData } from '../types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
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

// Response interceptor to handle errors
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError<ApiError>) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Helper function to handle API errors
const handleApiError = (error: AxiosError<ApiError>): never => {
  if (error.response?.data) {
    throw error.response.data;
  } else if (error.request) {
    throw {
      message: 'Network error. Please check your connection.',
      code: 'NETWORK_ERROR'
    };
  } else {
    throw {
      message: 'An unexpected error occurred.',
      code: 'UNKNOWN_ERROR'
    };
  }
};

// Auth API functions
export const authAPI = {
  login: async (credentials: LoginFormData): Promise<AuthResponse> => {
    try {
      const response = await api.post<AuthResponse>('/auth/login', credentials);
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError<ApiError>);
    }
  },

  register: async (userData: RegisterFormData): Promise<AuthResponse> => {
    try {
      const response = await api.post<AuthResponse>('/auth/register', userData);
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError<ApiError>);
    }
  },

  logout: async (): Promise<{ message: string }> => {
    try {
      const response = await api.post<{ message: string }>('/auth/logout');
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError<ApiError>);
    }
  },

  verifyToken: async (): Promise<{ user: User; message: string }> => {
    try {
      const response = await api.get<{ user: User; message: string }>('/auth/verify');
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError<ApiError>);
    }
  },

  refreshToken: async (): Promise<{ token: string; message: string }> => {
    try {
      const response = await api.post<{ token: string; message: string }>('/auth/refresh');
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError<ApiError>);
    }
  }
};

// User API functions
export const userAPI = {
  getProfile: async (): Promise<{ user: User }> => {
    try {
      const response = await api.get<{ user: User }>('/user/profile');
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError<ApiError>);
    }
  },

  updateProfile: async (profileData: ProfileFormData): Promise<{ user: User; message: string }> => {
    try {
      const response = await api.put<{ user: User; message: string }>('/user/profile', profileData);
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError<ApiError>);
    }
  },

  getDashboard: async (): Promise<DashboardData> => {
    try {
      const response = await api.get<DashboardData>('/user/dashboard');
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError<ApiError>);
    }
  },

  getStats: async (): Promise<{ stats: any }> => {
    try {
      const response = await api.get<{ stats: any }>('/user/stats');
      return response.data;
    } catch (error) {
      handleApiError(error as AxiosError<ApiError>);
    }
  }
};

export default api;
