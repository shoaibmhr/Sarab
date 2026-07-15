import SidebarItem from "./SidebarItem";

const SidebarSection = ({ title, items, collapsed = false }) => {
  return (
    <div className="mb-5">
      {/* Section Title */}
      {!collapsed && (
        <h3
          className="
           text-xs
font-semibold
uppercase
tracking-widest
text-orange-300
mb-3
px-2
          "
        >
          {title}
        </h3>
      )}

      {/* Menu Items */}
      <div className="space-y-1">
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
