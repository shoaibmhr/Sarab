import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon: Icon, title, path, collapsed = false }) => {
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
        px-4
        py-3
        transition-all
        duration-300
        overflow-hidden

        ${
          isActive
            ? "bg-orange-500 text-white shadow-md"
            : "text-slate-600 hover:bg-orange-50 hover:text-orange-500"
        }
        `
      }
    >
      {({ isActive }) => (
        <>
          {/* Icon */}
          <Icon
            size={20}
            className={`
              flex-shrink-0
              transition-all
              duration-300
              ${
                isActive
                  ? "text-white"
                  : "text-slate-500 group-hover:text-orange-500"
              }
            `}
          />

          {/* Title */}
          <span
            className={`
              whitespace-nowrap
              font-medium
              transition-all
              duration-300
              ${collapsed ? "w-0 opacity-0" : "opacity-100"}
            `}
          >
            {title}
          </span>

          {/* Active Indicator */}
          {isActive && (
            <span
              className="
                absolute
                right-3
                h-2
                w-2
                rounded-full
                bg-white
              "
            />
          )}
        </>
      )}
    </NavLink>
  );
};

export default SidebarItem;
