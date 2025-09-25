"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";

export default function ForgotPasswordVerifyOtpPage() {
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
  const [verificationError, setVerificationError] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    // Get email from localStorage
    const forgotPasswordEmail = localStorage.getItem("forgotPasswordEmail");
    if (forgotPasswordEmail) {
      setEmail(forgotPasswordEmail);
    } else {
      // Redirect to forgot password page if no email found
      router.push("/forgot-password");
    }

    // Focus on first input when page loads
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [router]);

  // Handle OTP input changes
  const handleOtpChange = (index, value) => {
    // Clear verification error when user starts typing
    if (verificationError) {
      setVerificationError("");
    }

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
    // Clear verification error when user pastes
    if (verificationError) {
      setVerificationError("");
    }

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
      // Prepare form data for API submission
      const formData = new FormData();
      formData.append("email", email);

      // Make API request to resend OTP
      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/forgot-password",
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
        setError("otp", {
          type: "manual",
          message: errorMessage,
        });
      }
    } catch (error) {
      console.error("Resend OTP error:", error);
      const errorMessage =
        "An error occurred while resending code. Please check your network connection and try again.";
      setResendError(errorMessage);
      setError("otp", {
        type: "manual",
        message: errorMessage,
      });
    } finally {
      setResending(false);
    }
  };

  const onSubmit = async (data) => {
    setVerificationError("");
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

      // Get email from localStorage
      const email = localStorage.getItem("forgotPasswordEmail");

      // Validate email exists
      if (!email) {
        setError("otp", {
          type: "manual",
          message: "Session expired. Please try again.",
        });
        return;
      }

      // Prepare form data for API submission
      const formData = new FormData();
      formData.append("email", email);
      formData.append("otp", otpCode);

      // Make API request
      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/forgot-verify-otp",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        // Extract token from the data object
        const token = responseData.data?.token;
        if (token) {
          localStorage.setItem("resetPasswordToken", token);
        } else {
          // If no token in response, this is unexpected
          setError("otp", {
            type: "manual",
            message:
              "Verification successful but token missing. Please try again.",
          });
          return;
        }
        // Store a flag to indicate that OTP verification was successful
        localStorage.setItem("otpVerified", "true");
        // Redirect to reset password page after successful verification
        router.push("/forgot-password/reset");
      } else {
        // Handle error response
        const errorData = await response.json().catch(() => ({}));
        console.error("OTP verification failed:", errorData);
        const errorMessage =
          errorData.message || "Invalid verification code. Please try again.";
        setVerificationError(errorMessage);
        setError("otp", {
          type: "manual",
          message: errorMessage,
        });
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      const errorMessage =
        "An error occurred. Please check your network connection and try again.";
      setVerificationError(errorMessage);
      setError("otp", {
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
      <div className="flex items-center justify-center px-4 py-12">
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

          {/* Verification error message */}
          {verificationError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
              {verificationError}
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
