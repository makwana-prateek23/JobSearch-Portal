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

function App() {
  const [loading, setLoading] = useState(true);
  const { checkAuthStatus, isAuthenticated } = useAuth() || {}; // Get the auth context
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

  if (loading) {
    return <div>Loading...</div>; // Display a loading state while checking auth
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Display error message if any
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/internships" element={<InternShips />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
