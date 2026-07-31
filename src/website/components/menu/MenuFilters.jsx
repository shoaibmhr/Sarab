// src/website/components/menu/MenuFilters.jsx
import { Search } from "lucide-react";

const MenuFilters = ({
  searchTerm,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  categories,
}) => {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative mx-auto w-full max-w-md">
        <Search
          size={16}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search dishes..."
          className="
            w-full rounded-full border border-orange-100 bg-white py-2.5 pl-10 pr-4
            text-sm text-slate-700 outline-none shadow-sm
            transition-all duration-300
            focus:border-orange-400 focus:ring-2 focus:ring-orange-100
          "
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`
              rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-orange-600 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-orange-50"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuFilters;
