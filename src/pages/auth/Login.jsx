import React, { useState } from "react";
import Login1 from "../../assets/Color Rounded 1.png";
import Login2 from "../../assets/0e904b5f-eddb-452f-a72f-c947d5f1f25a 1.png";
import ReactCompareImage from "react-compare-image";
import { Link, Navigate, useNavigate } from "react-router-dom";
import API from "../../API/axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("function working");
      const { data } = await API.post("/auth/login-user", { email, password });
      console.log(data?.data);
      console.log(data?.data.role);
      const role = data?.data.role;
      toast.success("Logged in Successfully");

      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "user") {
        navigate("/user-dashboard");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-2 mb-2">
          <h1 className="text-3xl font-semibold text-center text-black">
            Login
          </h1>
          <p className="text-center">
            Enter your email and password to Sign up
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-3 justify-center items-center  min-w-sm"
        >
          <label className=" flex flex-col gap-2">
            <span className="font-medium">Email</span>
            <input
              type="email"
              className="border border-gray-300  w-full px-2 py-2 rounded-lg min-w-sm  "
              placeholder="Write here..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className=" flex flex-col gap-2">
            <span className="font-medium">Password</span>
            <input
              type="text"
              className="border border-gray-300  w-full px-2  rounded py-2 min-w-sm"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link className="text-blue-600 text-right" to="forget-password">
              Forgot Password
            </Link>
          </label>

          <button
            className="bg-[#008CFF] mt-2 text-white rounded py-2 min-w-sm "
            type="submit"
          >
            Login
          </button>
        </form>
        <Link to="/signup" className="mt-2">
          <p>Dont have an account? Sign up</p>
        </Link>
        {/* <p className="mt-2 flex gap-2">
          Dont't have an account?{" "}
          <Link className="text-blue-500" to="/signup">
            Signup
          </Link>
        </p> */}
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

export default Login;
