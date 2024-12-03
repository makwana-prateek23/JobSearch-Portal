const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Company = require("../models/Company");

// Register Company
exports.registerCompany = async (req, res) => {
  const { companyName, companyEmail, password, industry, location } = req.body;

  // Validate companyEmail and password
  if (!companyEmail || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Check if the company already exists
    const companyExists = await Company.findOne({ companyEmail });
    if (companyExists) {
      return res.status(400).json({ message: "Company already exists" });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new company instance with the hashed password
    const company = new Company({
      companyName,
      companyEmail,
      password: hashedPassword, // Save the hashed password
      industry,
      location,
    });

    // Save the company to the database
    await company.save();

    // Create JWT token
    const token = jwt.sign({ companyId: company._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "Company registered successfully", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Login Company
exports.loginCompany = async (req, res) => {
  const { companyEmail, password } = req.body;

  try {
    // Check if the company exists in the database
    const company = await Company.findOne({ companyEmail });
    if (!company) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare entered password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, company.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { companyId: company._id, companyName: company.companyName },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // Send success response
    res.status(200).json({
      message: "Company logged in successfully",
      token,
      companyName: company.companyName,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
