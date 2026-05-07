import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const OnboardingRoute = () => {
  const { isAuthenticated, isOnboardingComplete } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (isOnboardingComplete) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default OnboardingRoute;
