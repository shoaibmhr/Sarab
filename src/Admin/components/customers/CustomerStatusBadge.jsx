// src/admin/components/customers/CustomerStatusBadge.jsx

const statusStyles = {
  Active: "bg-green-50 text-green-600",
  Inactive: "bg-amber-50 text-amber-600",
  Blocked: "bg-red-50 text-red-600",
};

const CustomerStatusBadge = ({ status }) => {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        rounded-full
        px-2.5
        py-1
        text-xs
        font-semibold
        ${statusStyles[status] || "bg-slate-100 text-slate-600"}
      `}
    >
      {status}
    </span>
  );
};

export default CustomerStatusBadge;
