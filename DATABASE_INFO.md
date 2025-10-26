# Database Information

## Where is Your Data Stored?

Your application data is stored in **MongoDB**, a NoSQL database. The connection details are configured in `backend/config/database.js`.

### Default Database Configuration:
- **Database Name**: `alumni-connect`
- **Connection String**: `mongodb://localhost:27017/alumni-connect` (default)
- You can override this by setting the `MONGODB_URI` environment variable

## How to View Your Data

### Option 1: MongoDB Compass (Recommended - GUI Tool)

1. **Download MongoDB Compass**:
   - Visit: https://www.mongodb.com/products/compass
   - Download and install the application

2. **Connect to Your Database**:
   - Open MongoDB Compass
   - Use connection string: `mongodb://localhost:27017`
   - Click "Connect"

3. **Browse Your Data**:
   - Select database: `alumni-connect`
   - You'll see collections: `users`, `jobs`, `messages`, `connections`, `mentorships`
   - Click on any collection to view and edit data

### Option 2: Using Command Line (mongo shell)

```bash
# Open mongo shell
mongosh

# Switch to your database
use alumni-connect

# View all users
db.users.find().pretty()

# View all jobs
db.jobs.find().pretty()

# Search for specific user
db.users.findOne({ email: "demo@alumniconnect.com" })

# Count documents
db.users.countDocuments()
db.jobs.countDocuments()
```

### Option 3: Using a Script

You can create a simple script to view data programmatically.

## Seed Sample Data

To populate your database with sample data (users, jobs, etc.):

```bash
cd backend
# Set environment variable and start server
SEED_SAMPLE_DATA=true npm start
```

Or manually run:

```bash
cd backend
node -e "require('./addSampleData')()"
```

## Sample Accounts Created

After seeding data, you can login with:

### Students:
- **Email**: `demo@alumniconnect.com`
- **Password**: `demo123`

- **Email**: `student1@example.com`
- **Password**: `student123`

### Mentors/Alumni:
- **Email**: `mentor1@example.com`
- **Password**: `mentor123`

### Admin:
- **Email**: `admin@example.com`
- **Password**: `admin123`

## Database Collections

### Users Collection
Stores user information including:
- Personal details (name, email, username)
- Role (student, alumni, admin)
- Profile information (skills, bio, education, experience)
- Mentorship availability
- Stats and badges

### Jobs Collection
Stores job listings:
- Job details (title, company, location)
- Requirements and skills
- Salary information
- Posted by information
- Applicants list

### Connections Collection
Stores connections between users

### Messages Collection
Stores messages between users

### Mentorships Collection
Stores mentorship requests and sessions

## Backup Your Data

### Export/Backup:
```bash
mongodump --db=alumni-connect --out=/backup/path
```

### Restore:
```bash
mongorestore --db=alumni-connect /backup/path/alumni-connect
```

## View Data via API

You can also view data through the API endpoints:

- Get all users: `GET http://localhost:5000/api/users`
- Get all jobs: `GET http://localhost:5000/api/jobs`
- Get current user: `GET http://localhost:5000/api/auth/me`

Make sure to include the authentication token in headers:
```
Authorization: Bearer <your-token>
```

## Troubleshooting

### If MongoDB is not running:
```bash
# Start MongoDB service
# Windows:
net start MongoDB

# macOS:
brew services start mongodb-community

# Linux:
sudo systemctl start mongod
```

### Clear All Data:
```bash
mongosh
use alumni-connect
db.dropDatabase()
```

Then re-seed with sample data.
