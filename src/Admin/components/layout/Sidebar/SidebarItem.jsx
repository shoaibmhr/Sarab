// src/admin/components/layout/Sidebar/SidebarItem.jsx
import { NavLink } from "react-router-dom";

const SidebarItem = ({
  icon: Icon,
  title,
  path,
  collapsed = false,
  action,
  onAction,
}) => {
  const content = (isActive) => (
    <>
      <Icon
        size={14}
        className={`
          flex-shrink-0
          transition-all
          duration-300
          ${isActive ? "text-white" : "text-orange-300 group-hover:text-white"}
        `}
      />

      <span
        className={`
          whitespace-nowrap
          text-sm
          font-small
          transition-all
          duration-300
          ${collapsed ? "w-0 opacity-0" : "opacity-100"}
        `}
      >
        {title}
      </span>

      {isActive && (
        <span className="absolute right-3 h-2 w-2 rounded-full bg-white" />
      )}
    </>
  );

  const sharedClasses = `
    group
    relative
    flex
    items-center
    gap-3
    rounded-xl
    px-3
    py-2.5
    w-full
    transition-all
    duration-300
    ease-in-out
    hover:translate-x-1
    overflow-hidden
    text-orange-100
    hover:bg-[#4A241B]
    hover:text-white
  `;

  // 👇 Agar item ek "action" hai (jaise Logout), NavLink ki jagah button banao
  if (action) {
    return (
      <button
        type="button"
        onClick={() => onAction?.(action)}
        className={sharedClasses}
      >
        {content(false)}
      </button>
    );
  }

  // Normal navigation item
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `
        group
        relative
        flex
        items-center
        gap-3
        rounded-xl
        px-3
        py-2.5
        transition-all
        duration-300
        ease-in-out
        hover:translate-x-1
        overflow-hidden
        ${
          isActive
            ? "bg-orange-600 text-white shadow-lg"
            : "text-orange-100 hover:bg-[#4A241B] hover:text-white"
        }
        `
      }
    >
      {({ isActive }) => content(isActive)}
    </NavLink>
  );
};

export default SidebarItem;
