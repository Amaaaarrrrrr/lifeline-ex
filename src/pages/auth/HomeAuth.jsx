import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Wherever You Are, When Every Second Counts, We Answer",
    description: "LifeLine is an instant emergency response and healthcare assistance platform designed for the moments that matter most.",
    image: "https://illustrations.popsy.co/gray/medical-care.svg",
    color: "bg-black",
  },
  {
    id: 2,
    title: "One Tap. Help Is On The Way",
    description: "Our SOS feature allows you to quickly request emergency assistance even when you are unable to speak, ensuring priority dispatch.",
    image: "https://illustrations.popsy.co/gray/ambulance.svg",
    color: "bg-red-600",
  },
  {
    id: 3,
    title: "Your Health Story, Always Ready",
    description: "LifeLine securely stores and provides instant access to your health records for faster and more accurate medical care during crises.",
    image: "https://illustrations.popsy.co/gray/data-analysis.svg",
    color: "bg-blue-600",
  },
  {
    id: 4,
    isFinal: true,
    title: "Welcome aboard! Let's get started",
    description: "Your one-stop solution for emergency medical assistance and health management.",
    image: "https://illustrations.popsy.co/gray/welcome.svg",
    color: "bg-black",
  },
];

const HomeAuth = () => {
  const { isAuthenticated, isOnboardingComplete } = useAuth();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isAuthenticated) {
      if (isOnboardingComplete) {
        navigate("/dashboard");
      } else {
        navigate("/onboarding/basic-info");
      }
    }
  }, [isAuthenticated, isOnboardingComplete, navigate]);

  const nextSlide = () => {
    if (currentSlide < SLIDES.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const slide = SLIDES[currentSlide];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 pt-24 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-white rounded-[3rem] max-w-4xl w-full p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-12 relative"
        >
          {/* Progress Indicators */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2">
            {SLIDES.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentSlide ? "w-8 bg-black" : "w-2 bg-gray-200"
                }`}
              />
            ))}
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`${slide.color} p-6 md:p-10 rounded-[2.5rem] shadow-xl`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-48 h-48 md:w-64 md:h-64 object-contain grayscale brightness-200 invert"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-black tracking-tight mb-6 leading-tight"
            >
              {slide.title}
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-500 text-lg mb-10 leading-relaxed"
            >
              {slide.description}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {!slide.isFinal ? (
                <button
                  onClick={nextSlide}
                  className="group bg-black text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-900 transition-all shadow-xl active:scale-95 mx-auto md:mx-0"
                >
                  Continue <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <div className="space-y-4 flex flex-col">
                  <button
                    onClick={() => navigate("/register")}
                    className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-900 transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    Register Account <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => navigate("/login")}
                    className="w-full bg-white text-black border-2 border-gray-100 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-[0.98]"
                  >
                    Login to LifeLine
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HomeAuth;
