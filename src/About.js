import React from "react";
import About1 from "./About1";
function About() {
  return (
    <div>
      <secion>
        <div className="max-w-7xl mx-auto Container  sm:px-6 lg:px-2">
          <div className=" mb-8 text-center">
            <h6 className="text-lg font-semibold mb-2 text-blue-700">
              Working Porgress
            </h6>
            <h2 className="text-5xl mb-2 font-bold">How It Work</h2>
          </div>
          <div className=" MyRow flex">
            <div class="bg-blue-500 mb-7 rounded-lg p-2 w-full lg:w-1/3 md:w-1/2">
              <div className="p-10 relative flex">
                <div>
                  <div class="w-24 h-24 flex items-center rounded-lg mb-5 relative justify-center bg-white">
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

            <div class="bg-pink-400 mb-7  rounded-lg p-2 w-full lg:w-1/3 md:w-1/2">
              <div className="p-10 relative">
                <div class="w-24 h-24 items-center flex justify-center mb-5 rounded-lg  bg-white">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  quasi dicta veniam.
                </p>
              </div>
            </div>
            <div class="bg-orange-500 mb-7 rounded-lg p-2 w-full lg:w-1/3 md:w-1/2">
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
                    There are many variations of passages Lorem ipsum dolor sit
                    amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </secion>
      <section className="inner-content">
        <About1 />
      </section>
    </div>
  );
}

export default About;
