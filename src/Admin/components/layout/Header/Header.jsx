import { Menu, Bell, Search, UserCircle2 } from "lucide-react";

const Header = ({ setIsSidebarOpen }) => {
  return (
<<<<<<< HEAD
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
=======
    <header className="sticky top-0 z-40 flex h-15 items-center justify-between border-b border-slate-200 bg-white px-6">
>>>>>>> 093e01bf106ed9589cdb682a1dafa87d622dcbe2
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Mobile Toggle */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
        >
          <Menu size={24} />
        </button>

        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <button className="rounded-lg p-2 hover:bg-slate-100">
          <Search size={20} />
        </button>
        {/* Notification */}
        <button className="relative rounded-lg p-2 hover:bg-slate-100">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Profile */}
        <button className="rounded-full hover:bg-slate-100">
          <UserCircle2 size={36} className="text-slate-700" />
        </button>
      </div>
    </header>
  );
};

export default Header;
