// src/website/components/cart/CartIcon.jsx
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/useCart";

const CartIcon = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-orange-50"
    >
      <ShoppingBag size={19} className="text-slate-700" />
      {totalItems > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-orange-600 px-1 text-[10px] font-bold text-white">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
