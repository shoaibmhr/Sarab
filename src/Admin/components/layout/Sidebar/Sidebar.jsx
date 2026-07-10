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
        bg-[#2B120D]
        border-r
        border-[#4A241B]
        shadow-2xl
        transition-all
        duration-300
        hidden
        lg:flex
        lg:flex-col
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Logo */}
      <SidebarLogo collapsed={collapsed} />

      {/* Collapse Button */}
      <div className="flex justify-end border-b border-[#4A241B] px-3 py-2.5">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            text-orange-200
            transition-all
            duration-300
            hover:bg-orange-600
            hover:text-white
          "
        >
          {collapsed ? (
            <PanelLeftOpen size={18} />
          ) : (
            <PanelLeftClose size={18} />
          )}
        </button>
      </div>

      {/* Navigation */}
      <div className="sidebar-scroll flex-1 space-y-5 overflow-y-auto px-3 py-4">
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
