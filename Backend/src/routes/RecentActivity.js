const express = require('express');
const RecentActivity = require('../models/RecentActivity'); // Import the model
const router = express.Router();

// Get recent activity for a specific company
router.get('/recent-activity', async (req, res) => {
  const { companyName } = req.query; // Get company name from query params

  try {
    // Find recent activity for the specified company
    const activities = await RecentActivity.find({ companyName })
      .sort({ date: -1 }) // Sort by date (most recent first)
      .limit(10); // Limit to the 10 most recent activities

    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recent activities', error });
  }
});

module.exports = router;
