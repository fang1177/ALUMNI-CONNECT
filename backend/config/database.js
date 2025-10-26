const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const addSampleData = require('../addSampleData');

const connectDB = async () => {
  try {
    // Use the provided MongoDB connection string
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/alumni-connect';

    try {
      const conn = await mongoose.connect(mongoUri, {
        // Optional modern options can be added here if needed
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
      // Only seed when explicitly requested
      if (process.env.SEED_SAMPLE_DATA === 'true') {
        await addSampleData();
        console.log('Sample data added successfully');
      }
      return;
    } catch (persistentErr) {
      console.error('Failed to connect to MongoDB:', persistentErr.message);
      throw persistentErr;
    }
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;