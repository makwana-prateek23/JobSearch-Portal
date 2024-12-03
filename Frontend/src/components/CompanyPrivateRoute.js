import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/auth-context"; // Path to your AuthContext

const CompanyPrivateRoute = () => {
  const { companyToken } = useAuth();

  // If the company is not authenticated (no token), redirect to login
  if (!companyToken) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default CompanyPrivateRoute;
