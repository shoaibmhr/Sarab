// src/admin/components/products/ProductCard.jsx
import { Pencil, Trash2 } from "lucide-react";

const ProductCard = ({ product, onEdit, onDelete }) => {
  const isActive = product.status === "active";
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock <= 10;

  return (
    <div
      className="
        group overflow-hidden rounded-2xl border border-slate-100
        bg-white shadow-sm transition-all duration-300 hover:shadow-md
      "
    >
      <div className="relative h-32 w-full overflow-hidden bg-slate-100 sm:h-36">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <span
          className={`
            absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm
            ${isActive ? "bg-green-500/90 text-white" : "bg-slate-500/90 text-white"}
          `}
        >
          {isActive ? "Active" : "Inactive"}
        </span>

        {isOutOfStock && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            Out of Stock
          </span>
        )}
      </div>

      <div className="p-3.5 sm:p-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-orange-500">
          {product.category}
        </span>

        <h3 className="mt-1 truncate text-base font-bold text-slate-800">
          {product.name}
        </h3>

        <div className="mt-2.5 flex items-center justify-between">
          <p className="text-lg font-bold text-slate-800">
            Rs {product.price.toLocaleString()}
          </p>

          <span
            className={`
              text-xs font-semibold
              ${isOutOfStock ? "text-red-500" : isLowStock ? "text-amber-500" : "text-slate-400"}
            `}
          >
            {isOutOfStock ? "Out of stock" : `${product.stock} in stock`}
          </span>
        </div>

        <div className="mt-3.5 flex items-center gap-2 border-t border-slate-50 pt-3">
          <button
            onClick={() => onEdit(product)}
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
            onClick={() => onDelete(product)}
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

export default ProductCard;
