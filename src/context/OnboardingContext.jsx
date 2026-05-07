import { createContext, useState, useContext } from "react";

const OnboardingContext = createContext(null);

export const OnboardingProvider = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState({
    basicInfo: {},
    contactInfo: {},
    medicalInfo: {},
    emergencyContact: {},
  });

  const updateStep = (stepName, data) => {
    setOnboardingData((prev) => ({
      ...prev,
      [stepName]: { ...prev[stepName], ...data },
    }));
  };

  const clearOnboarding = () => {
    setOnboardingData({
      basicInfo: {},
      contactInfo: {},
      medicalInfo: {},
      emergencyContact: {},
    });
  };

  return (
    <OnboardingContext.Provider value={{ onboardingData, updateStep, clearOnboarding }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};
