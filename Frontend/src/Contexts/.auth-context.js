// auth-context.js

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // Placeholder logic for login, replace with your actual authentication logic
    setIsAuthenticated(true);
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Placeholder logic for logout, replace with your actual logout logic
    setIsAuthenticated(false);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
