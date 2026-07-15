// src/admin/components/customers/CustomersToolbar.jsx

import { Search } from "lucide-react";

const CustomersToolbar = ({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  statuses,
  sortBy,
  onSortChange,
  sortOptions,
}) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-3

        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <div
        className="
          flex
          flex-col
          gap-3

          sm:flex-row
        "
      >
        {/* Search */}

        <div className="relative w-full sm:w-72">
          <Search
            size={16}
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search customers..."
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              py-2
              pl-9
              pr-4
              text-sm
              outline-none
              transition-all
              duration-300
              focus:border-orange-400
              focus:ring-2
              focus:ring-orange-100
            "
          />
        </div>

        {/* Status */}

        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="
            rounded-xl
            border
            border-slate-200
            bg-white
            px-3.5
            py-2
            text-sm
            outline-none
            transition-all
            duration-300
            focus:border-orange-400
            focus:ring-2
            focus:ring-orange-100
          "
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        {/* Sort */}

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="
            rounded-xl
            border
            border-slate-200
            bg-white
            px-3.5
            py-2
            text-sm
            outline-none
            transition-all
            duration-300
            focus:border-orange-400
            focus:ring-2
            focus:ring-orange-100
          "
        >
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomersToolbar;
