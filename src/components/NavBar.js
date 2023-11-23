import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isMainPage = location.pathname === "/";

  return (
    <div>
      <header>
        <nav
          className={`bg-${
            isMainPage && !isScrolled ? "transparent" : "blue-400"
          } fixed top-0 left-0 w-full z-50 py-4`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className={`text-${isScrolled ? "gray-200" : "black"}`}>
                <a href="index.html">
                  <img
                    src={require("../Logo/CareerGate.png")}
                    alt="Logo"
                    className="logo-image"
                  />
                </a>
              </div>
              <div className="lg:hidden">
                <button
                  onClick={handleToggleNav}
                  className={`text-${
                    isScrolled ? "gray-200" : "black"
                  } focus:outline-none`}>
                  <i
                    className={`fa-solid ${
                      isNavOpen ? "fa-times" : "fa-bars"
                    }`}></i>
                </button>
              </div>
              <div
                className={`hidden lg:flex space-x-4 ${
                  isNavOpen ? "flex" : "hidden"
                }`}>
                <Link
                  to={"/"}
                  className={`text-${isScrolled ? "gray-200" : "black"}`}>
                  Home
                </Link>
                <Link
                  to={"/about-us"}
                  className={`text-${isScrolled ? "gray-200" : "black"}`}>
                  About Us
                </Link>
                <Link
                  to={"/InternShips"}
                  className={`text-${isScrolled ? "gray-200" : "black"}`}>
                  Internships
                </Link>
                <p className={`text-${isScrolled ? "gray-200" : "black"}`}>
                  UserLogin
                </p>
                <p className={`text-${isScrolled ? "gray-200" : "black"}`}>
                  UserRegister
                </p>
              </div>
              <div className="hidden lg:flex h-7 w-4/12 bg-gray-200">
                <input
                  type="Search"
                  placeholder="Search For Jobs"
                  className="outline-none bg-gray-200 items-center w-11/12"
                />
                <span className="">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
