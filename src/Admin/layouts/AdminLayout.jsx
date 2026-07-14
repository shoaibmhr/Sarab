import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar/Sidebar";
import MobileSidebar from "../components/layout/Sidebar/MobileSidebar";
import Header from "../components/layout/Header/Header";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#FFF8F2]">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        <main className="flex-1 overflow-y-auto bg-[#FFF8F2] p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
