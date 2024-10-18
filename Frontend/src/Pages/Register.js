import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Redirect } from "react-router-dom"; // Import useHistory for redirection

const RegistrationForm = () => {
  // const history = Redirect(); // Get the history object for redirection
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null); // State to hold registration error
  const navigate = useNavigate();
  const handleChange = (e) => {
    setError();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data", formData);
    try {
      await axios.post("http://localhost:3000/auth/register", formData, {
        withCredentials: true,
      });
      console.log("User registered successfully");
      setFormData({
        username: "",
        name: "",
        email: "",
        password: "",
      });
      navigate("/login");
      // Optionally, reset form or redirect user
      // setFormData({ username: "", name: "", email: "", password: "" });
      // history.push("/login");
    } catch (err) {
      console.error("Error registering user:", err);
      const errorMessage =
        err.response?.data?.message || "An error occurred during registration.";
      setError(errorMessage);
    }
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
            Register Your Account
          </h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className=" p-8 rounded max-w-md" onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded">
              Submit
            </button>{" "}
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
