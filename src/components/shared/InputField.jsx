import React from "react";

const InputField = ({ name, label, placeholder, type = "text", register, errors, ...rest }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition-all ${
          errors[name] ? "border-red-500 ring-red-500" : "border-gray-300"
        }`}
        {...rest}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
    </div>
  );
};

export default InputField;
