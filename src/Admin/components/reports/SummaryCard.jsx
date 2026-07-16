// src/admin/components/reports/SummaryCard.jsx
const SummaryCard = ({ label, value, icon: Icon, trend }) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50">
          <Icon size={15} className="text-orange-500" />
        </div>
        {trend && (
          <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
            ↗ {trend}
          </span>
        )}
      </div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <h3 className="mt-1 text-sm font-bold text-slate-800">{value}</h3>
    </div>
  );
};

export default SummaryCard;
