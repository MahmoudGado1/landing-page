import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-14 max-w-7xl mx-auto">
        
        {/* Contact Form */}
        <div className="bg-gray-800 p-6 rounded-3xl space-y-6 w-full lg:w-1/2">
          <h1 className="text-2xl text-white font-semibold">Contact Us</h1>

          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-600 placeholder:text-gray-300/70 placeholder:text-lg py-4 px-6 rounded-lg border-2 border-gray-500/40 outline-none text-white focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-600 placeholder:text-gray-300/70 placeholder:text-lg py-4 px-6 rounded-lg border-2 border-gray-500/40 outline-none text-white focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              rows={4}
              placeholder="Your Message..."
              className="bg-gray-600 placeholder:text-gray-300/70 placeholder:text-lg py-4 px-6 rounded-lg border-2 border-gray-500/40 outline-none text-white focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button className="bg-blue-600 w-full py-4 text-white rounded-lg cursor-pointer hover:bg-blue-700 duration-300">
            Send Message
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start space-y-6 w-full lg:w-1/2">
          <h2 className="text-white text-2xl font-semibold mb-6">
            Contact Information
          </h2>

          <div className="flex items-center gap-4">
            <div className="p-4 rounded-lg bg-blue-600/30">
              <i className="fa-solid fa-location-dot text-2xl text-blue-600"></i>
            </div>
            <div>
              <p className="text-gray-400">Address</p>
              <p className="text-white text-lg font-semibold">Cairo, Egypt</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 rounded-lg bg-blue-600/30">
              <i className="fa-solid fa-phone text-2xl text-blue-600"></i>
            </div>
            <div>
              <p className="text-gray-400">Phone</p>
              <p className="text-white text-lg font-semibold">
                +20 123 456 7890
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 rounded-lg bg-blue-600/30">
              <i className="fa-solid fa-envelope text-2xl text-blue-600"></i>
            </div>
            <div>
              <p className="text-gray-400">Email</p>
              <p className="text-white text-lg font-semibold">
                info@digitalpro.com
              </p>
            </div>
          </div>
          {/* Map */}
  <div className="w-full mt-6">
    <iframe
      src="https://maps.google.com/maps?q=cairo&t=&z=13&ie=UTF8&iwloc=&output=embed"
      className="w-full h-64 rounded-xl border-0"
      loading="lazy"
    ></iframe>
  </div>
        </div>
      </div>

      <hr className="mt-12 border-gray-800" />

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6 max-w-7xl mx-auto">
        <p className="text-gray-400 text-center md:text-left">
          © 2024 DigitalPro. All rights reserved.
        </p>

        <div className="flex">
          <i className="fa-brands fa-facebook-f text-gray-400 text-xl cursor-pointer hover:text-gray-200 mx-4"></i>
          <i className="fa-brands fa-twitter text-gray-400 text-xl cursor-pointer hover:text-gray-200 mx-4"></i>
          <i className="fa-brands fa-linkedin-in text-gray-400 text-xl cursor-pointer hover:text-gray-200 mx-4"></i>
          <i className="fa-brands fa-instagram text-gray-400 text-xl cursor-pointer hover:text-gray-200 mx-4"></i>
        </div>
      </div>
    </footer>
  );
}