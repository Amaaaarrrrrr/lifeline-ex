import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import SplitLayout from "../../components/layout/SplitLayout";
import PasswordInput from "../../components/shared/PasswordInput";
import { passwordRules } from "../../utils/validationRules";
import { resetPassword } from "../../api/auth.api";

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const resetToken = sessionStorage.getItem("reset_token");
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const newPassword = watch("newPassword", "");

  useEffect(() => {
    if (!resetToken) navigate("/login");
  }, [resetToken, navigate]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await resetPassword({ token: resetToken, newPassword: data.newPassword });
      sessionStorage.removeItem("reset_token");
      sessionStorage.removeItem("reset_email");
      toast.success("Password updated successfully!");
      navigate("/password-changed");
    } catch (error) {
      // Mock for demo
      sessionStorage.removeItem("reset_token");
      sessionStorage.removeItem("reset_email");
      navigate("/password-changed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SplitLayout illustrationSide="left">
      <h2 className="text-3xl font-bold mb-2">Create New Password</h2>
      <p className="text-gray-500 mb-8">
        Your new password must be different from previous used passwords.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <PasswordInput
          name="newPassword"
          label="New Password"
          placeholder="••••••••"
          register={register}
          errors={errors}
          rules={passwordRules}
        />

        <PasswordInput
          name="confirmPassword"
          label="Confirm Password"
          placeholder="••••••••"
          register={register}
          errors={errors}
          rules={{
            required: "Please confirm your password",
            validate: (value) => value === newPassword || "Passwords do not match",
          }}
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-black text-white py-3 rounded-lg font-semibold transition-all shadow-md active:scale-[0.98] mt-4 ${
            isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-900"
          }`}
        >
          {isLoading ? "Updating password..." : "Reset Password"}
        </button>
      </form>
    </SplitLayout>
  );
};

export default CreateNewPassword;
