// src/admin/pages/Customers.jsx
import { useMemo, useState } from "react";

import {
  customersData,
  customerStatuses,
  sortOptions,
} from "../constants/customersData";

import CustomerStatsCards from "../components/customers/CustomerStatsCards";
import CustomersToolbar from "../components/customers/CustomersToolbar";
import CustomerCard from "../components/customers/CustomerCard";
import CustomerStatusBadge from "../components/customers/CustomerStatusBadge";
import CustomerDetailsModal from "../components/customers/CustomerDetailsModal";

import { Eye, Crown } from "lucide-react";

const Customers = () => {
  const [customers] = useState(customersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewCustomer = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCustomer(null);
    setIsModalOpen(false);
  };

  const filteredCustomers = useMemo(() => {
    let data = [...customers];

    if (searchTerm.trim()) {
      const keyword = searchTerm.toLowerCase();
      data = data.filter(
        (customer) =>
          customer.name.toLowerCase().includes(keyword) ||
          customer.email.toLowerCase().includes(keyword) ||
          customer.phone.includes(keyword),
      );
    }

    if (statusFilter !== "All") {
      data = data.filter((customer) => customer.status === statusFilter);
    }

    switch (sortBy) {
      case "Most Orders":
        data.sort((a, b) => b.totalOrders - a.totalOrders);
        break;
      case "Highest Spending":
        data.sort((a, b) => b.totalSpent - a.totalSpent);
        break;
      default:
        data.sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate));
    }

    return data;
  }, [customers, searchTerm, statusFilter, sortBy]);

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div>
        <h1 className="text-xl font-bold text-slate-800">Customers</h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage all registered customers.
        </p>
      </div>

      {/* Stats */}
      <CustomerStatsCards customers={customers} />

      {/* Toolbar */}
      <CustomersToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        statuses={customerStatuses}
        sortBy={sortBy}
        onSortChange={setSortBy}
        sortOptions={sortOptions}
      />

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm lg:block">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Customer
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Contact
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Orders
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Spending
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Last Order
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => {
                  const isVip =
                    customer.totalOrders >= 20 || customer.totalSpent >= 30000;

                  return (
                    <tr
                      key={customer.id}
                      className="border-b border-slate-50 last:border-none hover:bg-slate-50/50"
                    >
                      {/* Customer */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={customer.avatar}
                            alt={customer.name}
                            className="h-9 w-9 flex-shrink-0 rounded-full border border-slate-100 object-cover"
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <h3 className="truncate text-sm font-semibold text-slate-800">
                                {customer.name}
                              </h3>
                              {isVip && (
                                <span className="flex flex-shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600">
                                  <Crown size={11} />
                                  VIP
                                </span>
                              )}
                            </div>
                            <p className="truncate text-xs text-slate-500">
                              {customer.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="px-4 py-3">
                        <p className="text-sm text-slate-600">
                          {customer.phone}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-400">
                          Joined {customer.joinDate}
                        </p>
                      </td>

                      {/* Orders */}
                      <td className="px-4 py-3 text-center text-sm font-semibold text-slate-700">
                        {customer.totalOrders}
                      </td>

                      {/* Spending */}
                      <td className="px-4 py-3 text-center text-sm font-semibold text-green-600">
                        Rs {customer.totalSpent.toLocaleString()}
                      </td>

                      {/* Last Order */}
                      <td className="px-4 py-3 text-center text-sm text-slate-500">
                        {customer.lastOrder}
                      </td>

                      {/* Status */}
                      <td className="px-4 py-3 text-center">
                        <CustomerStatusBadge status={customer.status} />
                      </td>

                      {/* Action */}
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => handleViewCustomer(customer)}
                          className="
                            inline-flex items-center gap-1.5 rounded-lg border border-orange-200
                            px-2.5 py-1.5 text-xs font-semibold text-orange-600
                            transition-all duration-300 hover:bg-orange-50
                          "
                        >
                          <Eye size={14} />
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center">
                    <h3 className="text-sm font-bold text-slate-700">
                      No Customers Found
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Try changing your search or filters.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="grid grid-cols-1 gap-3.5 lg:hidden">
        {filteredCustomers.length > 0 ? (
          filteredCustomers.map((customer) => (
            <CustomerCard
              key={customer.id}
              customer={customer}
              onView={handleViewCustomer}
            />
          ))
        ) : (
          <div className="rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
            <h3 className="text-sm font-bold text-slate-700">
              No Customers Found
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </div>

      {/* Details Modal */}
      <CustomerDetailsModal
        customer={selectedCustomer}
        open={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Customers;
