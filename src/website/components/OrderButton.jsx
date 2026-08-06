import React, { useState } from 'react';
import { FaTrash, FaShoppingBag, FaCreditCard, FaTruck, FaChevronRight } from 'react-icons/fa';

const OrderNow = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Spicy Zinger Burger", price: 550, qty: 1, image: "🍔" },
    { id: 2, name: "Loaded Fries (Large)", price: 350, qty: 2, image: "🍟" },
  ]);

  const deliveryCharges = 120;
  const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const totalAmount = subTotal + deliveryCharges;

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl  mx-auto  grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Delivery Details (7 Columns) */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#ef4423]/10 flex items-center justify-center text-[#ef4423]">
              <FaTruck />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-gray-800">Delivery Address</h2>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">First Name</label>
                <input type="text" placeholder="John" className="w-full text-sm rounded-xl border border-gray-200 p-3 outline-none focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/5" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full text-sm rounded-xl border border-gray-200 p-3 outline-none focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phone Number</label>
              <input type="tel" placeholder="+92 300 1234567" className="w-full text-sm rounded-xl border border-gray-200 p-3 outline-none focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/5" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Complete Delivery Address</label>
              <textarea rows="3" placeholder="House#, Street#, Area name..." className="w-full text-sm rounded-xl border border-gray-200 p-3 outline-none focus:border-[#ef4423] focus:ring-4 focus:ring-[#ef4423]/5"></textarea>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#ef4423]/10 flex items-center justify-center text-[#ef4423]">
                  <FaCreditCard />
                </div>
                <h2 className="text-lg font-bold text-gray-800">Payment Method</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <label className="border-2 border-[#ef4423] rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer bg-[#ef4423]/5">
                  <span className="font-extrabold text-[#ef4423] text-sm">Cash on Delivery</span>
                </label>
                <label className="border-2 border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center cursor-not-allowed opacity-50">
                  <span className="font-bold text-gray-400 text-sm">Card (Coming Soon)</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Right Side: Order Summary / Cart (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100">
            <h3 className="text-lg font-black text-gray-800 mb-4 flex items-center gap-2">
              <FaShoppingBag className="text-[#ef4423]" />
              <span>Your Basket</span>
            </h3>

            {/* Cart Items list */}
            <div className="divide-y divide-gray-100 max-h-[250px] overflow-y-auto pr-2">
              {cartItems.map(item => (
                <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 bg-gray-50 rounded-xl">{item.image}</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm md:text-base">{item.name}</h4>
                      <p className="text-xs text-gray-400">Rs. {item.price} × {item.qty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-black text-gray-800 text-sm">Rs. {item.price * item.qty}</span>
                    <button className="text-gray-300 hover:text-red-500 transition-colors">
                      <FaTrash className="text-xs" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-800">Rs. {subTotal}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Delivery Fee</span>
                <span className="font-semibold text-gray-800">Rs. {deliveryCharges}</span>
              </div>
              <div className="flex justify-between text-base font-black text-gray-800 pt-2 border-t border-dashed border-gray-100">
                <span>Total Amount</span>
                <span className="text-[#ef4423]">Rs. {totalAmount}</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full mt-6 flex items-center justify-center gap-2 rounded-2xl bg-[#ef4423] py-4 font-black text-white shadow-lg shadow-[#ef4423]/20 hover:shadow-xl hover:shadow-[#ef4423]/30 hover:bg-orange-600 transition-all duration-300 active:scale-95">
              <span>Place Order Now</span>
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderNow;