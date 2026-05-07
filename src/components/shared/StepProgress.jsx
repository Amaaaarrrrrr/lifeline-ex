import React from "react";

const StepProgress = ({ currentStep, totalSteps = 4 }) => {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNum = index + 1;
        const isActive = stepNum <= currentStep;
        const isCurrent = stepNum === currentStep;

        return (
          <div
            key={stepNum}
            className={`transition-all duration-300 ${
              isCurrent ? "w-8 h-2 bg-black rounded" : "w-2 h-2 rounded-full " + (isActive ? "bg-black" : "bg-gray-300")
            }`}
          />
        );
      })}
    </div>
  );
};

export default StepProgress;
