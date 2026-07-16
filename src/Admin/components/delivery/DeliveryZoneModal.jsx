// src/admin/components/delivery/DeliveryZoneModal.jsx
import { useState } from "react";
import { X } from "lucide-react";

const emptyForm = {
  area: "",
  deliveryFee: "",
  estimatedTime: "",
  freeDeliveryMin: "",
  status: "active",
};

const DeliveryZoneModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState(() => initialData || emptyForm);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.area.trim()) newErrors.area = "Area name zaroori hai";
    if (!formData.deliveryFee || Number(formData.deliveryFee) < 0)
      newErrors.deliveryFee = "Sahi delivery fee likhein";
    if (!formData.estimatedTime.trim())
      newErrors.estimatedTime = "Estimated time zaroori hai";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave({
      ...formData,
      deliveryFee: Number(formData.deliveryFee),
      freeDeliveryMin: Number(formData.freeDeliveryMin) || 0,
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
            {initialData ? "Edit Delivery Zone" : "Add Delivery Zone"}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 px-4 py-4">
          {/* Area */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Area Name
            </label>
            <input
              type="text"
              value={formData.area}
              onChange={(e) => handleChange("area", e.target.value)}
              placeholder="e.g. Satellite Town"
              className={`
                w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.area ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
            {errors.area && (
              <p className="mt-1 text-xs text-red-500">{errors.area}</p>
            )}
          </div>

          {/* Delivery Fee + Estimated Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Delivery Fee (Rs)
              </label>
              <input
                type="number"
                value={formData.deliveryFee}
                onChange={(e) => handleChange("deliveryFee", e.target.value)}
                placeholder="e.g. 100"
                className={`
                  w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                  outline-none transition-all duration-300
                  focus:ring-2 focus:ring-orange-100
                  ${errors.deliveryFee ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                `}
              />
              {errors.deliveryFee && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.deliveryFee}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Est. Time
              </label>
              <input
                type="text"
                value={formData.estimatedTime}
                onChange={(e) => handleChange("estimatedTime", e.target.value)}
                placeholder="e.g. 25-35 min"
                className={`
                  w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                  outline-none transition-all duration-300
                  focus:ring-2 focus:ring-orange-100
                  ${errors.estimatedTime ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                `}
              />
              {errors.estimatedTime && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.estimatedTime}
                </p>
              )}
            </div>
          </div>

          {/* Free Delivery Minimum */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Free Delivery Above (Rs)
            </label>
            <input
              type="number"
              value={formData.freeDeliveryMin}
              onChange={(e) => handleChange("freeDeliveryMin", e.target.value)}
              placeholder="e.g. 1500 (0 for no free delivery)"
              className="
                w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            />
          </div>

          {/* Status Toggle */}
          <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-2.5">
            <span className="text-sm font-medium text-slate-700">
              Zone Active
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
              {initialData ? "Save Changes" : "Add Zone"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryZoneModal;
