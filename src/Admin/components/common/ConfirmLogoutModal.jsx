// src/admin/components/common/ConfirmLogoutModal.jsx
import { LogOut } from "lucide-react";

const ConfirmLogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
          <LogOut size={22} className="text-red-500" />
        </div>

        <h3 className="mt-3.5 text-base font-bold text-slate-800">
          Logout karna chahte hain?
        </h3>
        <p className="mt-1.5 text-sm text-slate-500">
          Aapko dobara login karna hoga admin panel access karne ke liye.
        </p>

        <div className="mt-4 flex gap-3">
          <button
            onClick={onClose}
            className="
              flex-1 rounded-xl border border-slate-200 py-2 text-sm font-semibold
              text-slate-600 transition-all duration-300 hover:bg-slate-50
            "
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="
              flex-1 rounded-xl bg-red-500 py-2 text-sm font-semibold text-white
              shadow-sm transition-all duration-300 hover:bg-red-600
            "
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogoutModal;
