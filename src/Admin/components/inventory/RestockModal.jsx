// src/admin/components/inventory/RestockModal.jsx
import { useState } from "react";
import { X, PackagePlus } from "lucide-react";

const RestockModal = ({ item, onClose, onConfirm }) => {
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  if (!item) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const qty = Number(quantity);
    if (!quantity || qty <= 0) {
      setError("Sahi quantity likhein");
      return;
    }
    onConfirm(item.id, qty);
    setQuantity("");
    setError("");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-2xl bg-white shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5">
          <h3 className="text-base font-bold text-slate-800">Restock Item</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 px-4 py-4">
          <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-orange-50">
              <PackagePlus size={18} className="text-orange-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                {item.name}
              </p>
              <p className="text-xs text-slate-500">
                Current stock: {item.stock} {item.unit}
              </p>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Quantity to Add ({item.unit})
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
                setError("");
              }}
              placeholder="e.g. 20"
              autoFocus
              className={`
                w-full rounded-xl border bg-white px-3.5 py-2 text-sm text-slate-700
                outline-none transition-all duration-300
                focus:ring-2 focus:ring-orange-100
                ${error ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
              `}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
          </div>

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="
                flex-1 rounded-xl border border-slate-200 py-2 text-sm font-semibold
                text-slate-600 transition-all duration-300 hover:bg-slate-50
              "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="
                flex-1 rounded-xl bg-orange-600 py-2 text-sm font-semibold text-white
                shadow-sm transition-all duration-300 hover:bg-orange-700
              "
            >
              Confirm Restock
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestockModal;
