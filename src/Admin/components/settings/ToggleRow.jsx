// src/admin/components/settings/ToggleRow.jsx
const ToggleRow = ({ label, description, checked, onChange }) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-3">
      <div>
        <p className="text-sm font-medium text-slate-700">{label}</p>
        {description && <p className="text-xs text-slate-400">{description}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`
          relative inline-flex h-6 w-11 flex-shrink-0 items-center
          rounded-full border-0 p-0 outline-none transition-colors duration-300
          ${checked ? "bg-orange-600" : "bg-slate-300"}
        `}
        style={{ appearance: "none" }}
      >
        <span
          className={`
            inline-block h-5 w-5 transform rounded-full bg-white shadow-sm
            transition-transform duration-300
            ${checked ? "translate-x-5" : "translate-x-0.5"}
          `}
        />
      </button>
    </div>
  );
};

export default ToggleRow;
