import React from "react";

const Label = ({labelTitle}) => {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-medium text-[14px]">{labelTitle}</span>
    </label>
  );
};

export default Label;
