// routes/companyAuthRoutes.js
const express = require("express");
const router = express.Router();
const {
  registerCompany,
  loginCompany,
} = require("../controllers/companyAuthController");
const { protectCompany } = require("../middleware/companyAuthMiddleware");
// Company register and login routes
router.post("/company/register", registerCompany);
router.post("/company/login", loginCompany);
// router.post("/company/post-job", protectCompany, (req, res) => {
//   // Logic to post job for the company
//   res.send("Job posted successfully");
// });

module.exports = router;
