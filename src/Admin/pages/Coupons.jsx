// src/admin/pages/Coupons.jsx
import { useState, useMemo } from "react";
import { TicketX, Pencil, Trash2 } from "lucide-react";

import CouponsToolbar from "../components/coupons/CouponsToolbar";
import CouponStatusBadge from "../components/coupons/CouponStatusBadge";
import CouponModal from "../components/coupons/CouponModal";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

import { couponsData } from "../constants/couponsData";

const Coupons = () => {
  const [coupons, setCoupons] = useState(couponsData);
  const [searchTerm, setSearchTerm] = useState("");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCoupon, setEditingCoupon] = useState(null);
  const [deletingCoupon, setDeletingCoupon] = useState(null);

  const filteredCoupons = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return coupons.filter((c) => c.code.toLowerCase().includes(term));
  }, [coupons, searchTerm]);

  const activeCount = coupons.filter(
    (c) => c.status === "active" && new Date(c.expiryDate) >= new Date(),
  ).length;

  const handleAddClick = () => {
    setEditingCoupon(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (coupon) => {
    setEditingCoupon(coupon);
    setIsFormOpen(true);
  };

  const handleSave = (formData) => {
    if (editingCoupon) {
      setCoupons((prev) =>
        prev.map((c) =>
          c.id === editingCoupon.id ? { ...c, ...formData } : c,
        ),
      );
    } else {
      const newCoupon = {
        ...formData,
        id: Date.now(),
        usedCount: 0,
      };
      setCoupons((prev) => [newCoupon, ...prev]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteClick = (coupon) => {
    setDeletingCoupon(coupon);
  };

  const handleConfirmDelete = () => {
    setCoupons((prev) => prev.filter((c) => c.id !== deletingCoupon.id));
    setDeletingCoupon(null);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Coupons</h1>
        <p className="mt-1 text-sm text-slate-500">
          Discount codes manage karein.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Total Coupons
          </p>
          <h3 className="mt-1 text-sm font-bold text-slate-800">
            {coupons.length}
          </h3>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
            Active
          </p>
          <h3 className="mt-1 text-sm font-bold text-slate-800">
            {activeCount}
          </h3>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Total Redemptions
          </p>
          <h3 className="mt-1 text-sm font-bold text-slate-800">
            {coupons.reduce((sum, c) => sum + c.usedCount, 0)}
          </h3>
        </div>
      </div>

      <CouponsToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onAddClick={handleAddClick}
      />

      {filteredCoupons.length > 0 ? (
        <>
          {/* Desktop/Tablet — Table */}
          <div className="hidden overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Code
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Discount
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Min Order
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Usage
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Expiry
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
                {filteredCoupons.map((coupon) => (
                  <tr
                    key={coupon.id}
                    className="border-b border-slate-50 last:border-none hover:bg-slate-50/50"
                  >
                    <td className="px-4 py-3 text-sm font-bold text-slate-800">
                      {coupon.code}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {coupon.type === "percentage"
                        ? `${coupon.value}%`
                        : `Rs ${coupon.value}`}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">
                      Rs {coupon.minOrder.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">
                      {coupon.usedCount}/{coupon.usageLimit}
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-400">
                      {coupon.expiryDate}
                    </td>
                    <td className="px-4 py-3">
                      <CouponStatusBadge coupon={coupon} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleEditClick(coupon)}
                          className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(coupon)}
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
            {filteredCoupons.map((coupon) => (
              <div
                key={coupon.id}
                className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-800">
                    {coupon.code}
                  </p>
                  <CouponStatusBadge coupon={coupon} />
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {coupon.type === "percentage"
                    ? `${coupon.value}% off`
                    : `Rs ${coupon.value} off`}{" "}
                  · Min Rs {coupon.minOrder.toLocaleString()}
                </p>
                <div className="mt-2.5 flex items-center justify-between border-t border-slate-50 pt-2.5">
                  <span className="text-xs text-slate-400">
                    {coupon.usedCount}/{coupon.usageLimit} used · exp{" "}
                    {coupon.expiryDate}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleEditClick(coupon)}
                      className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(coupon)}
                      className="rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
          <TicketX size={36} className="text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-500">
            Koi coupon nahi mila
          </p>
        </div>
      )}

      <CouponModal
        key={editingCoupon?.id ?? "new"}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        initialData={editingCoupon}
      />

      <ConfirmDeleteModal
        isOpen={!!deletingCoupon}
        onClose={() => setDeletingCoupon(null)}
        onConfirm={handleConfirmDelete}
        itemName={deletingCoupon?.code}
      />
    </div>
  );
};

export default Coupons;
