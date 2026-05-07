import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import SplitLayout from "../../components/layout/SplitLayout";
import InputField from "../../components/shared/InputField";
import PasswordInput from "../../components/shared/PasswordInput";
import SocialAuthButtons from "../../components/shared/SocialAuthButtons";
import { emailRules, passwordRules } from "../../utils/validationRules";
import { useAuth } from "../../hooks/useAuth";
import { registerUser } from "../../api/auth.api";

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await registerUser({ email: data.email, password: data.password });
      // Mocking token and user for demo if backend isn't ready
      const userData = response.data?.user || { email: data.email, isOnboardingComplete: false };
      const token = response.data?.token || "mock-token-" + Date.now();
      
      login(token, userData);
      toast.success("Account created successfully!");
      navigate("/onboarding/basic-info");
    } catch (error) {
      toast.error(typeof error === "string" ? error : "Registration failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrength = () => {
    if (!password) return null;
    const scores = [
      password.length >= 6,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[@$!%*?&]/.test(password),
    ];
    const score = scores.filter(Boolean).length;
    if (score < 3) return { text: "Weak", color: "text-red-500" };
    if (score < 5) return { text: "Moderate", color: "text-yellow-500" };
    return { text: "Strong", color: "text-green-500" };
  };

  const strength = getPasswordStrength();

  return (
    <SplitLayout illustrationSide="left">
      <h2 className="text-3xl font-bold mb-2">Create an account</h2>
      <p className="text-gray-500 mb-8">Join LifeLine to secure your medical future.</p>

      <SocialAuthButtons mode="register" onGoogleClick={() => toast.info("Google OAuth coming soon")} onAppleClick={() => toast.info("Apple OAuth coming soon")} />

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-400">Or register with email</span>
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

        <PasswordInput
          name="password"
          label="Password"
          placeholder="••••••••"
          register={register}
          errors={errors}
          rules={passwordRules}
        />

        {strength && (
          <p className={`text-xs mb-4 font-medium ${strength.color}`}>
            Password Strength: {strength.text}
          </p>
        )}

        <PasswordInput
          name="confirmPassword"
          label="Confirm Password"
          placeholder="••••••••"
          register={register}
          errors={errors}
          rules={{
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          }}
        />

        <div className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            id="terms"
            {...register("terms", { required: "You must agree to terms" })}
            className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
          />
          <label htmlFor="terms" className="text-sm text-gray-500">
            I agree to the <Link to="/terms" className="text-black font-medium hover:underline">Terms of Use</Link> and <Link to="/privacy" className="text-black font-medium hover:underline">Data Privacy Policy</Link>
          </label>
        </div>
        {errors.terms && <p className="text-red-500 text-xs mt-[-1rem] mb-4">{errors.terms.message}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-black text-white py-3 rounded-lg font-semibold transition-all shadow-md active:scale-[0.98] ${
            isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-900"
          }`}
        >
          {isLoading ? "Creating account..." : "Register"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="/login" className="text-black font-semibold hover:underline">
          Log In
        </Link>
      </p>
    </SplitLayout>
  );
};

export default Register;
