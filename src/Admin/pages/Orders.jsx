// src/admin/pages/Orders.jsx
import { useState, useMemo } from "react";
import { PackageSearch, Eye } from "lucide-react";
import OrdersToolbar from "../components/orders/OrdersToolbar";
import OrderStatusBadge from "../components/orders/OrderStatusBadge";
import OrderDetailsModal from "../components/orders/OrderDetailsModal";
import { ordersData, orderStatuses } from "../constants/ordersData";
const Orders = () => {
  const [orders, setOrders] = useState(ordersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return orders.filter((o) => {
      const matchesSearch =
        o.id.toLowerCase().includes(term) ||
        o.customer.toLowerCase().includes(term);
      const matchesStatus = statusFilter === "All" || o.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [orders, searchTerm, statusFilter]);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o)),
    );
    // Modal khula ho to usay bhi update rakho
    setSelectedOrder((prev) =>
      prev && prev.id === orderId ? { ...prev, status: newStatus } : prev,
    );
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Orders</h1>
        <p className="mt-1 text-sm text-slate-500">
          Sab orders dekhein aur unka status update karein.
        </p>
      </div>

      <OrdersToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        statuses={orderStatuses}
      />

      {filteredOrders.length > 0 ? (
        <>
          {/* Desktop/Tablet — Table */}
          <div className="hidden overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Order ID
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Items
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Total
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Status
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Time
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-slate-50 last:border-none hover:bg-slate-50/50"
                  >
                    <td className="px-4 py-3 text-sm font-semibold text-slate-800">
                      {order.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {order.customer}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">
                      {order.items.length} items
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-800">
                      Rs {order.total.toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <OrderStatusBadge
                        status={order.status}
                        onChange={(newStatus) =>
                          handleStatusChange(order.id, newStatus)
                        }
                      />
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-400">
                      {order.time}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-orange-600"
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile — Cards */}
          <div className="space-y-3 md:hidden">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                onClick={() => setSelectedOrder(order)}
                className="cursor-pointer rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">
                    {order.id}
                  </p>
                  <p className="text-sm font-bold text-slate-800">
                    Rs {order.total.toLocaleString()}
                  </p>
                </div>
                <p className="mt-1 text-sm text-slate-600">{order.customer}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {order.items.length} items · {order.time}
                  </span>
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-semibold"
                    style={{ pointerEvents: "none" }}
                  >
                    <OrderStatusBadge
                      status={order.status}
                      onChange={(newStatus) =>
                        handleStatusChange(order.id, newStatus)
                      }
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
          <PackageSearch size={36} className="text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-500">
            Koi order nahi mila
          </p>
        </div>
      )}

      <OrderDetailsModal
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default Orders;
