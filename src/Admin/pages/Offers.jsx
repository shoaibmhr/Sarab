// src/admin/pages/Offers.jsx
import { useState, useMemo } from "react";
import { Search, Plus, Gift } from "lucide-react";

import OfferCard from "../components/offers/OfferCard";
import OfferModal from "../components/offers/OfferModal";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

import { offersData } from "../constants/offersData";

const Offers = () => {
  const [offers, setOffers] = useState(offersData);
  const [searchTerm, setSearchTerm] = useState("");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingOffer, setEditingOffer] = useState(null);
  const [deletingOffer, setDeletingOffer] = useState(null);

  const filteredOffers = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return offers.filter(
      (o) =>
        o.title.toLowerCase().includes(term) ||
        o.category.toLowerCase().includes(term),
    );
  }, [offers, searchTerm]);

  const handleAddClick = () => {
    setEditingOffer(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (offer) => {
    setEditingOffer(offer);
    setIsFormOpen(true);
  };

  const handleSave = (formData) => {
    if (editingOffer) {
      setOffers((prev) =>
        prev.map((o) => (o.id === editingOffer.id ? { ...o, ...formData } : o)),
      );
    } else {
      const newOffer = {
        ...formData,
        id: Date.now(),
        image:
          formData.image ||
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
      };
      setOffers((prev) => [newOffer, ...prev]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteClick = (offer) => {
    setDeletingOffer(offer);
  };

  const handleConfirmDelete = () => {
    setOffers((prev) => prev.filter((o) => o.id !== deletingOffer.id));
    setDeletingOffer(null);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Offers</h1>
        <p className="mt-1 text-sm text-slate-500">
          Promotional deals aur offers manage karein.
        </p>
      </div>

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
            placeholder="Search offers..."
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
          Add Offer
        </button>
      </div>

      {filteredOffers.length > 0 ? (
        <div
          className="
            grid grid-cols-1 gap-3.5
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {filteredOffers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
          <Gift size={36} className="text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-500">
            Koi offer nahi mila
          </p>
        </div>
      )}

      <OfferModal
        key={editingOffer?.id ?? "new"}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSave}
        initialData={editingOffer}
      />

      <ConfirmDeleteModal
        isOpen={!!deletingOffer}
        onClose={() => setDeletingOffer(null)}
        onConfirm={handleConfirmDelete}
        itemName={deletingOffer?.title}
      />
    </div>
  );
};

export default Offers;
