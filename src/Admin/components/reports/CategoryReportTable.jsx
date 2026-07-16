// src/admin/components/reports/CategoryReportTable.jsx
const CategoryReportTable = ({ data }) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <h3 className="text-base font-bold text-slate-800">Sales by Category</h3>
      <p className="text-sm text-slate-500">Category-wise revenue breakdown</p>

      <div className="mt-4 space-y-3.5">
        {data.map((cat) => (
          <div key={cat.category}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">{cat.category}</span>
              <span className="text-xs font-semibold text-slate-500">
                Rs {cat.revenue.toLocaleString()} · {cat.orders} orders
              </span>
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                style={{ width: `${cat.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryReportTable;
