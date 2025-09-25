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
              <h2 className="text-md md:text-3xl font-bold text-gray-900 mb-4">
                Assign jobs, monitor performance, and streamline operations.
              </h2>
              <p className="text-sm md:text-lg text-gray-600 mb-8">
                Gain full control of your workforce with real-time tracking,
                smart scheduling, and service management in one app.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-1 h-5 bg-green-500 rounded flex items-center justify-center flex-shrink-0"></div>
                <p className="text-gray-700 text-sm md:text-lg">
                  Assign jobs to the right team member
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-1 h-5 bg-green-500 rounded flex items-center justify-center flex-shrink-0"></div>
                <p className="text-gray-700 text-sm md:text-lg">
                  Monitor performance in real time
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-1 h-5 bg-green-500 rounded flex items-center justify-center flex-shrink-0"></div>
                <p className="text-gray-700 text-sm md:text-lg">
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
