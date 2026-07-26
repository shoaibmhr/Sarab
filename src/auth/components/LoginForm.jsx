// src/auth/components/LoginForm.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { useAuth } from "../context/useAuth";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email zaroori hai";
    if (!formData.password) newErrors.password = "Password zaroori hai";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // ⚠️ Abhi simulate kar rahe hain — backend banne par yahan real API call hogi
    setTimeout(() => {
      login({
        email: formData.email,
        name: "Muhammad Shoaib",
        role: "Super Admin",
      });
      localStorage.setItem("adminToken", "demo-token");
      setIsSubmitting(false);
      navigate("/admin/dashboard");
    }, 1200);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-800">Welcome back</h2>
      <p className="mt-1 text-sm text-slate-500">
        Apne admin account mein login karein.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
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
              className={`
                w-full rounded-xl border bg-white py-2 pl-9 pr-4 text-sm text-slate-700
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
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>
            <Link
              to="/auth/forgot-password"
              className="text-xs font-semibold text-orange-600 hover:text-orange-700"
            >
              Forgot password?
            </Link>
          </div>
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
              className={`
                w-full rounded-xl border bg-white py-2 pl-9 pr-9 text-sm text-slate-700
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

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600
            py-2.5 text-sm font-semibold text-white shadow-sm
            transition-all duration-300 hover:bg-orange-700
            disabled:cursor-not-allowed disabled:opacity-60
          "
        >
          <LogIn size={16} />
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-500">
        Account nahi hai?{" "}
        <Link
          to="/auth/register"
          className="font-semibold text-orange-600 hover:text-orange-700"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
