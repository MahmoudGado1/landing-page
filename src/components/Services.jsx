import React from "react";

export default function Services() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-gray-50">
      
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-gray-900 text-4xl font-bold">
          Our Integrated Services
        </h2>

        <p className="text-gray-600 text-lg">
          We offer a comprehensive range of digital solutions to grow your
          business.
        </p>

        <span className="w-24 h-1 bg-blue-600 rounded-lg block mx-auto"></span>
      </div>

      {/* Services Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {/* Card 1 */}
        <div className="border border-gray-200 hover:border-blue-600 transition duration-300 rounded-xl p-8 space-y-6 bg-white group">
          
          <div className="p-4 w-16 rounded-xl bg-blue-600/20 group-hover:bg-blue-600 transition">
            <i className="fa-solid fa-chart-line text-3xl text-blue-600 group-hover:text-white"></i>
          </div>

          <h3 className="text-gray-900 text-2xl font-bold">
            Search Engine Optimization
          </h3>

          <p className="text-gray-600">
            We ensure your website appears on the first pages of search engines
            and increases qualified visitors.
          </p>

          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-check text-green-500"></i>
              <p>Keyword Analysis</p>
            </div>

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-check text-green-500"></i>
              <p>Content Optimization</p>
            </div>

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-check text-green-500"></i>
              <p>Link Building</p>
            </div>

          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-200 hover:border-green-600 transition duration-300 rounded-xl p-8 space-y-6 bg-white group">

          <div className="p-4 w-17 rounded-xl bg-green-600/20 group-hover:bg-green-600 transition">
            <i className="fa-solid fa-code text-3xl text-green-600 group-hover:text-white text-center"></i>
          </div>

          <h3 className="text-gray-900 text-2xl font-bold">
            Website Design & Development
          </h3>

          <p className="text-gray-600">
            We design professional websites that are compatible with all
            devices.
          </p>

          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-check text-green-500"></i>
              <p>Responsive Design</p>
            </div>

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-check text-green-500"></i>
              <p>High Speed</p>
            </div>

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-check text-green-500"></i>
              <p>Easy Management</p>
            </div>

          </div>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-200 hover:border-purple-600 transition duration-300 rounded-xl p-8 space-y-6 bg-white group">

          <div className="p-4 w-16 rounded-xl bg-purple-600/20 group-hover:bg-purple-600 transition">
            <i className="fa-brands fa-facebook text-3xl text-purple-600 group-hover:text-white text-center"></i>
          </div>

          <h3 className="text-gray-900 text-2xl font-bold">
            Social Media Marketing
          </h3>

          <p className="text-gray-600">
            We manage and grow your brand presence across social media
            platforms to reach more customers.
          </p>

          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-check text-green-500"></i>
              <p>Content Strategy</p>
            </div>

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-check text-green-500"></i>
              <p>Ad Campaigns</p>
            </div>

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-check text-green-500"></i>
              <p>Audience Engagement</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}