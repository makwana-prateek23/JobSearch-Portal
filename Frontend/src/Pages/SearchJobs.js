import React from "react";
import Internship from "../components/Internship";
import JobsGrid from "../components/JobsGrid";
function SearchJobs() {
  return (
    <div>
      <section>
        <JobsGrid />
      </section>
      <section>
        <Internship />
      </section>
    </div>
  );
}

export default SearchJobs;
