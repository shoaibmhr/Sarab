// src/admin/components/activity-logs/ActivityLogsFilter.jsx
import { Search } from "lucide-react";

const ActivityLogsFilter = ({
  searchTerm,
  onSearchChange,
  actionFilter,
  onActionChange,
  actionTypes,
}) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative w-full sm:w-64">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by user or description..."
          className="
            w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-4
            text-sm text-slate-700 outline-none
            transition-all duration-300
            focus:border-orange-400 focus:ring-2 focus:ring-orange-100
          "
        />
      </div>

      <select
        value={actionFilter}
        onChange={(e) => onActionChange(e.target.value)}
        className="
          w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
          text-sm text-slate-700 outline-none
          transition-all duration-300
          focus:border-orange-400 focus:ring-2 focus:ring-orange-100
          sm:w-auto
        "
      >
        {actionTypes.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ActivityLogsFilter;
