import React, { useState } from "react";
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
import Dashboard from "./Pages/Dashboard";
import Layout from "./components/Layout";

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);

  const handleLogin = (user, type) => {
    // Your authentication logic here
    setAuthenticated(true);
    setUserType(type);
    navigate("/dashboard");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/about-us"
          element={
            <Layout>
              {isAuthenticated ? <AboutUs /> : <Login onLogin={handleLogin} />}
            </Layout>
          }
        />
        <Route
          path="/jobs"
          element={
            <Layout>
              {isAuthenticated ? <Jobs /> : <Login onLogin={handleLogin} />}
            </Layout>
          }
        />
        <Route
          path="/internships"
          element={
            <Layout>
              {isAuthenticated ? (
                <InternShips />
              ) : (
                <Login onLogin={handleLogin} />
              )}
            </Layout>
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Layout>
                <Dashboard userType={userType} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
