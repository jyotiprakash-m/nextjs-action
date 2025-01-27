// pages/index.tsx

import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome to {process.env.NEXT_PUBLIC_APP_NAME}
        </h1>

        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">API Base URL:</h2>
            <p className="text-gray-600">
              {process.env.NEXT_PUBLIC_API_BASE_URL}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Website URL:</h2>
            <p className="text-gray-600">
              {process.env.NEXT_PUBLIC_WEBSITE_URL}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Google API Key:</h2>
            <p className="text-gray-600">
              {process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Mapbox API Key:</h2>
            <p className="text-gray-600">
              {process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
