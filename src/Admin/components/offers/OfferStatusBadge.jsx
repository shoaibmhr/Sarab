// src/admin/components/offers/OfferStatusBadge.jsx
const OfferStatusBadge = ({ offer }) => {
  const today = new Date();
  const start = new Date(offer.startDate);
  const end = new Date(offer.endDate);

  let label = "Active";
  let className = "bg-green-50 text-green-600";

  if (offer.status === "inactive") {
    label = "Inactive";
    className = "bg-slate-100 text-slate-500";
  } else if (today > end) {
    label = "Expired";
    className = "bg-red-50 text-red-600";
  } else if (today < start) {
    label = "Upcoming";
    className = "bg-blue-50 text-blue-600";
  }

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}
    >
      {label}
    </span>
  );
};

export default OfferStatusBadge;
