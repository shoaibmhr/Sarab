// src/admin/components/delivery-boys/DeliveryBoyModal.jsx
import { useState } from "react";
import { X } from "lucide-react";
import { vehicleTypes } from "../../constants/deliveryBoysData";

const emptyForm = {
  name: "",
  phone: "",
  vehicle: "Bike",
  vehicleNumber: "",
  status: "available",
};

const DeliveryBoyModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState(() => initialData || emptyForm);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const selectableVehicles = vehicleTypes.filter((v) => v !== "All");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Naam zaroori hai";
    if (!formData.phone.trim()) newErrors.phone = "Phone number zaroori hai";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave(formData);
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
            {initialData ? "Edit Rider" : "Add New Rider"}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 px-4 py-4">
          {/* Name */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="e.g. Kamran Shah"
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

          {/* Phone */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="e.g. 0300-1234567"
              className={`
                w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.phone ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Vehicle + Vehicle Number */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Vehicle Type
              </label>
              <select
                value={formData.vehicle}
                onChange={(e) => handleChange("vehicle", e.target.value)}
                className="
                  w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                  text-sm text-slate-700 outline-none transition-all duration-300
                  focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                "
              >
                {selectableVehicles.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Vehicle No.
              </label>
              <input
                type="text"
                value={formData.vehicleNumber}
                onChange={(e) => handleChange("vehicleNumber", e.target.value)}
                placeholder="e.g. SGD-1234"
                className="
                  w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                  text-sm text-slate-700 outline-none transition-all duration-300
                  focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                "
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Current Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => handleChange("status", e.target.value)}
              className="
                w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            >
              <option value="available">Available</option>
              <option value="on_delivery">On Delivery</option>
              <option value="offline">Offline</option>
            </select>
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
              {initialData ? "Save Changes" : "Add Rider"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryBoyModal;
