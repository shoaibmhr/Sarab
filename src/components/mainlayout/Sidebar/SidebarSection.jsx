import SidebarItem from "./SidebarItem";

const SidebarSection = ({ title, items, collapsed = false }) => {
  return (
    <div className="mb-6">
      {/* Section Title */}
      {!collapsed && (
        <h3
          className="
            px-4
            mb-3
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-slate-400
          "
        >
          {title}
        </h3>
      )}

      {/* Menu Items */}
      <div className="space-y-2">
        {items.map((item) => (
          <SidebarItem
            key={item.path}
            title={item.title}
            path={item.path}
            icon={item.icon}
            collapsed={collapsed}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarSection;
