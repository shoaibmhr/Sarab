// src/admin/pages/Employees.jsx
import { useState, useMemo } from "react";
import { UserX, Pencil, Trash2, Phone, Mail } from "lucide-react";

import EmployeesToolbar from "../components/employees/EmployeesToolbar";
import EmployeeModal from "../components/employees/EmployeeModal";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

import { employeesData, employeeRoles } from "../constants/employeesData";

const Employees = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [deletingEmployee, setDeletingEmployee] = useState(null);

  const filteredEmployees = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return employees.filter((e) => {
      const matchesSearch = e.name.toLowerCase().includes(term);
      const matchesRole = roleFilter === "All" || e.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [employees, searchTerm, roleFilter]);

  const activeCount = employees.filter((e) => e.status === "active").length;

  const handleAddClick = () => {
    setEditingEmployee(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (employee) => {
    setEditingEmployee(employee);
    setIsFormOpen(true);
  };

  const handleSave = (formData) => {
    if (editingEmployee) {
      setEmployees((prev) =>
        prev.map((e) =>
          e.id === editingEmployee.id ? { ...e, ...formData } : e,
        ),
      );
    } else {
      const newEmployee = {
        ...formData,
        id: Date.now(),
        joinDate: new Date().toISOString().split("T")[0],
      };
      setEmployees((prev) => [newEmployee, ...prev]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteClick = (employee) => {
    setDeletingEmployee(employee);
  };

  const handleConfirmDelete = () => {
    setEmployees((prev) => prev.filter((e) => e.id !== deletingEmployee.id));
    setDeletingEmployee(null);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Employees</h1>
        <p className="mt-1 text-sm text-slate-500">
          Staff members manage karein.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Total Staff
          </p>
          <h3 className="mt-1 text-xl font-bold text-slate-800">
            {employees.length}
          </h3>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
            Active
          </p>
          <h3 className="mt-1 text-xl font-bold text-slate-800">
            {activeCount}
          </h3>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Roles
          </p>
          <h3 className="mt-1 text-xl font-bold text-slate-800">
            {employeeRoles.length - 1}
          </h3>
        </div>
      </div>

      <EmployeesToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        roleFilter={roleFilter}
        onRoleChange={setRoleFilter}
        roles={employeeRoles}
        onAddClick={handleAddClick}
      />

      {filteredEmployees.length > 0 ? (
        <>
          {/* Desktop/Tablet — Table */}
          <div className="hidden overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Name
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Role
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Contact
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Shift
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Status
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((emp) => (
                  <tr
                    key={emp.id}
                    className="border-b border-slate-50 last:border-none hover:bg-slate-50/50"
                  >
                    <td className="px-4 py-3">
                      <p className="text-sm font-semibold text-slate-800">
                        {emp.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        Since {emp.joinDate}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {emp.role}
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-xs text-slate-500">{emp.phone}</p>
                      <p className="text-xs text-slate-400">{emp.email}</p>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500">
                      {emp.shift}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          emp.status === "active"
                            ? "bg-green-50 text-green-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {emp.status === "active" ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleEditClick(emp)}
                          className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(emp)}
                          className="rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile — Cards */}
          <div className="space-y-3 md:hidden">
            {filteredEmployees.map((emp) => (
              <div
                key={emp.id}
                className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">
                    {emp.name}
                  </p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      emp.status === "active"
                        ? "bg-green-50 text-green-600"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {emp.status === "active" ? "Active" : "Inactive"}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium text-orange-500">
                  {emp.role}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                  <Phone size={12} />
                  {emp.phone}
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                  <Mail size={12} />
                  {emp.email}
                </div>
                <p className="mt-1.5 text-xs text-slate-400">{emp.shift}</p>
                <div className="mt-2.5 flex items-center justify-end gap-1 border-t border-slate-50 pt-2.5">
                  <button
                    onClick={() => handleEditClick(emp)}
                    className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(emp)}
                    className="rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
          <UserX size={36} className="text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-500">
            Koi employee nahi mila
          </p>
        </div>
      )}

      <EmployeeModal
        key={editingEmployee?.id ?? "new"}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        initialData={editingEmployee}
      />

      <ConfirmDeleteModal
        isOpen={!!deletingEmployee}
        onClose={() => setDeletingEmployee(null)}
        onConfirm={handleConfirmDelete}
        itemName={deletingEmployee?.name}
      />
    </div>
  );
};

export default Employees;
