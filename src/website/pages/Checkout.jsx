// src/website/pages/Checkout.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone, User, CreditCard } from "lucide-react";
import { useCart } from "../context/useCart";
import CartItemRow from "../components/cart/CartItemRow";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "COD",
  });
  const [errors, setErrors] = useState({});
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Naam zaroori hai";
    if (!formData.phone.trim()) newErrors.phone = "Phone number zaroori hai";
    if (!formData.address.trim()) newErrors.address = "Address zaroori hai";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsPlacingOrder(true);

    // ⚠️ Abhi simulate kar rahe hain — backend banne par yahan real API call hogi
    // jo order Admin Panel ke Orders page mein bhi automatically dikhega
    setTimeout(() => {
      setIsPlacingOrder(false);
      clearCart();
      navigate("/");
    }, 1500);
  };

  const deliveryFee = 100;
  const grandTotal = totalPrice + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#FDF6F0] px-4 text-center">
        <p className="text-lg font-semibold text-slate-600">
          Aapka cart khali hai
        </p>
        <p className="mt-1 text-sm text-slate-400">
          Order place karne ke liye pehle menu se items add karein.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#FDF6F0] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Checkout
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Apni delivery details bharein aur order confirm karein.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Delivery Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handlePlaceOrder}
              className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm sm:p-5"
            >
              <h3 className="text-base font-bold text-slate-800">
                Delivery Details
              </h3>

              <div className="mt-4 space-y-3.5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your full name"
                      className={`
                        w-full rounded-xl border bg-white py-2.5 pl-9 pr-4 text-sm text-slate-700
                        outline-none transition-all duration-300
                        focus:ring-2 focus:ring-orange-100
                        ${errors.name ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                      `}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      size={16}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="0300-1234567"
                      className={`
                        w-full rounded-xl border bg-white py-2.5 pl-9 pr-4 text-sm text-slate-700
                        outline-none transition-all duration-300
                        focus:ring-2 focus:ring-orange-100
                        ${errors.phone ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                      `}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Delivery Address
                  </label>
                  <div className="relative">
                    <MapPin
                      size={16}
                      className="pointer-events-none absolute left-3 top-3 text-slate-400"
                    />
                    <textarea
                      rows={2}
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      placeholder="House #, Street, Area, City"
                      className={`
                        w-full resize-none rounded-xl border bg-white py-2.5 pl-9 pr-4 text-sm text-slate-700
                        outline-none transition-all duration-300
                        focus:ring-2 focus:ring-orange-100
                        ${errors.address ? "border-red-300" : "border-slate-200 focus:border-orange-400"}
                      `}
                    />
                  </div>
                  {errors.address && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* Payment Method */}
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700">
                    <CreditCard size={15} />
                    Payment Method
                  </label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) =>
                      handleChange("paymentMethod", e.target.value)
                    }
                    className="
                      w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5
                      text-sm text-slate-700 outline-none transition-all duration-300
                      focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                    "
                  >
                    <option value="COD">Cash on Delivery</option>
                    <option value="Card">Credit/Debit Card</option>
                    <option value="JazzCash">JazzCash</option>
                    <option value="EasyPaisa">EasyPaisa</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isPlacingOrder}
                className="
                  mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600
                  py-2.5 text-sm font-semibold text-white shadow-sm
                  transition-all duration-300 hover:bg-orange-700
                  disabled:cursor-not-allowed disabled:opacity-60
                "
              >
                {isPlacingOrder ? "Placing order..." : "Place Order"}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm sm:p-5">
              <h3 className="text-base font-bold text-slate-800">
                Order Summary
              </h3>

              <div className="mt-3 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <CartItemRow key={item.id} item={item} />
                ))}
              </div>

              <div className="mt-3 space-y-1.5 border-t border-orange-50 pt-3 text-sm">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Delivery Fee</span>
                  <span>Rs {deliveryFee}</span>
                </div>
                <div className="mt-2 flex justify-between border-t border-orange-50 pt-2 text-base font-bold text-slate-800">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
