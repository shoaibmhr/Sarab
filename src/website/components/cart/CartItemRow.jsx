// src/website/components/cart/CartItemRow.jsx
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../context/useCart";

const CartItemRow = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-3 border-b border-orange-50 py-3.5">
      <img
        src={item.image}
        alt={item.name}
        className="h-14 w-14 flex-shrink-0 rounded-xl object-cover"
      />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-slate-800">
          {item.name}
        </p>
        <p className="text-sm font-bold text-orange-600">${item.price}</p>

        <div className="mt-1.5 flex items-center gap-2">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-50"
          >
            <Minus size={12} />
          </button>
          <span className="w-5 text-center text-sm font-semibold text-slate-700">
            {item.quantity}
          </span>
          <button
            onClick={() => increaseQuantity(item.id)}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-50"
          >
            <Plus size={12} />
          </button>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="flex-shrink-0 rounded-lg p-1.5 text-slate-300 transition hover:bg-red-50 hover:text-red-500"
      >
        <Trash2 size={15} />
      </button>
    </div>
  );
};

export default CartItemRow;
