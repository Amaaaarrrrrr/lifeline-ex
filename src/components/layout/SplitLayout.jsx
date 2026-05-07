import React from "react";
import { motion } from "framer-motion";

const SplitLayout = ({ illustrationSide = "left", illustrationSrc, children }) => {
  const isLeft = illustrationSide === "left";

  return (
    <div className={`flex min-h-screen pt-16 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      <div className="hidden md:flex md:w-1/2 bg-gray-50 items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full"
        >
          <img
            src={illustrationSrc || "https://illustrations.popsy.co/gray/medical-care.svg"}
            alt="LifeLine Illustration"
            className="w-full h-auto drop-shadow-xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md w-full"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default SplitLayout;
