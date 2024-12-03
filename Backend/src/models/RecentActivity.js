const mongoose = require("mongoose");

const recentActivitySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    activityType: {
      type: String, // Example: "Job Posted", "Internship Posted", "Application Submitted"
      required: true,
    },
    description: {
      type: String, // A description of the activity
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const RecentActivity = mongoose.model("RecentActivity", recentActivitySchema);
module.exports = RecentActivity;
