import React from "react";
import internshipsData from "./Internships.json";
import { useLocation, useNavigate } from "react-router-dom";

const Internship = () => {
  const navigate = useNavigate();

  const handleApplyClick = (event) => {
    event.preventDefault();
    // Redirect to the login page
    navigate("/login");
  };
  const location = useLocation();
  const isInternPage = location.pathname.includes("/InternShips");
  return (
    <div className="">
      {isInternPage && (
        <div className="ab-bnr">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="ab-banner-inner">
              <h1 className="text-center text-6xl text-white font-bold ">
                Internship
              </h1>
            </div>
          </div>
        </div>
      )}
      <div className="inner-content4">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-7">
            <h6 className="text-blue-500 font-semibold mb-2 text-lg">
              All Internships
            </h6>
            <h2 className="text-6xl font-semibold mb-2">
              Find Best Internships as per your skills
            </h2>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipsData.map((internship) => (
              <div
                key={internship.id}
                className="bg-gray-100 p-6 mb-6 rounded shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  {internship.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Company:</strong> {internship.company} |{" "}
                  <strong>Location:</strong> {internship.location} |{" "}
                  <strong>Duration:</strong> {internship.duration}
                </p>
                <p className="text-gray-800 mb-4">{internship.description}</p>

                <div className="mb-4">
                  <strong>Requirements:</strong>
                  <ul className="list-disc pl-4">
                    {internship.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleApplyClick}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded inline-block">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
