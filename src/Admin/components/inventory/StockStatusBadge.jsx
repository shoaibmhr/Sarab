// src/admin/components/inventory/StockStatusBadge.jsx
const StockStatusBadge = ({ stock, reorderLevel }) => {
  let label = "In Stock";
  let className = "bg-green-50 text-green-600";

  if (stock === 0) {
    label = "Out of Stock";
    className = "bg-red-50 text-red-600";
  } else if (stock <= reorderLevel) {
    label = "Low Stock";
    className = "bg-amber-50 text-amber-600";
  }

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}
    >
      {label}
    </span>
  );
};

export default StockStatusBadge;
