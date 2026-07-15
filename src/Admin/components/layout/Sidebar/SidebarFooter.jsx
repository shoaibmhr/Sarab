import { LogOut, UserCircle2 } from "lucide-react";

const SidebarFooter = ({ collapsed = false }) => {
  return (
    <div
      className="border-t border-[#4A241B]  px-4
py-4"
    >
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4A241B]">
            <UserCircle2 className="h-5 w-5 text-orange-300" />
          </div>

          {!collapsed && (
            <div className="overflow-hidden">
              <h4 className="truncate text-sm font-semibold text-white">
                Muhammad Shoaib
              </h4>

              <p className="truncate text-xs text-orange-200">Administrator</p>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
           text-orange-300
            transition-all
            duration-300
           hover:bg-red-500
           hover:text-white
          "
        >
          <LogOut size={18} />
        </button>
      </div>
    </div>
  );
};

export default SidebarFooter;
