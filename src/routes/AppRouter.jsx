import { Routes, Route } from "react-router-dom";
import HomeAuth from "../pages/auth/HomeAuth";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import OTPVerification from "../pages/auth/OTPVerification";
import CreateNewPassword from "../pages/auth/CreateNewPassword";
import PasswordChanged from "../pages/auth/PasswordChanged";
import BasicInfo from "../pages/onboarding/BasicInfo";
import ContactInfo from "../pages/onboarding/ContactInfo";
import MedicalInfo from "../pages/onboarding/MedicalInfo";
import EmergencyContact from "../pages/onboarding/EmergencyContact";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import OnboardingRoute from "./OnboardingRoute";

import Education from "../pages/education/Education";
import ArticlePage from "../pages/education/ArticlePage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomeAuth />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verify" element={<OTPVerification />} />
      <Route path="/new-password" element={<CreateNewPassword />} />
      <Route path="/password-changed" element={<PasswordChanged />} />
      <Route path="/education" element={<Education />} />
      <Route path="/education/article/:slug" element={<ArticlePage />} />

      {/* Onboarding Routes */}
      <Route element={<OnboardingRoute />}>
        <Route path="/onboarding/basic-info" element={<BasicInfo />} />
        <Route path="/onboarding/contact" element={<ContactInfo />} />
        <Route path="/onboarding/medical" element={<MedicalInfo />} />
        <Route path="/onboarding/emergency-contact" element={<EmergencyContact />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
