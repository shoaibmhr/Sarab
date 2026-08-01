// src/website/components/search/SearchModal.jsx
import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { menuItemsData } from "../../constants/menuData";

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

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const term = query.toLowerCase();
    return menuItemsData.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term),
    );
  }, [query]);

  const handleViewMenu = () => {
    navigate("/menu");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/40 p-4 pt-20"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <div className="flex items-center gap-2.5 border-b border-orange-50 px-4 py-3.5">
          <Search size={18} className="flex-shrink-0 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dishes..."
            className="flex-1 text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={16} />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {query.trim() === "" ? (
            <p className="px-3 py-8 text-center text-sm text-slate-400">
              Dish ka naam type karein...
            </p>
          ) : results.length > 0 ? (
            <>
              {results.map((item) => (
                <button
                  key={item.id}
                  onClick={handleViewMenu}
                  className="
                    flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left
                    transition-all duration-200 hover:bg-orange-50
                  "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-10 w-10 flex-shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-700">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-400">{item.category}</p>
                  </div>
                  <span className="flex-shrink-0 text-sm font-bold text-[#ef4423]">
                    ${item.price}
                  </span>
                </button>
              ))}
            </>
          ) : (
            <p className="px-3 py-8 text-center text-sm text-slate-400">
              Koi dish nahi mili
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
