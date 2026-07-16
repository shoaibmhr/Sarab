// src/admin/components/reviews/ReviewListItem.jsx
import { Star, Trash2, Eye, EyeOff } from "lucide-react";

const ReviewListItem = ({ review, onToggleStatus, onDelete }) => {
  const isApproved = review.status === "approved";

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm sm:p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-800">
            {review.customer}
          </p>
          <p className="text-xs text-slate-400">
            on {review.product} · {review.date}
          </p>
        </div>

        {/* Star rating */}
        <div className="flex flex-shrink-0 items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={13}
              className={
                index < review.rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-slate-200 text-slate-200"
              }
            />
          ))}
        </div>
      </div>

      <p className="mt-2 text-sm text-slate-600">"{review.comment}"</p>

      <div className="mt-3 flex items-center gap-2 border-t border-slate-50 pt-3">
        <span
          className={`
            rounded-full px-2.5 py-1 text-xs font-semibold
            ${isApproved ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"}
          `}
        >
          {isApproved ? "Approved" : "Pending"}
        </span>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => onToggleStatus(review)}
            className="
              flex items-center gap-1.5 rounded-lg border border-slate-200
              px-2.5 py-1.5 text-xs font-semibold text-slate-600
              transition-all duration-300 hover:bg-slate-50
            "
          >
            {isApproved ? <EyeOff size={13} /> : <Eye size={13} />}
            {isApproved ? "Hide" : "Approve"}
          </button>

          <button
            onClick={() => onDelete(review)}
            className="
              flex items-center gap-1.5 rounded-lg border border-red-100
              px-2.5 py-1.5 text-xs font-semibold text-red-500
              transition-all duration-300 hover:bg-red-50
            "
          >
            <Trash2 size={13} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewListItem;
