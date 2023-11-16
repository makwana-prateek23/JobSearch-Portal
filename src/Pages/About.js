import React from "react";
import About1 from "./About1";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import JobsGrid from "./JobsGrid";
import JobsCategory from "./JobsCategory";
function About() {
  const location = useLocation();

  // Check if the current location is the home page ("/")
  const isHomePage = location.pathname === "/";
  return (
    <Layout>
      <div>
        <div className="Page-content">
          <div className="ab-bnr">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="ab-banner-inner">
                <h1 className="text-center text-6xl text-white">About Us</h1>
              </div>
            </div>
          </div>
          <div className="pb-16 relative">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-2">
              <div className=" mb-7 text-center">
                <h6 className="text-lg font-semibold mb-2 text-blue-700">
                  Working Porgress
                </h6>
                <h2 className="text-5xl mb-2 font-bold">How It Work</h2>
              </div>
              <div className="gap-4 sm:gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div class="bg-blue-500 mb-7 rounded-lg p-2 w-full  transition duration-500 ease-in-out transform hover:-translate-y-2 ">
                  <div className="p-10 relative flex">
                    <div>
                      <div class="w-24 h-24 flex items-center  rounded-lg mb-5 relative justify-center bg-white">
                        <img
                          src="https://jobick.dexignlab.com/frontend/xhtml/assets/images/icon/pic1.png"
                          alt=""
                        />{" "}
                      </div>
                      <div>
                        <h2 class="text-white font-bold text-2xl">
                          Register Your Account
                        </h2>
                        <p className="text-white">
                          there are many vacancies Lorem ipsum dolor sit amet,
                          consectetur adipisicing.
                        </p>
                      </div>
                    </div>
                    {/* <div>
                  <h3 className="Count">01</h3>
                </div> */}
                  </div>
                </div>
                <div class="bg-pink-400 mb-7  rounded-lg p-2 w-full  transition duration-500 ease-in-out transform hover:-translate-y-2">
                  <div className="p-10 relative">
                    <div class="w-24 h-24 items-center flex justify-center  mb-5 rounded-lg  bg-white">
                      <img
                        src="https://jobick.dexignlab.com/frontend/xhtml/assets/images/icon/pic2.png"
                        alt=""
                      />
                    </div>
                    <h2 class="text-white font-bold text-2xl">
                      Apply for your dream job
                    </h2>
                    <p className="text-white">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error quasi dicta veniam.
                    </p>
                  </div>
                </div>
                <div class="bg-orange-500 mb-7 rounded-lg p-2 w-full  transition duration-500 ease-in-out transform hover:-translate-y-2">
                  <div className="p-10 relative">
                    <div class="w-24 h-24 flex items-center flex justify-center mb-5 rounded-lg bg-white">
                      <img
                        src="https://jobick.dexignlab.com/frontend/xhtml/assets/images/icon/pic3.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 class="text-white text-2xl font-bold">
                        Register Your Account
                      </h2>
                      <p className="text-white font-semibold">
                        There are many variations of passages Lorem ipsum dolor
                        sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="">
            <About1 />{" "}
          </section>
          {!isHomePage && (
            <section>
              <JobsCategory />
            </section>
          )}
          {!isHomePage && (
            <section className="inner-content bg-gray-100">
              <div className="container max-w-7xl mx-auto px-4">
                <div className="text-center mb-7">
                  <h6 className="text-blue-500 font-semibold mb-2 text-lg">
                    All Jobs Post
                  </h6>
                  <h2 className="text-6xl font-semibold mb-2">
                    Find Your Career You Deserve It
                  </h2>
                </div>
                <JobsGrid />
              </div>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default About;
