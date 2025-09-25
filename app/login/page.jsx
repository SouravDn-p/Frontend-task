"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Prepare form data for API submission
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("remember_me", data.rememberMe ? "true" : "false");

      // Make API request
      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/login",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Redirect to home page after successful login
        router.push("/");
      } else {
        // Handle error response
        console.error("Login failed");
        // You might want to show an error message to the user here
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle network or other errors
    }
  };

  return (
    <section className="min-h-screen bg-white">
      {/* Logo */}
      <div className="flex items-center mb-8 px-12 pt-4">
        <Image src={Logo} alt="ScapeSync Logo" />
      </div>
      <div className=" flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Welcome to ScapeSync
            </h1>
            <p className="text-gray-600 text-sm">
              Please enter your login details to access your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <Input
                type="email"
                className="w-full"
                placeholder=""
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  className="w-full pr-10"
                  placeholder=""
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  👁
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" {...register("rememberMe")} />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-green-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 text-center">
            <span className="text-gray-400 text-sm">OR</span>
          </div>

          {/* Google Login */}
          <Button variant="outline" className="w-full mb-6 bg-transparent">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          {/* Sign up link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-green-600 hover:underline">
              Get started
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
