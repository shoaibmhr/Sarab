// src/admin/components/activity-logs/ActivityLogItem.jsx
const actionStyles = {
  Created: "bg-green-50 text-green-600",
  Updated: "bg-blue-50 text-blue-600",
  Deleted: "bg-red-50 text-red-600",
  Login: "bg-slate-100 text-slate-500",
};

const ActivityLogItem = ({ log, isLast }) => {
  const Icon = log.icon;
  const badgeClass = actionStyles[log.action] || "bg-slate-100 text-slate-500";

  return (
    <div className="flex gap-3">
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-50">
          <Icon size={15} className="text-orange-500" />
        </div>
        {!isLast && <div className="mt-1 w-px flex-1 bg-slate-100" />}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold text-slate-800">{log.user}</p>
          <span className="text-xs text-slate-400">({log.role})</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badgeClass}`}
          >
            {log.action}
          </span>
        </div>
        <p className="mt-0.5 text-sm text-slate-600">{log.description}</p>
        <p className="mt-1 text-xs text-slate-400">
          {log.module} · {log.time}
        </p>
      </div>
    </div>
  );
};

export default ActivityLogItem;
