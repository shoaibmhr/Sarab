import { LogOut, UserCircle2 } from "lucide-react";

const SidebarFooter = ({ collapsed = false }) => {
  return (
    <div className="border-t border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100">
            <UserCircle2 className="h-6 w-6 text-orange-500" />
          </div>

          {!collapsed && (
            <div className="overflow-hidden">
              <h4 className="truncate text-sm font-semibold text-slate-800">
                Muhammad Shoaib
              </h4>

              <p className="truncate text-xs text-slate-500">Administrator</p>
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
            rounded-lg
            text-slate-500
            transition-all
            duration-300
            hover:bg-red-50
            hover:text-red-500
          "
        >
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
};

export default SidebarFooter;
