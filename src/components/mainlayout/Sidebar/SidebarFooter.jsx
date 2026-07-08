import { LogOut, UserCircle2 } from "lucide-react";

const SidebarFooter = ({ collapsed = false }) => {
  return (
    <div
      className="border-t border-[#4A241B]  px-5
py-5"
    >
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4A241B]">
            <UserCircle2 className="h-6 w-6 text-orange-300" />
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
            h-10
            w-10
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
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
};

export default SidebarFooter;
