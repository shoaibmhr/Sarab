// src/admin/components/coupons/CouponModal.jsx
import { useState } from "react";
import { X } from "lucide-react";

const emptyForm = {
  code: "",
  type: "percentage",
  value: "",
  minOrder: "",
  expiryDate: "",
  usageLimit: "",
  status: "active",
};

const CouponModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState(() => initialData || emptyForm);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.code.trim()) newErrors.code = "Coupon code zaroori hai";
    if (!formData.value || Number(formData.value) <= 0)
      newErrors.value = "Sahi value likhein";
    if (!formData.expiryDate) newErrors.expiryDate = "Expiry date zaroori hai";
    if (!formData.usageLimit || Number(formData.usageLimit) <= 0)
      newErrors.usageLimit = "Sahi usage limit likhein";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave({
      ...formData,
      code: formData.code.toUpperCase(),
      value: Number(formData.value),
      minOrder: Number(formData.minOrder) || 0,
      usageLimit: Number(formData.usageLimit),
    });
  };

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
            {initialData ? "Edit Coupon" : "Add New Coupon"}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 px-4 py-4">
          {/* Code */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Coupon Code
            </label>
            <input
              type="text"
              value={formData.code}
              onChange={(e) =>
                handleChange("code", e.target.value.toUpperCase())
              }
              placeholder="e.g. WELCOME50"
              className={`
                w-full rounded-xl border bg-white px-3.5 py-2 text-sm font-medium uppercase text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.code ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
            {errors.code && (
              <p className="mt-1 text-xs text-red-500">{errors.code}</p>
            )}
          </div>

          {/* Type + Value */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Discount Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => handleChange("type", e.target.value)}
                className="
                  w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                  text-sm text-slate-700 outline-none transition-all duration-300
                  focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                "
              >
                <option value="percentage">Percentage (%)</option>
                <option value="fixed">Fixed (Rs)</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Value
              </label>
              <input
                type="number"
                value={formData.value}
                onChange={(e) => handleChange("value", e.target.value)}
                placeholder={
                  formData.type === "percentage" ? "e.g. 20" : "e.g. 200"
                }
                className={`
                  w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                  outline-none transition-all duration-300
                  focus:ring-2 focus:ring-orange-100
                  ${errors.value ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                `}
              />
              {errors.value && (
                <p className="mt-1 text-xs text-red-500">{errors.value}</p>
              )}
            </div>
          </div>

          {/* Min Order + Usage Limit */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Min Order (Rs)
              </label>
              <input
                type="number"
                value={formData.minOrder}
                onChange={(e) => handleChange("minOrder", e.target.value)}
                placeholder="0"
                className="
                  w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                  text-sm text-slate-700 outline-none transition-all duration-300
                  focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                "
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Usage Limit
              </label>
              <input
                type="number"
                value={formData.usageLimit}
                onChange={(e) => handleChange("usageLimit", e.target.value)}
                placeholder="e.g. 100"
                className={`
                  w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                  outline-none transition-all duration-300
                  focus:ring-2 focus:ring-orange-100
                  ${errors.usageLimit ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                `}
              />
              {errors.usageLimit && (
                <p className="mt-1 text-xs text-red-500">{errors.usageLimit}</p>
              )}
            </div>
          </div>

          {/* Expiry Date */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Expiry Date
            </label>
            <input
              type="date"
              value={formData.expiryDate}
              onChange={(e) => handleChange("expiryDate", e.target.value)}
              className={`
                w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.expiryDate ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
            {errors.expiryDate && (
              <p className="mt-1 text-xs text-red-500">{errors.expiryDate}</p>
            )}
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
              {initialData ? "Save Changes" : "Add Coupon"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CouponModal;
