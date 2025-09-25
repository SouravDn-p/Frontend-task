"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitError("");
    try {
      // Prepare form data for API submission
      const formData = new FormData();
      formData.append("email", data.email);

      // Make API request
      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/forgot-password",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Store the email in localStorage for the next step
        localStorage.setItem("forgotPasswordEmail", data.email);
        // Show success message
        setSubmitSuccess(true);
        // Redirect to OTP verification page after a short delay
        setTimeout(() => {
          router.push("/forgot-password/verify-otp");
        }, 3000);
      } else {
        // Handle error response
        const errorData = await response.json().catch(() => ({}));
        const errorMessage =
          errorData.message || "Failed to send reset email. Please try again.";
        setSubmitError(errorMessage);
        setError("email", {
          type: "manual",
          message: errorMessage,
        });
      }
    } catch (error) {
      console.error("Password reset error:", error);
      const errorMessage =
        "An error occurred. Please check your network connection and try again.";
      setSubmitError(errorMessage);
      setError("email", {
        type: "manual",
        message: errorMessage,
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
              Forgot your password?
            </h1>
            <p className="text-gray-600 text-sm">
              Please enter the email address you'd like your password reset
              information sent to
            </p>
          </div>

          {/* Error message */}
          {submitError && (
            <div className="mb-6 p-3 bg-red-100 text-red-700 rounded">
              {submitError}
            </div>
          )}

          {/* Success message */}
          {submitSuccess && (
            <div className="mb-6 p-3 bg-green-100 text-green-700 rounded">
              We've sent a password reset code to your email. Redirecting to
              verification page...
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <Input
                type="email"
                className="w-full"
                placeholder="Enter email address"
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

            <Button
              type="submit"
              disabled={isSubmitting || submitSuccess}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              {isSubmitting ? "Sending..." : "Reset Password"}
            </Button>
          </form>

          {/* Additional info */}
          {submitSuccess && (
            <div className="text-center text-sm text-gray-600 mt-4">
              <p className="mb-2">
                If you don't receive an email within a few minutes:
              </p>
              <ul className="list-disc list-inside text-left">
                <li>Check your spam/junk folder</li>
                <li>Verify the email address is correct</li>
                <li>Add noreply@softvencefsd.xyz to your contacts</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
