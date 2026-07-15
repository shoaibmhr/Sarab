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
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-100
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Header */}

      <div className="relative p-5">
        {/* VIP Badge */}

        {isVip && (
          <span
            className="
              absolute
              right-4
              top-4
              flex
              items-center
              gap-1
              rounded-full
              bg-yellow-100
              px-2.5
              py-1
              text-[11px]
              font-semibold
              text-yellow-700
            "
          >
            <Crown size={13} />
            VIP
          </span>
        )}

        {/* Avatar */}

        <div className="flex items-center gap-4">
          <img
            src={customer.avatar}
            alt={customer.name}
            loading="lazy"
            className="
              h-16
              w-16
              rounded-full
              border
              border-slate-200
              object-cover
            "
          />

          <div className="min-w-0 flex-1">
            <h3
              className="
                truncate
                text-base
                font-bold
                text-slate-800
              "
            >
              {customer.name}
            </h3>

            <p
              className="
                mt-1
                truncate
                text-sm
                text-slate-500
              "
            >
              {customer.email}
            </p>

            <div className="mt-2">
              <CustomerStatusBadge status={customer.status} />
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}

      <div
        className="
          space-y-3
          border-y
          border-slate-100
          px-5
          py-4
        "
      >
        <div className="flex items-center gap-2">
          <Mail size={15} className="text-slate-400" />

          <span
            className="
              truncate
              text-sm
              text-slate-600
            "
          >
            {customer.email}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Phone size={15} className="text-slate-400" />

          <span
            className="
              text-sm
              text-slate-600
            "
          >
            {customer.phone}
          </span>
        </div>
      </div>

      {/* Stats */}

      <div
        className="
          grid
          grid-cols-2
          gap-4
          px-5
          py-4
        "
      >
        <div>
          <div
            className="
              flex
              items-center
              gap-2
              text-slate-400
            "
          >
            <ShoppingBag size={15} />

            <span className="text-xs">Orders</span>
          </div>

          <p
            className="
              mt-1
              text-lg
              font-bold
              text-slate-800
            "
          >
            {customer.totalOrders}
          </p>
        </div>

        <div>
          <div
            className="
              flex
              items-center
              gap-2
              text-slate-400
            "
          >
            <Wallet size={15} />

            <span className="text-xs">Spending</span>
          </div>

          <p
            className="
              mt-1
              text-lg
              font-bold
              text-green-600
            "
          >
            Rs {customer.totalSpent.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Footer */}

      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-slate-100
          bg-slate-50
          px-5
          py-4
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            text-xs
            text-slate-500
          "
        >
          <Calendar size={14} />
          Last Order
          <span className="font-medium">{customer.lastOrder}</span>
        </div>

        <button
          onClick={() => onView(customer)}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-orange-200
            px-3
            py-2
            text-sm
            font-semibold
            text-orange-600
            transition-all
            duration-300
            hover:bg-orange-50
          "
        >
          <Eye size={16} />
          View
        </button>
      </div>
    </div>
  );
};

export default CustomerCard;
