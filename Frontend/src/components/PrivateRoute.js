import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/auth-context";

const PrivateRoute = ({ requiredRole }) => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/" replace />; // Redirect if the role doesn't match
  }

  return <Outlet />; // Render child routes if authenticated and authorized
};

export default PrivateRoute;
