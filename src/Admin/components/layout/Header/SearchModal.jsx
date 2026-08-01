// src/admin/components/layout/Header/SearchModal.jsx
import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { sidebarData } from "../../../constants/sidebarData";

// sidebarData ko ek flat list mein convert karna — search karne ke liye asaan
const allPages = sidebarData.flatMap((section) =>
  section.items
    .filter((item) => item.path) // sirf navigation items, "logout" jaisay actions nahi
    .map((item) => ({
      title: item.title,
      path: item.path,
      icon: item.icon,
      section: section.title,
    })),
);

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  // Sirf DOM ko focus karne ke liye — koi setState nahi, isliye ye effect valid hai
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Escape key se close ho
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return allPages;
    const term = query.toLowerCase();
    return allPages.filter(
      (page) =>
        page.title.toLowerCase().includes(term) ||
        page.section.toLowerCase().includes(term),
    );
  }, [query]);

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-20"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        {/* Search Input */}
        <div className="flex items-center gap-2.5 border-b border-slate-100 px-4 py-3.5">
          <Search size={18} className="flex-shrink-0 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, orders, products..."
            className="flex-1 text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto p-2">
          {results.length > 0 ? (
            results.map((page) => {
              const Icon = page.icon;
              return (
                <button
                  key={page.path}
                  onClick={() => handleSelect(page.path)}
                  className="
                    flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left
                    transition-all duration-200 hover:bg-orange-50
                  "
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-50">
                    <Icon size={15} className="text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-700">
                      {page.title}
                    </p>
                    <p className="text-xs text-slate-400">{page.section}</p>
                  </div>
                </button>
              );
            })
          ) : (
            <p className="px-3 py-8 text-center text-sm text-slate-400">
              Koi result nahi mila
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
