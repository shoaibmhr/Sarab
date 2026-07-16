// src/admin/components/reservations/ReservationModal.jsx
import { useState } from "react";
import { X } from "lucide-react";

const emptyForm = {
  customer: "",
  phone: "",
  date: "",
  time: "",
  partySize: "",
  tableNumber: "",
  notes: "",
  status: "Pending",
};

const ReservationModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState(() => initialData || emptyForm);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.customer.trim()) newErrors.customer = "Naam zaroori hai";
    if (!formData.phone.trim()) newErrors.phone = "Phone number zaroori hai";
    if (!formData.date) newErrors.date = "Date zaroori hai";
    if (!formData.time.trim()) newErrors.time = "Time zaroori hai";
    if (!formData.partySize || Number(formData.partySize) <= 0)
      newErrors.partySize = "Sahi party size likhein";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSave({ ...formData, partySize: Number(formData.partySize) });
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
            {initialData ? "Edit Reservation" : "Add New Reservation"}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 px-4 py-4">
          {/* Customer */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Customer Name
            </label>
            <input
              type="text"
              value={formData.customer}
              onChange={(e) => handleChange("customer", e.target.value)}
              placeholder="e.g. Ali Khan"
              className={`
                w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${errors.customer ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
            {errors.customer && (
              <p className="mt-1 text-xs text-red-500">{errors.customer}</p>
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

          {/* Date + Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className={`
                  w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                  outline-none transition-all duration-300
                  focus:ring-2 focus:ring-orange-100
                  ${errors.date ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                `}
              />
              {errors.date && (
                <p className="mt-1 text-xs text-red-500">{errors.date}</p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Time
              </label>
              <input
                type="text"
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
                placeholder="e.g. 7:30 PM"
                className={`
                  w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                  outline-none transition-all duration-300
                  focus:ring-2 focus:ring-orange-100
                  ${errors.time ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                `}
              />
              {errors.time && (
                <p className="mt-1 text-xs text-red-500">{errors.time}</p>
              )}
            </div>
          </div>

          {/* Party Size + Table Number */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Party Size
              </label>
              <input
                type="number"
                value={formData.partySize}
                onChange={(e) => handleChange("partySize", e.target.value)}
                placeholder="e.g. 4"
                className={`
                  w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                  outline-none transition-all duration-300
                  focus:ring-2 focus:ring-orange-100
                  ${errors.partySize ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                `}
              />
              {errors.partySize && (
                <p className="mt-1 text-xs text-red-500">{errors.partySize}</p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Table No.
              </label>
              <input
                type="text"
                value={formData.tableNumber}
                onChange={(e) => handleChange("tableNumber", e.target.value)}
                placeholder="e.g. T-12"
                className="
                  w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                  text-sm text-slate-700 outline-none transition-all duration-300
                  focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                "
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Notes (optional)
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
              placeholder="e.g. Window side table preferred"
              className="
                w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Status
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
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
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
              {initialData ? "Save Changes" : "Add Reservation"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;
