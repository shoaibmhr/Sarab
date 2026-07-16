import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; 

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const ADMIN_EMAIL = "admin@restaurant.com";
  const ADMIN_PASSWORD = "admin@password123"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      console.log("Login Successfully!");
      
      // Professional Step: Login status browser memory me save karein
      localStorage.setItem("isAdminAuthenticated", "true");
      
      // Sahi password par direct admin dashboard page par bhej dein
      navigate("/admin"); 
    } else {
      setError("Invalid email address or password. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-3xl shadow-xl lg:shadow-2xl border border-gray-100 transition-all duration-300">
      
      {/* Heading */}
      <div className="text-center mb-5 xl:mb-6">
        <div className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full bg-[#ef4423]/10 flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-105 duration-300">
          <FaLock className="text-xl md:text-2xl text-[#ef4423]" />
        </div>

        <h2 className="text-xl md:text-2xl xl:text-3xl font-black text-gray-800 tracking-tight">
          Welcome Back
        </h2>

        <p className="text-xs md:text-sm text-gray-400 mt-1 max-w-[280px] md:max-w-none mx-auto">
          Sign in to continue managing your restaurant dashboard.
        </p>
      </div>

      {/* Error Message Display */}
      {error && (
        <div className="mb-4 p-3 text-xs md:text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl text-center font-medium animate-pulse">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Email */}
        <div>
          <label className="block mb-1 text-xs md:text-sm font-semibold text-gray-600">
            Email Address
          </label>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full text-sm rounded-xl border border-gray-200 py-2.5 md:py-3 pl-11 pr-4 outline-none transition-all duration-200 focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/5"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-xs md:text-sm font-semibold text-gray-600">
            Password
          </label>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full text-sm rounded-xl border border-gray-200 py-2.5 md:py-3 pl-11 pr-11 outline-none transition-all duration-200 focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/5"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#ef4423] transition-colors"
            >
              {showPassword ? <FaEyeSlash className="text-base" /> : <FaEye className="text-base" />}
            </button>
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between text-xs md:text-sm pt-0.5">
          <label className="flex items-center gap-2 text-gray-500 cursor-pointer select-none">
            <input type="checkbox" className="accent-[#ef4423] w-4 h-4 rounded cursor-pointer" />
            Remember Me
          </label>

          <Link
            to="/forgot-password"
            className="font-bold text-[#ef4423] hover:text-orange-600 transition-colors hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-[#ef4423] py-2.5 md:py-3 font-bold text-white shadow-md shadow-[#ef4423]/20 hover:shadow-lg hover:shadow-[#ef4423]/30 transition-all duration-200 hover:bg-orange-600 active:scale-[0.99]"
        >
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="my-4 md:my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-100"></div>
        <span className="text-[10px] md:text-xs font-bold tracking-widest text-gray-300">
          OR CONTINUE WITH
        </span>
        <div className="h-px flex-1 bg-gray-100"></div>
      </div>

      {/* Social Login */}
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 hover:bg-red-50 hover:border-red-100 transition-all duration-200 active:scale-[0.98]">
          <FaGoogle className="text-red-500 text-base" />
          <span>Google</span>
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 active:scale-[0.98]">
          <FaGithub className="text-base" />
          <span>Github</span>
        </button>
      </div>

      {/* Register Link */}
      <p className="mt-5 md:mt-6 text-center text-xs md:text-sm text-gray-400">
        Don't have an account?
        <Link
          to="/auth/register"
          className="ml-1.5 font-bold text-[#ef4423] hover:text-orange-600 transition-colors hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;