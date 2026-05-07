import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import SplitLayout from "../../components/layout/SplitLayout";
import InputField from "../../components/shared/InputField";
import PasswordInput from "../../components/shared/PasswordInput";
import SocialAuthButtons from "../../components/shared/SocialAuthButtons";
import { emailRules, requiredRule } from "../../utils/validationRules";
import { useAuth } from "../../hooks/useAuth";
import { loginUser } from "../../api/auth.api";

const Login = () => {
  const { login } = useAuth();
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
      const response = await loginUser(data);
      // Mocking for demo
      const userData = response.data?.user || { email: data.email, isOnboardingComplete: false };
      const token = response.data?.token || "mock-token-" + Date.now();
      
      login(token, userData);
      toast.success("Welcome back!");
      
      if (userData.isOnboardingComplete) {
        navigate("/dashboard");
      } else {
        navigate("/onboarding/basic-info");
      }
    } catch (error) {
      toast.error(typeof error === "string" ? error : "Login failed. Check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SplitLayout illustrationSide="right">
      <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
      <p className="text-gray-500 mb-8">Login to your account to manage your medical services.</p>

      <SocialAuthButtons mode="login" onGoogleClick={() => {}} onAppleClick={() => {}} />

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-400">Or login with email</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="email"
          label="Email"
          placeholder="name@example.com"
          register={register}
          errors={errors}
          rules={emailRules}
        />

        <div className="mb-2">
          <PasswordInput
            name="password"
            label="Password"
            placeholder="••••••••"
            register={register}
            errors={errors}
            rules={requiredRule("Password")}
          />
        </div>

        <div className="flex justify-end mb-6">
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-black hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-black text-white py-3 rounded-lg font-semibold transition-all shadow-md active:scale-[0.98] ${
            isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-900"
          }`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link to="/register" className="text-black font-semibold hover:underline">
          Register Now
        </Link>
      </p>
    </SplitLayout>
  );
};

export default Login;
