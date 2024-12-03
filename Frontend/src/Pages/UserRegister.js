import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserRegister() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    skills: [],
    profileType: "user",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedSkills = checked
        ? [...formData.skills, value]
        : formData.skills.filter((skill) => skill !== value);
      setFormData({ ...formData, skills: updatedSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/register", formData, {
        withCredentials: true,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Error during registration");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Register as User
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold text-gray-600"
            htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            id="name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-semibold text-gray-600"
            htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            id="username"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-semibold text-gray-600"
            htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-semibold text-gray-600"
            htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            id="password"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Register
          </button>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
}

export default UserRegister;
