// src/auth/components/RegisterForm.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Naam zaroori hai";
    if (!formData.email.trim()) newErrors.email = "Email zaroori hai";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Kam se kam 6 characters zaroori hain";
    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Password match nahi kar raha";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/auth/login");
    }, 1200);
  };

  return (
    <div>
      <h2 className="text-xl font-bold tracking-tight text-slate-800">
        Create an account
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        Naya admin account banayein.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        {/* Name */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Full Name
          </label>
          <div className="relative">
            <User
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Muhammad Shoaib"
              className={`
                w-full rounded-xl border bg-white py-2.5 pl-9 pr-4 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.name ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Email
          </label>
          <div className="relative">
            <Mail
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="you@example.com"
              autoComplete="off"
              className={`
                w-full rounded-xl border bg-white py-2.5 pl-9 pr-4 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.email ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Password
          </label>
          <div className="relative">
            <Lock
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="••••••••"
              autoComplete="new-password"
              className={`
                w-full rounded-xl border bg-white py-2.5 pl-9 pr-9 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.password ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Confirm Password
          </label>
          <div className="relative">
            <Lock
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              placeholder="••••••••"
              autoComplete="new-password"
              className={`
                w-full rounded-xl border bg-white py-2.5 pl-9 pr-4 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.confirmPassword ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-red-500">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600
            py-2.5 text-sm font-semibold text-white shadow-sm
            transition-all duration-300 hover:bg-orange-700
            disabled:cursor-not-allowed disabled:opacity-60
          "
        >
          <UserPlus size={16} />
          {isSubmitting ? "Creating account..." : "Create Account"}
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-500">
        Pehle se account hai?{" "}
        <Link
          to="/auth/login"
          className="font-semibold text-orange-600 hover:text-orange-700"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
