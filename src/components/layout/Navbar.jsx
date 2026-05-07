import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ChevronDown, Globe, HelpCircle, LogOut } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 px-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-black p-1.5 rounded-lg">
          <Heart className="w-5 h-5 text-white" fill="white" />
        </div>
        <span className="text-xl font-bold tracking-tight">LifeLine</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-sm font-medium hover:text-gray-600">
          Home
        </Link>
        <Link to="/education" className="flex items-center gap-1 text-sm font-medium hover:text-gray-600">
          Education <ChevronDown className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-1 text-sm font-medium cursor-pointer">
          <Globe className="w-4 h-4" /> EN
        </div>
        <div className="hidden sm:flex items-center gap-1 text-sm font-medium cursor-pointer">
          <HelpCircle className="w-4 h-4" /> Help
        </div>

        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 overflow-hidden">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="hidden lg:block text-sm font-medium max-w-[100px] truncate">
                {user?.email?.split("@")[0]}
              </span>
            </div>
            <button
              onClick={logout}
              className="p-2 text-gray-500 hover:text-red-600 transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/register")}
            className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-all"
          >
            Get Started
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
