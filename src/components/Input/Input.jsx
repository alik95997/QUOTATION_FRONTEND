import React from "react";

const Input = ({ placeholder, value, type, onChange, error }) => {
  return (
    <input
      className={`w-full border ${
        error ? "border-red-500" : "border-[#C7C7C7]"
      }  rounded py-2 px-2  focus:outline-none`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
