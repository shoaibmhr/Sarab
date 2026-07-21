import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PanelLeftOpen } from "lucide-react";

import SidebarLogo from "./SidebarLogo";
import SidebarSection from "./SidebarSection";
import SidebarFooter from "./SidebarFooter";
import ConfirmLogoutModal from "../../common/ConfirmLogoutModal";

import { sidebarData } from "../../../constants/sidebarData";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const navigate = useNavigate();

  const handleAction = (action) => {
    if (action === "logout") {
      setIsLogoutOpen(true);
    }
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLogoutOpen(false);
    navigate("/admin/login");
  };

  return (
    <aside
      className={`
        sticky
        top-0
        h-screen
        flex-shrink-0
        bg-[#2B120D]
        border-r
        border-[#4A241B]
        shadow-2xl
        transition-all
        duration-300
        hidden
        lg:flex
        lg:flex-col
        ${collapsed ? "w-20" : "w-48"}
      `}
    >
      {/* Logo + Collapse Toggle (ek sath) */}
      <SidebarLogo
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />

      {/* Jab collapsed ho, expand button chhota sa center mein dikhega */}
      {collapsed && (
        <div className="flex justify-center border-b border-[#4A241B] py-2">
          <button
            onClick={() => setCollapsed(false)}
            className="
              flex h-8 w-8 items-center justify-center rounded-lg
              text-orange-200 transition-all duration-300
              hover:bg-orange-600 hover:text-white
            "
          >
            <PanelLeftOpen size={16} />
          </button>
        </div>
      )}

      {/* Navigation */}
      <div className="sidebar-scroll flex-1 space-y-5 overflow-y-auto px-3 py-4">
        {sidebarData.map((section) => (
          <SidebarSection
            key={section.title}
            title={section.title}
            items={section.items}
            collapsed={collapsed}
            onAction={handleAction}
          />
        ))}
      </div>

      {/* Footer */}
      <SidebarFooter collapsed={collapsed} />

      {/* Logout Confirmation */}
      <ConfirmLogoutModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleConfirmLogout}
      />
    </aside>
  );
};

export default Sidebar;
