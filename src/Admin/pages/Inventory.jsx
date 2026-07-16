// src/admin/pages/Inventory.jsx
import { useState, useMemo } from "react";
import { Archive, PackagePlus } from "lucide-react";

import InventoryToolbar from "../components/inventory/InventoryToolbar";
import StockStatusBadge from "../components/inventory/StockStatusBadge";
import RestockModal from "../components/inventory/RestockModal";

import { inventoryData } from "../constants/inventoryData";

const Inventory = () => {
  const [items, setItems] = useState(inventoryData);
  const [searchTerm, setSearchTerm] = useState("");
  const [stockFilter, setStockFilter] = useState("All");
  const [restockingItem, setRestockingItem] = useState(null);

  const filteredItems = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(term);

      let matchesFilter = true;
      if (stockFilter === "Low Stock") {
        matchesFilter = item.stock > 0 && item.stock <= item.reorderLevel;
      } else if (stockFilter === "Out of Stock") {
        matchesFilter = item.stock === 0;
      }

      return matchesSearch && matchesFilter;
    });
  }, [items, searchTerm, stockFilter]);

  const lowStockCount = items.filter(
    (item) => item.stock > 0 && item.stock <= item.reorderLevel,
  ).length;
  const outOfStockCount = items.filter((item) => item.stock === 0).length;

  const handleRestockConfirm = (itemId, addedQty) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              stock: item.stock + addedQty,
              lastRestocked: new Date().toISOString().split("T")[0],
            }
          : item,
      ),
    );
    setRestockingItem(null);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Inventory</h1>
        <p className="mt-1 text-sm text-slate-500">
          Stock levels track karein aur restock karein.
        </p>
      </div>

      {/* Quick summary cards */}
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Total Items
          </p>
          <h3 className="mt-1 text-1xl font-bold text-slate-800">
            {items.length}
          </h3>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-500">
            Low Stock
          </p>
          <h3 className="mt-1 text-1xl font-bold text-slate-800">
            {lowStockCount}
          </h3>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-red-500">
            Out of Stock
          </p>
          <h3 className="mt-1 text-1xl font-bold text-slate-800">
            {outOfStockCount}
          </h3>
        </div>
      </div>

      <InventoryToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        stockFilter={stockFilter}
        onStockFilterChange={setStockFilter}
      />

      {filteredItems.length > 0 ? (
        <>
          {/* Desktop/Tablet — Table */}
          <div className="hidden overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Item
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Category
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Stock
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Status
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Last Restocked
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-50 last:border-none hover:bg-slate-50/50"
                  >
                    <td className="px-4 py-3 text-sm font-semibold text-slate-800">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">
                      {item.category}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-700">
                      {item.stock} {item.unit}
                    </td>
                    <td className="px-4 py-3">
                      <StockStatusBadge
                        stock={item.stock}
                        reorderLevel={item.reorderLevel}
                      />
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-400">
                      {item.lastRestocked}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setRestockingItem(item)}
                        className="
                          flex items-center gap-1.5 rounded-lg border border-orange-200
                          px-2.5 py-1.5 text-xs font-semibold text-orange-600
                          transition-all duration-300 hover:bg-orange-50
                        "
                      >
                        <PackagePlus size={13} />
                        Restock
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile — Cards */}
          <div className="space-y-3 md:hidden">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">
                    {item.name}
                  </p>
                  <StockStatusBadge
                    stock={item.stock}
                    reorderLevel={item.reorderLevel}
                  />
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {item.category} · {item.stock} {item.unit} in stock
                </p>
                <div className="mt-2.5 flex items-center justify-between border-t border-slate-50 pt-2.5">
                  <span className="text-xs text-slate-400">
                    Restocked: {item.lastRestocked}
                  </span>
                  <button
                    onClick={() => setRestockingItem(item)}
                    className="
                      flex items-center gap-1.5 rounded-lg border border-orange-200
                      px-2.5 py-1.5 text-xs font-semibold text-orange-600
                      transition-all duration-300 hover:bg-orange-50
                    "
                  >
                    <PackagePlus size={13} />
                    Restock
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
          <Archive size={36} className="text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-500">
            Koi item nahi mila
          </p>
        </div>
      )}

      <RestockModal
        item={restockingItem}
        onClose={() => setRestockingItem(null)}
        onConfirm={handleRestockConfirm}
      />
    </div>
  );
};

export default Inventory;
