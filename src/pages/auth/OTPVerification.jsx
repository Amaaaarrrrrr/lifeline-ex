import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import SplitLayout from "../../components/layout/SplitLayout";
import { verifyOTP, forgotPassword } from "../../api/auth.api";

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const inputs = useRef([]);
  const email = sessionStorage.getItem("reset_email");

  useEffect(() => {
    if (!email) navigate("/forgot-password");

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [email, navigate]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(data)) return;

    const newOtp = [...otp];
    data.split("").forEach((char, i) => {
      if (i < 6) newOtp[i] = char;
    });
    setOtp(newOtp);
    
    const lastIdx = data.length < 6 ? data.length : 5;
    inputs.current[lastIdx].focus();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const otpString = otp.join("");
    if (otpString.length < 6) {
      toast.error("Please enter the full 6-digit code");
      return;
    }

    setIsLoading(true);
    try {
      const response = await verifyOTP({ email, otp: otpString });
      sessionStorage.setItem("reset_token", response.data?.resetToken || "mock-reset-token");
      toast.success("Code verified successfully!");
      navigate("/new-password");
    } catch (error) {
      // Mock for demo
      if (otpString === "510510") {
        sessionStorage.setItem("reset_token", "mock-reset-token");
        toast.success("Demo: Code verified!");
        navigate("/new-password");
      } else {
        toast.error("Invalid code. Try 510510 for demo.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (timer > 0) return;
    try {
      await forgotPassword({ email });
      setTimer(60);
      toast.success("New code sent!");
    } catch (error) {
      toast.error("Failed to resend code.");
    }
  };

  return (
    <SplitLayout illustrationSide="right">
      <h2 className="text-3xl font-bold mb-2">Verify OTP</h2>
      <p className="text-gray-500 mb-8">
        We've sent a 6-digit verification code to <span className="font-semibold text-black">{email}</span>
      </p>

      <form onSubmit={onSubmit}>
        <div className="flex justify-between gap-2 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-14 text-center text-xl font-bold border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-black text-white py-3 rounded-lg font-semibold transition-all shadow-md active:scale-[0.98] ${
            isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-900"
          }`}
        >
          {isLoading ? "Verifying..." : "Verify Code"}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Didn't receive code?{" "}
          <button
            onClick={handleResend}
            disabled={timer > 0}
            className={`font-semibold ${timer > 0 ? "text-gray-400 cursor-not-allowed" : "text-black hover:underline"}`}
          >
            Resend {timer > 0 && `(${timer}s)`}
          </button>
        </p>
      </div>
    </SplitLayout>
  );
};

export default OTPVerification;
