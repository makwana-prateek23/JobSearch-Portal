import React from "react";
import Sidebar from "../components/Sidebar"; // Make sure to import the Sidebar component
import { Outlet } from "react-router-dom"; // Import Outlet to render nested routes

function CompanyDashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* This is where nested route components will be rendered */}
        <Outlet />
      </div>
    </div>
  );
}

export default CompanyDashboard;
