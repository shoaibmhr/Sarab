// src/admin/components/employees/EmployeesToolbar.jsx
import { Search, Plus } from "lucide-react";

const EmployeesToolbar = ({
  searchTerm,
  onSearchChange,
  roleFilter,
  onRoleChange,
  roles,
  onAddClick,
}) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative w-full sm:w-56">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search employees..."
            className="
              w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-4
              text-sm text-slate-700 outline-none
              transition-all duration-300
              focus:border-orange-400 focus:ring-2 focus:ring-orange-100
            "
          />
        </div>

        <select
          value={roleFilter}
          onChange={(e) => onRoleChange(e.target.value)}
          className="
            w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
            text-sm text-slate-700 outline-none
            transition-all duration-300
            focus:border-orange-400 focus:ring-2 focus:ring-orange-100
            sm:w-auto
          "
        >
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={onAddClick}
        className="
          flex items-center justify-center gap-2 rounded-xl bg-orange-600
          px-3.5 py-2 text-sm font-semibold text-white shadow-sm
          transition-all duration-300 hover:bg-orange-700
        "
      >
        <Plus size={15} />
        Add Employee
      </button>
    </div>
  );
};

export default EmployeesToolbar;
