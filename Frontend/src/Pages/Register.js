import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Submit the form data to the server or perform other actions
    console.log("Form submitted:", formData);

    // You can add logic to send the data to your server or perform other actions here
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-6">User Registration</h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username">
            Username:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email">
            Email:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password">
            Password:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            className="border rounded w-full py-2 px-3"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
