// routes/internships.js

const express = require("express");
const router = express.Router();
const Internship = require("../models/Internship");

// Create an internship
router.post("/", async (req, res) => {
  try {
    const { title, description, company, location } = req.body;
    const newInternship = new Internship({
      title,
      description,
      company,
      location,
    });
    await newInternship.save();
    res.status(201).json(newInternship);
  } catch (error) {
    res.status(500).json({ message: "Error creating internship" });
  }
});

// Get all internships
router.get("/", async (req, res) => {
  try {
    const internships = await Internship.find();
    res.status(200).json(internships);
  } catch (error) {
    res.status(500).json({ message: "Error fetching internships" });
  }
});

// Get internship by ID
router.get("/:id", async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);
    if (!internship) {
      return res.status(404).json({ message: "Internship not found" });
    }
    res.status(200).json(internship);
  } catch (error) {
    res.status(500).json({ message: "Error fetching internship" });
  }
});

module.exports = router;
