import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Profile Header */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl">
        <div className="flex flex-col md:flex-row items-center justify-between p-6 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">John Doe</h1>
              <p className="text-gray-500">Full Stack Developer</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              className="flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Logo image</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 20h9"
                />
              </svg>
              <span>Edit Profile</span>
            </button>
            <button
              type="button"
              className="flex items-center space-x-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Logo image</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 20h9"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl">
        <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="text-gray-700">
            Experienced developer specializing in building modern web and
            blockchain solutions. Passionate about creating seamless user
            experiences and scalable architectures.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p className="text-gray-700">johndoe@example.com</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Phone</h3>
              <p className="text-gray-700">+123 456 7890</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Location</h3>
              <p className="text-gray-700">San Francisco, CA</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Website</h3>
              <p className="text-gray-700">www.johndoe.dev</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            <li className="text-gray-700">
              🚀 Deployed a new project on GitHub:{" "}
              <a href="/" className="text-blue-600">
                My Portfolio
              </a>
            </li>
            <li className="text-gray-700">
              📘 Completed a course on React Hooks
            </li>
            <li className="text-gray-700">
              🌟 Achieved 500 stars on an open-source repository
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
