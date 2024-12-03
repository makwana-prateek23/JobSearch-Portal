const express = require("express");
const router = express.Router();
const {
  getSkills,
  addSkill,
  updateSkill,
} = require("../controllers/skillsController");

// Route to get all skills
router.get("/skills", getSkills);

// Route to add a new skill
router.post("/skill", addSkill);

// Route to update an existing skill by ID
router.put("/:id", updateSkill);

module.exports = router;
