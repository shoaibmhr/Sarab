import { useState } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import SidebarLogo from "./SidebarLogo";
import SidebarSection from "./SidebarSection";
import SidebarFooter from "./SidebarFooter";

import { sidebarData } from "../../../constants/sidebarData";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        sticky
        top-0
        h-screen
        bg-white
        border-r
        border-slate-200
        shadow-sm
        transition-all
        duration-300
        hidden
        lg:flex
        lg:flex-col
        ${collapsed ? "w-24" : "w-72"}
      `}
    >
      {/* Logo */}
      <SidebarLogo collapsed={collapsed} />

      {/* Collapse Button */}
      <div className="flex justify-end px-4 py-3 border-b border-slate-200">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            flex
            items-center
            justify-center
            h-10
            w-10
            rounded-lg
            hover:bg-orange-50
            text-slate-600
            hover:text-orange-500
            transition-all
            duration-300
          "
        >
          {collapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6 scrollbar-thin">
        {sidebarData.map((section) => (
          <SidebarSection
            key={section.title}
            title={section.title}
            items={section.items}
            collapsed={collapsed}
          />
        ))}
      </div>
      {/* Footer */}
      <SidebarFooter collapsed={collapsed} />
    </aside>
  );
};

export default Sidebar;
