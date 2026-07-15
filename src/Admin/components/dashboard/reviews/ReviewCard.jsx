import { Star } from "lucide-react";

const ReviewCard = ({ review }) => {
  return (
    <div className="border-b border-slate-50 py-2.5 last:border-none">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-800">{review.name}</p>

        {/* Star rating */}
        <div className="flex items-center gap-0.5">
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

      <p className="mt-1 text-sm text-slate-600">"{review.comment}"</p>
      <p className="mt-1 text-xs text-slate-400">on {review.product}</p>
    </div>
  );
};

export default ReviewCard;
