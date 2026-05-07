import { createContext, useState, useEffect, useContext } from "react";
import { getToken, getUser, setToken, setUser, removeToken, removeUser } from "../utils/tokenHelpers";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const [token, setTokenState] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = getToken();
    const savedUser = getUser();
    if (savedToken && savedUser) {
      setTokenState(savedToken);
      setUserState(savedUser);
      setIsAuthenticated(true);
      setIsOnboardingComplete(savedUser.isOnboardingComplete || false);
    }
    setLoading(false);
  }, []);

  const login = (newToken, newUser) => {
    setTokenState(newToken);
    setUserState(newUser);
    setIsAuthenticated(true);
    setIsOnboardingComplete(newUser.isOnboardingComplete || false);
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    setTokenState(null);
    setUserState(null);
    setIsAuthenticated(false);
    setIsOnboardingComplete(false);
    removeToken();
    removeUser();
    window.location.href = "/login";
  };

  const setOnboardingComplete = () => {
    setIsOnboardingComplete(true);
    const updatedUser = { ...user, isOnboardingComplete: true };
    setUserState(updatedUser);
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        isOnboardingComplete,
        login,
        logout,
        setOnboardingComplete,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
