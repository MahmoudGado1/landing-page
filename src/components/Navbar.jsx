import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full z-50 fixed top-0 bg-white h-20 px-5 md:px-10 shadow-xl">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl text-blue-600 font-bold">DigitalPro</h1>
          <span className="text-xs md:text-sm bg-blue-100 text-blue-600 py-1 px-1 md:px-2 rounded-full">
            Marketing Agency
          </span>
        </div>
        <div className="hidden lg:flex gap-9">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-800 font-medium text-lg"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-800 font-medium text-lg"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-800 font-medium text-lg"
          >
            Our Work
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-800 font-medium text-lg"
          >
            Our Team
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-800 font-medium text-lg"
          >
            Contact Us
          </a>
        </div>
        {menuOpen ? (
          <svg
            onClick={() => setMenuOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 lg:hidden cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setMenuOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 lg:hidden cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        )}
        <div className="hidden lg:block">
          <button className="bg-blue-600 cursor-pointer text-white text-lg font-medium rounded-lg hover:bg-blue-800 py-2 px-6 duration-300">
            Get a Consultation
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen mt-20 w-72 bg-white shadow-lg transform transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6 pt-24 font-medium">
          <a className="text-gray-700 hover:text-blue-800 text-lg">Home</a>
          <a className="text-gray-700 hover:text-blue-800 text-lg">Services</a>
          <a className="text-gray-700 hover:text-blue-800 text-lg">Our Work</a>
          <a className="text-gray-700 hover:text-blue-800 text-lg">Our Team</a>
          <a className="text-gray-700 hover:text-blue-800 text-lg">
            Contact Us
          </a>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 cursor-pointer text-white text-lg font-medium rounded-lg hover:bg-blue-800 py-2 px-6 duration-300">
            Get a Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
