// src/admin/components/reviews/ReviewsToolbar.jsx
import { Search } from "lucide-react";

const ratingOptions = ["All", "5", "4", "3", "2", "1"];
const statusOptions = ["All", "Approved", "Pending"];

const ReviewsToolbar = ({
  searchTerm,
  onSearchChange,
  ratingFilter,
  onRatingChange,
  statusFilter,
  onStatusChange,
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
          placeholder="Search by customer or product..."
          className="
            w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-4
            text-sm text-slate-700 outline-none
            transition-all duration-300
            focus:border-orange-400 focus:ring-2 focus:ring-orange-100
          "
        />
      </div>

      <select
        value={ratingFilter}
        onChange={(e) => onRatingChange(e.target.value)}
        className="
          w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
          text-sm text-slate-700 outline-none
          transition-all duration-300
          focus:border-orange-400 focus:ring-2 focus:ring-orange-100
          sm:w-auto
        "
      >
        {ratingOptions.map((r) => (
          <option key={r} value={r}>
            {r === "All" ? "All Ratings" : `${r} Star`}
          </option>
        ))}
      </select>

      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
        className="
          w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
          text-sm text-slate-700 outline-none
          transition-all duration-300
          focus:border-orange-400 focus:ring-2 focus:ring-orange-100
          sm:w-auto
        "
      >
        {statusOptions.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ReviewsToolbar;
