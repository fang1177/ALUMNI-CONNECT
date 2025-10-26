# Alumni Connect 🌐

A smart, secure AI-driven platform bridging the gap between students and alumni - enabling mentorship, trusted career referrals, and dynamic alumni-student engagement.

## 🎯 Problem Statement

India's higher education system produces millions of graduates, yet:
- Students struggle to find jobs and mentors
- Alumni lack channels to give back to their alma mater
- No centralized platform for career guidance and networking

**Alumni Connect** solves this by creating a vibrant ecosystem where students connect with experienced alumni for mentorship, job opportunities, and career growth.

## ✨ Features

### For Students
- 🎓 **Mentorship Matching**: AI-powered mentor matching based on skills and goals
- 💼 **Job Portal**: Browse job listings posted by alumni
- 📝 **Profile Building**: Create professional profiles with skills and experience
- 🤝 **Networking**: Connect with alumni for career guidance
- 📊 **Dashboard**: Track mentorship sessions and applications

### For Alumni/Mentors
- 📤 **Job Posting**: Share job opportunities with students
- 🎯 **Mentorship**: Guide students in their career journeys
- 🌟 **Make Impact**: Give back to your alma mater community
- 📈 **Tracking**: Monitor mentorship sessions and student progress

### For Admins
- 👥 **User Management**: Manage students and alumni
- 📊 **Analytics Dashboard**: View platform engagement metrics
- ⚙️ **Content Moderation**: Ensure safe platform usage
- 📢 **Announcements**: Broadcast important updates

## 🚀 Tech Stack

### Frontend
- **React** + **TypeScript** (Client app)
- **React** + **JavaScript** (Main app)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Axios** for API calls
- **React Router** for navigation
- **Vite** as build tool

### Backend
- **Node.js** + **Express.js**
- **MongoDB** for database
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Mongoose** for ODM
- **Socket.io** for real-time messaging

### Additional Tools
- **MongoDB Compass** for database management
- **Postman** for API testing

## 📁 Project Structure

```
alumni-connect/
├── backend/              # Backend API
│   ├── config/          # Database configuration
│   ├── controllers/     # Route handlers
│   ├── middleware/      # Auth, validation, error handling
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── utils/           # Helper functions
│   └── server.js        # Entry point
│
├── frontend/            # Main frontend application
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React context
│   │   └── utils/       # API utilities
│   └── public/
│
├── client/              # Alternative client app
├── dashboard/           # Admin dashboard
└── docs/                # Documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/fang1177/ALUMNI-CONNECT.git
cd ALUMNI-CONNECT
```

### 2. Install Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

### 3. Environment Setup

Create a `.env` file in `backend/`:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/alumni-connect

# JWT
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRE=90

# Server
NODE_ENV=development
PORT=5000

# Seed Data
SEED_SAMPLE_DATA=true
```

### 4. Start MongoDB
```bash
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### 5. Seed Sample Data
```bash
cd backend
SEED_SAMPLE_DATA=true npm start
```

### 6. Run the Application

#### Terminal 1 - Backend
```bash
cd backend
npm start
```

#### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

Access the application at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 👤 Demo Accounts

### Student Account
- **Email**: `demo@alumniconnect.com`
- **Password**: `demo123`

### Student Accounts
- **Email**: `student1@example.com` to `student12@example.com`
- **Password**: `student123`

### Mentor/Alumni Accounts
- **Email**: `mentor1@example.com` to `mentor12@example.com`
- **Password**: `mentor123`

### Admin Account
- **Email**: `admin@example.com`
- **Password**: `admin123`

## 📊 Database Schema

### Collections
- **users**: User profiles with roles (student, alumni, admin)
- **jobs**: Job listings posted by alumni
- **mentorships**: Mentorship requests and sessions
- **connections**: User connections/network
- **messages**: Direct messages between users

## 🔐 Authentication

- JWT-based authentication
- Token stored in localStorage
- Protected routes for authenticated users
- Role-based access control (student, alumni, admin)

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Jobs
- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create new job (alumni)
- `POST /api/jobs/:id/apply` - Apply for job

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/profile` - Update user profile

### Mentorship
- `GET /api/mentorship/mentors` - Get available mentors
- `POST /api/mentorship/request` - Request mentorship

## 📝 Recent Fixes

✅ **Profile Updates**: Fully functional with backend persistence  
✅ **Realistic Names**: Sample data uses proper Indian names  
✅ **Jobs Integration**: Connected to backend with real data  
✅ **Login Redirect**: Fixed authentication flow  
✅ **Data Persistence**: All changes saved to MongoDB  

See `FIXES_APPLIED.md` for detailed information.

## 📖 Documentation

- [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md) - Complete setup guide
- [DATABASE_INFO.md](DATABASE_INFO.md) - Database information
- [FIXES_APPLIED.md](FIXES_APPLIED.md) - Recent fixes and improvements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Authors

- **Development Team** - [fang1177](https://github.com/fang1177)

## 🙏 Acknowledgments

- Inspired by the need to bridge the gap between students and alumni in Indian higher education
- Built with modern web technologies for scalability and performance

## 🎯 Future Enhancements

- [ ] Real-time messaging with WebSocket
- [ ] Community discussions and events
- [ ] Calendar integration for mentorship sessions
- [ ] AI-powered job matching
- [ ] Email notifications
- [ ] Mobile app (React Native)
- [ ] Analytics dashboard for admins
- [ ] Subscription/premium features

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

**Built with ❤️ for connecting alumni and students in India**
