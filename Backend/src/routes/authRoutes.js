// authRoutes.js
const express = require("express");
const router = express.Router();
const {
  register,
  login,
  verifyJwt,
  logout,
  checkRole
} = require("../controllers/authController");

// Register route
router.post("/register", register);
// Login route
router.post("/login", login);

// Verify route
router.get("/protected", verifyJwt, (req, res) => {
  res.json({ message: "This is a protected route", user: req.userData });
});

// Admin-only Route Example (User must be admin)
router.get("/admin", verifyJwt, checkRole("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

// Logout route
router.post("/logout", logout);


module.exports = router;
