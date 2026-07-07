import { X } from "lucide-react";
import SidebarLogo from "./SidebarLogo";
import SidebarSection from "./SidebarSection";
import SidebarFooter from "./SidebarFooter";
import { sidebarData } from "../../../constants/sidebarData";

const MobileSidebar = ({ isOpen, setIsSidebarOpen }) => {
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
          flex h-screen w-72 flex-col
          bg-white shadow-xl
          transition-transform duration-300 lg:hidden

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Top */}
        <div className="flex items-center justify-between border-b border-slate-200">
          <SidebarLogo />

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="mr-4 rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
          {sidebarData.map((section) => (
            <SidebarSection
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>

        {/* Footer */}
        <SidebarFooter />
      </aside>
    </>
  );
};

export default MobileSidebar;
