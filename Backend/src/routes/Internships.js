const express = require("express");
const router = express.Router();
const Internship = require("../models/Internship");
const RecentActivity = require("../models/RecentActivity"); // Import the RecentActivity model

// Create an internship
router.post("/", async (req, res) => {
  try {
    const { title, description, company, location } = req.body;

    // Validate input
    if (!title || !description || !company || !location) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newInternship = new Internship({
      title,
      description,
      company,
      location,
    });
    await newInternship.save();

    // Log the activity
    const activity = new RecentActivity({
      companyName: company,
      activityType: "Internship Posted",
      description: `Internship "${title}" has been posted by ${company} at ${location}.`,
    });
    await activity.save(); // Save the recent activity

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

// Update an internship
router.put("/:id", async (req, res) => {
  try {
    const { title, description, company, location } = req.body;

    // Validate input
    if (!title && !description && !company && !location) {
      return res.status(400).json({ message: "At least one field is required for update." });
    }

    const updatedInternship = await Internship.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, company, location } },
      { new: true } // Return the updated document
    );

    if (!updatedInternship) {
      return res.status(404).json({ message: "Internship not found" });
    }

    // Log the activity
    const activity = new RecentActivity({
      companyName: company,
      activityType: "Internship Updated",
      description: `Internship "${title}" has been updated by ${company}.`,
    });
    await activity.save(); // Save the recent activity

    res.status(200).json(updatedInternship);
  } catch (error) {
    res.status(500).json({ message: "Error updating internship" });
  }
});

// Delete an internship
router.delete("/:id", async (req, res) => {
  try {
    const deletedInternship = await Internship.findByIdAndDelete(req.params.id);

    if (!deletedInternship) {
      return res.status(404).json({ message: "Internship not found" });
    }

    // Log the activity
    const activity = new RecentActivity({
      companyName: deletedInternship.company,
      activityType: "Internship Deleted",
      description: `Internship "${deletedInternship.title}" has been deleted by ${deletedInternship.company}.`,
    });
    await activity.save(); // Save the recent activity

    res.status(200).json({ message: "Internship deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting internship" });
  }
});

module.exports = router;
