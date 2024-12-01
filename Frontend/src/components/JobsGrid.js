import React, { useContext } from "react";
import { DataContext } from "../Contexts/Data-context";

function JobsGrid() {
  const { jobs } = useContext(DataContext);

  // Check if jobs data is loaded
  if (!jobs || jobs.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-gray-500">Loading jobs...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Available Jobs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://via.placeholder.com/50"
                alt="Company Icon"
              />
              <ul className="text-sm text-gray-500">
                <li>{new Date(job.postedAt).toDateString()}</li>
                <li className="mt-1 text-blue-600">{job.location}</li>
              </ul>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{job.description}</p>
            <div className="mt-4">
              <span className="inline-block bg-blue-100 text-blue-500 text-sm font-medium px-3 py-1 rounded-lg">
                Salary: {job.salary}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobsGrid;
