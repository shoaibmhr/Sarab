// src/website/context/CartProvider.jsx
import { useState } from "react";
import { CartContext } from "./CartContextObject";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        // Agar item pehle se cart mein hai, quantity badhao
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      // Naya item, quantity 1 se shuru
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
