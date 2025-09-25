"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";

export default function UserRolePage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const router = useRouter();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = () => {
    if (!selectedRole) return;

    // Store the selected role in localStorage
    localStorage.setItem("userRole", selectedRole);

    // Redirect to home page
    router.push("/");
  };

  return (
    <section className="min-h-screen bg-white">
      {}
      <div className="flex items-center mb-8 px-12 pt-4">
        <Image src={Logo} alt="ScapeSync Logo" />
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-lg">
          {}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Who Are You?
            </h1>
            <p className="text-gray-600 text-md">
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
                    <svg
                      className="w-12 h-12 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
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
                    <svg
                      className="w-12 h-12 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
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
