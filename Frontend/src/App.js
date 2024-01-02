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
import { AuthProvider, useAuth } from "./Contexts/.auth-context";
import Dashboard from "./Pages/Dashboard";

function App() {
  const auth = useAuth();
  const { checkAuthStatus, isAuthenticated } = auth || {};
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Checking auth Status...");
        await checkAuthStatus();
        setLoading(false);
        console.log("Auth Status checked successfully");
      } catch (error) {
        console.error("Error checking auth status:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [checkAuthStatus]);

  const PrivateRoute = ({ element }) => {
    console.log("Rendering PrivateRoute..");
    console.log("loading:", loading);
    console.log("isAuthenticated:", isAuthenticated);

    return loading ? (
      <div>Loading..</div>
    ) : isAuthenticated ? (
      element
    ) : (
      <Navigate to="/login" />
    );
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
          {isAuthenticated && (
            <Route
              path="/dashboard"
              element={<PrivateRoute element={<Dashboard />} />}
            />
          )}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
