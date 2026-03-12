import React from "react";

export default function Team() {

  const team = [
    {
      name: "Ahmed Mohamed",
      role: "Marketing Director",
      desc: "10 years of experience in digital marketing",
      gradient: "from-blue-400 to-purple-400",
      overlay: "bg-blue-500/90",
      text: "text-blue-600",
      icon: "text-blue-400",
      hover: "hover:bg-blue-100"
    },
    {
      name: "Sara Ahmed",
      role: "SEO Specialist",
      desc: "Specialized in search engine optimization",
      gradient: "from-purple-400 to-pink-400",
      overlay: "bg-purple-500/90",
      text: "text-purple-600",
      icon: "text-purple-400",
      hover: "hover:bg-purple-100"
    },
    {
      name: "Mohamed Ali",
      role: "Web Developer",
      desc: "Expert in web development",
      gradient: "from-green-400 to-blue-400",
      overlay: "bg-green-500/90",
      text: "text-green-600",
      icon: "text-green-400",
      hover: "hover:bg-green-100"
    },
    {
      name: "Noura Khaled",
      role: "Graphic Designer",
      desc: "Specialized in visual identity design",
      gradient: "from-yellow-400 to-orange-400",
      overlay: "bg-yellow-500/90",
      text: "text-yellow-600",
      icon: "text-yellow-400",
      hover: "hover:bg-yellow-100"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-20 bg-gray-50">

      {/* Title */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
          Our Creative Team
        </h2>

        <p className="text-gray-600 text-base md:text-lg">
          An elite group of the best digital marketing experts.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center group">

            {/* Top Card */}
            <div className={`relative w-full flex justify-center bg-gradient-to-br ${member.gradient} py-16 rounded-t-3xl`}>

              <i className="fa-solid fa-user-circle text-white text-6xl md:text-7xl"></i>

              {/* Social Icons */}
              <div className={`absolute inset-0 flex items-center justify-center gap-4 ${member.overlay} opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-3xl`}>

                <i className={`fa-brands fa-facebook-f ${member.icon} rounded-full text-xl md:text-2xl p-3 md:p-4 bg-white cursor-pointer ${member.hover}`}></i>

                <i className={`fa-brands fa-twitter ${member.icon} rounded-full text-xl md:text-2xl p-3 md:p-4 bg-white cursor-pointer ${member.hover}`}></i>

                <i className={`fa-brands fa-linkedin-in ${member.icon} rounded-full text-xl md:text-2xl p-3 md:p-4 bg-white cursor-pointer ${member.hover}`}></i>

              </div>
            </div>

            {/* Bottom Card */}
            <div className="text-center space-y-2 bg-white w-full p-6 rounded-b-3xl shadow-lg min-h-[160px]">

              <h3 className="text-gray-900 text-lg md:text-xl font-bold">
                {member.name}
              </h3>

              <p className={`${member.text} text-base md:text-lg`}>
                {member.role}
              </p>

              <p className="text-gray-600 text-sm">
                {member.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
