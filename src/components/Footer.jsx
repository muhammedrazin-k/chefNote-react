import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-12 px-6" id="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">ChefNote</h2>
          <p className="text-sm opacity-80">
            Save YouTube links, organize your playlists, and build your own video cookbook.
            Simple, fast and distraction free.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 opacity-90 text-sm">
            <li className="hover:text-white cursor-pointer">Add Video</li>
            <li className="hover:text-white cursor-pointer">Playlists</li>
            <li className="hover:text-white cursor-pointer">Categories</li>
            <li className="hover:text-white cursor-pointer">History</li>
            <li className="hover:text-white cursor-pointer">About</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <p className="text-sm opacity-90">
            Need help or have suggestions? Reach out anytime.
          </p>
          <div className="mt-3 space-y-2 text-sm">
            <p>📞 +91 98765 43210</p>
            <p>📧 support@chefnote.com</p>
            <p>📍 Kannur, Kerala</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-white">✦</a>
            <a href="#" className="hover:text-white">✦</a>
            <a href="#" className="hover:text-white">✦</a>
          </div>
          <p className="text-xs mt-3 opacity-60">
            Stay updated with new features and updates.
          </p>
        </div>
      </div>

      <div className="border-t border-base-300 mt-10 pt-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} ChefNote. All rights reserved.
      </div>
    </footer>
  );
};
