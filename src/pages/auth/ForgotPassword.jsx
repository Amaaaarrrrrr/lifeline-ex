import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import SplitLayout from "../../components/layout/SplitLayout";
import InputField from "../../components/shared/InputField";
import { emailRules } from "../../utils/validationRules";
import { forgotPassword } from "../../api/auth.api";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await forgotPassword(data);
      sessionStorage.setItem("reset_email", data.email);
      toast.success("Verification code sent to your email!");
      navigate("/otp-verify");
    } catch (error) {
      // Mocking for demo
      sessionStorage.setItem("reset_email", data.email);
      toast.success("Demo: Code sent to " + data.email);
      navigate("/otp-verify");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SplitLayout illustrationSide="left">
      <h2 className="text-3xl font-bold mb-2">Forgot Password?</h2>
      <p className="text-gray-500 mb-8">
        Enter your registered email address to receive a password reset code.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="email"
          label="Email"
          placeholder="name@example.com"
          register={register}
          errors={errors}
          rules={emailRules}
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-black text-white py-3 rounded-lg font-semibold transition-all shadow-md active:scale-[0.98] mt-4 ${
            isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-900"
          }`}
        >
          {isLoading ? "Sending code..." : "Send Code"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-500">
        Remember Password?{" "}
        <Link to="/login" className="text-black font-semibold hover:underline">
          Login
        </Link>
      </p>
    </SplitLayout>
  );
};

export default ForgotPassword;
