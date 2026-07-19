// src/admin/components/website-content/ContentTabs.jsx
const tabs = [
  { id: "hero", label: "Hero Banner" },
  { id: "about", label: "About Section" },
  { id: "contact", label: "Contact Info" },
  { id: "social", label: "Social Links" },
];

const ContentTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex gap-1.5 overflow-x-auto rounded-xl border border-slate-100 bg-white p-1.5 shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            flex-shrink-0 rounded-lg px-3.5 py-2 text-sm font-semibold
            transition-all duration-300
            ${
              activeTab === tab.id
                ? "bg-orange-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-50"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ContentTabs;
