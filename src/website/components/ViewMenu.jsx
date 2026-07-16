import React, { useState } from 'react';
import { FaHeart, FaPlus } from 'react-icons/fa';

const ViewFullMenu = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Burgers", "Pizza", "Desserts", "Beverages"];

  const menuItems = [
    { id: 1, name: "Double Cheese Smash Burger", category: "Burgers", price: 650, rating: "4.9", image: "🍔", tag: "Best Seller" },
    { id: 2, name: "Pepperoni Feast Pizza", category: "Pizza", price: 1200, rating: "4.8", image: "🍕", tag: "New" },
    { id: 3, name: "Molten Lava Chocolate Cake", category: "Desserts", price: 450, rating: "5.0", image: "🍰", tag: "Must Try" },
    { id: 4, name: "Mint Margarita", category: "Beverages", price: 250, rating: "4.6", image: "🍹", tag: "Refreshing" },
  ];

  const filteredItems = activeTab === "All" ? menuItems : menuItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight">
            Explore Our <span className="text-[#ef4423]">Special Menu</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 mt-2">
            Freshly prepared food items designed to trigger your taste buds.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap mb-10">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#ef4423] text-white shadow-md shadow-[#ef4423]/20"
                  : "bg-white text-gray-500 border border-gray-100 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-5 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all duration-300 relative group flex flex-col justify-between">
              
              {/* Product Badge */}
              <span className="absolute top-4 left-4 bg-orange-50 text-[#ef4423] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">
                {item.tag}
              </span>

              {/* Heart Button */}
              <button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors">
                <FaHeart className="text-sm" />
              </button>

              {/* Big Product Image/Emoji */}
              <div className="text-7xl my-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </div>

              {/* Content */}
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{item.category}</span>
                <h3 className="font-extrabold text-gray-800 text-base md:text-lg mt-1 group-hover:text-[#ef4423] transition-colors line-clamp-1">
                  {item.name}
                </h3>
                
                {/* Rating & Price */}
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-xs text-gray-400 font-semibold">Price</p>
                    <p className="text-lg font-black text-gray-800">Rs. {item.price}</p>
                  </div>

                  {/* Add to Cart circle button */}
                  <button className="w-10 h-10 rounded-2xl bg-[#ef4423]/10 text-[#ef4423] flex items-center justify-center hover:bg-[#ef4423] hover:text-white transition-all duration-300">
                    <FaPlus className="text-xs" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ViewFullMenu;