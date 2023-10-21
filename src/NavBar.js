import React, { useState } from "react";

// import User from "./UserLogin";
function Navbar() {
  // const [showDetails, setShowDetails] = useState(false);
  // const user = {
  //   name: "John Doe",
  //   profilePicture: "https://example.com/profile.jpg",
  //   // Add more user details here
  // };
  // const handleUserClick = (value) => {
  //   setShowDetails(value);
  // };

  return (
    <>
      <div className="bg-slate-200">
        <header>
          <nav className="bg-blue-400">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div>
                  <p className="text-gray-200">MyJobs</p>
                </div>
                <div className="h-7 w-4/12 bg-gray-200 outline-none">
                  <input
                    type="Search"
                    placeholder="Search For Jobs"
                    className="outline-none bg-gray-200 items-center w-11/12"></input>
                  <span className="">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </span>
                </div>
                <div>
                  <p className="text-gray-200">JobListings</p>
                </div>
                <div>
                  <p className="text-gray-200">UserLogin</p>
                </div>
                <div>
                  <p className="text-gray-200">UserRegister</p>
                </div>
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
              </div>
            </div>
          </nav>
        </header>
        <div className="mt-5 mx-8">
          <div className="flex justify-evenly">
            <div className="m-4">
              <h6 className="text-blue-400  mt-36 m-4 text-xl font-semibold">
                We Have 208,000+ Live jobs
              </h6>
              <h1 className="text-7xl m-4 font-semibold">
                Your
                <span className="text-blue-600 font-semibold"> Dream </span>
                Job Is <br></br>Waiting For You
              </h1>
              <p className="m-4 mt-8 text-xl font-semibold text-blue-500">
                Type your keywork,then click search to find your perfect job
              </p>
              <div className="m-4 w-full flex h-20 items-center bg-white rounded-md">
                <div>
                  <input
                    type="search"
                    placeholder="Job Titles"
                    className="outline-none"></input>
                </div>
                <div className="h-7 bg-gray-400 w-0.5 mr-7"></div>
                <div>
                  <input
                    type="search"
                    placeholder="City or Postcode"
                    className="outline-none"></input>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://jobick.dexignlab.com/frontend/xhtml/assets/images/home-banner/media-men.png"
                alt="Myimage"
                className="w-11/12"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
