// src/website/components/menu/MenuItemCard.jsx
import { useState } from "react";
import { Heart, Plus, Check, Star } from "lucide-react";

const MenuItemCard = ({ item, onAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart?.(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div
      className="
        group overflow-hidden rounded-2xl border border-orange-100
        bg-white shadow-sm transition-all duration-300 hover:shadow-lg
      "
    >
      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden sm:h-44">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {item.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
            {item.badge}
          </span>
        )}

        <button
          onClick={() => setIsFavorite((prev) => !prev)}
          className="
            absolute right-3 top-3 flex h-8 w-8 items-center justify-center
            rounded-full bg-white/90 shadow-sm transition-all duration-300 hover:bg-white
          "
        >
          <Heart
            size={15}
            className={
              isFavorite ? "fill-red-500 text-red-500" : "text-slate-400"
            }
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-orange-500">
            {item.category}
          </span>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium text-slate-500">
              {item.rating}
            </span>
          </div>
        </div>

        <h3 className="mt-1 text-base font-bold text-slate-800">{item.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-slate-500">
          {item.description}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-orange-50 pt-3">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-slate-800">
              ${item.price}
            </span>
            <span className="text-xs text-slate-400 line-through">
              ${item.oldPrice}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className={`
              flex h-8 w-8 items-center justify-center rounded-full text-white shadow-sm
              transition-all duration-300
              ${justAdded ? "bg-green-600" : "bg-slate-900 hover:bg-orange-600"}
            `}
          >
            {justAdded ? <Check size={16} /> : <Plus size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
