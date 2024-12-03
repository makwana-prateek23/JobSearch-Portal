import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaFileAlt,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuth } from "../Contexts/auth-context";

function Sidebar() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // Call logout function
  };

  return (
    <div className="flex h-screen bg-blue-800 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 p-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Company Dashboard
        </h2>
        <ul>
          <li className="mb-4">
            <Link
              to="/companydashboard"
              className="flex items-center space-x-3 text-lg hover:text-cyan-400">
              <FaHome className="text-xl" />
              <span>Home</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="post-job"
              className="flex items-center space-x-3 text-lg hover:text-cyan-400">
              <FaBriefcase className="text-xl" />
              <span>Post Job</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="post-internship"
              className="flex items-center space-x-3 text-lg hover:text-cyan-400">
              <FaFileAlt className="text-xl" />
              <span>Post Internship</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="view-applications"
              className="flex items-center space-x-3 text-lg hover:text-cyan-400">
              <FaUsers className="text-xl" />
              <span>View Applications</span>
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 text-lg mt-8 text-red-500 hover:text-red-400">
          <FaSignOutAlt className="text-xl" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
