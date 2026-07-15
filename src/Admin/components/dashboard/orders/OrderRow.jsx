import { Package } from "lucide-react";

const statusStyles = {
  Preparing: "bg-blue-50 text-blue-600",
  Pending: "bg-amber-50 text-amber-600",
  "Out for Delivery": "bg-rose-50 text-rose-600",
  Delivered: "bg-green-50 text-green-600",
  Cancelled: "bg-red-50 text-red-600",
};

const OrderRow = ({ order }) => {
  const badgeClass =
    statusStyles[order.status] || "bg-slate-100 text-slate-600";

  return (
    <div className="flex items-center justify-between gap-3 border-b border-slate-50 py-2.5 last:border-none">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-rose-50">
          <Package size={16} className="text-rose-500" />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-800">
            {order.id} <span className="font-normal text-slate-400">•</span>{" "}
            {order.customer}
          </p>
          <p className="truncate text-xs text-slate-500">
            {order.items} items · {order.payment} · {order.time}
          </p>
        </div>
      </div>

      <div className="flex-shrink-0 text-right">
        <p className="text-sm font-bold text-slate-800">{order.amount}</p>
        <span
          className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${badgeClass}`}
        >
          {order.status}
        </span>
      </div>
    </div>
  );
};

export default OrderRow;
