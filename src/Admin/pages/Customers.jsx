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

    // Search

    if (searchTerm.trim()) {
      const keyword = searchTerm.toLowerCase();

      data = data.filter(
        (customer) =>
          customer.name.toLowerCase().includes(keyword) ||
          customer.email.toLowerCase().includes(keyword) ||
          customer.phone.includes(keyword),
      );
    }

    // Status Filter

    if (statusFilter !== "All") {
      data = data.filter((customer) => customer.status === statusFilter);
    }

    // Sorting

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
    <>
      <div className="space-y-6">
        {/* Page Header */}

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-slate-800">Customers</h1>

          <p className="text-sm text-slate-500">
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

        <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white lg:block">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Contact
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Orders
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Spending
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Last Order
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((customer) => {
                    const isVip =
                      customer.totalOrders >= 20 ||
                      customer.totalSpent >= 30000;

                    return (
                      <tr
                        key={customer.id}
                        className="border-t border-slate-100 transition hover:bg-orange-50/40"
                      >
                        {/* Customer */}

                        <td className="px-6 py-5">
                          <div className="flex items-center gap-4">
                            <img
                              src={customer.avatar}
                              alt={customer.name}
                              className="h-12 w-12 rounded-full border object-cover"
                            />

                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-slate-800">
                                  {customer.name}
                                </h3>

                                {isVip && (
                                  <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-[11px] font-semibold text-yellow-700">
                                    <Crown size={12} />
                                    VIP
                                  </span>
                                )}
                              </div>

                              <p className="mt-1 text-sm text-slate-500">
                                {customer.email}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Contact */}

                        <td className="px-6 py-5">
                          <div>
                            <p className="text-sm font-medium text-slate-700">
                              {customer.phone}
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              Joined {customer.joinDate}
                            </p>
                          </div>
                        </td>

                        {/* Orders */}

                        <td className="px-6 py-5 text-center">
                          <span className="font-semibold text-slate-800">
                            {customer.totalOrders}
                          </span>
                        </td>

                        {/* Spending */}

                        <td className="px-6 py-5 text-center">
                          <span className="font-semibold text-green-600">
                            Rs {customer.totalSpent.toLocaleString()}
                          </span>
                        </td>

                        {/* Last Order */}

                        <td className="px-6 py-5 text-center text-sm text-slate-600">
                          {customer.lastOrder}
                        </td>

                        {/* Status */}

                        <td className="px-6 py-5 text-center">
                          <CustomerStatusBadge status={customer.status} />
                        </td>

                        {/* Action */}

                        <td className="px-6 py-5 text-center">
                          <button
                            onClick={() => handleViewCustomer(customer)}
                            className="inline-flex items-center gap-2 rounded-xl border border-orange-200 px-4 py-2 text-sm font-medium text-orange-600 transition hover:bg-orange-50"
                          >
                            <Eye size={16} />
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-16 text-center">
                      <h3 className="text-lg font-semibold text-slate-700">
                        No Customers Found
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
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

        <div className="grid grid-cols-1 gap-4 lg:hidden">
          {filteredCustomers.length > 0 ? (
            filteredCustomers.map((customer) => (
              <CustomerCard
                key={customer.id}
                customer={customer}
                onView={handleViewCustomer}
              />
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
              <h3 className="text-lg font-semibold text-slate-700">
                No Customers Found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
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
    </>
  );
};

export default Customers;