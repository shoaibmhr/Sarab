// src/admin/pages/MediaLibrary.jsx
import { useState, useMemo } from "react";
import { Search, UploadCloud, ImageOff } from "lucide-react";

import MediaCard from "../components/media/MediaCard";
import UploadMediaModal from "../components/media/UploadMediaModal";
import ConfirmDeleteModal from "../components/common/ConfirmDeleteModal";

import { mediaData, mediaTypes } from "../constants/mediaData";

const MediaLibrary = () => {
  const [media, setMedia] = useState(mediaData);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [deletingMedia, setDeletingMedia] = useState(null);

  const filteredMedia = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return media.filter((m) => {
      const matchesSearch = m.name.toLowerCase().includes(term);
      const matchesType = typeFilter === "All" || m.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [media, searchTerm, typeFilter]);

  const handleUpload = (newMedia) => {
    setMedia((prev) => [
      {
        ...newMedia,
        id: Date.now(),
        uploadedDate: new Date().toISOString().split("T")[0],
      },
      ...prev,
    ]);
    setIsUploadOpen(false);
  };

  const handleDeleteClick = (item) => {
    setDeletingMedia(item);
  };

  const handleConfirmDelete = () => {
    setMedia((prev) => prev.filter((m) => m.id !== deletingMedia.id));
    setDeletingMedia(null);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Media Library</h1>
        <p className="mt-1 text-sm text-slate-500">
          Sab uploaded images ek jagah manage karein.
        </p>
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
              placeholder="Search files..."
              className="
                w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-4
                text-sm text-slate-700 outline-none
                transition-all duration-300
                focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              "
            />
          </div>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="
              w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2
              text-sm text-slate-700 outline-none
              transition-all duration-300
              focus:border-orange-400 focus:ring-2 focus:ring-orange-100
              sm:w-auto
            "
          >
            {mediaTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => setIsUploadOpen(true)}
          className="
            flex items-center justify-center gap-2 rounded-xl bg-orange-600
            px-3.5 py-2 text-sm font-semibold text-white shadow-sm
            transition-all duration-300 hover:bg-orange-700
          "
        >
          <UploadCloud size={15} />
          Upload
        </button>
      </div>

      {/* Grid */}
      {filteredMedia.length > 0 ? (
        <div
          className="
            grid grid-cols-2 gap-3
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-6
          "
        >
          {filteredMedia.map((item) => (
            <MediaCard
              key={item.id}
              media={item}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-sm">
          <ImageOff size={36} className="text-slate-300" />
          <p className="mt-3 text-sm font-medium text-slate-500">
            Koi file nahi mili
          </p>
        </div>
      )}

      <UploadMediaModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onUpload={handleUpload}
      />

      <ConfirmDeleteModal
        isOpen={!!deletingMedia}
        onClose={() => setDeletingMedia(null)}
        onConfirm={handleConfirmDelete}
        itemName={deletingMedia?.name}
      />
    </div>
  );
};

export default MediaLibrary;
