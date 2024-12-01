import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const API_URL = "http://localhost:3000/api";
export const DataProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [internships, setInternships] = useState([]);
  const [feedbacks, setFeedback] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(API_URL + "/jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await fetch(API_URL + "/internships");
        const data = await response.json();
        setInternships(data);
      } catch (error) {
        console.error("Error Fetching Internship", error);
      }
    };
    fetchInternships();
  }, []);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch(API_URL + "/feedback");
        const data = await response.json();
        setFeedback(data);
      } catch (error) {
        console.error("Error Fetching Feedbaks", error);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <DataContext.Provider value={{ jobs, internships, feedbacks }}>
      {children}
    </DataContext.Provider>
  );
};
