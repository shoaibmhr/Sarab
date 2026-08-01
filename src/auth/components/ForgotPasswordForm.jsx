// src/auth/components/ForgotPasswordForm.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, ArrowLeft, Send, CheckCircle2 } from "lucide-react";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (value) => {
    setEmail(value);
    setError("");
  };

  const validate = () => {
    if (!email.trim()) {
      setError("Email zaroori hai");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // ⚠️ Abhi simulate kar rahe hain — backend banne par yahan real API call hogi
    // jo email pe OTP/reset link bhejegi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1200);
  };

  const handleContinue = () => {
    navigate("/auth/verify-otp", { state: { email } });
  };

  // Email bhej dene ke baad ka success state
  if (isSent) {
    return (
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2 size={26} className="text-green-600" />
        </div>

        <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-800">
          Check your email
        </h2>
        <p className="mt-1.5 text-sm text-slate-500">
          Humne <span className="font-medium text-slate-700">{email}</span> pe
          ek verification code bhej diya hai.
        </p>

        <button
          onClick={handleContinue}
          className="
            mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600
            py-2.5 text-sm font-semibold text-white shadow-sm
            transition-all duration-300 hover:bg-orange-700
          "
        >
          Enter Verification Code
        </button>

        <button
          onClick={() => setIsSent(false)}
          className="mt-3 text-sm font-medium text-slate-500 hover:text-slate-700"
        >
          Email galat hai? Dobara try karein
        </button>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/auth/login"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-700"
      >
        <ArrowLeft size={15} />
        Back to login
      </Link>

      <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-800">
        Forgot password?
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        Koi baat nahi — apna email daalein, hum aapko reset karne ka tareeka
        bhejenge.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
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
              value={email}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="you@example.com"
              autoComplete="off"
              className={`
                w-full rounded-xl border bg-white py-2.5 pl-9 pr-4 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${error ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
          </div>
          {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
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
          <Send size={15} />
          {isSubmitting ? "Sending..." : "Send Reset Code"}
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

export default ForgotPasswordForm;
