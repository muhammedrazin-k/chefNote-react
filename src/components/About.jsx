import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white px-6 sm:px-12 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          About ChefNote
        </h1>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-16 max-w-3xl mx-auto">
          A simple and organized way to save YouTube links, build playlists, and keep your favorite videos neatly sorted.
        </p>

        {/* Section 1 */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">What is ChefNote?</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            ChefNote is a lightweight and distraction-free tool designed to save YouTube links in a clean and organized way.
            Whether you’re collecting cooking tutorials, study videos, fitness routines, music playlists, or DIY ideas,
            ChefNote helps you sort them into playlists and categories so you always know where things are.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why ChefNote Exists?</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            YouTube is amazing, but it’s easy to lose track of videos. Playlists get messy, recommendations distract you,
            and finding that one video becomes a headache. ChefNote fixes that by giving you your own space to store,
            manage, and revisit videos without any clutter.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Goal</h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            The mission is simple: Make video management easy. ChefNote aims to be the fastest and most user-friendly
            bookmarking system for YouTube videos. No distractions, no ads, no noise. Just your videos, your way.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
