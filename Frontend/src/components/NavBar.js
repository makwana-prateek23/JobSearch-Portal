import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  const handleSearch = (event) => {
    event.preventDefault();
    // Add your global search logic here using the 'searchQuery'
    console.log("Search query:", searchQuery);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
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
      <div className="PageWrapper">
        <header
          className={`bg-${
            isMainPage && !isScrolled ? "gray-100" : "blue-400"
          } fixed top-0 left-0 w-full  py-4`}>
          <nav>
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
                  <Link
                    to={"/Login"}
                    className={`text-${isScrolled ? "gray-200" : "black"}`}>
                    Login
                  </Link>
                  <Link
                    to={"/Register"}
                    className={`text-${isScrolled ? "gray-200" : "black"}`}>
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default NavBar;
