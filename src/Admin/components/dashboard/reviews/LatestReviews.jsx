import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { latestReviews } from "../../../constants/dashboardData";

const LatestReviews = () => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-800">Latest Reviews</h3>
        <Link
          to="/admin/reviews"
          className="text-sm font-semibold text-orange-600 hover:text-orange-700"
        >
          All
        </Link>
      </div>

      <div className="mt-2">
        {latestReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default LatestReviews;
