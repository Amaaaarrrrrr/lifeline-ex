export const emailRules = {
  required: "Email is required",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter a valid email",
  },
};

export const passwordRules = {
  required: "Password is required",
  minLength: { value: 6, message: "Minimum 6 characters" },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
    message: "Must include uppercase, lowercase, number, and special character",
  },
};

export const requiredRule = (fieldName) => ({
  required: `${fieldName} is required`,
});
