"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [userRole, setUserRole] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Get user role from localStorage if available
    const storedRole = localStorage.getItem("userRole");
    setUserRole(storedRole || null);

    // Listen for storage changes (in case user role changes in another tab)
    const handleStorageChange = (e) => {
      if (e.key === "userRole") {
        setUserRole(e.newValue || null);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
        // Call the logout API endpoint
        await fetch("https://apitest.softvencefsd.xyz/api/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
      }
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      // Use the logout function from the auth hook
      logout();
      setIsLoggingOut(false);
      router.push("/login");
    }
  };

  // If user is logged in, show user-specific navbar
  if (user) {
    // Handle cases where first_name or last_name might be null
    const firstName = user.first_name || "";
    const lastName = user.last_name || "";
    const displayName =
      firstName || lastName ? `${firstName} ${lastName}`.trim() : user.email;
    const initials =
      (firstName.charAt(0) + lastName.charAt(0)).toUpperCase() ||
      user.email.charAt(0).toUpperCase();

    return (
      <nav className="container mx-auto  flex justify-between items-center px-4 py-4 relative z-50">
        <div className="flex items-center h-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center mb-8 px-6 pt-12">
              <Image src={Logo} alt="ScapeSync Logo" />
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {/* User profile dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none cursor-pointer"
            >
              <span className="font-semibold text-gray-700">{initials}</span>
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {displayName}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  {userRole && (
                    <span className="inline-flex cursor-pointer items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1 capitalize">
                      {userRole.replace("_", " ")}
                    </span>
                  )}
                </div>
                <div className="px-4 py-2">
                  <Link
                    href="/profile"
                    className="block w-full text-left px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Logout button on the right side */}
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>
      </nav>
    );
  }

  // If user is not logged in, show default navbar
  return (
    <nav className="container mx-auto flex justify-between items-center px-4 py-4 relative z-50">
      <div className="flex items-center h-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center mb-8 px-6 pt-12">
            <Image src={Logo} alt="ScapeSync Logo" />
          </div>
        </Link>
      </div>
      <div>
        <Link
          href="/register"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg cursor-pointer inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
