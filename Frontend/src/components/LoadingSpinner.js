// LoadingSpinner.js
import React from "react";
import "./Loading.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default LoadingSpinner;
