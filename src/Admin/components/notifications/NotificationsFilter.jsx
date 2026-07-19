// src/admin/components/notifications/NotificationsFilter.jsx
const NotificationsFilter = ({ activeFilter, onFilterChange, types }) => {
  return (
    <div className="flex gap-1.5 overflow-x-auto rounded-xl border border-slate-100 bg-white p-1.5 shadow-sm">
      <button
        onClick={() => onFilterChange("All")}
        className={`
          flex-shrink-0 rounded-lg px-3.5 py-2 text-sm font-semibold
          transition-all duration-300
          ${
            activeFilter === "All"
              ? "bg-orange-600 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-50"
          }
        `}
      >
        All
      </button>
      {types.map((type) => (
        <button
          key={type.value}
          onClick={() => onFilterChange(type.value)}
          className={`
            flex-shrink-0 rounded-lg px-3.5 py-2 text-sm font-semibold
            transition-all duration-300
            ${
              activeFilter === type.value
                ? "bg-orange-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-50"
            }
          `}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
};

export default NotificationsFilter;
