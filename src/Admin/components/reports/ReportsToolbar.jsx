// src/admin/components/reports/ReportsToolbar.jsx
import { Download } from "lucide-react";
import { dateRanges } from "../../constants/reportsData";

const ReportsToolbar = ({ dateRange, onDateRangeChange, onExport }) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <select
        value={dateRange}
        onChange={(e) => onDateRangeChange(e.target.value)}
        className="
          w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
          text-sm text-slate-700 outline-none
          transition-all duration-300
          focus:border-orange-400 focus:ring-2 focus:ring-orange-100
          sm:w-auto
        "
      >
        {dateRanges.map((range) => (
          <option key={range} value={range}>
            {range}
          </option>
        ))}
      </select>

      <button
        onClick={onExport}
        className="
          flex items-center justify-center gap-2 rounded-xl border border-slate-200
          bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm
          transition-all duration-300 hover:bg-slate-50
        "
      >
        <Download size={15} />
        Export Report
      </button>
    </div>
  );
};

export default ReportsToolbar;
