"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";

export default function VerifyEmailPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const [email, setEmail] = useState("");
  const [resending, setResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [resendError, setResendError] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    // Get email from localStorage
    const registrationEmail = localStorage.getItem("registrationEmail");
    if (registrationEmail) {
      setEmail(registrationEmail);
    } else {
      // Fallback to a default email if not found
      setEmail("your email");
    }

    // Focus on first input when page loads
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Handle OTP input changes
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Move to next input if value is entered
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    // Move to previous input if value is deleted
    if (!value && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste event
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .substring(0, 6);

    if (pasteData.length === 6) {
      const newOtpValues = pasteData.split("");
      setOtpValues(newOtpValues);

      // Focus on last input
      if (inputRefs.current[5]) {
        inputRefs.current[5].focus();
      }
    }
  };

  // Handle keydown for backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Resend OTP function
  const handleResendOtp = async () => {
    setResending(true);
    setResendSuccess(false);
    setResendError("");

    try {
      // Validate email exists
      if (!email || email === "your email") {
        setResendError("Registration session expired. Please register again.");
        return;
      }

      // Prepare form data for API submission
      const formData = new FormData();
      formData.append("email", email);

      // Make API request to resend OTP
      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/resend-otp",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setResendSuccess(true);
        // Clear any previous OTP values
        setOtpValues(Array(6).fill(""));
        // Focus on first input
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage =
          errorData.message || "Failed to resend code. Please try again.";
        setResendError(errorMessage);
      }
    } catch (error) {
      console.error("Resend OTP error:", error);
      setResendError(
        "An error occurred while resending code. Please try again."
      );
    } finally {
      setResending(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      // Combine OTP values into a single string
      const otpCode = otpValues.join("");

      // Validate OTP is complete
      if (otpCode.length !== 6) {
        setError("otp", {
          type: "manual",
          message: "Please enter the complete 6-digit code",
        });
        return;
      }

      // Validate email exists
      if (!email || email === "your email") {
        setError("otp", {
          type: "manual",
          message: "Registration session expired. Please register again.",
        });
        return;
      }

      // Prepare form data for API submission
      const formData = new FormData();
      formData.append("email", email);
      formData.append("otp", otpCode);

      // Make API request
      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/verify_otp",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Clear the registration email from localStorage
        localStorage.removeItem("registrationEmail");
        // Redirect to account created page after successful verification
        router.push("/accountCreated");
      } else {
        // Handle error response
        const errorData = await response.json().catch(() => ({}));
        const errorMessage =
          errorData.message || "Invalid verification code. Please try again.";
        setError("otp", {
          type: "manual",
          message: errorMessage,
        });
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      setError("otp", {
        type: "manual",
        message: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <section className="min-h-screen bg-white">
      {/* Logo */}
      <div className="flex items-center mb-8 px-12 pt-4 ">
        <Image src={Logo} alt="ScapeSync Logo" />
      </div>
      <div className=" flex items-center justify-center px-4  py-12">
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
              Please check your email!
            </h1>
            <p className="text-gray-600 text-sm">
              We've emailed a 6-digit confirmation code to {email}, please enter
              the code in below box to verify your email.
            </p>
          </div>

          {/* Resend success message */}
          {resendSuccess && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded text-sm">
              A new code has been sent to your email. Please check your inbox or
              spam folder.
            </div>
          )}

          {/* Resend error message */}
          {resendError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
              {resendError}
            </div>
          )}

          {/* Verification Code Input */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center space-x-3 mb-6">
              {otpValues.map((value, index) => (
                <Input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-12 h-12 text-center text-lg font-semibold"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              ))}
            </div>

            {errors.otp && (
              <p className="text-red-500 text-sm text-center mb-4">
                {errors.otp.message}
              </p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              {isSubmitting ? "Verifying..." : "Verify"}
            </Button>
          </form>

          <div className="text-center text-sm text-gray-600 mt-6">
            <p className="mb-2">Didn't receive a code?</p>
            <button
              onClick={handleResendOtp}
              disabled={resending}
              className="text-green-600 hover:underline disabled:opacity-50"
            >
              {resending ? "Resending..." : "Resend code"}
            </button>
            <p className="mt-2 text-xs">
              Check your spam folder or add noreply@softvencefsd.xyz to your
              contacts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
