import React from "react";
import { Outlet } from "react-router-dom";
import Sidemenu from "../components/Sidemenu";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-blue-100">
      {/* Sidebar */}
      <Sidemenu />

      {/* Main Content */}
      <main className="flex-1 p-4">
        {/* Render the selected page */}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
