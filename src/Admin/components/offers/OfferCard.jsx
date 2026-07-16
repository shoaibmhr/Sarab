// src/admin/components/offers/OfferCard.jsx
import { Pencil, Trash2, Calendar } from "lucide-react";
import OfferStatusBadge from "./OfferStatusBadge";

const discountLabels = {
  percentage: (offer) => `${offer.discountValue}% OFF`,
  bogo: () => "BOGO",
  combo: () => "COMBO",
  free_delivery: () => "FREE DELIVERY",
};

const OfferCard = ({ offer, onEdit, onDelete }) => {
  const badgeText = discountLabels[offer.discountType]?.(offer) || "OFFER";

  return (
    <div
      className="
        group overflow-hidden rounded-2xl border border-slate-100
        bg-white shadow-sm transition-all duration-300 hover:shadow-md
      "
    >
      <div className="relative h-32 w-full overflow-hidden bg-slate-100 sm:h-36">
        <img
          src={offer.image}
          alt={offer.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-orange-600/95 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
          {badgeText}
        </span>

        <div className="absolute right-3 top-3">
          <OfferStatusBadge offer={offer} />
        </div>
      </div>

      <div className="p-3.5 sm:p-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-orange-500">
          {offer.category}
        </span>

        <h3 className="mt-1 truncate text-base font-bold text-slate-800">
          {offer.title}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-slate-500">
          {offer.description}
        </p>

        <div className="mt-2.5 flex items-center gap-1.5 text-xs font-medium text-slate-400">
          <Calendar size={13} />
          {offer.startDate} — {offer.endDate}
        </div>

        <div className="mt-3.5 flex items-center gap-2 border-t border-slate-50 pt-3">
          <button
            onClick={() => onEdit(offer)}
            className="
              flex flex-1 items-center justify-center gap-1.5 rounded-lg
              border border-slate-200 py-2 text-sm font-semibold text-slate-600
              transition-all duration-300 hover:bg-slate-50
            "
          >
            <Pencil size={14} />
            Edit
          </button>

          <button
            onClick={() => onDelete(offer)}
            className="
              flex flex-1 items-center justify-center gap-1.5 rounded-lg
              border border-red-100 py-2 text-sm font-semibold text-red-500
              transition-all duration-300 hover:bg-red-50
            "
          >
            <Trash2 size={14} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
