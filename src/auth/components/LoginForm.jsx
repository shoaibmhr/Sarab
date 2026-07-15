import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = ({ setIsLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Successfully");
  };

  return (
    <div className="w-full max-w-md xl:max-w-lg rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl border border-white/20  xl:p-8 flex flex-col justify-between ">

      {/* Heading Section */}
      <div className="text-center mb-5 xl:mb-5">
        {/* Icon container ko thoda compact kiya taake high-res screens ke sath sath normal laptops par space bache */}
        <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-[#ef4423]/10 flex items-center justify-center mx-auto mb-3">
          <FaLock className="text-2xl text-[#ef4423]" />
        </div>

        <h2 className="text-2xl xl:text-3xl font-extrabold text-gray-800 tracking-tight">
          Welcome Back 
        </h2>

        <p className="text-xs xl:text-sm text-gray-500 mt-1">
          Sign in to continue managing your restaurant dashboard.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-4 xl:space-y-5">

        {/* Email */}
        <div>
          <label className="block mb-1 text-xs xl:text-sm font-semibold text-gray-700">
            Email Address
          </label>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-11 pr-4 py-2 xl:py-3 text-sm rounded-xl border border-gray-300 outline-none focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/10 transition duration-200"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-xs xl:text-sm font-semibold text-gray-700">
            Password
          </label>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full pl-11 pr-11 py-2 xl:py-3 text-sm rounded-xl border border-gray-300 outline-none focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/10 transition duration-200"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#ef4423] transition"
            >
              {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
            </button>
          </div>
        </div>

        {/* Remember & Forgot Password */}
        <div className="flex items-center justify-between text-xs xl:text-sm">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer select-none">
            <input
              type="checkbox"
              className="accent-[#ef4423] h-4 w-4 rounded"
            />
            Remember Me
          </label>

          <Link
            to="/forgot-password"
            className="text-[#ef4423] hover:underline font-semibold"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#ef4423] hover:bg-orange-600 py-2 xl:py-3 rounded-xl text-white font-semibold text-sm xl:text-base transition duration-300 shadow-md hover:shadow-lg"
        >
          Login
        </button>

      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-4 xl:my-3">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-gray-400 text-[10px] xl:text-xs font-bold tracking-wider">
          OR CONTINUE WITH
        </span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2 xl:py-2 hover:bg-red-50/50 hover:border-red-200 transition text-sm">
          <FaGoogle className="text-red-500" />
          <span className="font-semibold text-gray-700">Google</span>
        </button>

        <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-1 xl:py-2 hover:bg-gray-50 transition text-sm">
          <FaGithub className="text-gray-800" />
          <span className="font-semibold text-gray-700">Github</span>
        </button>
      </div>

      {/* Register Link */}
    <p className="text-center mt-2 xl:mt-6 text-xs xl:text-sm text-gray-500">
  Don't have an account?

  <button
    type="button"
    onClick={() => setIsLogin(false)}
    className="ml-2 font-semibold text-[#ef4423] hover:underline"
  >
    Register
  </button>
</p>

    </div>
  );
};

export default LoginForm;