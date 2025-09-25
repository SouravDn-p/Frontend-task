"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  // Function to check authentication status
  const checkAuthStatus = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        setUser(null);
        setUserRole(null);
        setLoading(false);
        return;
      }

      // Fetch user details from API
      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/user-detail",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        setUser(userData.data);
      } else {
        // If API returns error, clear auth token
        localStorage.removeItem("authToken");
        setUser(null);
      }

      // Get user role from localStorage if available
      const storedRole = localStorage.getItem("userRole");
      setUserRole(storedRole || null);
    } catch (error) {
      console.error("Error fetching user details:", error);
      // On error, clear auth data
      localStorage.removeItem("authToken");
      setUser(null);
      setUserRole(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();

    // Listen for storage changes (in case user logs in/out in another tab)
    const handleStorageChange = (e) => {
      if (e.key === "authToken" || e.key === "userRole") {
        checkAuthStatus();
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
      // Clear local storage regardless of API success
      localStorage.removeItem("authToken");
      localStorage.removeItem("userRole");
      setUser(null);
      setUserRole(null);
      setIsLoggingOut(false);
      router.push("/login");
    }
  };

  // Show loading state
  if (loading) {
    return (
      <nav className="container mx-auto flex justify-between items-center px-4 py-4 relative z-50">
        <div className="flex items-center h-10">
          <div className="flex items-center gap-2 pt-12">
            <div className="flex items-center h-10">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center mb-8 px-6 pt-12">
                  <Image src={Logo} alt="ScapeSync Logo" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
      </nav>
    );
  }

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
      <nav className="container mx-auto flex justify-between items-center px-4 py-4 relative z-50">
        <div className="flex items-center h-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center mb-8 px-6 pt-12">
              <Image src={Logo} alt="ScapeSync Logo" />
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right hidden md:block">
            <div className="text-gray-700 font-medium">{displayName}</div>
            {userRole && (
              <div className="text-xs text-gray-500 capitalize">
                {userRole.replace("_", " ")}
              </div>
            )}
          </div>
          <div className="relative">
            <button className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="font-semibold text-gray-700">{initials}</span>
            </button>
          </div>
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
        <div className="flex items-center h-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center mb-8 px-6 pt-12">
              <Image src={Logo} alt="ScapeSync Logo" />
            </div>
          </Link>
        </div>
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
