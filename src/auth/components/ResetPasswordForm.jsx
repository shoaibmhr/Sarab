// src/auth/components/ResetPasswordForm.jsx
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Lock, Eye, EyeOff, CheckCircle2, KeyRound } from "lucide-react";

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors = {};
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

    // ⚠️ Abhi simulate kar rahe hain — backend banne par yahan real password update hogi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2 size={26} className="text-green-600" />
        </div>

        <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-800">
          Password Reset!
        </h2>
        <p className="mt-1.5 text-sm text-slate-500">
          Aapka password successfully update ho gaya hai. Ab naye password se
          login karein.
        </p>

        <button
          onClick={() => navigate("/auth/login")}
          className="
            mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600
            py-2.5 text-sm font-semibold text-white shadow-sm
            transition-all duration-300 hover:bg-orange-700
          "
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
        <KeyRound size={26} className="text-orange-600" />
      </div>

      <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-800">
        Set new password
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        {email && (
          <>
            <span className="font-medium text-slate-700">{email}</span> ke
            liye{" "}
          </>
        )}
        naya password banayein.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            New Password
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

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Confirm New Password
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
          {isSubmitting ? "Updating..." : "Reset Password"}
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-500">
        Yaad aa gaya?{" "}
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

export default ResetPasswordForm;
