"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AuthWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      // Don't check auth on public pages
      const publicPages = [
        "/",
        "/login",
        "/register",
        "/forgot-password",
        "/verifyEmail",
        "/accountCreated",
      ];
      const isPublicPage =
        publicPages.includes(pathname) ||
        pathname.startsWith("/forgot-password");

      // Allow access to user-role page even if not in public pages
      const isUserRolePage =
        pathname === "/user-role" || pathname === "/user-role/";

      if (isPublicPage || isUserRolePage) {
        setIsLoading(false);
        return;
      }

      // Check if user is authenticated
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        router.push("/login");
        return;
      }

      // Additional check: verify token is still valid by calling user-detail API
      try {
        const response = await fetch(
          "https://apitest.softvencefsd.xyz/api/user-detail",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (!response.ok) {
          // Token is invalid, clear it and redirect to login
          localStorage.removeItem("authToken");
          router.push("/login");
          return;
        }
      } catch (error) {
        console.error("Error verifying auth token:", error);
        // On error, clear auth data and redirect to login
        localStorage.removeItem("authToken");
        router.push("/login");
        return;
      }

      // User is authenticated, allow access to protected pages
      setIsLoading(false);
    };

    checkAuth();
  }, [router, pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return <>{children}</>;
}
