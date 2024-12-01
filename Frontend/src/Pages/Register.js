import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    skills: [], // Added skills field
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError(null); // Reset error on input change
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Handle skills checkbox selection
      setFormData((prevData) => {
        const updatedSkills = checked
          ? [...prevData.skills, value]
          : prevData.skills.filter((skill) => skill !== value);
        return { ...prevData, skills: updatedSkills };
      });
    } else {
      // Handle other input fields (username, name, etc.)
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data", formData);
    try {
      // Send the registration data, including skills
      await axios.post("http://localhost:3000/auth/register", formData, {
        withCredentials: true,
      });
      console.log("User registered successfully");
      setFormData({
        username: "",
        name: "",
        email: "",
        password: "",
        skills: [], // Reset skills after successful registration
      });
      navigate("/login"); // Redirect to login page after successful registration
    } catch (err) {
      console.error("Error registering user:", err);
      const errorMessage =
        err.response?.data?.message || "An error occurred during registration.";
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200 px-6 py-12">
      <div className="bg-blue-100 w-full sm:w-4/12 shadow-lg rounded-lg p-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
          <img
            className="mx-auto h-10 w-auto logo-image1"
            src={require("../Logo/CareerGate.png")}
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register Your Account
          </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="username" className="block mb-2">
                User Name:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
            </div>

            {/* Skills Selection */}
            <div className="mb-4">
              <label className="block mb-2">Select Skills:</label>
              <div className="flex flex-wrap gap-4">
                {["React", "Node.js", "JavaScript", "MongoDB", "CSS", "HTML"].map((skill) => (
                  <label key={skill} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="skills"
                      value={skill}
                      checked={formData.skills.includes(skill)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {skill}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded w-full"
            >
              Submit
            </button>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                <strong className="font-bold">Error!</strong>
                <p className="block sm:inline">{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
