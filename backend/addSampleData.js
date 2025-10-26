const mongoose = require('mongoose');
const User = require('./models/User');
const Job = require('./models/Job');
const bcrypt = require('bcryptjs');

// Sample companies
const companies = [
  'TechCorp Solutions', 'InnovateHub', 'CloudSystems', 'DataInsights',
  'DesignStudio', 'AI Labs', 'FinTech Global', 'StartupXYZ',
  'CodeCrafters', 'Digital Ventures', 'NextGen Solutions', 'MegaCorp'
];

// Sample locations
const locations = [
  'Bangalore, India', 'Delhi, India', 'Mumbai, India', 'Hyderabad, India',
  'Pune, India', 'Chennai, India', 'Remote', 'Gurgaon, India'
];

// Sample job titles
const jobTitles = [
  'Senior Software Engineer', 'Frontend Developer', 'Backend Developer',
  'Full Stack Developer', 'Data Scientist', 'Machine Learning Engineer',
  'DevOps Engineer', 'Product Manager', 'UX Designer', 'UI Designer',
  'Technical Lead', 'Software Architect', 'QA Engineer', 'Mobile App Developer'
];

// Sample skills
const allSkills = [
  'React', 'Node.js', 'Python', 'Java', 'JavaScript', 'TypeScript',
  'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'MySQL',
  'Machine Learning', 'AI', 'TensorFlow', 'PyTorch', 'Agile',
  'Scrum', 'Figma', 'UI/UX Design', 'Product Management'
];

// Sample data function to populate the database
const addSampleData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Job.deleteMany({});
    
    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 10);
    const admin = await User.create({
      name: 'Admin User',
      username: 'admin',
      email: 'admin@example.com',
      password: adminPassword,
      role: 'admin',
      profile: {
        bio: 'System administrator'
      }
    });
    
    // Create student users
    const students = [];
    const studentNames = [
      'Rahul Sharma', 'Priya Patel', 'Amit Kumar', 'Sneha Reddy',
      'Arjun Mehta', 'Kavya Nair', 'Rohan Singh', 'Ananya Iyer',
      'Vikram Gupta', 'Meera Joshi', 'Aditya Verma', 'Diya Kapoor'
    ];
    for (let i = 0; i < studentNames.length; i++) {
      const password = await bcrypt.hash('student123', 10);
      const student = await User.create({
        name: studentNames[i],
        username: `student${i + 1}`,
        email: `student${i + 1}@example.com`,
        password: password,
        role: 'student',
        profile: {
          bio: `Computer Science student passionate about software development`,
          skills: allSkills.slice(0, 5 + Math.floor(Math.random() * 5))
        }
      });
      students.push(student);
    }
    
    // Create alumni/mentor users
    const mentors = [];
    const mentorNames = [
      'Rajesh Kumar', 'Anjali Singh', 'Vikram Desai', 'Neeta Gupta',
      'Rohit Agarwal', 'Sunita Menon', 'Kiran Nair', 'Aditya Rao',
      'Pooja Shah', 'Suresh Reddy', 'Meera Vaswani', 'Amitabh Chaturvedi'
    ];
    for (let i = 0; i < mentorNames.length; i++) {
      const password = await bcrypt.hash('mentor123', 10);
      const mentor = await User.create({
        name: mentorNames[i],
        username: `mentor${i + 1}`,
        email: `mentor${i + 1}@example.com`,
        password: password,
        role: 'alumni',
        isAvailableForMentorship: true,
        profile: {
          bio: `Experienced professional with ${5 + i * 2} years in the industry`,
          skills: allSkills.slice(i * 3, (i + 1) * 3 + 3)
        },
        mentorshipPreferences: {
          areas: allSkills.slice(i * 2, (i + 1) * 2),
          commitment: 'Weekly'
        }
      });
      mentors.push(mentor);
    }
    
    // Create demo accounts
    await User.create({
      name: 'Demo Student',
      username: 'demostudent',
      email: 'demo@alumniconnect.com',
      password: await bcrypt.hash('demo123', 10),
      role: 'student',
      profile: {
        bio: 'Demo student account for testing'
      }
    });
    
    // Create sample jobs with varied data
    const jobTypes = ['full-time', 'part-time', 'internship', 'contract'];
    const allUsers = [admin, ...mentors];
    
    for (let i = 0; i < 15; i++) {
      const company = companies[Math.floor(Math.random() * companies.length)];
      const location = locations[Math.floor(Math.random() * locations.length)];
      const title = jobTitles[Math.floor(Math.random() * jobTitles.length)];
      const type = jobTypes[Math.floor(Math.random() * jobTypes.length)];
      const postedBy = allUsers[Math.floor(Math.random() * allUsers.length)];
      
      // Generate random salary
      const minSalary = 8 + Math.floor(Math.random() * 20);
      const maxSalary = minSalary + Math.floor(Math.random() * 15);
      
      // Generate random skills
      const numSkills = 3 + Math.floor(Math.random() * 4);
      const shuffledSkills = [...allSkills].sort(() => 0.5 - Math.random());
      const skills = shuffledSkills.slice(0, numSkills);
      
      // Generate requirements based on job type
      const experience = type === 'internship' ? '0-1 years' : 
                        type === 'part-time' ? '1-3 years' : '3-5 years';
      
      await Job.create({
        title,
        company,
        location,
        description: `Looking for a talented ${title.toLowerCase()} to join our team. This is a great opportunity to work on cutting-edge technologies and grow your career.`,
        requirements: [
          `${experience} experience`,
          'Strong communication skills',
          ...skills.map(skill => `Experience with ${skill}`)
        ],
        skills,
        type,
        salary: {
          min: minSalary,
          max: maxSalary,
          currency: 'INR'
        },
        postedBy: postedBy._id,
        isActive: true,
        createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000) // Random date in last 30 days
      });
    }
    
    console.log('Sample data added successfully');
    console.log('- Created 1 admin account (admin@example.com / admin123)');
    console.log('- Created 4 student accounts (student1-4@example.com / student123)');
    console.log('- Created 4 mentor/alumni accounts (mentor1-4@example.com / mentor123)');
    console.log('- Created demo account (demo@alumniconnect.com / demo123)');
    console.log('- Created 15 diverse job listings');
  } catch (error) {
    console.error('Error adding sample data:', error);
  }
};

module.exports = addSampleData;