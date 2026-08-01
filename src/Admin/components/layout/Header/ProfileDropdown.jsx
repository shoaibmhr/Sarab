// src/admin/components/layout/Header/ProfileDropdown.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCircle2, User, LogOut } from "lucide-react";
import ConfirmLogoutModal from "../../common/ConfirmLogoutModal";

const ProfileDropdown = ({ onClose }) => {
  const navigate = useNavigate();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const handleProfileClick = () => {
    navigate("/admin/profile");
    onClose();
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLogoutOpen(false);
    onClose();
    navigate("/auth/login");
  };

  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          absolute right-0 top-11 z-50 w-56 overflow-hidden rounded-2xl
          border border-slate-100 bg-white shadow-xl
        "
      >
        {/* User Info */}
        <div className="flex items-center gap-2.5 border-b border-slate-100 px-4 py-3.5">
          <UserCircle2 size={34} className="flex-shrink-0 text-slate-400" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-800">
              Muhammad Shoaib
            </p>
            <p className="text-xs text-slate-400">Super Admin</p>
          </div>
        </div>

        {/* Menu */}
        <div className="p-1.5">
          <button
            onClick={handleProfileClick}
            className="
              flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left
              text-sm text-slate-600 transition hover:bg-slate-50
            "
          >
            <User size={16} />
            My Profile
          </button>

          <button
            onClick={() => setIsLogoutOpen(true)}
            className="
              flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left
              text-sm text-red-500 transition hover:bg-red-50
            "
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>

      <ConfirmLogoutModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleConfirmLogout}
      />
    </>
  );
};

export default ProfileDropdown;
