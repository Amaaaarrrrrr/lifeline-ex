import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const PasswordChanged = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 bg-gray-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-md w-full text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">Password Changed!</h2>
        <p className="text-gray-500 mb-10">
          Your password has been changed successfully. You can now log in with your new password.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all shadow-lg"
        >
          Back to Login
        </button>
      </motion.div>
    </div>
  );
};

export default PasswordChanged;
