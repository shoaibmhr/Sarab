import { Link } from "react-router-dom";
import { ChefHat } from "lucide-react";

const SidebarLogo = ({ collapsed = false }) => {
  return (
    <Link
      to="/dashboard"
      className="
        flex items-center
        h-20
        px-5
        border-b
        border-slate-200
        bg-white
        transition-all
        duration-300
      "
    >
      {/* Logo */}
      <div
        className="
          flex
          items-center
          justify-center
          w-12
          h-12
          rounded-xl
          bg-orange-500
          shadow-md
          flex-shrink-0
        "
      >
        <ChefHat size={24} className="text-white" />
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
        <h1 className="text-xl font-bold text-slate-800 leading-none">
          Sarab
        </h1>

        <p className="text-xs text-slate-500 mt-1 whitespace-nowrap">
          Restaurant Management
        </p>
      </div>
    </Link>
  );
};

export default SidebarLogo;
