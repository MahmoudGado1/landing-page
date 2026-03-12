import React from "react";

export default function Banner() {
  return (
    <section className="relative w-full h-auto py-28 bg-linear-to-r from-blue-600 to-purple-600 overflow-hidden">
      <div className="absolute p-30 rounded-full bg-gray-300/20 -top-25 -left-25"></div>
      <div className="absolute p-40 rounded-full bg-gray-300/20 -bottom-35 -right-35"></div>

      <div className="flex max-lg:flex-col items-center justify-between max-lg:gap-4 px-2 lg:px-24 h-full text-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold">+500</h1>
          <p className="text-2xl text-gray-200">Clients Worldwide</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold">+1000</h1>
          <p className="text-2xl text-gray-200">Projects Completed</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold">+50</h1>
          <p className="text-2xl text-gray-200">Marketing Experts</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold">+10</h1>
          <p className="text-2xl text-gray-200">Years of Experience</p>
        </div>
      </div>
    </section>
  );
}
