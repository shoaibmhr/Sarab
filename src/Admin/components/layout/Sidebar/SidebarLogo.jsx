import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import { PanelLeftClose } from "lucide-react";

const SidebarLogo = ({ collapsed = false, onToggleCollapse }) => {
  return (
    <div className="flex h-14 items-center justify-between border-b border-[#4A241B] px-3">
      <Link to="/admin/dashboard" className="flex min-w-0 items-center">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-orange-600 text-white">
          <FaUtensils />
        </div>

        <div
          className={`
            ml-3 overflow-hidden transition-all duration-300
            ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
          `}
        >
          <h1 className="whitespace-nowrap text-base font-bold leading-none text-white">
            Sarab
          </h1>
        </div>
      </Link>

      {/* Collapse toggle — ab logo ke sath hi hai */}
      {!collapsed && (
        <button
          onClick={onToggleCollapse}
          className="
            flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg
            text-orange-200 transition-all duration-300
            hover:bg-orange-600 hover:text-white
          "
        >
          <PanelLeftClose size={16} />
        </button>
      )}
    </div>
  );
};

export default SidebarLogo;
