const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");

// Utility to generate tokens
const generateAccessToken = (user) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "2h" });
};

const generateRefreshToken = (user) => {
  if (!process.env.JWT_REFRESH_SECRET) {
    throw new Error(
      "JWT_REFRESH_SECRET is not defined in environment variables"
    );
  }
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET, { expiresIn: "24h" });
};

// Register User with Role Assignment
const register = [
  // Validation and sanitization middleware
  body("username").notEmpty().withMessage("Username is required"),
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email address"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("skills").notEmpty().withMessage("Skills not selected"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, name, email, password, role, skills } = req.body;

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
        skills,
        role: role || "user", // Role defaults to "user" if not provided
      });

      // Save the user to the database
      await newUser.save();

      // Generate tokens after user is saved
      const accessToken = generateAccessToken({
        userId: newUser._id,
        email: newUser.email,
        role: newUser.role,
      });

      const refreshToken = generateRefreshToken({
        userId: newUser._id,
        email: newUser.email,
        role: newUser.role,
      });

      // Set the refresh token as a cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true, // Make sure you're using HTTPS in production
        sameSite: "Strict",
      });

      // Return success response with access token
      res
        .status(201)
        .json({ message: "User registered successfully", accessToken });
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
    console.log("Stored Hashed Password:", user.password);
    // Check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = generateAccessToken({
      userId: user._id,
      email: user.email,
      role: user.role,
    });
    const refreshToken = generateRefreshToken({
      userId: user._id,
      email: user.email,
      role: user.role,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });

    res.json({
      message: "Logged in successfully",
      accessToken,
      role: user.role,
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
    res.clearCookie("refreshToken");
    // Return success response
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error logging out:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const refreshToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });

    const accessToken = generateAccessToken({
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role,
    });
    res.json({ accessToken });
  });
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

module.exports = {
  register,
  login,
  logout,
  verifyJwt,
  refreshToken,
};
