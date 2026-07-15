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

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Successfully");
  };

  return (
    <div className="w-full max-w-lg rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl border border-white/20 p-6 sm:p-8 lg:p-10">

      {/* Heading */}

      <div className="text-center mb-8">
        <div className="w-20 h-20 rounded-full bg-[#ef4423]/10 flex items-center justify-center mx-auto mb-5">
          <FaLock className="text-3xl text-[#ef4423]" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500 mt-3">
          Sign in to continue managing your restaurant dashboard.
        </p>
      </div>

      {/* Form */}

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Email */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Email Address
          </label>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/20 transition"
            />
          </div>
        </div>

        {/* Password */}

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Password
          </label>

          <div className="relative">

            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/20 transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#ef4423]"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>
        </div>

        {/* Remember */}

        <div className="flex items-center justify-between text-sm">

          <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              className="accent-[#ef4423]"
            />
            Remember Me
          </label>

          <Link
            to="/forgot-password"
            className="text-[#ef4423] hover:underline font-medium"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login */}

        <button
          type="submit"
          className="w-full bg-[#ef4423] hover:bg-orange-600 py-3 rounded-xl text-white font-semibold text-lg transition duration-300 shadow-lg hover:shadow-xl"
        >
          Login
        </button>

      </form>

      {/* Divider */}

      <div className="flex items-center gap-4 my-8">

        <div className="flex-1 h-px bg-gray-300"></div>

        <span className="text-gray-400 text-sm font-medium">
          OR CONTINUE WITH
        </span>

        <div className="flex-1 h-px bg-gray-300"></div>

      </div>

      {/* Social */}

      <div className="grid grid-cols-2 gap-4">

        <button className="flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 hover:bg-red-50 hover:border-red-300 transition">
          <FaGoogle className="text-red-500 text-lg" />
          <span className="font-medium">Google</span>
        </button>

        <button className="flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 hover:bg-gray-100 transition">
          <FaGithub className="text-xl" />
          <span className="font-medium">Github</span>
        </button>

      </div>

      {/* Register */}

      <p className="text-center mt-8 text-gray-500">

        Don't have an account?

        <Link
          to="/register"
          className="ml-2 text-[#ef4423] font-semibold hover:underline"
        >
          Register
        </Link>

      </p>

    </div>
  );
};

export default LoginForm;