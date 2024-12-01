// routes/savedJobs.js

const express = require("express");
const router = express.Router();
const SavedJob = require("../models/SavedJob");
const Job = require("../models/Job");

// Save a job
router.post("/", async (req, res) => {
  try {
    const { userId, jobId } = req.body;

    // Check if the job already exists in the saved list for the user
    const existingSavedJob = await SavedJob.findOne({ userId, jobId });
    if (existingSavedJob) {
      return res.status(400).json({ message: "Job already saved" });
    }

    // Create and save the new saved job
    const savedJob = new SavedJob({ userId, jobId });
    await savedJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ message: "Error saving job" });
  }
});

// Get saved jobs for a user
router.get("/:userId", async (req, res) => {
  try {
    const savedJobs = await SavedJob.find({
      userId: req.params.userId,
    }).populate("jobId");
    res.status(200).json(savedJobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching saved jobs" });
  }
});

// Delete saved job
router.delete("/:id", async (req, res) => {
  try {
    const savedJob = await SavedJob.findByIdAndDelete(req.params.id);
    if (!savedJob) {
      return res.status(404).json({ message: "Saved job not found" });
    }
    res.status(200).json({ message: "Saved job removed" });
  } catch (error) {
    res.status(500).json({ message: "Error removing saved job" });
  }
});

module.exports = router;
