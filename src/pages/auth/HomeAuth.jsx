import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { motion } from "framer-motion";

const HomeAuth = () => {
  const { isAuthenticated, isOnboardingComplete } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      if (isOnboardingComplete) {
        navigate("/dashboard");
      } else {
        navigate("/onboarding/basic-info");
      }
    }
  }, [isAuthenticated, isOnboardingComplete, navigate]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 pt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl max-w-lg w-full p-8 md:p-12 shadow-2xl text-center"
      >
        <div className="mb-8 flex justify-center">
          <div className="bg-black p-4 rounded-2xl">
            <img
              src="https://illustrations.popsy.co/gray/medical-care.svg"
              alt="Welcome"
              className="w-48 h-48"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Welcome aboard! Let's get started</h1>
        <p className="text-gray-500 mb-10">
          Your one-stop solution for emergency medical assistance and health management.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/register")}
            className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all shadow-lg active:scale-[0.98]"
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-white text-black border-2 border-gray-100 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all active:scale-[0.98]"
          >
            Login
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeAuth;
