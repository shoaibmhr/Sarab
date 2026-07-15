import { Pencil, Trash2, Package } from "lucide-react";

const CategoryCard = ({ category, onEdit, onDelete }) => {
  const isActive = category.status === "active";

  return (
    <div
      className="
        group overflow-hidden rounded-2xl border border-slate-100
        bg-white shadow-sm transition-all duration-300 hover:shadow-md
      "
    >
      <div className="relative h-32 w-full overflow-hidden bg-slate-100 sm:h-36">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <span
          className={`
            absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm
            ${
              isActive
                ? "bg-green-500/90 text-white"
                : "bg-slate-500/90 text-white"
            }
          `}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <div className="p-3.5 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-base font-bold text-slate-800">
            {category.name}
          </h3>
        </div>

        <p className="mt-1 line-clamp-2 text-sm text-slate-500">
          {category.description}
        </p>

        <div className="mt-2.5 flex items-center gap-1.5 text-xs font-medium text-slate-400">
          <Package size={14} />
          {category.itemsCount} items
        </div>

        <div className="mt-3.5 flex items-center gap-2 border-t border-slate-50 pt-3">
          <button
            onClick={() => onEdit(category)}
            className="
              flex flex-1 items-center justify-center gap-1.5 rounded-lg
              border border-slate-200 py-2 text-sm font-semibold text-slate-600
              transition-all duration-300 hover:bg-slate-50
            "
          >
            <Pencil size={14} />
            Edit
          </button>

          <button
            onClick={() => onDelete(category)}
            className="
              flex flex-1 items-center justify-center gap-1.5 rounded-lg
              border border-red-100 py-2 text-sm font-semibold text-red-500
              transition-all duration-300 hover:bg-red-50
            "
          >
            <Trash2 size={14} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
