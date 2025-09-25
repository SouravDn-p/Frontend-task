import Image from "next/image";
import AssignJobImage from "@/public/assets/AssignJob//AssignJobImage.png";
import Blend from "@/public/assets/blend.png";

const AssignJobSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Mobile Mockup - Left Side */}
          <div className="w-full md:w-1/2 flex  relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-100/10 to-transparent"></div>
            <Image
              src={AssignJobImage}
              alt="ScapeSync App Interface"
              width={800}
              height={800}
              className="sm:w-[720px] sm:h-100% md:w-[1000px] md:h-100%"
            />
            {/* Bottom blend image */}
            <Image
              src={Blend}
              alt="Blend Effect"
              className="absolute bottom-0 opacity-50  w-[100%] z-10"
            />

            <div className="absolute bottom-0 w-[80%] h-40 bg-gradient-to-t from-black/20 to-transparent blur-2xl rounded-full"></div>
          </div>

          {/* Content - Right Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Business Owners
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Assign jobs, monitor performance, and streamline operations.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Gain full control of your workforce with real-time tracking,
                smart scheduling, and service management in one app.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
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
                <p className="text-gray-700">
                  Assign jobs to the right team member
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
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
                <p className="text-gray-700">
                  Monitor performance in real time
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
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
                <p className="text-gray-700">
                  Manage clients and services seamlessly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssignJobSection;
