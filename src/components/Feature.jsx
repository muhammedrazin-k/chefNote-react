import React from "react";

const Feature = () => {
  return (
    <div className="min-h-screen bg-white px-6 sm:px-12 py-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-600 mb-3">Features</h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Everything you need to organize your YouTube videos smarter and faster.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* Feature Box */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Save YouTube Links</h2>
          <p className="text-gray-600 text-sm">
            Add YouTube URLs in one click and keep all your recipes or playlists in one place.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Custom Categories</h2>
          <p className="text-gray-600 text-sm">
            Organize videos with categories like Cooking, Fitness, Study, Travel and more.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Smart Playlists</h2>
          <p className="text-gray-600 text-sm">
            Create playlists and group videos your own way without any YouTube clutter.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Quick Search</h2>
          <p className="text-gray-600 text-sm">
            Instantly find any saved video with our fast search system.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Clean UI</h2>
          <p className="text-gray-600 text-sm">
            A distraction-free, simple interface built for focus and productivity.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Mobile Friendly</h2>
          <p className="text-gray-600 text-sm">
            Access your saved lists from any device without losing your data.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Feature;
