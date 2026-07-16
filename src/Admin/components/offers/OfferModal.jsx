// src/admin/components/offers/OfferModal.jsx
import { useState } from "react";
import { X, ImagePlus } from "lucide-react";
import { discountTypes, offerCategories } from "../../constants/offersData";

const emptyForm = {
  title: "",
  description: "",
  category: "Pizza",
  discountType: "percentage",
  discountValue: "",
  image: "",
  startDate: "",
  endDate: "",
  status: "active",
};

const OfferModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState(() => initialData || emptyForm);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, image: previewUrl, imageFile: file }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title zaroori hai";
    if (!formData.description.trim())
      newErrors.description = "Description zaroori hai";
    if (!formData.startDate) newErrors.startDate = "Start date zaroori hai";
    if (!formData.endDate) newErrors.endDate = "End date zaroori hai";
    if (
      formData.startDate &&
      formData.endDate &&
      formData.endDate < formData.startDate
    ) {
      newErrors.endDate = "End date, start date se pehle nahi ho sakti";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave({
      ...formData,
      discountValue: formData.discountValue
        ? Number(formData.discountValue)
        : null,
    });
  };

  const showDiscountValue = formData.discountType === "percentage";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5">
          <h3 className="text-base font-bold text-slate-800">
            {initialData ? "Edit Offer" : "Add New Offer"}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 px-4 py-4">
          {/* Title */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Offer Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="e.g. Buy 1 Get 1 Free"
              className={`
                w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.title ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
            {errors.title && (
              <p className="mt-1 text-xs text-red-500">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Description
            </label>
            <textarea
              rows={2}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Short description of the offer"
              className={`
                w-full resize-none rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.description ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
            {errors.description && (
              <p className="mt-1 text-xs text-red-500">{errors.description}</p>
            )}
          </div>

          {/* Category + Discount Type */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleChange("category", e.target.value)}
                className="
                  w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                  text-sm text-slate-700 outline-none transition-all duration-300
                  focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                "
              >
                {offerCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Offer Type
              </label>
              <select
                value={formData.discountType}
                onChange={(e) => handleChange("discountType", e.target.value)}
                className="
                  w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                  text-sm text-slate-700 outline-none transition-all duration-300
                  focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                "
              >
                {discountTypes.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Discount Value (sirf percentage type ke liye) */}
          {showDiscountValue && (
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Discount Percentage (%)
              </label>
              <input
                type="number"
                value={formData.discountValue}
                onChange={(e) => handleChange("discountValue", e.target.value)}
                placeholder="e.g. 20"
                className="
                  w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                  text-sm text-slate-700 outline-none transition-all duration-300
                  focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                "
              />
            </div>
          )}

          {/* Start + End Date */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Start Date
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => handleChange("startDate", e.target.value)}
                className={`
                  w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                  outline-none transition-all duration-300
                  focus:ring-2 focus:ring-orange-100
                  ${errors.startDate ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                `}
              />
              {errors.startDate && (
                <p className="mt-1 text-xs text-red-500">{errors.startDate}</p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                End Date
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => handleChange("endDate", e.target.value)}
                className={`
                  w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                  outline-none transition-all duration-300
                  focus:ring-2 focus:ring-orange-100
                  ${errors.endDate ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                `}
              />
              {errors.endDate && (
                <p className="mt-1 text-xs text-red-500">{errors.endDate}</p>
              )}
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Offer Image
            </label>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                {formData.image ? (
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <ImagePlus size={20} className="text-slate-300" />
                )}
              </div>

              <label
                className="
                  flex cursor-pointer items-center justify-center gap-2 rounded-xl
                  border border-slate-200 px-3.5 py-2 text-sm font-semibold text-slate-600
                  transition-all duration-300 hover:bg-slate-50
                "
              >
                <ImagePlus size={15} />
                Choose File
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Status Toggle */}
          <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-2.5">
            <span className="text-sm font-medium text-slate-700">
              Active Status
            </span>
            <button
              type="button"
              onClick={() =>
                handleChange(
                  "status",
                  formData.status === "active" ? "inactive" : "active",
                )
              }
              className={`
                relative h-6 w-11 flex-shrink-0 rounded-full transition-colors duration-300
                ${formData.status === "active" ? "bg-orange-600" : "bg-slate-300"}
              `}
            >
              <span
                className={`
                  absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300
                  ${formData.status === "active" ? "translate-x-5" : "translate-x-0.5"}
                `}
              />
            </button>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="
                flex-1 rounded-xl border border-slate-200 py-2 text-sm font-semibold
                text-slate-600 transition-all duration-300 hover:bg-slate-50
              "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="
                flex-1 rounded-xl bg-orange-600 py-2 text-sm font-semibold text-white
                shadow-sm transition-all duration-300 hover:bg-orange-700
              "
            >
              {initialData ? "Save Changes" : "Add Offer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfferModal;
