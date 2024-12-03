import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // You can use axios for API calls

function CompanyDashboardHome() {
  const [companyName, setCompanyName] = useState("");
  const [recentActivities, setRecentActivities] = useState([]); // State to store recent activities

  useEffect(() => {
    // Fetch the company name from localStorage
    const storedCompanyName = localStorage.getItem("companyName");

    if (storedCompanyName) {
      setCompanyName(storedCompanyName);
    } else {
      setCompanyName("Company"); // Default fallback in case companyName is not available
    }

    // Fetch recent activities from the server
    const fetchRecentActivities = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/recent-activity?companyName=${storedCompanyName}`
        );
        setRecentActivities(response.data); // Set the fetched activities in state
      } catch (error) {
        console.error("Error fetching recent activities:", error);
      }
    };

    // Call the function to fetch data
    fetchRecentActivities();
  }, []); // Empty dependency array ensures this runs only once when the component is mounted

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800">
          Welcome, {companyName}!
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Here’s an overview of your company dashboard.
        </p>
      </div>

      {/* Key Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800">Active Jobs</h3>
          <p className="text-xl text-gray-600 mt-2">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800">
            Active Internships
          </h3>
          <p className="text-xl text-gray-600 mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800">
            Applications Received
          </h3>
          <p className="text-xl text-gray-600 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800">
            Upcoming Deadlines
          </h3>
          <p className="text-xl text-gray-600 mt-2">2</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-between space-x-6">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md w-full">
          <h3 className="text-xl font-semibold">Post a New Job</h3>
          <Link
            to="/company-dashboard/post-job"
            className="text-lg mt-4 block text-white hover:text-cyan-400">
            Go to Post Job
          </Link>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg shadow-md w-full">
          <h3 className="text-xl font-semibold">Post a New Internship</h3>
          <Link
            to="/company-dashboard/post-internship"
            className="text-lg mt-4 block text-white hover:text-cyan-400">
            Go to Post Internship
          </Link>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">
          Recent Activity
        </h3>
        <ul className="mt-4 space-y-4">
          {recentActivities.length > 0 ? (
            recentActivities.map((activity, index) => (
              <li key={index} className="text-gray-600">
                {activity.activityText}{" "}
                {/* Modify based on the structure of your data */}
              </li>
            ))
          ) : (
            <li className="text-gray-600">No recent activities.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default CompanyDashboardHome;
