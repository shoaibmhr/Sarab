import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";

const SidebarLogo = ({ collapsed = false }) => {
  return (
    <Link
      to="/dashboard"
      className="
        flex items-center
        h-20
       items-center border-b border-[#4A241B] px-5 py-6
        transition-all
        duration-300
      "
    >
      {/* Logo */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600 text-white">
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
        <h1 className="text-xl font-bold text-white leading-none">Sarab</h1>

        <p className="text-xs text-orange-200 mt-1 whitespace-nowrap">
          Restaurant Management
        </p>
      </div>
    </Link>
  );
};

export default SidebarLogo;
