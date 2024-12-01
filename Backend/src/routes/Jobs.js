// routes/jobs.js

const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// Create a job
router.post("/", async (req, res) => {
  try {
    const { title, description, company, location } = req.body;
    const newJob = new Job({ title, description, company, location });
    await newJob.save();
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

module.exports = router;
