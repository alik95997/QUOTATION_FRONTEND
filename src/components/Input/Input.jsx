import React from "react";

const Input = ({placeholder, }) => {
  return (
    <input
      className="w-full border border-[#00000014] rounded pl-10 pr-3 py-2 focus:outline-none"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
