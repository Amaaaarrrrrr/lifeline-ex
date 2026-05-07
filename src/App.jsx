import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { OnboardingProvider } from "./context/OnboardingContext";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OnboardingProvider>
          <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
            <Navbar />
            <main className="flex-grow">
              <AppRouter />
            </main>
            <Footer />
            <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
          </div>
        </OnboardingProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
