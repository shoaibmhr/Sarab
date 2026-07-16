// src/admin/components/reports/ReportFilters.jsx

import { Search, CalendarDays, Download } from "lucide-react";

const ReportFilters = ({ search, setSearch, period, setPeriod, periods }) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm

        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Left Side */}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Search */}

        <div className="relative w-full sm:w-72">
          <Search
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              pl-10
              pr-4
              text-sm
              text-slate-700
              outline-none
              transition-all
              duration-300
              focus:border-orange-500
              focus:ring-4
              focus:ring-orange-100
            "
          />
        </div>

        {/* Date Filter */}

        <div className="relative">
          <CalendarDays
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="
              h-11
              w-full
              appearance-none
              rounded-xl
              border
              border-slate-200
              bg-white
              pl-10
              pr-10
              text-sm
              text-slate-700
              outline-none
              transition-all
              duration-300
              focus:border-orange-500
              focus:ring-4
              focus:ring-orange-100

              sm:w-56
            "
          >
            {periods.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Right Side */}

      <div className="flex gap-3">
        <button
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-white
            px-5
            py-2.5
            text-sm
            font-semibold
            text-slate-700
            transition-all
            duration-300
            hover:bg-slate-50
          "
        >
          Export PDF
        </button>

        <button
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-orange-600
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-300
            hover:bg-orange-700
          "
        >
          <Download size={18} />
          Export Excel
        </button>
      </div>
    </div>
  );
};

export default ReportFilters;
