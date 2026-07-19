// src/admin/components/analytics/TopCustomersTable.jsx
const TopCustomersTable = ({ data }) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
      <div className="p-4 sm:p-5">
        <h3 className="text-base font-bold text-slate-800">Top Customers</h3>
        <p className="text-sm text-slate-500">Highest spending customers</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-y border-slate-100 bg-slate-50/50">
              <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Customer
              </th>
              <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Orders
              </th>
              <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Total Spent
              </th>
              <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Avg Order
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((customer, index) => (
              <tr
                key={customer.id}
                className="border-b border-slate-50 last:border-none hover:bg-slate-50/50"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-50 text-xs font-bold text-orange-600">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {customer.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  {customer.orders}
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-slate-800">
                  Rs {customer.totalSpent.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-sm text-slate-500">
                  Rs {customer.avgOrder.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopCustomersTable;
