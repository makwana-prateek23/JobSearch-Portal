// routes/applications.js
const express = require("express");
const router = express.Router();
const Application = require("../models/Application");
const Job = require("../models/Job");
const Internship = require("../models/Internship");
const Company = require("../models/Company");  // Assuming you have a Company model
const RecentActivity = require("../models/RecentActivity"); // Import the RecentActivity model

// Create an application (for a job or internship)
router.post("/", async (req, res) => {
  try {
    const { jobId, internshipId, userId, resume } = req.body;

    let job = null;
    let internship = null;

    // Check if the job or internship exists
    if (jobId) {
      job = await Job.findById(jobId);
      if (!job) return res.status(404).json({ message: "Job not found" });
    }

    if (internshipId) {
      internship = await Internship.findById(internshipId);
      if (!internship) return res.status(404).json({ message: "Internship not found" });
    }

    // Create a new application
    const newApplication = new Application({
      jobId,
      internshipId,
      userId,
      resume,
      companyId: job ? job.company : internship.company,  // Associate with the company
    });

    // Save the new application to the database
    await newApplication.save();

    // Log the activity for the company
    let activityDescription = "";
    let companyName = "";
    
    if (job) {
      activityDescription = `New application submitted for job: "${job.title}" at ${job.company} by user ${userId}`;
      companyName = job.company;
    } else if (internship) {
      activityDescription = `New application submitted for internship: "${internship.title}" at ${internship.company} by user ${userId}`;
      companyName = internship.company;
    }

    // Create a new activity log
    const activity = new RecentActivity({
      companyName: companyName,
      activityType: "Application Submitted",
      description: activityDescription,
    });

    // Save the activity log
    await activity.save();

    // Add the application to the company's profile (this part assumes a Company model)
    const company = await Company.findOne({ name: companyName });
    if (company) {
      company.applications.push(newApplication._id);  // Assuming you have an applications field
      await company.save();
    }

    // Respond with the created application
    res.status(201).json(newApplication);
  } catch (error) {
    res.status(500).json({ message: "Error creating application" });
  }
});

// Get all applications for a specific company
router.get("/company/:companyId", async (req, res) => {
  try {
    const company = await Company.findById(req.params.companyId);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    const applications = await Application.find({ companyId: company._id })
      .populate("userId", "name email") // Populate user data
      .populate("jobId", "title company") // Populate job data
      .populate("internshipId", "title company"); // Populate internship data

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching applications" });
  }
});

module.exports = router;
