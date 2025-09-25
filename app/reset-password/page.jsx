"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";

export default function ResetPasswordPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("email", data.email);

      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/forgot-password",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Password reset email sent successfully");

        // router.push("/password-reset-confirmation");
      } else {
        setError("email", {
          type: "manual",
          message: "Failed to send reset email. Please try again.",
        });
      }
    } catch (error) {
      console.error("Password reset error:", error);
      setError("email", {
        type: "manual",
        message: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <section className="min-h-screen bg-white">
      {}
      <div className="flex items-center mb-8 px-12 pt-4">
        <Image src={Logo} alt="ScapeSync Logo" />
      </div>

      <div className="flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 w-full max-w-md">
          {}
          <button
            className="flex items-center text-gray-600 mb-8 text-sm"
            onClick={() => router.back()}
          >
            ← Back
          </button>

          {}
          <div className="text-left mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Forgot your password?
            </h1>
            <p className="text-gray-600 text-sm">
              Please enter the email address you'd like your password reset
              information sent to
            </p>
          </div>

          {}
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
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              {isSubmitting ? "Sending..." : "Reset Password"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
