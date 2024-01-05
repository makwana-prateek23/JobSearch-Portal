import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth")
      .then((response) => {
        console.log(response.data);

        // Navigate directly to the dashboard
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        loginData
      );

      if (response.status === 200) {
        alert("Logged in successfully!");
        const userRole = response.data.data.user.role;

        if (userRole === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/home");
        }
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("An error occurred while logging in.");
    }
  };
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center bg-blue-200  h-screen  px-6 py-12 lg:px-8">
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

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleLogin}>
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  <div className="text-sm">
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

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
