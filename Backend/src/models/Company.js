// models/company.js

const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },

  companyEmail: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  logo: { type: String },
  // Optional: Company logo
  description: { type: String },
  // Optional: Description
  contactEmail: { type: String },

  contactPhone: { type: String },

  website: { type: String },

  industry: { type: String },
  location: { type: String },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
