const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const RecentActivity = require("../models/RecentActivity"); // Import the RecentActivity model

// Create a job
router.post("/", async (req, res) => {
  try {
    const { title, description, company, location } = req.body;

    if (!title || !description || !company || !location) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newJob = new Job({ title, description, company, location });
    await newJob.save();

    // Log the activity
    const activity = new RecentActivity({
      companyName: company,
      activityType: "Job Posted",
      description: `Job "${title}" has been posted by ${company} at ${location}.`,
    });
    await activity.save(); // Save the recent activity

    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: "Error creating job" });
  }
});

// Get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
});

// Get job by ID
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error fetching job" });
  }
});

// Update a job
router.put("/:id", async (req, res) => {
  try {
    const { title, description, company, location } = req.body;

    // Validate input
    if (!title && !description && !company && !location) {
      return res.status(400).json({ message: "At least one field is required for update." });
    }

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, company, location } },
      { new: true } // Return the updated document
    );

    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Log the activity
    const activity = new RecentActivity({
      companyName: company,
      activityType: "Job Updated",
      description: `Job "${title}" has been updated by ${company}.`,
    });
    await activity.save(); // Save the recent activity

    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: "Error updating job" });
  }
});

// Delete a job
router.delete("/:id", async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Log the activity
    const activity = new RecentActivity({
      companyName: deletedJob.company,
      activityType: "Job Deleted",
      description: `Job "${deletedJob.title}" has been deleted by ${deletedJob.company}.`,
    });
    await activity.save(); // Save the recent activity

    res.status(200).json({ message: "Job deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting job" });
  }
});

module.exports = router;
