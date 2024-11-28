import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // State for authentication, role, and token
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("accessToken")
  );
  const [userRole, setUserRole] = useState(localStorage.getItem("role") || "");
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  // Function to handle login
  const login = async (email, password) => {
    const loginData = { email, password };
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        loginData
      );
      if (response.status === 200) {
        const { accessToken, role, username } = response.data;

        // Store the tokens and role in localStorage
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("role", role);
        localStorage.setItem("username", username);

        // Set state
        setAccessToken(accessToken);
        setIsAuthenticated(true);
        setUserRole(role);
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  // Function to log out
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    setUserRole("");
    setAccessToken(null);
  };

  // Persist login state on page reload
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedUserRole = localStorage.getItem("role");

    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
      setIsAuthenticated(true);
      setUserRole(storedUserRole || "");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userRole,
        login,
        logout,
        accessToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
