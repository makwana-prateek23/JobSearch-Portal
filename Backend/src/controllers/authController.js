const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");

// Register User with Role Assignment
const register = [
  // Validation and sanitization middleware
  body("username").notEmpty().withMessage("Username is required"),
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, name, email, password, role } = req.body;

    try {
      // Check if user with the same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "User with this email already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user with role assignment (default to "user" if not provided)
      const newUser = new User({
        username,
        name,
        email,
        password: hashedPassword,
        role: role || "user", // Role defaults to "user" if not provided
      });

      // Save the user to the database
      await newUser.save();

      // Generate JWT token (including the role)
      const token = jwt.sign(
        { userId: newUser._id, email: newUser.email, role: newUser.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      // Return success response with JWT token
      res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
];

// Login User and Return JWT with Role
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token (including the role)
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Return success response with JWT token and role
    res.json({
      message: "Logged in successfully",
      token,
      role: user.role, // You can return the role separately if needed
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Logout User (Clear Token)
const logout = (req, res) => {
  try {
    // Clear JWT token from cookies
    res.clearCookie("token");

    // Return success response
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error logging out:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Middleware to Verify JWT Token
const verifyJwt = (req, res, next) => {
  try {
    // Extract JWT token from cookies
    const token = req.cookies.token;

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded token payload to request object
    req.userData = decoded;

    // Call next middleware
    next();
  } catch (error) {
    console.error("Error verifying JWT token:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Middleware to Check Role
const checkRole = (requiredRole) => {
  return (req, res, next) => {
    const token = req.cookies.token;

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.role !== requiredRole) {
        return res
          .status(403)
          .json({ message: "Forbidden: Insufficient role" });
      }

      // Attach user data to request and continue
      req.userData = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  };
};

// Example route using role check middleware
// app.get("/admin-route", checkRole("admin"), (req, res) => {
//   res.send("Welcome, Admin");
// });

module.exports = { register, login, logout, verifyJwt, checkRole };
  