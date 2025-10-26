export interface User {
  id: string;
  username: string;
  email: string;
  profile: {
    firstName: string;
    lastName: string;
    bio: string;
  };
  stats: {
    loginCount: number;
    lastLogin: string;
  };
  fullName: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
  code?: string;
}

export interface ApiError {
  message: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
  code?: string;
}

export interface DashboardData {
  user: User;
  activities: Activity[];
  stats: {
    totalLogins: number;
    accountAge: number;
    lastActive: string;
    profileCompletion: number;
  };
  quickStats: {
    connectionsCount: number;
    messagesCount: number;
    achievementsCount: number;
  };
}

export interface Activity {
  id: number;
  type: string;
  description: string;
  timestamp: string;
  icon: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName?: string;
  lastName?: string;
}

export interface ProfileFormData {
  firstName: string;
  lastName: string;
  bio: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (credentials: LoginFormData) => Promise<{ success: boolean; message: string }>;
  register: (userData: RegisterFormData) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
  updateUser: (user: User) => void;
}
