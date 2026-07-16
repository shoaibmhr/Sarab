// src/admin/components/coupons/CouponStatusBadge.jsx
const CouponStatusBadge = ({ coupon }) => {
  const isExpired = new Date(coupon.expiryDate) < new Date();
  const isLimitReached = coupon.usedCount >= coupon.usageLimit;
  const isInactive = coupon.status === "inactive";

  let label = "Active";
  let className = "bg-green-50 text-green-600";

  if (isExpired) {
    label = "Expired";
    className = "bg-red-50 text-red-600";
  } else if (isLimitReached) {
    label = "Limit Reached";
    className = "bg-amber-50 text-amber-600";
  } else if (isInactive) {
    label = "Inactive";
    className = "bg-slate-100 text-slate-500";
  }

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}
    >
      {label}
    </span>
  );
};

export default CouponStatusBadge;
