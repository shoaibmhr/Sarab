// src/website/components/cart/CartDrawer.jsx
import { X, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";
import CartItemRow from "./CartItemRow";

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`
          fixed inset-0 z-50 bg-black/40 transition-opacity duration-300
          ${isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* Drawer */}
      <div
        className={`
          fixed right-0 top-0 z-50 flex h-screen w-full max-w-sm flex-col
          bg-white shadow-2xl transition-transform duration-300
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-orange-50 px-4 py-3.5">
          <h2 className="text-base font-bold text-slate-800">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItemRow key={item.id} item={item} />)
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={40} className="text-slate-200" />
              <p className="mt-3 text-sm font-medium text-slate-400">
                Aapka cart khali hai
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-orange-50 px-4 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-600">Subtotal</span>
              <span className="text-lg font-bold text-slate-800">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <Link
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="
                mt-3 flex w-full items-center justify-center gap-2 rounded-xl
                bg-orange-600 py-2.5 text-sm font-semibold text-white shadow-sm
                transition-all duration-300 hover:bg-orange-700
              "
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
