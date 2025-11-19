import { CiSearch } from "react-icons/ci";

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search",
  className = "",
}) => {
  return (
    <div className={`relative w-64 ${className}`}>
      <input
        className="w-full border border-[#00000014] rounded pl-10 pr-3 py-2 focus:outline-none"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl pointer-events-none" />
    </div>
  );
};

export default SearchInput;
