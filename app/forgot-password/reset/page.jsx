"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Get the token from localStorage which was set in the OTP verification step
    const storedToken = localStorage.getItem("resetPasswordToken");
    if (storedToken) {
      setToken(storedToken);
    } else {
      // Check if we have the email and OTP verification flag
      const email = localStorage.getItem("resetPasswordEmail");
      const otpVerified = localStorage.getItem("otpVerified");
      if (!email || !otpVerified) {
        // If no email or OTP not verified, redirect back to forgot password page
        router.push("/forgot-password");
      }
      // If we have email and OTP verified but no token, the useEffect hook in the
      // onSubmit function will handle this case
    }
  }, [router]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Check if we have a token
      if (!token) {
        const storedToken = localStorage.getItem("resetPasswordToken");
        if (storedToken) {
          setToken(storedToken);
        } else {
          setError("password", {
            type: "manual",
            message:
              "No reset token available. Please restart the password reset process.",
          });
          return;
        }
      }

      // Prepare form data for API submission
      const formData = new FormData();
      formData.append("password", data.password);
      formData.append("password_confirmation", data.confirmPassword);
      formData.append("token", token);

      // Make API request
      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/reset-password",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Clear localStorage items related to forgot password flow
        localStorage.removeItem("forgotPasswordEmail");
        localStorage.removeItem("resetPasswordEmail");
        localStorage.removeItem("resetPasswordToken");
        localStorage.removeItem("otpVerified");

        // Redirect to login page after successful password reset
        router.push("/login");
      } else {
        // Handle error response
        const errorData = await response.json().catch(() => ({}));
        console.error("Password reset failed:", errorData);
        // Show more specific error message
        const errorMessage =
          errorData.message || "Failed to reset password. Please try again.";
        setError("password", {
          type: "manual",
          message: errorMessage,
        });
      }
    } catch (error) {
      console.error("Password reset error:", error);
      setError("password", {
        type: "manual",
        message: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <section className="min-h-screen bg-white">
      {/* Logo */}
      <div className="flex items-center mb-8 px-12 pt-4">
        <Image src={Logo} alt="ScapeSync Logo" />
      </div>

      <div className="flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 w-full max-w-md">
          {/* Back button */}
          <button
            className="flex items-center text-gray-600 mb-8 text-sm"
            onClick={() => router.back()}
          >
            ← Back
          </button>

          {/* Header */}
          <div className="text-left mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Reset your password
            </h1>
            <p className="text-gray-600 text-sm">
              Please enter your new password below
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  className="w-full pr-10"
                  placeholder="Enter new password"
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full pr-10"
                  placeholder="Confirm new password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  👁
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              {isSubmitting ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
