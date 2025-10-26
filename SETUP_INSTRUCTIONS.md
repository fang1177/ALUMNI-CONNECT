# Setup Instructions - Alumni Connect

## Quick Start Guide

### 1. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the `backend` folder:

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

# Seed Data (set to 'true' to populate sample data on first run)
SEED_SAMPLE_DATA=true
```

### 3. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### 4. Seed Sample Data

To populate your database with sample users and jobs:

```bash
cd backend
SEED_SAMPLE_DATA=true npm start
```

Or run manually:
```bash
cd backend
node -e "require('./addSampleData')()"
```

### 5. Start the Application

```bash
# Terminal 1 - Start Backend
cd backend
npm start

# Terminal 2 - Start Frontend
cd frontend
npm run dev
```

### 6. Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Login Credentials

### Demo Account (Student)
- **Email**: `demo@alumniconnect.com`
- **Password**: `demo123`

### Student Accounts
- **Email**: `student1@example.com` to `student4@example.com`
- **Password**: `student123`

### Mentor/Alumni Accounts
- **Email**: `mentor1@example.com` to `mentor4@example.com`
- **Password**: `mentor123`

### Admin Account
- **Email**: `admin@example.com`
- **Password**: `admin123`

## What's Fixed

### 1. ✅ Login Redirect Issue
- Fixed the authentication flow to properly redirect users to the dashboard after login
- Token is now properly stored in localStorage

### 2. ✅ Jobs Page Fixed
- Jobs now fetch data from the backend API instead of using static data
- Shows real job listings from the database
- Added loading state and error handling

### 3. ✅ Random Job Data
- Each job now has unique, randomized data
- Different companies, locations, skills, and salaries
- Jobs posted at different times with varied content

### 4. ✅ Student vs Mentor Differentiation
- Student accounts: `role: 'student'` - for current students
- Mentor/Alumni accounts: `role: 'alumni'` - for graduates who can mentor
- Different profile data and permissions based on role

### 5. ✅ Database Information
- Created `DATABASE_INFO.md` with detailed information about data storage
- Instructions on how to view data using MongoDB Compass, mongo shell, or API

## Key Features by Role

### Students Can:
- Browse and search jobs
- Apply for jobs
- Connect with alumni
- Request mentorship
- View connections

### Alumni/Mentors Can:
- Post job listings
- Offer mentorship
- Connect with students
- Share experience
- View applicants for their posted jobs

### Admins Can:
- Manage all users
- Moderate content
- Access analytics
- Manage system settings

## Troubleshooting

### Issue: Can't login
- Make sure MongoDB is running
- Check that you've seeded sample data
- Verify the email and password are correct
- Check browser console for errors

### Issue: Jobs page is blank
- Ensure backend server is running
- Check MongoDB connection
- Verify sample data was created
- Check browser console for API errors

### Issue: Database connection error
```bash
# Check if MongoDB is running
mongosh

# If not, start it
net start MongoDB  # Windows
brew services start mongodb-community  # macOS
sudo systemctl start mongod  # Linux
```

### Issue: Need to reset database
```bash
# Connect to MongoDB
mongosh

# Drop and recreate
use alumni-connect
db.dropDatabase()

# Exit and reseed
exit

# Reseed data
cd backend
SEED_SAMPLE_DATA=true npm start
```

## Viewing Your Data

### Option 1: MongoDB Compass (Recommended)
1. Download from https://www.mongodb.com/products/compass
2. Connect to: `mongodb://localhost:27017`
3. Browse database: `alumni-connect`
4. View collections: `users`, `jobs`, etc.

### Option 2: Mongo Shell
```bash
mongosh
use alumni-connect
db.users.find().pretty()
db.jobs.find().pretty()
```

### Option 3: API Endpoints
- Get jobs: `GET http://localhost:5000/api/jobs`
- Get users: `GET http://localhost:5000/api/users`
- Get current user: `GET http://localhost:5000/api/auth/me`

## Next Steps

1. **Explore the dashboard** after logging in
2. **Browse jobs** on the Jobs page
3. **View different user profiles** by logging in with different accounts
4. **Check out the mentorship** features for students
5. **Use MongoDB Compass** to explore your data visually

## Need Help?

- Check `DATABASE_INFO.md` for database details
- Review browser console for errors
- Check server logs in the backend terminal
- Verify MongoDB is running and accessible
