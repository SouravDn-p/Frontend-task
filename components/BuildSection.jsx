import BuildPhone from "@/public/assets/build/buildPhone.png";
import Image from "next/image";
import Blend from "@/public/assets/blend.png";
import Signature from "@/public/assets/build/signature.png";
import ArrowLeft from "@/public/assets/build/arrowLeft.png";
import ArrowMid from "@/public/assets/build/arrowMid.png";
import ArrowRight from "@/public/assets/build/image.png";

const BuildSection = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Arrow Elements */}
      <div className="absolute top-10 left-10 z-10"></div>

      <Image
        src={ArrowRight}
        alt="Arrow Right"
        width={400}
        height={400}
        className="absolute inset-x-0 z-100 top-40 -right-350 mx-auto w-80"
      />
      <Image
        src={ArrowLeft}
        alt="Arrow Left"
        width={250}
        height={250}
        className="absolute inset-x-0 top-40 -left-200 mx-auto w-60"
      />

      <Image
        src={ArrowMid}
        alt="Arrow Middle"
        width={150}
        height={150}
        className="absolute inset-x-0 -bottom-60 -right-30 mx-auto w-60"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 relative">
            Build for Everyone
            <span>
              <Image
                src={Signature}
                alt="Signature"
                width={200}
                height={200}
                quality={100}
                className="absolute inset-x-0  md:-bottom-3 md:-right-70 mx-auto w-60 "
              />
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're booking services, managing tasks, or running
            operations, we've designed the perfect experience for you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="container mx-auto flex flex-col md:flex-row items-left justify-between px-4 ">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-left mb-8 md:mb-0 ">
            {/* Users Badge */}
            <div className="inline-flex items-center px-3 py-1 my-4 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              Users
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h3 className="text-md md:text-3xl font-bold text-gray-900 sm:text-4xl text-left">
                Book services, track progress and stay updated
              </h3>

              <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                Easily schedule appointments, get real-time updates, and enjoy a
                smooth, transparent service experience.
              </p>

              {/* Feature List */}
              <div className="space-y-4 py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-5 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
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
                  <span className="text-gray-700 text-sm md:text-lg ">
                    Book services in seconds
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-1 h-5 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-1 h-3 text-white"
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
                  <span className="text-gray-700 text-sm md:text-lg">
                    Track real-time job updates
                  </span>
                </div>

                <div className="flex items-center space-x-3 ">
                  <div className="w-1 h-5 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
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
                  <span className="text-gray-700 text-sm md:text-lg">
                    Schedule appointments
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="w-full md:w-1/2 flex  relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-100/10 to-transparent"></div>
            <Image
              src={BuildPhone}
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
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
