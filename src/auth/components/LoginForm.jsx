import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Login Logic
    console.log("Login Successfully");
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

      {/* Heading */}

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          Welcome Back 👋
        </h2>

        <p className="text-slate-500 mt-2">
          Login to continue managing your restaurant.
        </p>
      </div>

      {/* Form */}

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}

        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Password */}

        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>
        </div>

        {/* Remember */}

        <div className="flex items-center justify-between text-sm">

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-orange-500"
            />
            Remember Me
          </label>

          <Link
            to="/forgot-password"
            className="text-orange-500 hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login */}

        <button
          className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-semibold"
        >
          Login
        </button>

      </form>

      {/* Divider */}

      <div className="flex items-center gap-4 my-7">

        <div className="flex-1 h-px bg-gray-300"></div>

        <span className="text-gray-500 text-sm">
          OR
        </span>

        <div className="flex-1 h-px bg-gray-300"></div>

      </div>

      {/* Social */}

      <div className="grid grid-cols-2 gap-4">

        <button className="border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition">

          <FaGoogle className="text-red-500" />

          Google

        </button>

        <button className="border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition">

          <FaGithub />

          Github

        </button>

      </div>

      {/* Register */}

      <p className="text-center mt-8 text-slate-500">

        Don't have an account?

        <Link
          to="/register"
          className="text-orange-500 ml-2 font-semibold"
        >
          Register
        </Link>

      </p>

    </div>
  );
};

export default LoginForm;