import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-full flex-1 flex-col flex bg-blue-200  h-screen items-center justify-center px-6 py-12 lg:px-8">
      <div className="bg-blue-100 w-4/12 shadow-lg h-screen items-center justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
          <img
            className="mx-auto h-10 w-auto logo-image1"
            src={require("../Logo/CareerGate.png")}
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            register Your account
          </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className=" p-8 rounded max-w-md" onSubmit={handleSubmit}>
            <label className="block mb-2" htmlFor="name">
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
            <label className="block mb-2" htmlFor="username">
              User Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />

            <label className="block mb-2" htmlFor="email">
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

            <label className="block mb-2" htmlFor="password">
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

            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
