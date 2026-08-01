// src/admin/components/layout/Header/Header.jsx
import { useState, useRef, useEffect } from "react";
import { Menu, Bell, Search, UserCircle2 } from "lucide-react";
import SearchModal from "./SearchModal";
import NotificationsDropdown from "./NotificationsDropdown";
import ProfileDropdown from "./ProfileDropdown";
import { notificationsData } from "../../../constants/notificationsData";

const Header = ({ setIsSidebarOpen }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const unreadCount = notificationsData.filter((n) => !n.isRead).length;

  // Bahar click karne pe dropdowns band ho jayen
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setIsNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
          >
            <Menu size={20} />
          </button>

          <h1 className="text-lg font-bold text-slate-800">Dashboard</h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <Search size={18} />
          </button>

          {/* Notification */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => {
                setIsNotifOpen((prev) => !prev);
                setIsProfileOpen(false);
              }}
              className="relative rounded-lg p-2 hover:bg-slate-100"
            >
              <Bell size={18} />
              {unreadCount > 0 && (
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
              )}
            </button>

            {isNotifOpen && (
              <NotificationsDropdown onClose={() => setIsNotifOpen(false)} />
            )}
          </div>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => {
                setIsProfileOpen((prev) => !prev);
                setIsNotifOpen(false);
              }}
              className="rounded-full hover:bg-slate-100"
            >
              <UserCircle2 size={30} className="text-slate-700" />
            </button>

            {isProfileOpen && (
              <ProfileDropdown onClose={() => setIsProfileOpen(false)} />
            )}
          </div>
        </div>
      </header>

      <SearchModal
        key={isSearchOpen ? "open" : "closed"}
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Header;
