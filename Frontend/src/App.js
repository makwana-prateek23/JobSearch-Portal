import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import AboutUs from "./Pages/AboutUs";
import InternShips from "./Pages/InternShips";
import Jobs from "./Pages/Jobs";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Register from "./Pages/Register";
import { AuthProvider, useAuth } from "./Contexts/auth-context";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [loading, setLoading] = useState(true);
  const { checkAuthStatus, isAuthenticated } = useAuth() || {};
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Checking auth status...");
        await checkAuthStatus();
        console.log("Auth status checked successfully");
      } catch (error) {
        console.error("Error checking auth status:", error);
        setError("Failed to check authentication status");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [checkAuthStatus]);

  const PrivateRoute = ({ element }) => {
    if (loading) {
      return <div>Loading...</div>;
    }
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/internships" element={<InternShips />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
