// src/admin/components/customers/CustomerDetailsModal.jsx
import {
  X,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  ShoppingBag,
  Wallet,
  Crown,
} from "lucide-react";

import CustomerStatusBadge from "./CustomerStatusBadge";

const CustomerDetailsModal = ({ customer, open, onClose }) => {
  if (!open || !customer) return null;

  const isVip = customer.totalOrders >= 20 || customer.totalSpent >= 30000;

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/40 backdrop-blur-[2px] p-4
      "
      onClick={onClose}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-2xl overflow-hidden rounded-2xl border
          border-slate-100 bg-white shadow-xl
        "
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-4 py-3.5">
          <div>
            <h2 className="text-base font-bold text-slate-800">
              Customer Details
            </h2>
            <p className="text-xs text-slate-500">
              Complete customer information
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition-all duration-300 hover:bg-slate-100 hover:text-red-500"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[65vh] overflow-y-auto p-4">
          {/* Profile */}
          <div className="flex items-start gap-3.5 sm:flex-row lg:items-center">
            <img
              src={customer.avatar}
              alt={customer.name}
              className="h-16 w-16 flex-shrink-0 rounded-full border border-slate-100 object-cover"
            />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-bold text-slate-800">
                  {customer.name}
                </h2>
                <CustomerStatusBadge status={customer.status} />

                {isVip && (
                  <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-600">
                    <Crown size={13} />
                    VIP Customer
                  </span>
                )}
              </div>

              <div className="mt-3.5 grid gap-3 md:grid-cols-2">
                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="flex-shrink-0 text-orange-500" />
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="truncate text-sm font-medium text-slate-700">
                      {customer.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="flex-shrink-0 text-orange-500" />
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="text-sm font-medium text-slate-700">
                      {customer.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <CalendarDays
                    size={15}
                    className="flex-shrink-0 text-orange-500"
                  />
                  <div>
                    <p className="text-xs text-slate-500">Joined</p>
                    <p className="text-sm font-medium text-slate-700">
                      {customer.joinDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <MapPin size={15} className="flex-shrink-0 text-orange-500" />
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Address</p>
                    <p className="truncate text-sm font-medium text-slate-700">
                      {customer.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={18} className="text-orange-500" />
                <div>
                  <p className="text-xs text-slate-500">Total Orders</p>
                  <h3 className="text-lg font-bold text-slate-800">
                    {customer.totalOrders}
                  </h3>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
              <div className="flex items-center gap-2.5">
                <Wallet size={18} className="text-green-600" />
                <div>
                  <p className="text-xs text-slate-500">Total Spending</p>
                  <h3 className="text-lg font-bold text-green-600">
                    Rs {customer.totalSpent.toLocaleString()}
                  </h3>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
              <p className="text-xs text-slate-500">Last Order</p>
              <h3 className="mt-1 text-lg font-bold text-slate-700">
                {customer.lastOrder}
              </h3>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="mt-4 space-y-2.5">
            <h3 className="text-sm font-bold text-slate-800">Recent Orders</h3>

            {customer.recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3"
              >
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">
                    {order.id}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Rs {order.total.toLocaleString()}
                  </p>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold
                    ${
                      order.status === "Delivered"
                        ? "bg-green-50 text-green-600"
                        : order.status === "Preparing"
                          ? "bg-blue-50 text-blue-600"
                          : order.status === "Pending"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-red-50 text-red-600"
                    }`}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="mt-5">
            <h3 className="mb-2 text-sm font-bold text-slate-800">
              Customer Notes
            </h3>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
              <p className="text-sm leading-relaxed text-slate-600">
                {customer.notes || "No notes available."}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-slate-100 px-4 py-3">
          <button
            onClick={onClose}
            className="
              rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white
              shadow-sm transition-all duration-300 hover:bg-orange-700
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsModal;
