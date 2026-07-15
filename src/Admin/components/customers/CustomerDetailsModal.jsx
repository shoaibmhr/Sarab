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
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
       bg-black/40 backdrop-blur-[2px]
        p-4
      "
    >
      {/* Modal */}

      <div
        className="
          relative
          w-full
          max-w-2xl
          overflow-hidden
          bg-white
          rounded-2xl
shadow-xl
border
border-slate-200
      
        "
      >
        {/* Header */}

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-slate-800">
              Customer Details
            </h2>

            <p className="text-xs text-slate-500">
              Complete customer information
            </p>
          </div>

          <button
            onClick={onClose}
            className="
             flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:bg-slate-100 hover:text-red-500
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="max-h-[65vh] overflow-y-auto p-5">
          {/* Profile */}

          <div className="flex items-start gap-4 sm:flex-row lg:items-center">
            <img
              src={customer.avatar}
              alt={customer.name}
              className="
                h-20
                w-20
                rounded-full
                border
                border-slate-200
                object-cover
              "
            />

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-bold text-slate-800">
                  {customer.name}
                </h2>

                <CustomerStatusBadge status={customer.status} />

                {isVip && (
                  <span
                    className="
                      flex
                      items-center
                      gap-1
                      rounded-full
                      bg-yellow-100
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-yellow-700
                    "
                  >
                    <Crown size={14} />
                    VIP Customer
                  </span>
                )}
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-orange-500" />

                  <div>
                    <p className="text-xs text-slate-500">Email</p>

                    <p className="font-medium text-slate-700">
                      {customer.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-500" />

                  <div>
                    <p className="text-xs text-slate-500">Phone</p>

                    <p className="font-medium text-slate-700">
                      {customer.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays size={18} className="text-orange-500" />

                  <div>
                    <p className="text-xs text-slate-500">Joined</p>

                    <p className="font-medium text-slate-700">
                      {customer.joinDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-orange-500" />

                  <div>
                    <p className="text-xs text-slate-500">Address</p>

                    <p className="font-medium text-slate-700">
                      {customer.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-orange-500" />

                <div>
                  <p className="text-sm text-slate-500">Total Orders</p>

                  <h3 className="text-xl font-bold">{customer.totalOrders}</h3>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center gap-3">
                <Wallet className="text-green-600" />

                <div>
                  <p className="text-sm text-slate-500">Total Spending</p>

                  <h3 className="text-2xl font-bold text-green-600">
                    Rs {customer.totalSpent.toLocaleString()}
                  </h3>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div>
                <p className="text-sm text-slate-500">Last Order</p>

                <h3 className="mt-2 text-xl font-bold text-slate-700">
                  {customer.lastOrder}
                </h3>
              </div>
            </div>
          </div>
          {/* Recent Orders */}

          <div className="mt-6 space-y-3">
            <h3 className="text-base font-semibold text-slate-800">
              Recent Orders
            </h3>

            {customer.recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3"
              >
                <div>
                  <h4 className="font-medium text-slate-800">{order.id}</h4>

                  <p className="text-xs text-slate-500">
                    Rs {order.total.toLocaleString()}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold
        ${
          order.status === "Delivered"
            ? "bg-green-100 text-green-700"
            : order.status === "Preparing"
              ? "bg-blue-100 text-blue-700"
              : order.status === "Pending"
                ? "bg-amber-100 text-amber-700"
                : "bg-red-100 text-red-700"
        }`}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>

          {/* Notes */}

          <div className="mt-8">
            <h3 className="mb-3 text-lg font-bold text-slate-800">
              Customer Notes
            </h3>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="leading-7 text-slate-600">
                {customer.notes || "No notes available."}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end border-t border-slate-200 px-5 py-4">
          <button
            onClick={onClose}
            className="
              rounded-lg
              bg-orange-500
              px-6
              py-2.5
              font-semibold
              text-white
              transition
              hover:bg-orange-600
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