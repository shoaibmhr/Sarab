import { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

const socialFields = [
  { key: "facebook", label: "Facebook URL", icon: FaFacebook },
  { key: "instagram", label: "Instagram URL", icon: FaInstagram },
  { key: "whatsapp", label: "WhatsApp Number", icon: FaWhatsapp },
  { key: "tiktok", label: "TikTok URL", icon: FaTiktok },
];

const SocialLinksSection = ({ data, onSave }) => {
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
      <h3 className="text-base font-bold text-slate-800">Social Links</h3>
      <p className="text-sm text-slate-500">
        Website footer mein dikhne wale social icons.
      </p>

      <div className="mt-4 space-y-3.5">
        {socialFields.map(({ key, label, icon: Icon }) => (
          <div key={key}>
            <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700">
              <Icon size={14} />
              {label}
            </label>
            <input
              type="text"
              value={formData[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder={`Enter ${label.toLowerCase()}`}
              className="
                w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            />
          </div>
        ))}
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

export default SocialLinksSection;
