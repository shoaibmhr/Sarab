// src/admin/pages/Delivery.jsx
import { useState, useMemo } from "react";
import { Search, Plus, MapPinOff, Pencil, Trash2 } from "lucide-react";

import DeliveryZoneModal from "../components/delivery/DeliveryZoneModal";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

import { deliveryZonesData, deliverySettings } from "../constants/deliveryData";

const Delivery = () => {
  const [zones, setZones] = useState(deliveryZonesData);
  const [settings, setSettings] = useState(deliverySettings);
  const [searchTerm, setSearchTerm] = useState("");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingZone, setEditingZone] = useState(null);
  const [deletingZone, setDeletingZone] = useState(null);

  const filteredZones = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return zones.filter((z) => z.area.toLowerCase().includes(term));
  }, [zones, searchTerm]);

  const handleAddClick = () => {
    setEditingZone(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (zone) => {
    setEditingZone(zone);
    setIsFormOpen(true);
  };

  const handleSave = (formData) => {
    if (editingZone) {
      setZones((prev) =>
        prev.map((z) => (z.id === editingZone.id ? { ...z, ...formData } : z)),
      );
    } else {
      const newZone = { ...formData, id: Date.now() };
      setZones((prev) => [newZone, ...prev]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteClick = (zone) => {
    setDeletingZone(zone);
  };

  const handleConfirmDelete = () => {
    setZones((prev) => prev.filter((z) => z.id !== deletingZone.id));
    setDeletingZone(null);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Delivery</h1>
        <p className="mt-1 text-sm text-slate-500">
          Delivery zones aur settings manage karein.
        </p>
      </div>

      {/* Global Delivery Settings */}
      <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
        <h3 className="text-sm font-bold text-slate-800">Delivery Settings</h3>

        <div className="mt-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-500">
              Minimum Order Amount (Rs)
            </label>
            <input
              type="number"
              value={settings.minOrderAmount}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  minOrderAmount: Number(e.target.value),
                }))
              }
              className="
                w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-500">
              Default Delivery Fee (Rs)
            </label>
            <input
              type="number"
              value={settings.defaultDeliveryFee}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  defaultDeliveryFee: Number(e.target.value),
                }))
              }
              className="
                w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
                text-sm text-slate-700 outline-none transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            />
          </div>

          <div className="flex items-end">
            <div className="flex w-full items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-2">
              <span className="text-sm font-medium text-slate-700">
                Delivery Enabled
              </span>
              <button
                type="button"
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    isDeliveryEnabled: !prev.isDeliveryEnabled,
                  }))
                }
                className={`
                  relative h-6 w-11 flex-shrink-0 rounded-full transition-colors duration-300
                  ${settings.isDeliveryEnabled ? "bg-orange-600" : "bg-slate-300"}
                `}
              >
                <span
                  className={`
                    absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300
                    ${settings.isDeliveryEnabled ? "translate-x-5" : "translate-x-0.5"}
                  `}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Zones Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search area..."
            className="
              w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-4
              text-sm text-slate-700 outline-none
              transition-all duration-300
              focus:border-orange-400 focus:ring-2 focus:ring-orange-100
            "
          />
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
          Add Zone
        </button>
      </div>

      {/* Zones List */}
      {filteredZones.length > 0 ? (
        <>
          {/* Desktop/Tablet — Table */}
          <div className="hidden overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Area
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Delivery Fee
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Est. Time
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Free Above
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
                {filteredZones.map((zone) => (
                  <tr
                    key={zone.id}
                    className="border-b border-slate-50 last:border-none hover:bg-slate-50/50"
                  >
                    <td className="px-4 py-3 text-sm font-semibold text-slate-800">
                      {zone.area}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      Rs {zone.deliveryFee}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">
                      {zone.estimatedTime}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">
                      {zone.freeDeliveryMin > 0
                        ? `Rs ${zone.freeDeliveryMin.toLocaleString()}`
                        : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          zone.status === "active"
                            ? "bg-green-50 text-green-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {zone.status === "active" ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleEditClick(zone)}
                          className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(zone)}
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
            {filteredZones.map((zone) => (
              <div
                key={zone.id}
                className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">
                    {zone.area}
                  </p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      zone.status === "active"
                        ? "bg-green-50 text-green-600"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {zone.status === "active" ? "Active" : "Inactive"}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Rs {zone.deliveryFee} · {zone.estimatedTime}
                  {zone.freeDeliveryMin > 0 &&
                    ` · Free above Rs ${zone.freeDeliveryMin.toLocaleString()}`}
                </p>
                <div className="mt-2.5 flex items-center justify-end gap-1 border-t border-slate-50 pt-2.5">
                  <button
                    onClick={() => handleEditClick(zone)}
                    className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(zone)}
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
          <MapPinOff size={36} className="text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-500">
            Koi delivery zone nahi mila
          </p>
        </div>
      )}

      <DeliveryZoneModal
        key={editingZone?.id ?? "new"}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        initialData={editingZone}
      />

      <ConfirmDeleteModal
        isOpen={!!deletingZone}
        onClose={() => setDeletingZone(null)}
        onConfirm={handleConfirmDelete}
        itemName={deletingZone?.area}
      />
    </div>
  );
};

export default Delivery;
