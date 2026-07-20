// src/admin/components/profile/ChangePasswordForm.jsx
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState(false);
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.currentPassword)
      newErrors.currentPassword = "Current password zaroori hai";
    if (!formData.newPassword || formData.newPassword.length < 6)
      newErrors.newPassword = "Kam se kam 6 characters zaroori hain";
    if (formData.newPassword !== formData.confirmPassword)
      newErrors.confirmPassword = "Password match nahi kar raha";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // ⚠️ Abhi placeholder — backend banne par yahan API call hogi
    setSaved(true);
    setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setTimeout(() => setSaved(false), 2000);
  };

  const inputType = showPasswords ? "text" : "password";

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-800">
            Change Password
          </h3>
          <p className="text-sm text-slate-500">
            Apna account password update karein.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowPasswords((prev) => !prev)}
          className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
        >
          {showPasswords ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Current Password
          </label>
          <input
            type={inputType}
            value={formData.currentPassword}
            onChange={(e) => handleChange("currentPassword", e.target.value)}
            className={`
              w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
              outline-none transition-all duration-300
              focus:ring-2 focus:ring-orange-100
              ${errors.currentPassword ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
            `}
          />
          {errors.currentPassword && (
            <p className="mt-1 text-xs text-red-500">
              {errors.currentPassword}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              New Password
            </label>
            <input
              type={inputType}
              value={formData.newPassword}
              onChange={(e) => handleChange("newPassword", e.target.value)}
              className={`
                w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.newPassword ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
            {errors.newPassword && (
              <p className="mt-1 text-xs text-red-500">{errors.newPassword}</p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Confirm Password
            </label>
            <input
              type={inputType}
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              className={`
                w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.confirmPassword ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-slate-50 pt-3.5">
          <button
            type="submit"
            className="
              rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white
              shadow-sm transition-all duration-300 hover:bg-orange-700
            "
          >
            Update Password
          </button>
          {saved && (
            <span className="text-xs font-semibold text-green-600">
              ✓ Password updated
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
