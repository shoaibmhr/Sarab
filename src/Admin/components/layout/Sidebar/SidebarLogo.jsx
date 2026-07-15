import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";

const SidebarLogo = ({ collapsed = false }) => {
  return (
    <Link
      to="/dashboard"
      className="
        flex items-center
        h-14
       items-center border-b border-[#4A241B] px-4 py-3
        transition-all
        duration-300
      "
    >
      {/* Logo */}
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-600 text-white">
        <FaUtensils />
      </div>

      {/* Logo Text */}
      <div
        className={`
          ml-3
          overflow-hidden
          transition-all
          duration-300
          ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
        `}
      >
        <h1 className="text-base font-bold text-white leading-none">Sarab</h1>

        <p className="text-xs text-orange-200 mt-0.5 whitespace-nowrap">
          Restaurant Management
        </p>
      </div>
    </Link>
  );
};

export default SidebarLogo;
