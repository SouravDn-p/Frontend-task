"use client";

import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkUserSession = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      // Fetch user details from API
      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/user-detail",
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
    } catch (error) {
      console.error("Error fetching user details:", error);
      // On error, clear auth data
      localStorage.removeItem("authToken");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (token, userData) => {
    localStorage.setItem("authToken", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    setUser(null);
  };

  useEffect(() => {
    checkUserSession();

    // Listen for storage changes (in case user logs in/out in another tab)
    const handleStorageChange = (e) => {
      if (e.key === "authToken") {
        checkUserSession();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
