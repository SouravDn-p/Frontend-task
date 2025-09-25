"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import { useRouter } from "next/navigation";
import FireCrackers from "@/public/assets/fireworks.png";

export default function PasswordResetSuccessPage() {
  const router = useRouter();

  const handleGoToLogin = () => {
    router.push("/login");
  };

  return (
    <section className="min-h-screen bg-white">
      {}
      <div className="flex items-center mb-8 px-12 pt-4">
        <Image src={Logo} alt="ScapeSync Logo" />
      </div>
      <div className=" flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 w-full max-w-md text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <Image
              width={400}
              height={400}
              quality={100}
              className="w-60"
              src={FireCrackers}
              alt="Success Icon"
            />
          </div>

          {/* Success Message */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Password Changed Successfully!
          </h1>
          <p className="text-gray-600 text-sm mb-8">
            Your password has been updated successfully. You can now log in with
            your new password.
          </p>

          <Button
            onClick={handleGoToLogin}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Go To Login
          </Button>
        </div>
      </div>
    </section>
  );
}
