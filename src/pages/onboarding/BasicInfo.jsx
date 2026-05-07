import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import SplitLayout from "../../components/layout/SplitLayout";
import InputField from "../../components/shared/InputField";
import StepProgress from "../../components/shared/StepProgress";
import { requiredRule } from "../../utils/validationRules";
import { useOnboarding } from "../../context/OnboardingContext";
import { saveBasicInfo } from "../../api/onboarding.api";

const BasicInfo = () => {
  const navigate = useNavigate();
  const { updateStep } = useOnboarding();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await saveBasicInfo(data);
      updateStep("basicInfo", data);
      toast.success("Step 1 complete!");
      navigate("/onboarding/contact");
    } catch (error) {
      // Mock for demo
      updateStep("basicInfo", data);
      navigate("/onboarding/contact");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SplitLayout illustrationSide="right">
      <StepProgress currentStep={1} />
      <h2 className="text-3xl font-bold mb-2">Basic Info</h2>
      <p className="text-gray-500 mb-8">Tell us about yourself to get started.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          <InputField
            name="firstName"
            label="First Name"
            placeholder="John"
            register={register}
            errors={errors}
            rules={requiredRule("First name")}
          />
          <InputField
            name="lastName"
            label="Last Name"
            placeholder="Doe"
            register={register}
            errors={errors}
            rules={requiredRule("Last name")}
          />
        </div>

        <InputField
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
          register={register}
          errors={errors}
          rules={requiredRule("Date of birth")}
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <select
            {...register("gender", requiredRule("Gender"))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition-all ${
              errors.gender ? "border-red-500 ring-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
        </div>

        <InputField
          name="nationalId"
          label="National ID / Passport Number"
          placeholder="Enter your ID number"
          register={register}
          errors={errors}
          rules={requiredRule("National ID")}
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-black text-white py-4 rounded-xl font-semibold transition-all shadow-md active:scale-[0.98] mt-6 ${
            isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-900"
          }`}
        >
          {isLoading ? "Saving..." : "Continue"}
        </button>
      </form>
    </SplitLayout>
  );
};

export default BasicInfo;
