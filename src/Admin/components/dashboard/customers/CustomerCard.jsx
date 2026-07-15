const CustomerCard = ({ customer }) => {
  const initials = customer.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-3 border-b border-slate-50 py-2.5 last:border-none">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
        {initials}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-slate-800">
          {customer.name}
        </p>
        <p className="truncate text-xs text-slate-500">
          {customer.orders} orders · {customer.spent}
        </p>
      </div>
    </div>
  );
};

export default CustomerCard;
