// src/auth/components/VerifyOTPForm.jsx
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const OTP_LENGTH = 6;

const VerifyOTPForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "your email";

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);

  const inputRefs = useRef([]);

  // Resend timer — 1 second countdown
  useEffect(() => {
    if (resendTimer <= 0) return;
    const timer = setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleChange = (index, value) => {
    // Sirf single digit allow karo
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // sirf aakhri digit rakho (agar paste ho)
    setOtp(newOtp);
    setError("");

    // Agla box pe auto-focus
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Backspace pe pichle box pe wapas jao
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, OTP_LENGTH);
    if (!/^\d+$/.test(pasted)) return;

    const newOtp = pasted
      .split("")
      .concat(Array(OTP_LENGTH).fill(""))
      .slice(0, OTP_LENGTH);
    setOtp(newOtp);
    inputRefs.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");

    if (code.length !== OTP_LENGTH) {
      setError("Poora 6-digit code daalein");
      return;
    }

    setIsSubmitting(true);

    // ⚠️ Abhi simulate kar rahe hain — backend banne par yahan real verification hogi
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/auth/reset-password", { state: { email } });
    }, 1200);
  };

  const handleResend = () => {
    if (resendTimer > 0) return;
    // ⚠️ Abhi placeholder — backend banne par yahan naya OTP bhejne ki API call hogi
    setResendTimer(30);
    setOtp(Array(OTP_LENGTH).fill(""));
    inputRefs.current[0]?.focus();
  };

  return (
    <div>
      <Link
        to="/auth/forgot-password"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-700"
      >
        <ArrowLeft size={15} />
        Back
      </Link>

      <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
        <ShieldCheck size={26} className="text-orange-600" />
      </div>

      <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-800">
        Verify your email
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        <span className="font-medium text-slate-700">{email}</span> pe bheje
        gaye 6-digit code ko daalein.
      </p>

      <form onSubmit={handleSubmit} className="mt-5">
        <div className="flex justify-between gap-2" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`
                h-12 w-11 rounded-xl border bg-white text-center text-lg font-bold text-slate-800
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${error ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
          ))}
        </div>
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600
            py-2.5 text-sm font-semibold text-white shadow-sm
            transition-all duration-300 hover:bg-orange-700
            disabled:cursor-not-allowed disabled:opacity-60
          "
        >
          {isSubmitting ? "Verifying..." : "Verify Code"}
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-500">
        Code nahi mila?{" "}
        <button
          onClick={handleResend}
          disabled={resendTimer > 0}
          className={`
            font-semibold transition-colors duration-300
            ${resendTimer > 0 ? "cursor-not-allowed text-slate-400" : "text-orange-600 hover:text-orange-700"}
          `}
        >
          {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend Code"}
        </button>
      </p>
    </div>
  );
};

export default VerifyOTPForm;
