import React from "react";

function NavBar({ isScrolled }) {
  return (
    <div>
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className={`text-${isScrolled ? "gray-200" : "black"}`}>
              <img
                src={require("./Logo/CareerGate.png")}
                alt="Logo"
                className="logo-image"
              />
            </div>
            <div className="h-7 w-4/12 bg-gray-200 outline-none">
              <input
                type="Search"
                placeholder="Search For Jobs"
                className="outline-none bg-gray-200 items-center w-11/12"
              />
              <span className="">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
            <div>
              <p className={`text-${isScrolled ? "gray-200" : "black"}`}>
                JobListings
              </p>
            </div>
            <div>
              <p className={`text-${isScrolled ? "gray-200" : "black"}`}>
                UserLogin
              </p>
            </div>
            <div>
              <p className={`text-${isScrolled ? "gray-200" : "black"}`}>
                UserRegister
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
