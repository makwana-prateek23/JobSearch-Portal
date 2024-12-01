// models/company.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  logo: { type: String }, // Optional: Company logo
  description: { type: String }, // Optional: Description
  contactEmail: { type: String },
  contactPhone: { type: String },
  website: { type: String },
  industry: { type: String },
  location: { type: String },
});

// Hash password before saving
companySchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare password
companySchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
