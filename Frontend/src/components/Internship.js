import React, { useContext } from "react";
import { DataContext } from "../Contexts/Data-context"; // Import DataContext

function Internship() {
  // Access internships data and loading state from context
  const { internships, loading } = useContext(DataContext);

  // Check if internships is defined and is an array before using .length
  const hasInternships = Array.isArray(internships) && internships.length > 0;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-blue-600 rounded-full"
          role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Available Internships
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hasInternships ? (
          internships.map((internship) => (
            <div
              key={internship._id}
              className="bg-blue-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl text-center mb-4 font-semibold text-gray-800">
                {internship.title}
              </h3>
              <p className="text-gray-600">{internship.company}</p>
              <p className="text-gray-500">{internship.location}</p>
              <p className="text-gray-700 mt-2">{internship.description}</p>
              <p className="mt-4 text-gray-800 font-medium">
                Salary: {internship.salary}
              </p>
              <div className="flex justify-between items-center">
                <p className="mt-2 text-gray-500 text-sm">
                  Posted On:{" "}
                  {new Date(internship.postedAt).toLocaleDateString()}
                </p>
                <button className="bg-gray-200 rounded-md p-2 py-2 text-black">
                  Apply now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No internships available at the moment.
          </p>
        )}
      </div>
    </div>
  );
}

export default Internship;
