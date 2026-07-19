// src/admin/components/settings/GeneralSettings.jsx
import { useState } from "react";
import { ImagePlus } from "lucide-react";

const currencies = ["PKR", "USD", "AED", "SAR"];
const timezones = ["Asia/Karachi", "Asia/Dubai", "Asia/Riyadh"];

const GeneralSettings = ({ data, onSave }) => {
  const [formData, setFormData] = useState(data);
  const [saved, setSaved] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    handleChange("logo", URL.createObjectURL(file));
  };

  const handleSave = () => {
    onSave(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <h3 className="text-base font-bold text-slate-800">General Settings</h3>
      <p className="text-sm text-slate-500">Restaurant ki basic information.</p>

      <div className="mt-4 space-y-3.5">
        {/* Logo */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Restaurant Logo
          </label>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <img
                src={formData.logo}
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <label
              className="
                flex cursor-pointer items-center justify-center gap-2 rounded-xl
                border border-slate-200 px-3.5 py-2 text-sm font-semibold text-slate-600
                transition-all duration-300 hover:bg-slate-50
              "
            >
              <ImagePlus size={15} />
              Change Logo
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Name + Tagline */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Restaurant Name
            </label>
            <input
              type="text"
              value={formData.restaurantName}
              onChange={(e) => handleChange("restaurantName", e.target.value)}
              className="
                w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Tagline
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => handleChange("tagline", e.target.value)}
              className="
                w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            />
          </div>
        </div>

        {/* Timezone + Currency */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Timezone
            </label>
            <select
              value={formData.timezone}
              onChange={(e) => handleChange("timezone", e.target.value)}
              className="
                w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            >
              {timezones.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Currency
            </label>
            <select
              value={formData.currency}
              onChange={(e) => handleChange("currency", e.target.value)}
              className="
                w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            >
              {currencies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
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

export default GeneralSettings;
