import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import SidebarLogo from "./SidebarLogo";
import SidebarSection from "./SidebarSection";
import SidebarFooter from "./SidebarFooter";
import ConfirmLogoutModal from "../../common/ConfirmLogoutModal";
import { sidebarData } from "../../../constants/sidebarData";

const MobileSidebar = ({ isOpen, setIsSidebarOpen }) => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const navigate = useNavigate();

  const handleAction = (action) => {
    if (action === "logout") {
      setIsLogoutOpen(true);
    }
  };

  const handleConfirmLogout = () => {
    // ⚠️ Abhi placeholder — backend banne par yahan real logout API call hogi
    localStorage.removeItem("adminToken");
    setIsLogoutOpen(false);
    setIsSidebarOpen(false);
    navigate("/admin/login");
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          flex h-screen w-64 flex-col
         bg-[#2B120D] shadow-2xl
          transition-transform duration-300 lg:hidden

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Top */}
        <div className="flex items-center justify-between border-b border-[#4A241B]">
          <SidebarLogo collapsed={false} />

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="
mr-3
rounded-xl
p-2
text-orange-200
hover:bg-orange-600
hover:text-white
transition-all
duration-300
"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          {sidebarData.map((section) => (
            <SidebarSection
              key={section.title}
              title={section.title}
              items={section.items}
              onAction={handleAction}
            />
          ))}
        </div>

        {/* Footer */}
        <SidebarFooter collapsed={false} />
      </aside>

      {/* Logout Confirmation */}
      <ConfirmLogoutModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleConfirmLogout}
      />
    </>
  );
};

export default MobileSidebar;
