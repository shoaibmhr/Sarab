// src/admin/pages/Reviews.jsx
import { useState, useMemo } from "react";
import { MessageSquareOff, Star } from "lucide-react";

import ReviewsToolbar from "../components/reviews/ReviewsToolbar";
import ReviewListItem from "../components/reviews/ReviewListItem";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

import { reviewsData } from "../constants/reviewsData";

const Reviews = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [deletingReview, setDeletingReview] = useState(null);

  const filteredReviews = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return reviews.filter((r) => {
      const matchesSearch =
        r.customer.toLowerCase().includes(term) ||
        r.product.toLowerCase().includes(term);
      const matchesRating =
        ratingFilter === "All" || r.rating === Number(ratingFilter);
      const matchesStatus =
        statusFilter === "All" || r.status === statusFilter.toLowerCase();
      return matchesSearch && matchesRating && matchesStatus;
    });
  }, [reviews, searchTerm, ratingFilter, statusFilter]);

  // Average rating nikalna
  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  const pendingCount = reviews.filter((r) => r.status === "pending").length;

  const handleToggleStatus = (review) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === review.id
          ? { ...r, status: r.status === "approved" ? "pending" : "approved" }
          : r,
      ),
    );
  };

  const handleDeleteClick = (review) => {
    setDeletingReview(review);
  };

  const handleConfirmDelete = () => {
    setReviews((prev) => prev.filter((r) => r.id !== deletingReview.id));
    setDeletingReview(null);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Reviews</h1>
        <p className="mt-1 text-sm text-slate-500">
          Customer reviews manage aur moderate karein.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Total Reviews
          </p>
          <h3 className="mt-1 text-1xl font-bold text-slate-800">
            {reviews.length}
          </h3>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Average Rating
          </p>
          <div className="mt-1 flex items-center gap-1">
            <h3 className="text-1xl font-bold text-slate-800">
              {averageRating}
            </h3>
            <Star size={16} className="fill-amber-400 text-amber-400" />
          </div>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
            Pending
          </p>
          <h3 className="mt-1 text-1xl font-bold text-slate-800">
            {pendingCount}
          </h3>
        </div>
      </div>

      <ReviewsToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        ratingFilter={ratingFilter}
        onRatingChange={setRatingFilter}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
      />

      {filteredReviews.length > 0 ? (
        <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2">
          {filteredReviews.map((review) => (
            <ReviewListItem
              key={review.id}
              review={review}
              onToggleStatus={handleToggleStatus}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
          <MessageSquareOff size={36} className="text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-500">
            Koi review nahi mila
          </p>
        </div>
      )}

      <ConfirmDeleteModal
        isOpen={!!deletingReview}
        onClose={() => setDeletingReview(null)}
        onConfirm={handleConfirmDelete}
        itemName={`review by ${deletingReview?.customer}`}
      />
    </div>
  );
};

export default Reviews;
