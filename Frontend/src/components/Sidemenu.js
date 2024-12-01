import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/auth-context";
const SideMenu = () => {
  const { logout } = useAuth();
  return (
    <div className="w-64 bg-blue-300 shadow-lg h-screen sticky top-0">
      <div className="p-6 text-center border-b">
        <h2 className="text-lg font-bold text-gray-700">CareerGate</h2>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="block p-2 text-gray-600 rounded hover:bg-blue-500 hover:text-white transition-all duration-200">
              🏠 Dashboard Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/searchjobs"
              className="block p-2 text-gray-600 rounded hover:bg-blue-500 hover:text-white transition-all duration-200">
              🔍 Search Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/savedjobs"
              className="block p-2 text-gray-600 rounded hover:bg-blue-500 hover:text-white transition-all duration-200">
              📜 Saved Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/applications"
              className="block p-2 text-gray-600 rounded hover:bg-blue-500 hover:text-white transition-all duration-200">
              💼 My Applications
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/settings"
              className="block p-2 text-gray-600 rounded hover:bg-blue-500 hover:text-white transition-all duration-200">
              ⚙️ Settings
            </Link>
          </li>
          <li>
            <button
              className="block p-2 text-gray-600 rounded hover:bg-blue-500 hover:text-white transition-all duration-200"
              onClick={logout}>
              🚪 Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
