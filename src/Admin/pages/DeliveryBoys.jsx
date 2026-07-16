// src/admin/pages/DeliveryBoys.jsx
import { useState, useMemo } from "react";
import { Search, Plus, Bike, Pencil, Trash2, Star } from "lucide-react";

import RiderStatusBadge from "../components/delivery-boys/RiderStatusBadge";
import DeliveryBoyModal from "../components/delivery-boys/DeliveryBoyModal";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

import { deliveryBoysData, vehicleTypes } from "../constants/deliveryBoysData";

const DeliveryBoys = () => {
  const [riders, setRiders] = useState(deliveryBoysData);
  const [searchTerm, setSearchTerm] = useState("");
  const [vehicleFilter, setVehicleFilter] = useState("All");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingRider, setEditingRider] = useState(null);
  const [deletingRider, setDeletingRider] = useState(null);

  const filteredRiders = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return riders.filter((r) => {
      const matchesSearch = r.name.toLowerCase().includes(term);
      const matchesVehicle =
        vehicleFilter === "All" || r.vehicle === vehicleFilter;
      return matchesSearch && matchesVehicle;
    });
  }, [riders, searchTerm, vehicleFilter]);

  const availableCount = riders.filter((r) => r.status === "available").length;
  const onDeliveryCount = riders.filter(
    (r) => r.status === "on_delivery",
  ).length;

  const handleAddClick = () => {
    setEditingRider(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (rider) => {
    setEditingRider(rider);
    setIsFormOpen(true);
  };

  const handleSave = (formData) => {
    if (editingRider) {
      setRiders((prev) =>
        prev.map((r) => (r.id === editingRider.id ? { ...r, ...formData } : r)),
      );
    } else {
      const newRider = {
        ...formData,
        id: Date.now(),
        activeOrders: 0,
        totalDeliveries: 0,
        rating: 0,
      };
      setRiders((prev) => [newRider, ...prev]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteClick = (rider) => {
    setDeletingRider(rider);
  };

  const handleConfirmDelete = () => {
    setRiders((prev) => prev.filter((r) => r.id !== deletingRider.id));
    setDeletingRider(null);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Delivery Boys</h1>
        <p className="mt-1 text-sm text-slate-500">
          Riders manage karein aur unka status dekhein.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Total Riders
          </p>
          <h3 className="mt-1 text-sm font-bold text-slate-800">
            {riders.length}
          </h3>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
            Available
          </p>
          <h3 className="mt-1 text-sm font-bold text-slate-800">
            {availableCount}
          </h3>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            On Delivery
          </p>
          <h3 className="mt-1 text-sm font-bold text-slate-800">
            {onDeliveryCount}
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
              placeholder="Search riders..."
              className="
                w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-4
                text-sm text-slate-700 outline-none
                transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            />
          </div>

          <select
            value={vehicleFilter}
            onChange={(e) => setVehicleFilter(e.target.value)}
            className="
              w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
              text-sm text-slate-700 outline-none
              transition-all duration-300
              focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              sm:w-auto
            "
          >
            {vehicleTypes.map((v) => (
              <option key={v} value={v}>
                {v}
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
          Add Rider
        </button>
      </div>

      {/* Riders List */}
      {filteredRiders.length > 0 ? (
        <>
          {/* Desktop/Tablet — Table */}
          <div className="hidden overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Rider
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Vehicle
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Active Orders
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Total Deliveries
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Rating
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
                {filteredRiders.map((rider) => (
                  <tr
                    key={rider.id}
                    className="border-b border-slate-50 last:border-none hover:bg-slate-50/50"
                  >
                    <td className="px-4 py-3">
                      <p className="text-sm font-semibold text-slate-800">
                        {rider.name}
                      </p>
                      <p className="text-xs text-slate-400">{rider.phone}</p>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {rider.vehicle}
                      {rider.vehicleNumber !== "—" && (
                        <span className="text-slate-400">
                          {" "}
                          · {rider.vehicleNumber}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">
                      {rider.activeOrders}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">
                      {rider.totalDeliveries}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <Star
                          size={13}
                          className="fill-amber-400 text-amber-400"
                        />
                        {rider.rating || "—"}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <RiderStatusBadge status={rider.status} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleEditClick(rider)}
                          className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(rider)}
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
            {filteredRiders.map((rider) => (
              <div
                key={rider.id}
                className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">
                    {rider.name}
                  </p>
                  <RiderStatusBadge status={rider.status} />
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {rider.vehicle} · {rider.phone}
                </p>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>
                    {rider.activeOrders} active · {rider.totalDeliveries} total
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    {rider.rating || "—"}
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-end gap-1 border-t border-slate-50 pt-2.5">
                  <button
                    onClick={() => handleEditClick(rider)}
                    className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(rider)}
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
          <Bike size={36} className="text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-500">
            Koi rider nahi mila
          </p>
        </div>
      )}

      <DeliveryBoyModal
        key={editingRider?.id ?? "new"}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        initialData={editingRider}
      />

      <ConfirmDeleteModal
        isOpen={!!deletingRider}
        onClose={() => setDeletingRider(null)}
        onConfirm={handleConfirmDelete}
        itemName={deletingRider?.name}
      />
    </div>
  );
};

export default DeliveryBoys;
