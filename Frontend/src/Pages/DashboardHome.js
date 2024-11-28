import React from "react";

const DashboardHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card for Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Recent Activity</h2>
          <p className="text-gray-600">
            Check out your most recent job searches, applications, and saved
            jobs. Stay up to date with what's new in your job hunt!
          </p>
          <ul className="mt-4 space-y-2">
            <li className="text-blue-500">
              Applied for Software Engineer at ABC Corp.
            </li>
            <li className="text-blue-500">
              Saved 'Data Scientist' job at XYZ Ltd.
            </li>
            <li className="text-blue-500">Search Jobs: Full Stack Developer</li>
          </ul>
        </div>

        {/* Card for Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Job Recommendations</h2>
          <p className="text-gray-600">
            Based on your preferences and activity, we recommend the following
            opportunities:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="text-blue-500">React Developer at Tech Solutions</li>
            <li className="text-blue-500">UX/UI Designer at Design Studio</li>
            <li className="text-blue-500">Product Manager at Innovate Tech</li>
          </ul>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">What Our Users Say</h2>
        <div className="space-y-4">
          <blockquote className="text-gray-600 italic">
            "CareerGate has helped me land my dream job! The platform is so easy
            to use and keeps me updated with the best opportunities."
            <footer className="mt-2 text-sm text-gray-500">
              - Sarah, Software Engineer
            </footer>
          </blockquote>
          <blockquote className="text-gray-600 italic">
            "I saved a lot of time by using CareerGate to search for jobs that
            match my skills and interests. Highly recommended!"
            <footer className="mt-2 text-sm text-gray-500">
              - John, Data Analyst
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
