"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import Client from "@/public/assets/userRole/client.png";
import BusinessOwner from "@/public/assets/userRole/businessman.png";

export default function UserRolePage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const router = useRouter();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = () => {
    if (!selectedRole) return;

    localStorage.setItem("userRole", selectedRole);
    router.push("/");
  };

  return (
    <section className="min-h-screen bg-white">
      <div className="flex justify-center pt-12 mt-8">
        <Image src={Logo} alt="ScapeSync Logo" width={120} height={40} />
      </div>
      <div className="flex items-center justify-center px-4 pb-8 w-full">
        <div className="bg-white rounded-xl p-10 w-full max-w-2xl ">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Who are you?
            </h1>
            <p className="text-gray-600 text-md w-full mx-auto">
              Choose the option that best describes you so we can tailor your
              experience.
            </p>
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Client Card */}
            <div
              className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
                selectedRole === "client"
                  ? "bg-green-50 border-green-500"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handleRoleSelect("client")}
            >
              <div className="text-center">
                {}
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <Image src={Client} alt="client" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  I'm a Client
                </h3>
                <p className="text-sm text-gray-600">
                  Discover services & book projects effortlessly
                </p>
              </div>
            </div>

            {/* Business Owner Card */}
            <div
              className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
                selectedRole === "business_owner"
                  ? "bg-green-50 border-green-500"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handleRoleSelect("business_owner")}
            >
              <div className="text-center">
                {}
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <Image
                      width={400}
                      height={400}
                      src={BusinessOwner}
                      alt="Business Owner"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  I'm a Business Owner
                </h3>
                <p className="text-sm text-gray-600">
                  Manage jobs, staff & connect with ease
                </p>
              </div>
            </div>
          </div>

          {}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              disabled={!selectedRole}
              className={`w-full px-6 py-3 cursor-pointer rounded-lg font-medium transition-colors ${
                selectedRole
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
