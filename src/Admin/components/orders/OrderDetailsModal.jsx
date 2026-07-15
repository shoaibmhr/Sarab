// src/admin/components/orders/OrderDetailsModal.jsx
import { X, MapPin, Phone } from "lucide-react";
import OrderStatusBadge from "./OrderStatusBadge";

const OrderDetailsModal = ({ order, onClose, onStatusChange }) => {
  if (!order) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5">
          <div>
            <h3 className="text-base font-bold text-slate-800">{order.id}</h3>
            <p className="text-xs text-slate-400">{order.time}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4 px-4 py-4">
          {/* Status */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700">Status</span>
            <OrderStatusBadge
              status={order.status}
              onChange={(newStatus) => onStatusChange(order.id, newStatus)}
            />
          </div>

          {/* Customer Info */}
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5">
            <p className="text-sm font-semibold text-slate-800">
              {order.customer}
            </p>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
              <Phone size={13} />
              {order.phone}
            </div>
            <div className="mt-1 flex items-start gap-1.5 text-xs text-slate-500">
              <MapPin size={13} className="mt-0.5 flex-shrink-0" />
              {order.address}
            </div>
          </div>

          {/* Items */}
          <div>
            <p className="mb-2 text-sm font-medium text-slate-700">
              Order Items
            </p>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-slate-600">
                    {item.qty}x {item.name}
                  </span>
                  <span className="font-medium text-slate-800">
                    Rs {(item.qty * item.price).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-3">
            <span className="text-sm font-semibold text-slate-700">
              Total ({order.payment})
            </span>
            <span className="text-lg font-bold text-slate-800">
              Rs {order.total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
