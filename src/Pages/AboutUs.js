import React from "react";
import About from "../components/About";
import JobsCategory from "../components/JobsCategory";
import JobsGrid from "../components/JobsGrid";
import Footer from "../components/footer";
import Internship from "../components/Internship";
function AboutUs() {
  return (
    <div className="z-40">
      <section>
        <About />
      </section>
      <section className="inner-content5">
        <JobsCategory />
      </section>
      <section className="bg-gray-100 inner-content">
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
      <section>
        <Internship />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
