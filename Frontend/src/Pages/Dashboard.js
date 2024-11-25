import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 text-center border-b">
          <h2 className="text-lg font-bold text-gray-700">JobFinder</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block p-2 text-gray-600 rounded hover:bg-gray-100">
                🏠 Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 text-gray-600 rounded hover:bg-gray-100">
                🔍 Search Jobs
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 text-gray-600 rounded hover:bg-gray-100">
                💼 My Applications
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 text-gray-600 rounded hover:bg-gray-100">
                📜 Saved Jobs
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 text-gray-600 rounded hover:bg-gray-100">
                ⚙️ Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 rounded shadow">
          <h1 className="text-xl font-semibold text-gray-700">Welcome Back, User!</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Log Out
          </button>
        </header>

        <div className="grid grid-cols-4 gap-4 mt-6">
          {/* Profile Summary */}
          <section className="col-span-1 bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-gray-700">Profile Summary</h2>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600">👤 Name: John Doe</p>
              <p className="text-gray-600">📧 Email: johndoe@example.com</p>
              <p className="text-gray-600">🎓 Qualification: Software Engineer</p>
            </div>
            <button className="mt-4 px-4 py-2 w-full bg-green-500 text-white rounded hover:bg-green-600">
              Update Profile
            </button>
          </section>

          {/* Job Listings */}
          <section className="col-span-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700">Job Listings</h2>
              <input
                type="text"
                placeholder="Search jobs..."
                className="p-2 border rounded w-64"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {/* Individual Job Card */}
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-bold text-gray-700">Frontend Developer</h3>
                <p className="text-sm text-gray-600">Company: TechCorp</p>
                <p className="text-sm text-gray-600">Location: Remote</p>
                <p className="mt-2 text-sm text-gray-500">
                  Description: Looking for a skilled frontend developer with React and Tailwind
                  experience.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Apply Now
                </button>
              </div>

              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-bold text-gray-700">Backend Engineer</h3>
                <p className="text-sm text-gray-600">Company: CloudBase</p>
                <p className="text-sm text-gray-600">Location: San Francisco, CA</p>
                <p className="mt-2 text-sm text-gray-500">
                  Description: Join us to build scalable backend systems using Node.js and MongoDB.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Apply Now
                </button>
              </div>
              {/* Add more job cards as needed */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
