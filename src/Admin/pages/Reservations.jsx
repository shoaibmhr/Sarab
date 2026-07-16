// src/admin/pages/Reservations.jsx
import { useState, useMemo } from "react";
import { Search, Plus, CalendarX, Pencil, Trash2, Users } from "lucide-react";

import ReservationModal from "../components/reservations/ReservationModal";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

import {
  reservationsData,
  reservationStatuses,
} from "../constants/reservationsData";

const statusStyles = {
  Confirmed: "bg-green-50 text-green-600",
  Pending: "bg-amber-50 text-amber-600",
  Completed: "bg-blue-50 text-blue-600",
  Cancelled: "bg-red-50 text-red-600",
};

const Reservations = () => {
  const [reservations, setReservations] = useState(reservationsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingReservation, setEditingReservation] = useState(null);
  const [deletingReservation, setDeletingReservation] = useState(null);

  const filteredReservations = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return reservations.filter((r) => {
      const matchesSearch =
        r.customer.toLowerCase().includes(term) ||
        r.id.toLowerCase().includes(term);
      const matchesStatus = statusFilter === "All" || r.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [reservations, searchTerm, statusFilter]);

  const todayCount = reservations.filter(
    (r) => r.date === new Date().toISOString().split("T")[0],
  ).length;
  const confirmedCount = reservations.filter(
    (r) => r.status === "Confirmed",
  ).length;

  const handleAddClick = () => {
    setEditingReservation(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (reservation) => {
    setEditingReservation(reservation);
    setIsFormOpen(true);
  };

  const handleSave = (formData) => {
    if (editingReservation) {
      setReservations((prev) =>
        prev.map((r) =>
          r.id === editingReservation.id ? { ...r, ...formData } : r,
        ),
      );
    } else {
      const newReservation = { ...formData, id: `RES-${Date.now()}` };
      setReservations((prev) => [newReservation, ...prev]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteClick = (reservation) => {
    setDeletingReservation(reservation);
  };

  const handleConfirmDelete = () => {
    setReservations((prev) =>
      prev.filter((r) => r.id !== deletingReservation.id),
    );
    setDeletingReservation(null);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Reservations</h1>
        <p className="mt-1 text-sm text-slate-500">
          Table bookings manage karein.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Total Bookings
          </p>
          <h3 className="mt-1 text-sm font-bold text-slate-800">
            {reservations.length}
          </h3>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
            Today
          </p>
          <h3 className="mt-1 text-sm font-bold text-slate-800">
            {todayCount}
          </h3>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
            Confirmed
          </p>
          <h3 className="mt-1 text-sm font-bold text-slate-800">
            {confirmedCount}
          </h3>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-56">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or ID..."
              className="
                w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-4
                text-sm text-slate-700 outline-none
                transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="
              w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
              text-sm text-slate-700 outline-none
              transition-all duration-300
              focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              sm:w-auto
            "
          >
            {reservationStatuses.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
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
          Add Reservation
        </button>
      </div>

      {/* List */}
      {filteredReservations.length > 0 ? (
        <>
          {/* Desktop/Tablet — Table */}
          <div className="hidden overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Date & Time
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Party
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Table
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
                {filteredReservations.map((res) => (
                  <tr
                    key={res.id}
                    className="border-b border-slate-50 last:border-none hover:bg-slate-50/50"
                  >
                    <td className="px-4 py-3">
                      <p className="text-sm font-semibold text-slate-800">
                        {res.customer}
                      </p>
                      <p className="text-xs text-slate-400">{res.phone}</p>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {res.date} · {res.time}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <Users size={13} />
                        {res.partySize}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">
                      {res.tableNumber || "—"}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          statusStyles[res.status] ||
                          "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {res.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleEditClick(res)}
                          className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(res)}
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
            {filteredReservations.map((res) => (
              <div
                key={res.id}
                className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">
                    {res.customer}
                  </p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      statusStyles[res.status] || "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {res.status}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {res.date} · {res.time} · Table {res.tableNumber || "—"}
                </p>
                <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                  <Users size={12} />
                  {res.partySize} guests
                </div>
                <div className="mt-2.5 flex items-center justify-end gap-1 border-t border-slate-50 pt-2.5">
                  <button
                    onClick={() => handleEditClick(res)}
                    className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(res)}
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
          <CalendarX size={36} className="text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-500">
            Koi reservation nahi mila
          </p>
        </div>
      )}

      <ReservationModal
        key={editingReservation?.id ?? "new"}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        initialData={editingReservation}
      />

      <ConfirmDeleteModal
        isOpen={!!deletingReservation}
        onClose={() => setDeletingReservation(null)}
        onConfirm={handleConfirmDelete}
        itemName={`reservation for ${deletingReservation?.customer}`}
      />
    </div>
  );
};

export default Reservations;
