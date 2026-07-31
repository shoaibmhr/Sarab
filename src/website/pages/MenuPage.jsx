// src/website/pages/MenuPage.jsx
import { useState, useMemo } from "react";
import { SearchX } from "lucide-react";
import { useCart } from "../context/useCart";

import MenuFilters from "../components/menu/MenuFilters";
import MenuItemCard from "../components/menu/MenuItemCard";

import { menuItemsData, menuCategories } from "../constants/menuData";

const MenuPage = () => {
   const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Items");

  const filteredItems = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return menuItemsData.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(term);
      const matchesCategory =
        activeCategory === "All Items" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="bg-[#FDF6F0]">
      <div className="mx-auto max-w-3xl px-4 pb-8 pt-16 text-center sm:pt-20">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
          Our Delicious Menu
        </span>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Explore Our Full Menu
        </h1>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          Hand-picked ingredients, bold flavors — find your next favorite dish.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <MenuFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          categories={menuCategories}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-orange-200 bg-white p-12 text-center">
            <SearchX size={40} className="text-slate-300" />
            <p className="mt-3 text-sm font-medium text-slate-500">
              Koi dish nahi mila — search ya category badal kar dekhein.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
