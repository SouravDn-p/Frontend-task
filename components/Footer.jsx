import Image from "next/image";
import { Youtube, Twitter, Github, Facebook } from "lucide-react";
import AppStore from "../public/assets/Footer/appStore.png";
import GoogleStore from "../public/assets/Footer/googleStore.png";
import Logo from "../public/assets/Footer/logo.png";
import MiddleLeaf from "../public/assets/Footer/middleLeaf.png";
import TopRightLeaf from "../public/assets/Footer/topRightLeaf.png";
import BottomRightLeaf from "../public/assets/Footer/bottomRightLeaf.png";

const Footer = () => {
  return (
    <footer className="bg-[#0F3B34] text-white pt-12 px-4 sm:px-6 lg:px-8 h-[420px] justify-center item-center  relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-32 h-32 bg-green-600 rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-green-700 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-green-500 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10 my-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8  ">
          <div className="mb-8 md:mb-0 md:max-w-md ">
            <div className="flex items-center mb-2">
              <Image src={Logo} alt="Logo" width={220} height={220} />
            </div>
          </div>

          <div className="flex flex-col justify-between md:flex-row items-start md:items-center gap-4 md:gap-40  ">
            <p className="text-green-100 leading-relaxed max-w-md items-start relative">
              Your all-in-one platform for job scheduling, employee management,
              and client service built to keep your business running smoothly
              from anywhere.
              <span>
                <Image
                  src={MiddleLeaf}
                  alt="Middle Leaf"
                  width={300}
                  height={300}
                  className="absolute -top-10 right-0 opacity-30"
                />
              </span>
            </p>

            <div className="flex space-x-1">
              {/* App Store Button */}
              <div className=" rounded-lg px-2 py-2 flex items-center space-x-2 cursor-pointer  transition-colors">
                <Image src={AppStore} alt="App Store" width={160} height={40} />
              </div>

              {/* Google Play Button */}
              <div className=" rounded-lg px-2 py-2 flex items-center space-x-2 cursor-pointer  transition-colors">
                <div className="flex space-x-3">
                  <Image
                    src={GoogleStore}
                    alt="Google Play"
                    width={160}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 ">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="text-green-100 hover:text-white transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-green-100 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-green-100 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-green-100 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-gray-200/40 text-md max-w-screen p-1 mx-auto border-t border-gray-200/40">
        <h1 className="max-w-7xl mx-auto">
          © 2021-2025, ScapeSync. All Rights Reserved.
        </h1>
      </p>
      <Image
        src={TopRightLeaf}
        alt="top right leaf"
        width={300}
        height={300}
        className="absolute top-0 right-0 opacity-20"
      />
      <Image
        src={BottomRightLeaf}
        alt="bottom right leaf"
        width={100}
        height={100}
        className="absolute bottom-0 right-0 opacity-20"
      />
    </footer>
  );
};

export default Footer;
