import React from "react";

const SocialAuthButtons = ({ onGoogleClick, onAppleClick, mode = "login" }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <button
        onClick={onGoogleClick}
        type="button"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span className="text-sm font-medium">Google</span>
      </button>
      <button
        onClick={onAppleClick}
        type="button"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.96.95-2.04 1.9-3.32 1.9-1.25 0-1.63-.76-3.13-.76-1.5 0-1.92.74-3.11.74-1.28 0-2.32-1.04-3.38-2.58-2.13-3.08-3.75-8.68-1.58-12.43 1.08-1.85 3-3.02 5.08-3.02 1.58 0 2.83.92 3.73.92.9 0 2.45-1.12 4.28-1.12 1.83 0 3.53.94 4.54 2.47-3.72 1.55-3.11 6.84.58 8.35-.74 1.85-2.55 4.67-4.14 6.24v-.01zM11.91 4.59c.27-2.3 2.1-4.08 4.25-4.08.19 2.44-2.12 4.67-4.25 4.08z" />
        </svg>
        <span className="text-sm font-medium">Apple</span>
      </button>
    </div>
  );
};

export default SocialAuthButtons;
