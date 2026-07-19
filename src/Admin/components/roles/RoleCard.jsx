// src/admin/components/roles/RoleCard.jsx
import { Pencil, Trash2, ShieldCheck, Users } from "lucide-react";

const RoleCard = ({ role, onEdit, onDelete }) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-orange-50">
            <ShieldCheck size={18} className="text-orange-500" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">{role.name}</p>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Users size={12} />
              {role.userCount} {role.userCount === 1 ? "user" : "users"}
            </div>
          </div>
        </div>

        {!role.isSystemRole && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => onEdit(role)}
              className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            >
              <Pencil size={14} />
            </button>
            <button
              onClick={() => onDelete(role)}
              className="rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
            >
              <Trash2 size={14} />
            </button>
          </div>
        )}
      </div>

      <p className="mt-2.5 text-sm text-slate-500">{role.description}</p>

      {role.isSystemRole && (
        <span className="mt-2.5 inline-block rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
          System Role — Cannot be modified
        </span>
      )}
    </div>
  );
};

export default RoleCard;
