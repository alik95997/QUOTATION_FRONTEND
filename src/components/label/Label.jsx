import React from "react";

const Label = ({labelTitle}) => {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-medium">{labelTitle}</span>
    </label>
  );
};

export default Label;
