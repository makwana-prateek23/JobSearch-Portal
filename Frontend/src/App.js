import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Pages/AboutUs";
import InternShips from "./Pages/InternShips";
import Jobs from "./Pages/Jobs";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Register from "./Pages/Register";
import { AuthProvider, useAuth } from "./Contexts/auth-context";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import LoadingSpinner from "./components/LoadingSpinner";
import SearchJobs from "./Pages/SearchJobs";
import SavedJobs from "./Pages/SavedJobs";
import Applications from "./Pages/Applications";
import DashboardHome from "./Pages/DashboardHome";
import Settings from "./Pages/Settings";
import CompanyDashboard from "./Pages/CompanyDashboard";
import CompanyPrivateRoute from "./components/CompanyPrivateRoute";
import UserRegister from "./Pages/UserRegister";
function App() {
  const [loading, setLoading] = useState(true);
  const { checkAuthStatus } = useAuth() || {}; // Get the auth context
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (checkAuthStatus) {
          console.log("Checking auth status...");
          await checkAuthStatus(); // Use the correct method to check auth status
          console.log("Auth status checked successfully");
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        setError("Failed to check authentication status");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [checkAuthStatus]);

  return (
    <AuthProvider>
      <Router>
        {loading ? (
          <LoadingSpinner /> // Render spinner while loading
        ) : error ? (
          <div className="text-red-500">{error}</div> // Render error if any
        ) : (
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Main />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/internships" element={<InternShips />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Private Routes */}
            <Route element={<PrivateRoute requiredRole="user" />}>
              <Route path="/dashboard" element={<Dashboard />}>
                {/* Default route inside dashboard */}
                <Route index element={<DashboardHome />} />
                <Route path="searchjobs" element={<SearchJobs />} />
                <Route path="savedjobs" element={<SavedJobs />} />
                <Route path="applications" element={<Applications />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>
            <Route element={<CompanyPrivateRoute />}>
              <Route path="/companydashboard" element={<CompanyDashboard />} />
            </Route>
          </Routes>
        )}
      </Router>
    </AuthProvider>
  );
}

export default App;
