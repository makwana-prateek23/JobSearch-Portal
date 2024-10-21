import React, { createContext, useContext, useState } from "react";
import axios from "axios";

// Create the AuthContext
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  const login = async (email, password) => {
    const loginData = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        loginData
      );
      if (response.status === 200) {
        const { role, token } = response.data; // Extract role and token
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        setUserRole(role);
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error(error.response?.data?.message || "Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUserRole("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
