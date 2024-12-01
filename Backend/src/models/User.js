// Import required modules
const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
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
  role: {
    type: String,
    enum: ["user", "admin"], // Only 'user' and 'admin' roles allowed
    default: "user", // By default, all users will have the role 'user'
  },
  refreshToken: { type: String },
  skills: {
    type: [String], // Array of strings to store skills
    default: [], // Default to an empty array if no skills are provided
  },
});

// Create the User model
const User = mongoose.model("User", userSchema, "users");

// Export the User model
module.exports = User;
