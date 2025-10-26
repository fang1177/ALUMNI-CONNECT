# Authentication System - Frontend

A modern React TypeScript frontend for the authentication system with a clean, responsive UI.

## Features

- 🔐 **Secure Authentication** - JWT-based login/register system
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS
- 🔄 **Real-time Updates** - Toast notifications for user feedback  
- 📱 **Mobile Responsive** - Works seamlessly on all devices
- 🛡️ **Protected Routes** - Route-level authentication guards
- ⚡ **Fast Loading** - Optimized performance with React 18
- 🎯 **TypeScript** - Full type safety throughout the application

## Tech Stack

- **React 18** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **React Router v6** - Modern routing solution
- **Axios** - HTTP client with interceptors
- **React Hot Toast** - Beautiful toast notifications
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Backend API running on port 5000

### Installation

1. **Install dependencies**
   \```bash
   npm install
   \```

2. **Environment Setup**
   \```bash
   cp .env.example .env
   \```
   
   Update `.env` with your configuration:
   \```env
   REACT_APP_API_URL=http://localhost:5000/api
   \```

3. **Start Development Server**
   \```bash
   npm start
   \```
   
   The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

\```
client/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ErrorBoundary.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── ProtectedRoute.tsx
│   ├── contexts/           # React contexts
│   │   └── AuthContext.tsx
│   ├── pages/              # Page components
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── Dashboard.tsx
│   ├── services/           # API services
│   │   └── api.ts
│   ├── types/              # TypeScript definitions
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
└── README.md
\```

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## Key Features

### Authentication Flow

1. **Login/Register** - Secure form validation and submission
2. **Token Management** - Automatic token storage and refresh
3. **Route Protection** - Redirect unauthenticated users
4. **Auto-logout** - Handle expired tokens gracefully

### User Experience

- **Loading States** - Visual feedback during API calls
- **Error Handling** - Comprehensive error boundaries
- **Toast Notifications** - Real-time user feedback
- **Responsive Design** - Mobile-first approach

### Security Features

- **JWT Token Storage** - Secure localStorage management
- **Request Interceptors** - Automatic token attachment
- **Route Guards** - Protected route components
- **Error Boundaries** - Graceful error handling

## API Integration

The frontend communicates with the backend through a centralized API service:

\```typescript
// Example API usage
import { authAPI, userAPI } from './services/api';

// Login user
const result = await authAPI.login({ email, password });

// Get dashboard data
const dashboard = await userAPI.getDashboard();
\```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API base URL | `http://localhost:5000/api` |
| `NODE_ENV` | Environment mode | `development` |
| `GENERATE_SOURCEMAP` | Generate source maps | `true` |

## Deployment

### Production Build

\```bash
npm run build
\```

This creates an optimized production build in the `build/` folder.

### Deployment Options

- **Netlify** - Connect your GitHub repo for automatic deployments
- **Vercel** - Zero-config deployment with GitHub integration  
- **AWS S3** - Static website hosting with CloudFront CDN
- **Docker** - Containerized deployment

### Environment Configuration

For production deployment, ensure you set the correct API URL:

\```env
REACT_APP_API_URL=https://your-api-domain.com/api
\```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
