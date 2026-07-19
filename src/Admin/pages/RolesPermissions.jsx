// src/admin/pages/RolesPermissions.jsx
import { useState } from "react";
import { Plus } from "lucide-react";

import RoleCard from "../components/roles/RoleCard";
import PermissionsMatrix from "../components/roles/PermissionsMatrix";
import RoleModal from "../components/roles/RoleModal";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

import { rolesData } from "../constants/rolesData";

const RolesPermissions = () => {
  const [roles, setRoles] = useState(rolesData);
  const [selectedRoleId, setSelectedRoleId] = useState(
    rolesData[0]?.id || null,
  );

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [deletingRole, setDeletingRole] = useState(null);

  const selectedRole = roles.find((r) => r.id === selectedRoleId) || null;

  const handleAddClick = () => {
    setEditingRole(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (role) => {
    setEditingRole(role);
    setIsFormOpen(true);
  };

  const handleSave = (formData) => {
    if (editingRole) {
      setRoles((prev) =>
        prev.map((r) => (r.id === editingRole.id ? { ...r, ...formData } : r)),
      );
    } else {
      const newRole = {
        ...formData,
        id: Date.now(),
        userCount: 0,
        isSystemRole: false,
      };
      setRoles((prev) => [...prev, newRole]);
      setSelectedRoleId(newRole.id);
    }
    setIsFormOpen(false);
  };

  const handleDeleteClick = (role) => {
    setDeletingRole(role);
  };

  const handleConfirmDelete = () => {
    setRoles((prev) => prev.filter((r) => r.id !== deletingRole.id));
    if (selectedRoleId === deletingRole.id) setSelectedRoleId(null);
    setDeletingRole(null);
  };

  const handleTogglePermission = (module, action) => {
    if (!selectedRole || selectedRole.isSystemRole) return;
    setRoles((prev) =>
      prev.map((r) =>
        r.id === selectedRole.id
          ? {
              ...r,
              permissions: {
                ...r.permissions,
                [module]: {
                  ...r.permissions[module],
                  [action]: !r.permissions[module][action],
                },
              },
            }
          : r,
      ),
    );
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-800">
            Roles & Permissions
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Staff roles aur unki access levels manage karein.
          </p>
        </div>

        <button
          onClick={handleAddClick}
          className="
            flex items-center justify-center gap-2 rounded-xl bg-orange-600
            px-3.5 py-2 text-sm font-semibold text-white shadow-sm
            transition-all duration-300 hover:bg-orange-700
          "
        >
          <Plus size={15} />
          Add Role
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Roles List */}
        <div className="space-y-3 lg:col-span-1">
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => setSelectedRoleId(role.id)}
              className={`
                cursor-pointer rounded-2xl transition-all duration-300
                ${selectedRoleId === role.id ? "ring-2 ring-orange-500" : ""}
              `}
            >
              <RoleCard
                role={role}
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
              />
            </div>
          ))}
        </div>

        {/* Permissions Matrix */}
        <div className="lg:col-span-2">
          <PermissionsMatrix
            role={selectedRole}
            onTogglePermission={handleTogglePermission}
            readOnly={selectedRole?.isSystemRole}
          />
        </div>
      </div>

      <RoleModal
        key={editingRole?.id ?? "new"}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        initialData={editingRole}
      />

      <ConfirmDeleteModal
        isOpen={!!deletingRole}
        onClose={() => setDeletingRole(null)}
        onConfirm={handleConfirmDelete}
        itemName={deletingRole?.name}
      />
    </div>
  );
};

export default RolesPermissions;
