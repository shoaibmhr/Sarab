import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaUtensils,
  FaGoogle,
  FaGithub,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
const RegisterForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    restaurantName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.agree) {
      setError("Please accept Terms & Conditions.");
      return;
    }

    console.log(formData);

    // Future API Call

    navigate("/login");
  };

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
      {/* Heading */}
      <div className="text-center mb-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ef4423]/10">
          <FaUtensils className="text-2xl text-[#ef4423]" />
        </div>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Create Account 🚀
        </h2>

        <p className="mt-2 text-gray-500">
          Start managing your restaurant professionally.
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Email Address
          </label>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@restaurant.com"
              className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/10"
              required
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Phone Number
          </label>

          <div className="relative">
            <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 300 1234567"
              className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/10"
              required
            />
          </div>
        </div>
        {/* Full Name */}

        {/* Full Name */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Full Name
          </label>

          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/10"
              required
            />
          </div>
        </div>

        {/* Restaurant Name */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Restaurant Name
          </label>

          <div className="relative">
            <FaUtensils className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              placeholder="Restaurant Name"
              className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/10"
              required
            />
          </div>
        </div>
        {/* Password */}

        {/* Password */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Password
          </label>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create Password"
              className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-12 outline-none transition focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/10"
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

        {/* Confirm Password */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Confirm Password
          </label>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-12 outline-none transition focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/10"
              required
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#ef4423]"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Terms & Conditions */}
        <label className="flex items-start gap-3 text-sm text-gray-600">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-1 accent-[#ef4423]"
          />

          <span>
            I agree to the{" "}
            <span className="cursor-pointer font-semibold text-[#ef4423] hover:underline">
              Terms & Conditions
            </span>
          </span>
        </label>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-[#ef4423] py-3 font-semibold text-white shadow-lg transition hover:bg-orange-600 hover:shadow-xl"
        >
          Create Account
        </button>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200"></div>

        <span className="text-xs font-semibold tracking-wider text-gray-400">
          OR CONTINUE WITH
        </span>

        <div className="h-px flex-1 bg-gray-200"></div>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 transition hover:bg-red-50"
        >
          <FaGoogle className="text-red-500" />
          <span className="font-medium">Google</span>
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 transition hover:bg-gray-100"
        >
          <FaGithub className="text-gray-800" />
          <span className="font-medium">GitHub</span>
        </button>
      </div>

      {/* Login Link */}
      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?
        <Link
          to="/auth/login"
          className="ml-2 font-semibold text-[#ef4423] hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;