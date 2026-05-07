import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import SplitLayout from "../../components/layout/SplitLayout";
import InputField from "../../components/shared/InputField";
import StepProgress from "../../components/shared/StepProgress";
import { requiredRule } from "../../utils/validationRules";
import { useOnboarding } from "../../context/OnboardingContext";
import { saveContactInfo } from "../../api/onboarding.api";

const ContactInfo = () => {
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
      await saveContactInfo(data);
      updateStep("contactInfo", data);
      toast.success("Step 2 complete!");
      navigate("/onboarding/medical");
    } catch (error) {
      // Mock for demo
      updateStep("contactInfo", data);
      navigate("/onboarding/medical");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SplitLayout illustrationSide="right">
      <StepProgress currentStep={2} />
      <h2 className="text-3xl font-bold mb-2">Contact Info</h2>
      <p className="text-gray-500 mb-8">How can we reach you in case of emergency?</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="phoneNumber"
          label="Phone Number"
          placeholder="+1 (555) 000-0000"
          register={register}
          errors={errors}
          rules={requiredRule("Phone number")}
        />

        <InputField
          name="address"
          label="Home Address"
          placeholder="123 Street Name"
          register={register}
          errors={errors}
          rules={requiredRule("Address")}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputField
            name="city"
            label="City"
            placeholder="City"
            register={register}
            errors={errors}
            rules={requiredRule("City")}
          />
          <InputField
            name="countyOrState"
            label="County / State"
            placeholder="State"
            register={register}
            errors={errors}
            rules={requiredRule("State")}
          />
        </div>

        <InputField
          name="country"
          label="Country"
          placeholder="Country"
          register={register}
          errors={errors}
          rules={requiredRule("Country")}
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

export default ContactInfo;
