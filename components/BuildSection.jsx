const BuildSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Build for Everyone
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're booking services, managing tasks, or running
            operations, we've designed the perfect experience for you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Users Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              Users
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Book services, track progress and stay updated
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Easily schedule appointments, get real-time updates, and enjoy a
                smooth, transparent service experience.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Book services in seconds
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Track real-time job updates
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    Schedule appointments at your convenience
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 bg-white">
                    <div className="text-sm font-medium">9:41</div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-black rounded-sm"></div>
                      <div className="w-6 h-3 border border-black rounded-sm">
                        <div className="w-4 h-1 bg-black rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="px-4 py-2">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded"></div>
                        </div>
                        <span className="font-semibold text-lg">ScapeSync</span>
                      </div>
                      <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-gray-100 rounded-lg px-4 py-3 mb-6 flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span className="text-gray-500">Search</span>
                    </div>

                    {/* Main Card */}
                    <div className="bg-green-500 rounded-2xl p-6 mb-6 text-white relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm mb-3 inline-block">
                          Solo landscapers
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          Find quality soil setup, breaking & booking
                        </h3>
                      </div>
                      {/* Background Image Placeholder */}
                      <div className="absolute right-0 bottom-0 w-24 h-24 bg-white bg-opacity-10 rounded-tl-2xl"></div>
                    </div>

                    {/* Services Section */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">
                          Our exclusive services
                        </h4>
                        <span className="text-green-500 text-sm">View All</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-100 rounded-xl h-24 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300"></div>
                        </div>
                        <div className="bg-green-100 rounded-xl h-24 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
