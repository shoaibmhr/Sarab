import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/mainlayout/Sidebar";
import MobileSidebar from "../components/mainlayout/Sidebar/MobileSidebar";
import Header from "../components/mainlayout/Header/Header";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main */}
      <div className="flex flex-1 flex-col">
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
