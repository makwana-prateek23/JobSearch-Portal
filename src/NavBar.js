import React, { useState } from "react";
import About from "./About";
import JobsCategory from "./JobsCategory";
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
      <div>
        <header className="bg-blue-400 fixed top-0 z-50 w-full">
          <nav>
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
              </div>
            </div>
          </nav>
        </header>
        <section>
          <div className="relative pt-50px">
            <div className="flex flex-wrap main-bnr justify-evenly bg-gray-100">
              <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center flex-wrap ">
                  <div className="xl:col-span-7 lg:col-span-7 md:col-span-12">
                    <h6 className="text-blue-400 mb-2 text-xl font-semibold">
                      We Have 208,000+ Live jobs
                    </h6>
                    <h1 className="text-7xl mb-5 font-semibold">
                      Your
                      <span className="text-blue-600 font-semibold">
                        {" "}
                        Dream{" "}
                      </span>
                      Job Is <br></br>Waiting For You
                    </h1>
                    <p className="text-xl font-semibold text-blue-500">
                      Type your keywork,then click search to find your perfect
                      job
                    </p>
                    <div className="m-4 w-full flex h-20 items-center bg-white rounded-xl shadow-xl mb-20px">
                      <div className="items-center">
                        <span className="text-blue-500 ml-6 mr-3 font-semibold">
                          <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input
                          type="search"
                          placeholder="Job Titles,Keywords..."
                          className="outline-none"></input>
                      </div>
                      <div className="h-7 bg-gray-400 w-0.5 mr-6"></div>
                      <div>
                        <span className="text-blue-600 mr-3">
                          <i class="fa-solid fa-location-dot"></i>
                        </span>
                        <input
                          type="search"
                          placeholder="City or Postcode"
                          className="outline-none"></input>
                      </div>
                      <div className="bg-blue-500 h-10 flex items-center justify-center text-white rounded-md w-1/5">
                        <button className="">Find Jobs</button>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-400">
                        <span className="font-bold text-black">
                          Popular Searches:
                        </span>
                        <span> Designer,Senor,Architecture,IOS,Etc.</span>
                      </p>
                    </div>
                  </div>
                  <div className="xl:col-5 lg:col-5 md:col-12">
                    <div className="Banner">
                      <img
                        src="https://jobick.dexignlab.com/frontend/xhtml/assets/images/home-banner/media-men.png"
                        alt="Myimage"
                        className="max-w-full align-middle"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="inner-content">
          <About />
        </section>
        <section>
          <JobsCategory />
        </section>
      </div>
    </>
  );
}

export default Navbar;
