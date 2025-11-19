const Button = ({ icon, title, onClick, variant = "primary" }) => {
  const variants = {
    primary: "bg-[#008CFF] text-white",
    gray: "bg-[#F9F9F9] text-black",
    black: "bg-[#1C2730] text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`font-medium flex items-center gap-1 py-2 px-3 rounded ${variants[variant]}`}
    >
      {icon} {title}
    </button>
  );
};

export default Button;
