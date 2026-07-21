// src/admin/components/customers/CustomerCard.jsx
import {
  Eye,
  Mail,
  Phone,
  ShoppingBag,
  Wallet,
  Crown,
  Calendar,
} from "lucide-react";

import CustomerStatusBadge from "./CustomerStatusBadge";

const CustomerCard = ({ customer, onView }) => {
  const isVip = customer.totalOrders >= 20 || customer.totalSpent >= 30000;

  return (
    <div
      className="
        group overflow-hidden rounded-2xl border border-slate-100
        bg-white shadow-sm transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-md
      "
    >
      {/* Header */}
      <div className="relative p-3.5 sm:p-4">
        {isVip && (
          <span
            className="
              absolute right-3 top-3 flex items-center gap-1 rounded-full
              bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600
            "
          >
            <Crown size={11} />
            VIP
          </span>
        )}

        <div className="flex items-center gap-3">
          <img
            src={customer.avatar}
            alt={customer.name}
            loading="lazy"
            className="h-12 w-12 flex-shrink-0 rounded-full border border-slate-100 object-cover"
          />

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-bold text-slate-800">
              {customer.name}
            </h3>
            <p className="truncate text-xs text-slate-500">{customer.email}</p>
            <div className="mt-1.5">
              <CustomerStatusBadge status={customer.status} />
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="space-y-2 border-y border-slate-50 px-3.5 py-3 sm:px-4">
        <div className="flex items-center gap-2">
          <Mail size={13} className="flex-shrink-0 text-slate-400" />
          <span className="truncate text-xs text-slate-600">
            {customer.email}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={13} className="flex-shrink-0 text-slate-400" />
          <span className="text-xs text-slate-600">{customer.phone}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 px-3.5 py-3 sm:px-4">
        <div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <ShoppingBag size={13} />
            <span className="text-[11px]">Orders</span>
          </div>
          <p className="mt-1 text-base font-bold text-slate-800">
            {customer.totalOrders}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Wallet size={13} />
            <span className="text-[11px]">Spending</span>
          </div>
          <p className="mt-1 text-base font-bold text-green-600">
            Rs {customer.totalSpent.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-50 bg-slate-50 px-3.5 py-2.5 sm:px-4">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <Calendar size={12} />
          Last Order
          <span className="font-medium">{customer.lastOrder}</span>
        </div>

        <button
          onClick={() => onView(customer)}
          className="
            flex items-center gap-1.5 rounded-lg border border-orange-200
            px-2.5 py-1.5 text-xs font-semibold text-orange-600
            transition-all duration-300 hover:bg-orange-50
          "
        >
          <Eye size={14} />
          View
        </button>
      </div>
    </div>
  );
};

export default CustomerCard;
