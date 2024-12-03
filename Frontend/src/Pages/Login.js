import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/auth-context";

function Login() {
  const [email, setEmail] = useState("");
  const [companyEmail, setCompanyEmail] = useState(""); // State for company email
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loginType, setLoginType] = useState("user"); // Default to user login
  const navigate = useNavigate();
  const { userLogin, companyLogin } = useAuth(); // Use both login functions from context

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (loginType === "user") {
        await userLogin(email, password);
        navigate("/dashboard"); // Call user login
      } else {
        await companyLogin(companyEmail, password);
        navigate("/companydashboard"); // Call company login with companyEmail
      }
      // Navigate to the dashboard after successful login
    } catch (error) {
      setError(error.message);
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
              {/* Radio Buttons for Login Type */}
              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="loginType"
                    value="user"
                    checked={loginType === "user"}
                    onChange={() => setLoginType("user")}
                    className="mr-2"
                  />
                  User Login
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="loginType"
                    value="company"
                    checked={loginType === "company"}
                    onChange={() => setLoginType("company")}
                    className="mr-2"
                  />
                  Company Login
                </label>
              </div>

              {/* Conditional Email Input (userEmail vs. companyEmail) */}
              <div>
                <label
                  htmlFor={loginType === "user" ? "email" : "companyEmail"}
                  className="block text-sm font-medium leading-6 text-gray-900">
                  {loginType === "user" ? "Email address" : "Company Email"}
                </label>
                <div className="mt-2">
                  <input
                    id={loginType === "user" ? "email" : "companyEmail"}
                    name={loginType === "user" ? "email" : "companyEmail"}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) =>
                      loginType === "user"
                        ? setEmail(e.target.value)
                        : setCompanyEmail(e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Password Input */}
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

              {/* Error Message */}
              {error && (
                <div className="text-red-600 text-sm font-medium">{error}</div>
              )}

              {/* Submit Button */}
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
