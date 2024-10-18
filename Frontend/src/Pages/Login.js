import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Error state to display error messages
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        loginData
      );

      if (response.status === 200) {
        alert(response.data.message); // Alert the message from response
        const userRole = response.data.role; // Get the role directly
        const token = response.data.token; // Get the token directly

        // Store the token in localStorage
        localStorage.setItem("token", token);

        // Navigate based on the user role
        if (userRole === "admin ,user") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      // Improved error handling
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
      setError(
        error.response?.data?.message || "An error occurred while logging in."
      );
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center bg-blue-200 h-screen px-6 py-12 lg:px-8">
        <div className="bg-blue-100 w-4/12 shadow-md h-screen items-center justify-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-12">
            <img
              className="mx-auto h-10 w-auto logo-image1"
              src={require("../Logo/CareerGate.png")}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>

                  <div className="relative top-16 mt-text-sm">
                    <a
                      href="#!"
                      className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm font-medium">{error}</div>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Sign in
                </button>
              </div>
              <div>
                Don't have an account? <Link to="/register">Register</Link>
              </div>
              <p className="mt-5 mb-3 text-body-secondary">
                &copy; 2023 JustChill Inc.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
