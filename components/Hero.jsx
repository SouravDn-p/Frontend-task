import Image from "next/image";
import Blend from "@/public/assets/blend.png";
import LeftTopBlend from "@/public/assets/leftTopBlend.png";
import heroIcon from "@/public/assets/heroIcon.png";
import Signature from "@/public/assets/signature.png";

export default function HeroSection() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 ">
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 ">
        <div className="space-y-4 text-gray-900 relative ">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-gray-900 leading-tight">
            All Your Jobs
            <br />
            <span>One Smart App</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Built for business owners, employees, and clients streamline job
            scheduling, service tracking, and team management in one powerful
            app.
          </p>
          <Image
            src={heroIcon}
            alt="LeftTopBlend"
            className="absolute -top-15 right-75  z-10 w-32"
            width={20}
            height={20}
            priority={true}
            quality={100}
          />
          <Image
            src={Signature}
            alt="signature"
            className="absolute bottom-22 sm:bottom-20 right-30 sm:right-20  z-10 w-[55%] sm:w-[60%]"
            width={400}
            height={400}
            priority={true}
            quality={100}
          />
        </div>
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <Image
            src="/assets/appStore.png"
            alt="App Store"
            width={120}
            height={40}
          />{" "}
          <Image
            src="/assets/googlePlay.png"
            alt="Google Play"
            width={120}
            height={40}
          />{" "}
        </div>

        <Image
          src={LeftTopBlend}
          alt="LeftTopBlend"
          className="absolute top-0 left-0 w-[100%] z-10"
          width={1000}
          height={1000}
          priority={true}
          quality={100}
        />
      </div>
      <div className="w-full md:w-1/2 flex  relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-100/10 to-transparent"></div>
        <Image
          src="/assets/phone.png"
          alt="ScapeSync App Interface"
          width={800}
          height={800}
          className="sm:w-[720px] sm:h-100% md:w-[1000px] md:h-100%"
        />
        {/* Bottom blend image */}
        <Image
          src={Blend}
          alt="Blend Effect"
          className="absolute bottom-0  w-[100%] z-10"
        />

        <div className="absolute bottom-0 w-[80%] h-40 bg-gradient-to-t from-black/20 to-transparent blur-2xl rounded-full"></div>
      </div>
    </div>
  );
}
