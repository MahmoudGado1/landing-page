import React from "react";

export default function Team() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-gray-50">
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-gray-900 text-4xl font-bold">Our Creative Team</h2>

        <p className="text-gray-600 text-lg">
          An elite group of the best digital marketing experts.
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
        <div className="flex flex-col items-center group">
          <div className="relative bg-linear-to-br px-28 py-20 from-blue-400 to-purple-400 rounded-t-3xl">
            <i class="fa-solid fa-user-circle text-white text-8xl"></i>
            {/* Social Icons */}
            <div
              className="absolute inset-0 flex items-center justify-center gap-4 
            bg-blue-500/90 opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-3xl"
            >
              <i className="fa-brands fa-facebook-f text-blue-400 rounded-full text-4xl p-5 bg-white  cursor-pointer hover:bg-blue-100/90"></i>

              <i className="fa-brands fa-twitter text-blue-400 rounded-full text-4xl p-5 bg-white  cursor-pointer hover:bg-blue-100/90"></i>

              <i className="fa-brands fa-linkedin-in text-blue-400 rounded-full text-4xl p-5 bg-white  cursor-pointer hover:bg-blue-100/90"></i>
            </div>
          </div>
          <div className="text-center space-y-2 bg-white w-80 p-8 rounded-b-3xl shadow-lg h-44">
            <h2 className="text-gray-900 text-xl font-bold">Ahmed Mohamed</h2>
            <p className="text-blue-600 text-lg">Marketing Director</p>
            <p className="text-gray-600 text-sm">
              10 years of experience in digital marketing
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center group">
          <div className="relative bg-linear-to-br px-28 py-20 from-purple-400 to-pink-400 rounded-t-3xl">
            <i class="fa-solid fa-user-circle text-white text-8xl"></i>
            {/* Social Icons */}
            <div
              className="absolute inset-0 flex items-center justify-center gap-4 
            bg-purple-500/90 opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-3xl"
            >
              <i className="fa-brands fa-facebook-f text-purple-400 rounded-full text-4xl p-5 bg-white  cursor-pointer hover:bg-purple-100/90"></i>

              <i className="fa-brands fa-twitter text-purple-400 rounded-full text-4xl p-5 bg-white  cursor-pointer hover:bg-purple-100/90"></i>

              <i className="fa-brands fa-linkedin-in text-purple-400 rounded-full text-4xl p-5 bg-white  cursor-pointer hover:bg-purple-100/90"></i>
            </div>
          </div>
          <div className="text-center space-y-2 bg-white w-80 p-8 rounded-b-3xl shadow-lg h-44">
            <h2 className="text-gray-900 text-xl font-bold">Sara Ahmed</h2>
            <p className="text-purple-600 text-lg">SEO Specialist</p>
            <p className="text-gray-600 text-sm">
              Specialized in search engine optimization
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center group">
          <div className="relative bg-linear-to-br px-28 py-20 from-green-400 to-blue-400 rounded-t-3xl">
            <i class="fa-solid fa-user-circle text-white text-8xl"></i>
            {/* Social Icons */}
            <div
              className="absolute inset-0 flex items-center justify-center gap-4 
            bg-green-500/90 opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-3xl"
            >
              <i className="fa-brands fa-facebook-f text-green-400 rounded-full text-4xl p-5 bg-white  cursor-pointer hover:bg-green-100/90"></i>

              <i className="fa-brands fa-twitter text-green-400 rounded-full text-4xl p-5 bg-white  cursor-pointer hover:bg-green-100/90"></i>

              <i className="fa-brands fa-linkedin-in text-green-400 rounded-full text-4xl p-5 bg-white  cursor-pointer hover:bg-green-100/90"></i>
            </div>
          </div>
          <div className="text-center space-y-2 bg-white w-80 p-8 rounded-b-3xl shadow-lg h-44">
            <h2 className="text-gray-900 text-xl font-bold">Mohamed Ali</h2>
            <p className="text-green-600 text-lg">Web Developer</p>
            <p className="text-gray-600 text-sm">Expert in web development</p>
          </div>
        </div>
        <div className="flex flex-col items-center group">
          <div className="relative bg-linear-to-br px-28 py-20 from-yellow-400 to-orange-400 rounded-t-3xl">
            <i class="fa-solid fa-user-circle text-white text-8xl"></i>

            {/* Social Icons */}
            <div
              className="absolute inset-0 flex items-center justify-center gap-4 
            bg-yellow-500/90 opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-3xl"
            >
              <i className="fa-brands fa-facebook-f text-yellow-400 rounded-full text-4xl p-5 bg-white  cursor-pointer hover:bg-yellow-100/90"></i>

              <i className="fa-brands fa-twitter text-yellow-400 rounded-full text-4xl p-5 bg-white  cursor-pointer hover:bg-yellow-100/90"></i>

              <i className="fa-brands fa-linkedin-in text-yellow-400 rounded-full text-4xl p-5 bg-white  cursor-pointer hover:bg-yellow-100/90"></i>
            </div>
          </div>
          <div className="text-center space-y-2 bg-white w-80 p-8 rounded-b-3xl shadow-lg h-44">
            <h2 className="text-gray-900 text-xl font-bold">Noura Khaled</h2>
            <p className="text-yellow-600 text-lg">Graphic Designer</p>
            <p className="text-gray-600 text-sm">
              Specialized in visual identity design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
