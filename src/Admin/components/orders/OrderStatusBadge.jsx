// src/admin/components/orders/OrderStatusBadge.jsx
const statusStyles = {
  Pending: "bg-amber-50 text-amber-600",
  Preparing: "bg-blue-50 text-blue-600",
  "Out for Delivery": "bg-rose-50 text-rose-600",
  Delivered: "bg-green-50 text-green-600",
  Cancelled: "bg-red-50 text-red-600",
};

const changeableStatuses = [
  "Pending",
  "Preparing",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];

const OrderStatusBadge = ({ status, onChange }) => {
  const badgeClass = statusStyles[status] || "bg-slate-100 text-slate-600";

  return (
    <select
      value={status}
      onChange={(e) => onChange(e.target.value)}
      className={`
        cursor-pointer rounded-full border-0 px-2.5 py-1 text-xs font-semibold
        outline-none transition-all duration-300
        ${badgeClass}
      `}
    >
      {changeableStatuses.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
};

export default OrderStatusBadge;
