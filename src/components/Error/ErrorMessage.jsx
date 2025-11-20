import React from "react";
import { AlertCircle } from "lucide-react";
import validate from "./../../utils/validate.js";
const ErrorMessage = ({ message }) => {
  return (
    <>
      <AlertCircle className="absolute right-3 top-[2.45rem] text-red-500 w-4 h-4 animate-slideIn" />
      <p className="text-red-600 text-[12px] mt-1 animate-fadeIn">{message}</p>
    </>
  );
};

export default ErrorMessage;
