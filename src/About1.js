import React from "react";

function About1() {
  return (
    <div>
      {" "}
      <section className="inner-content bg-gray-100 overflow-hidden">
        <div className=" relative">
          <div className=" Container max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="flex w-full items-center MyRow mb-7 justify-center">
              <div className="flex w-full lg-w-1/2 items-center mb-7">
                <div className="w-full lg-w-1/2">
                  <img
                    src="https://jobick.dexignlab.com/frontend/xhtml/assets/images/about/pic1.jpg"
                    alt="image1"
                    className="rounded-lg"
                  />
                  <span className="absolute bottom-32 left-0 bg-blue-500 items-center  font-semibold text-white text-center rounded-lg ml-24 p-1 animate-bounce ">
                    {" "}
                    "We Need A UI UX"
                    <br />
                    "Designer For Our Team"
                  </span>
                </div>
                <div className="w-full lg-w-1/2">
                  <img
                    src="https://jobick.dexignlab.com/frontend/xhtml/assets/images/about/pic2.jpg"
                    alt="image2"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full lg-w-1/2">
                <div className="About1-head">
                  <div className="Section-head mb-7">
                    <h6 className="text-xl font-semibold text-blue-500">
                      Companies
                    </h6>
                    <h2 className="text-6xl font-semibold">
                      500+ World Top Companies Posted There job
                    </h2>
                  </div>
                  <div className="bg-blue-500 w-32 h-12 flex text-white text-xl justify-center rounded-lg">
                    <button className=""> Find Job</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About1;
