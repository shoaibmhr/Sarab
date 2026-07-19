// src/admin/components/website-content/HeroSection.jsx
import { useState } from "react";
import { ImagePlus } from "lucide-react";

const HeroSection = ({ data, onSave }) => {
  const [formData, setFormData] = useState(data);
  const [saved, setSaved] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    handleChange("bannerImage", previewUrl);
  };

  const handleSave = () => {
    onSave(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <h3 className="text-base font-bold text-slate-800">Hero Banner</h3>
      <p className="text-sm text-slate-500">
        Website ke sabse upar wala banner section.
      </p>

      <div className="mt-4 space-y-3.5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Heading
          </label>
          <input
            type="text"
            value={formData.heading}
            onChange={(e) => handleChange("heading", e.target.value)}
            className="
              w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
              text-sm text-slate-700 outline-none transition-all duration-300
              focus:border-orange-400 focus:ring-2 focus:ring-orange-100
            "
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Subheading
          </label>
          <textarea
            rows={2}
            value={formData.subheading}
            onChange={(e) => handleChange("subheading", e.target.value)}
            className="
              w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-2
              text-sm text-slate-700 outline-none transition-all duration-300
              focus:border-orange-400 focus:ring-2 focus:ring-orange-100
            "
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Button Text
          </label>
          <input
            type="text"
            value={formData.ctaText}
            onChange={(e) => handleChange("ctaText", e.target.value)}
            className="
              w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
              text-sm text-slate-700 outline-none transition-all duration-300
              focus:border-orange-400 focus:ring-2 focus:ring-orange-100
            "
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Banner Image
          </label>
          <div className="flex items-center gap-4">
            <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <img
                src={formData.bannerImage}
                alt="Banner preview"
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
              Change Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
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

export default HeroSection;
