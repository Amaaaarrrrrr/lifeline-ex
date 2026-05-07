import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import SplitLayout from "../../components/layout/SplitLayout";
import InputField from "../../components/shared/InputField";
import StepProgress from "../../components/shared/StepProgress";
import { requiredRule, emailRules } from "../../utils/validationRules";
import { useOnboarding } from "../../context/OnboardingContext";
import { useAuth } from "../../hooks/useAuth";
import { saveEmergencyContact } from "../../api/onboarding.api";

const EmergencyContact = () => {
  const navigate = useNavigate();
  const { clearOnboarding } = useOnboarding();
  const { setOnboardingComplete } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await saveEmergencyContact(data);
      setOnboardingComplete();
      clearOnboarding();
      toast.success("Onboarding complete! Welcome to LifeLine.");
      navigate("/dashboard");
    } catch (error) {
      // Mock for demo
      setOnboardingComplete();
      clearOnboarding();
      navigate("/dashboard");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SplitLayout illustrationSide="right" illustrationSrc="https://illustrations.popsy.co/gray/family.svg">
      <StepProgress currentStep={4} />
      <h2 className="text-3xl font-bold mb-2">Emergency Contact</h2>
      <p className="text-gray-500 mb-8">Who should we contact in case of an emergency?</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            name="firstName"
            label="First Name"
            placeholder="Jane"
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
          name="relation"
          label="Relationship"
          placeholder="e.g. Spouse, Parent"
          register={register}
          errors={errors}
          rules={requiredRule("Relationship")}
        />

        <InputField
          name="phoneNumber"
          label="Phone Number"
          placeholder="+1 (555) 000-0000"
          register={register}
          errors={errors}
          rules={requiredRule("Phone number")}
        />

        <InputField
          name="email"
          label="Email Address"
          placeholder="jane@example.com"
          register={register}
          errors={errors}
          rules={emailRules}
        />

        <div className="space-y-4 my-6">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="confirm"
              {...register("confirm", { required: "Please confirm details" })}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
            />
            <label htmlFor="confirm" className="text-sm text-gray-500">
              I Confirm my details are correct and I will keep them updated
            </label>
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="agreeOnboard"
              {...register("agree", { required: "Please agree to terms" })}
              className="mt-1 w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
            />
            <label htmlFor="agreeOnboard" className="text-sm text-gray-500">
              I understand and agree to the <Link to="/terms" className="text-black font-medium hover:underline">Terms of Use</Link> and <Link to="/privacy" className="text-black font-medium hover:underline">Data Privacy Policy</Link>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-black text-white py-4 rounded-xl font-semibold transition-all shadow-md active:scale-[0.98] ${
            isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-900"
          }`}
        >
          {isLoading ? "Finalizing..." : "Complete Setup"}
        </button>
      </form>
    </SplitLayout>
  );
};

export default EmergencyContact;
