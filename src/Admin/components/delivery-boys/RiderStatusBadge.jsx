// src/admin/components/delivery-boys/RiderStatusBadge.jsx
const statusConfig = {
  available: { label: "Available", className: "bg-green-50 text-green-600" },
  on_delivery: { label: "On Delivery", className: "bg-blue-50 text-blue-600" },
  offline: { label: "Offline", className: "bg-slate-100 text-slate-500" },
};

const RiderStatusBadge = ({ status }) => {
  const config = statusConfig[status] || statusConfig.offline;

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${config.className}`}
    >
      {config.label}
    </span>
  );
};

export default RiderStatusBadge;
