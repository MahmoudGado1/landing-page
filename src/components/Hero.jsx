export default function Hero() {
  return (
    <main className="px-10 mt-20 min-h-screen bg-linear-to-br from-blue-50 via-white to-red-50 ">
      <div className="flex pt-20 items-center justify-between max-lg:flex-col gap-6">
        <div className="flex flex-col gap-10 w-full lg:w-1/2">
          <div className="flex flex-col gap-6">
            <h1 className="text-7xl max-md:text-4xl font-bold text-gray-900">
              We Create <span className="text-blue-600">Digital Success</span>{" "}
              for Your Brand
            </h1>
            <span className="text-gray-700 text-xl max-md:text-lg">
              We provide integrated marketing solutions that help your company
              grow and increase sales through innovative strategies.
            </span>
            <div className="flex items-center max-md:flex-col max-md:items-start gap-6">
              <div className="flex items-center gap-4">
                <i class="fa-solid fa-circle-check text-green-500 scale-150"></i>
                <p className="text-gray-700 text-lg">10+ Years Experience</p>
              </div>
              <div className="flex items-center gap-4">
                <i class="fa-solid fa-circle-check text-green-500 scale-150"></i>
                <p className="text-gray-700 text-lg">+500 Clients</p>
              </div>
              <div className="flex items-center gap-4">
                <i class="fa-solid fa-circle-check text-green-500 scale-150"></i>
                <p className="text-gray-700 text-lg">Professional Team</p>
              </div>
            </div>
          </div>
          <div className="flex max-lg:flex-col gap-4">
            <button className="bg-blue-600 cursor-pointer text-white text-xl font-medium rounded-xl hover:bg-blue-800 py-4 px-8 duration-300">
              Start Your Journey Now
            </button>
            <button className="cursor-pointer text-gray-700 border-2 group border-gray-300 text-xl font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 py-4 px-8 duration-300">
              <i class="fa-solid fa-play text-gray-700 group-hover:text-blue-600 duration-300 mr-2"></i>
              Watch The Video
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full lg:w-1/2 h-96">
          <div className="relative shadow-2xl flex items-center justify-center md:mx-7 max-md:mb-6 w-full h-full bg-linear-to-br from-blue-400 to-purple-400 rounded-3xl">
            <i class="fa-solid fa-chart-line text-8xl text-gray-300/90"></i>
            <div className="absolute bottom-10 left-10 p-17 max-md:p-13 bg-gray-200/20 rounded-full"></div>
            <div className="absolute top-10 right-10 p-10 bg-gray-200/20 rounded-full"></div>
          </div>
          <div className="absolute -bottom-7 left-0 max-md:-left-7 flex items-center gap-4 bg-white rounded-xl shadow-2xl p-4">
            <div className="p-4 bg-green-600/20 rounded-full">
              <i class="fa-solid fa-users text-green-600 text-xl"></i>
            </div>
            <div>
              <p className="text-gray-700">Happy Clients</p>
              <span className="text-2xl font-bold text-gray-900">+500</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
