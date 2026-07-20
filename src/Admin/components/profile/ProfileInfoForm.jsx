// src/admin/components/profile/ProfileInfoForm.jsx
import { useState } from "react";

const ProfileInfoForm = ({ profile, onSave }) => {
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
  });
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Naam zaroori hai";
    if (!formData.email.trim()) newErrors.email = "Email zaroori hai";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <h3 className="text-base font-bold text-slate-800">
        Personal Information
      </h3>
      <p className="text-sm text-slate-500">
        Apni basic details update karein.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={`
              w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
              outline-none transition-all duration-300
              focus:ring-2 focus:ring-orange-100
              ${errors.name ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
            `}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`
              w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
              outline-none transition-all duration-300
              focus:ring-2 focus:ring-orange-100
              ${errors.email ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
            `}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="
              w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
              text-sm text-slate-700 outline-none transition-all duration-300
              focus:border-orange-400 focus:ring-2 focus:ring-orange-100
            "
          />
        </div>

        <div className="flex items-center gap-3 border-t border-slate-50 pt-3.5">
          <button
            type="submit"
            className="
              rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white
              shadow-sm transition-all duration-300 hover:bg-orange-700
            "
          >
            Save Changes
          </button>
          {saved && (
            <span className="text-xs font-semibold text-green-600">
              ✓ Saved successfully
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileInfoForm;
