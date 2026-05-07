import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import SplitLayout from "../../components/layout/SplitLayout";
import InputField from "../../components/shared/InputField";
import StepProgress from "../../components/shared/StepProgress";
import { requiredRule } from "../../utils/validationRules";
import { useOnboarding } from "../../context/OnboardingContext";
import { saveMedicalInfo } from "../../api/onboarding.api";

const MedicalInfo = () => {
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
      await saveMedicalInfo(data);
      updateStep("medicalInfo", data);
      toast.success("Step 3 complete!");
      navigate("/onboarding/emergency-contact");
    } catch (error) {
      // Mock for demo
      updateStep("medicalInfo", data);
      navigate("/onboarding/emergency-contact");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SplitLayout illustrationSide="right" illustrationSrc="https://illustrations.popsy.co/gray/medical-research.svg">
      <StepProgress currentStep={3} />
      <h2 className="text-3xl font-bold mb-2">Medical Info</h2>
      <p className="text-gray-500 mb-8">This information helps first responders save your life.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
          <select
            {...register("bloodType", requiredRule("Blood type"))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition-all ${
              errors.bloodType ? "border-red-500 ring-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select blood type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          {errors.bloodType && <p className="text-red-500 text-xs mt-1">{errors.bloodType.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputField
            name="height"
            label="Height (cm)"
            placeholder="175"
            type="number"
            register={register}
            errors={errors}
            rules={requiredRule("Height")}
          />
          <InputField
            name="weight"
            label="Weight (kg)"
            placeholder="70"
            type="number"
            register={register}
            errors={errors}
            rules={requiredRule("Weight")}
          />
        </div>

        <InputField
          name="allergies"
          label="Allergies (Optional)"
          placeholder="e.g. Peanuts, Penicillin"
          register={register}
          errors={errors}
        />

        <InputField
          name="chronicCondition"
          label="Chronic Conditions (Optional)"
          placeholder="e.g. Asthma, Diabetes"
          register={register}
          errors={errors}
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

export default MedicalInfo;
