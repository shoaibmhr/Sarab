// src/admin/components/website-content/ContactSection.jsx
import { useState } from "react";

const ContactSection = ({ data, onSave }) => {
  const [formData, setFormData] = useState(data);
  const [saved, setSaved] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    onSave(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <h3 className="text-base font-bold text-slate-800">Contact Info</h3>
      <p className="text-sm text-slate-500">
        Website ke footer aur contact page ke liye.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
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

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="
              w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
              text-sm text-slate-700 outline-none transition-all duration-300
              focus:border-orange-400 focus:ring-2 focus:ring-orange-100
            "
          />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Address
          </label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="
              w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
              text-sm text-slate-700 outline-none transition-all duration-300
              focus:border-orange-400 focus:ring-2 focus:ring-orange-100
            "
          />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Opening Hours
          </label>
          <input
            type="text"
            value={formData.openingHours}
            onChange={(e) => handleChange("openingHours", e.target.value)}
            className="
              w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
              text-sm text-slate-700 outline-none transition-all duration-300
              focus:border-orange-400 focus:ring-2 focus:ring-orange-100
            "
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 border-t border-slate-50 pt-4">
        <button
          onClick={handleSave}
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
    </div>
  );
};

export default ContactSection;
