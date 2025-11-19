import React from "react";

const InputGroup = ({ type, placeholder, onChange, labelTitle }) => {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-medium">{labelTitle}</span>
      <input
        type={type}
        className="border border-gray-300  w-full px-2 py-2 rounded-lg min-w-sm  "
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

export default InputGroup;
