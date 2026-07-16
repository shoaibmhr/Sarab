// src/admin/components/employees/EmployeeModal.jsx
import { useState } from "react";
import { X } from "lucide-react";
import { employeeRoles } from "../../constants/employeesData";

const emptyForm = {
  name: "",
  role: "Waiter",
  phone: "",
  email: "",
  shift: "",
  status: "active",
};

const EmployeeModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState(() => initialData || emptyForm);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const selectableRoles = employeeRoles.filter((r) => r !== "All");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Naam zaroori hai";
    if (!formData.phone.trim()) newErrors.phone = "Phone number zaroori hai";
    if (!formData.email.trim()) newErrors.email = "Email zaroori hai";
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
            {initialData ? "Edit Employee" : "Add New Employee"}
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
              placeholder="e.g. Ahmed Raza"
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

          {/* Role */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Role
            </label>
            <select
              value={formData.role}
              onChange={(e) => handleChange("role", e.target.value)}
              className="
                w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            >
              {selectableRoles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Phone + Email */}
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

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="e.g. ahmed@sarab.com"
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

          {/* Shift */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Shift Timing
            </label>
            <input
              type="text"
              value={formData.shift}
              onChange={(e) => handleChange("shift", e.target.value)}
              placeholder="e.g. Morning (8AM-4PM)"
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
              Currently Active
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
              {initialData ? "Save Changes" : "Add Employee"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;
