import { Menu, Bell, Search, UserCircle2 } from "lucide-react";

const Header = ({ setIsSidebarOpen }) => {
  return (
    <header className="flex w-full items-center justify-between border-b border-orange-100 bg-white px-4 py-3 md:px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Mobile Toggle */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="rounded-lg p-2 transition hover:bg-orange-100 lg:hidden"
        >
          <Menu size={24} className="text-[#2B120D]" />
        </button>

        <h1 className="text-2xl font-bold text-[#2B120D]">Dashboard</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Search */}
        <button className="rounded-lg p-2 hover:bg-orange-50">
          <Search size={20} className="text-[#2B120D]" />
        </button>

        {/* Notification */}
        <button className="relative rounded-lg p-2 hover:bg-orange-50">
          <Bell size={20} className="text-[#2B120D]" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Profile */}
        <button className="rounded-full hover:bg-orange-50">
          <UserCircle2 size={36} className="text-[#2B120D]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
