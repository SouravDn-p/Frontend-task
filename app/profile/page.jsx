"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Lock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const formatDate = (dateString) => {
    if (!dateString) return "Not available";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Profile
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Manage your account information and preferences
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Profile Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                <div className="text-center">
                  <div className="mx-auto mb-4">
                    {/* Avatar placeholder */}
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto overflow-hidden">
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {user?.first_name || user?.last_name
                      ? `${user?.first_name || ""} ${
                          user?.last_name || ""
                        }`.trim()
                      : user?.email}
                  </h2>
                  <p className="text-gray-600">{user?.email}</p>
                  {user?.role && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mt-2 capitalize">
                      {user.role.replace("_", " ")}
                    </span>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <nav className="space-y-1 cursor-pointer">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full cursor-pointer text-left px-4 py-3 rounded-lg flex items-center space-x-3 ${
                      activeTab === "profile"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <User className="w-5 h-5 cursor-pointer" />
                    <span>Profile Information</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full cursor-pointer text-left px-4 py-3 rounded-lg flex items-center space-x-3 ${
                      activeTab === "settings"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Briefcase className="w-5 h-5 cursor-pointer" />
                    <span>Account Settings</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Profile Content */}
            <div className="lg:w-2/3">
              {activeTab === "profile" ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="border-b border-gray-200 pb-4 mb-6">
                    <h3 className="text-lg cursor-pointer font-semibold text-gray-900">
                      Profile Information
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Update your personal details here
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={user?.first_name || ""}
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={user?.last_name || ""}
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            value={user?.email || ""}
                            readOnly
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Role
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            value={user?.role || "Not set"}
                            readOnly
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 capitalize"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Member Since
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            value={
                              formatDate(user?.created_at) || "Not available"
                            }
                            readOnly
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Updated
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            value={
                              formatDate(user?.updated_at) || "Not available"
                            }
                            readOnly
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      disabled
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="border-b border-gray-200 pb-4 mb-6">
                    <h3 className="text-lg cursor-pointer font-semibold text-gray-900">
                      Account Settings
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Manage your account security and preferences
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Lock className="w-5 h-5 text-gray-500" />
                        <h4 className="font-medium text-gray-900">Password</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Change your password to keep your account secure
                      </p>
                      <button
                        onClick={() => router.push("/forgot-password/reset")}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        Change Password
                      </button>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Mail className="w-5 h-5 text-gray-500" />
                        <h4 className="font-medium text-gray-900">
                          Email Preferences
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Manage your email notification settings
                      </p>
                      <button
                        disabled
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
                      >
                        Manage Preferences
                      </button>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <User className="w-5 h-5 text-gray-500" />
                        <h4 className="font-medium text-gray-900">
                          Account Deletion
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Permanently delete your account and all associated data
                      </p>
                      <button
                        disabled
                        className="px-4 py-2 bg-red-50 border border-red-200 rounded-lg text-sm font-medium text-red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                      >
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
