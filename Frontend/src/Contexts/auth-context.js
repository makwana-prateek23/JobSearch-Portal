import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // State for authentication and token
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token") || !!localStorage.getItem("accessToken")
  );
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
  const [companyToken, setCompanyToken] = useState(localStorage.getItem("token"));
  const [userRole, setUserRole] = useState(localStorage.getItem("role") || "");

  // Function for user login
  const userLogin = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", { email, password });

      if (response.status === 200) {
        const { accessToken, role, username } = response.data;

        // Store tokens and role in localStorage
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("role", role);
        localStorage.setItem("username", username);

        // Update state
        setAccessToken(accessToken);
        setIsAuthenticated(true);
        setUserRole(role);
      }
    } catch (error) {
      console.error("User login failed:", error);
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  // Function for company login
  const companyLogin = async (companyEmail, password) => {
    try {
      const response = await axios.post("http://localhost:5000/auth/company/login", { companyEmail, password });

      if (response.status === 200) {
        const { token, companyName } = response.data;

        // Store token and company name in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("companyName", companyName);

        // Update state
        setCompanyToken(token);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Company login failed:", error);
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  // Function to log out
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("companyName");

    setIsAuthenticated(false);
    setUserRole("");
    setAccessToken(null);
    setCompanyToken(null);
  };

  // Persist login state on page reload
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedCompanyToken = localStorage.getItem("token");

    if (storedAccessToken || storedCompanyToken) {
      setAccessToken(storedAccessToken);
      setCompanyToken(storedCompanyToken);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      userRole,
      userLogin,
      companyLogin,
      logout,
      accessToken,
      companyToken,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
