"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import { useRouter } from "next/navigation";

export default function AccountCreatedPage() {
  const router = useRouter();

  const handleGoToHome = () => {
    router.push("/login");
  };

  return (
    <section className="min-h-screen bg-white">
      {/* Logo */}
      <div className="flex items-center mb-8 px-12 pt-4">
        <Image src={Logo} alt="ScapeSync Logo" />
      </div>
      <div className=" flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 w-full max-w-md text-center">
          {/* Celebration Animation */}
          <div className="mb-8 relative">
            <div className="w-64 h-64 mx-auto relative">
              {/* Fireworks animation placeholder */}
              <Image
                src="/assets/fireworks.png"
                alt="Fireworks"
                className="absolute inset-0 w-full h-full"
                fill={true}
              />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Account Created Successfully!
          </h1>
          <p className="text-gray-600 text-sm mb-8">
            Your Account is set up and ready, you need to get started
          </p>

          <Button
            onClick={handleGoToHome}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Go To Login
          </Button>
        </div>
      </div>
    </section>
  );
}
