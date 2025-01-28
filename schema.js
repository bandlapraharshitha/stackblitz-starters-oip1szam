const mongoose = require('mongoose');

// Define the schema for user management
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ['user'],
  },
  profile: {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
  },
  lastLogin: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Export the schema as a model
const User = mongoose.model('User', userSchema);

module.exports = User;
