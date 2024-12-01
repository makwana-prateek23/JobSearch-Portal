// controllers/companyAuthController.js
const jwt = require('jsonwebtoken');
const Company = require('../models/Company');

// Register Company
exports.registerCompany = async (req, res) => {
  const { name, email, password, industry, location } = req.body;

  try {
    // Check if company already exists
    const companyExists = await Company.findOne({ email });
    if (companyExists) {
      return res.status(400).json({ message: 'Company already exists' });
    }

    // Create new company instance
    const company = new Company({
      name,
      email,
      password,
      industry,
      location,
    });

    await company.save();

    // Create JWT token
    const token = jwt.sign({ companyId: company._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ message: 'Company registered successfully', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login Company
exports.loginCompany = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if company exists
    const company = await Company.findOne({ email });
    if (!company) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if password is correct
    const isMatch = await company.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ companyId: company._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Company logged in successfully', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
