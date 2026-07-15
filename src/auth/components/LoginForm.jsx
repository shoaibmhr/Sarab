import { useState } from "react";
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
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
      {/* Heading */}
      <div className="text-center mb-5">
        <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-[#ef4423]/10 flex items-center justify-center mx-auto mb-3">
          <FaLock className="text-2xl text-[#ef4423]" />
        </div>

        <h2 className="text-2xl xl:text-3xl font-extrabold text-gray-800">
          Welcome Back
        </h2>

        <p className="text-xs xl:text-sm text-gray-500 mt-1">
          Sign in to continue managing your restaurant dashboard.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">
            Email Address
          </label>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/10"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">
            Password
          </label>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-11 outline-none focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/10"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#ef4423]"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="accent-[#ef4423]" />
            Remember Me
          </label>

          <Link
            to="/forgot-password"
            className="font-semibold text-[#ef4423] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login */}
        <button
          type="submit"
          className="w-full rounded-xl bg-[#ef4423] py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200"></div>

        <span className="text-xs font-bold tracking-wider text-gray-400">
          OR CONTINUE WITH
        </span>

        <div className="h-px flex-1 bg-gray-200"></div>
      </div>

      {/* Social Login */}
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 hover:bg-red-50">
          <FaGoogle className="text-red-500" />
          <span className="font-semibold">Google</span>
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 hover:bg-gray-100">
          <FaGithub />
          <span className="font-semibold">Github</span>
        </button>
      </div>

      {/* Register */}
      <p className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?
        <Link
          to="/register"
          className="ml-2 font-semibold text-[#ef4423] hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
