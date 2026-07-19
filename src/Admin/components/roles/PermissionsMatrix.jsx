// src/admin/components/roles/PermissionsMatrix.jsx
import { Check, X } from "lucide-react";
import {
  permissionModules,
  permissionActions,
} from "../../constants/rolesData";

const PermissionsMatrix = ({ role, onTogglePermission, readOnly }) => {
  if (!role) {
    return (
      <div className="flex h-full items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          Ek role select karein permissions dekhne ke liye
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      <div className="border-b border-slate-100 p-4 sm:p-5">
        <h3 className="text-base font-bold text-slate-800">
          {role.name} — Permissions
        </h3>
        <p className="text-sm text-slate-500">
          {readOnly
            ? "System role, read-only"
            : "Module ke aage checkbox click karein"}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Module
              </th>
              {permissionActions.map((action) => (
                <th
                  key={action}
                  className="px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  {action}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {permissionModules.map((module) => (
              <tr
                key={module}
                className="border-b border-slate-50 last:border-none"
              >
                <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                  {module}
                </td>
                {permissionActions.map((action) => {
                  const isAllowed = role.permissions[module]?.[action] || false;
                  return (
                    <td key={action} className="px-4 py-2.5 text-center">
                      <button
                        disabled={readOnly}
                        onClick={() => onTogglePermission(module, action)}
                        className={`
                          mx-auto flex h-6 w-6 items-center justify-center rounded-md
                          transition-all duration-300
                          ${
                            isAllowed
                              ? "bg-green-100 text-green-600"
                              : "bg-slate-100 text-slate-300"
                          }
                          ${readOnly ? "cursor-not-allowed" : "cursor-pointer hover:opacity-80"}
                        `}
                      >
                        {isAllowed ? <Check size={14} /> : <X size={14} />}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PermissionsMatrix;
