import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Login1 from "../../assets/Color Rounded 1.png";
import Login2 from "../../assets/0e904b5f-eddb-452f-a72f-c947d5f1f25a 1.png";
import ReactCompareImage from "react-compare-image";
import API from "../../API/axios";
const Signup = (e) => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const nameRegex = /^[A-Za-z\s'-]+$/;
      if (!nameRegex.test(name)) {
        setError(
          "Name can only contain letters, spaces, hyphens, or apostrophes."
        );
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        return;
      }
      if (password.length < 8) {
        setError("Password must be at least 8 characters long.");
        return;
      }
      setLoading(true);
      const response = await API.post("/auth/register-admin", {
        name,
        companyName,
        email,
        password,
      });
      toast.success("Signed up successfully");
      navigate("/admin-dashboard");
    } catch (error) {}
    toast.error(error.message);
    console.log(error.message || "Registration failed");
  };
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="w-full flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-2 mb-2 ">
          <h1 className="text-3xl font-semibold text-center text-black">
            Signup
          </h1>
          <p className="text-center">
            Enter your email and password to Sign up
          </p>
        </div>

        <form
          onSubmit={handleSignup}
          className="flex flex-col gap-1 justify-center items-center min-w-sm"
        >
          <label className=" flex flex-col gap-2">
            <span className="font-medium">Name</span>
            <input
              type="text"
              className="border border-gray-300  w-full px-2 py-2 rounded-[10px] min-w-sm"
              placeholder="Write here..."
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-medium">Company Name</span>
            <input
              type="text"
              className="border border-gray-300  w-full px-2 py-2 rounded-[10px] min-w-sm"
              placeholder="Your Company Name"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </label>
          <label className=" flex flex-col gap-2">
            <span className="font-medium">Email</span>
            <input
              type="email"
              className="border border-gray-300  w-full px-2 py-2 rounded-[10px] min-w-sm"
              placeholder="Write here..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className=" flex flex-col gap-2">
            <span className="font-medium">Password</span>
            <input
              type="text"
              className="border border-gray-300  w-full px-2  rounded-[10px] py-2 min-w-sm"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className=" flex flex-col gap-2">
            <span className="font-medium">Confirm Password</span>
            <input
              type="text"
              className="border border-gray-300  w-full px-2 py-2 rounded-[10px] min-w-sm mb-2"
              placeholder="Confirm Password"
            />
          </label>
          {error && (
            <p className="text-red-500 text-xs sm:text-sm pb-2.5 mt-2">
              {error}
            </p>
          )}
          {/* <button className="bg-[#008CFF] text-white rounded py-2 min-w-sm ">
            Sign Up
          </button> */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#008CFF] text-white rounded py-2 min-w-sm"
          >
            {loading ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Register"
            )}
          </button>
        </form>
        <p className="mt-2 flex gap-2">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>

      <div className="flex flex-col w-full bg-blue-500 h-screen items-center justify-center ">
        <div className="flex flex-col w-full  h-screen items-center justify-center">
          <ReactCompareImage
            leftImage={Login1}
            rightImage={Login2}
            sliderLineColor="#444"
            sliderLineWidth={2}
            handleSize={35}
            leftImageCss={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            rightImageCss={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            aspectRatio="wider"
          />

          <div className="flex flex-col text-center items-center text-white px-4">
            <h2 className="text-white text-3xl font-semibold">
              Your Vision, Our Expertise
            </h2>
            <p className="text-center">
              Experience seamless collaboration where your goals meet our
              professional expertise. Together, we create exceptional results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
