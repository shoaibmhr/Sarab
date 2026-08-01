import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { FaUtensils } from "react-icons/fa";
import CartIcon from "./cart/CartIcon";
import SearchModal from "./search/SearchModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Menu", id: "menu" },
    { name: "Reservation", id: "reservation" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-17">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white text-2xl">
              <FaUtensils size={15} />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold">
                <span className="text-black">Sa</span>
                <span className="text-red-600">rab</span>
              </h1>

              <p className="text-[8px] tracking-[3px] text-gray-400 uppercase">
                Fast Food & Restaurant
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 font-bold text-xs text-gray-700">
            {navLinks.map((item) => (
              <li key={item.id} className="relative group cursor-pointer">
                <a
                  href={`#${item.id}`}
                  className={`${
                    item.name === "Home"
                      ? "text-black font-semibold"
                      : "hover:text-red-600"
                  }`}
                >
                  {item.name}
                </a>

                <span
                  className={`absolute left-0 -bottom-5 h-[3px] bg-red-600 rounded-full transition-all duration-300 ${
                    item.name === "Home" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Right (Desktop Button Fixed) */}
          <div className="hidden lg:flex items-center gap-6">
            <button onClick={() => setIsSearchOpen(true)}>
              <Search className="cursor-pointer hover:text-red-600" size={15} />
            </button>
            <CartIcon />

            {/* FIXED: Wrap desktop button in Link */}
            <Link
              to="/checkout"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold px-4 py-3 rounded-xl shadow-lg hover:scale-105 duration-300 text-xs flex items-center gap-2"
            >
              <ShoppingBag size={15} />
              <span>Order Now</span>
            </Link>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[500px] pb-5" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-5 font-medium">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block ${
                    item.name === "Home"
                      ? "text-red-600 border-l-4 border-red-600 pl-3"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}

            <div className="flex items-center gap-5 pt-3">
              <button onClick={() => setIsSearchOpen(true)}>
                <Search />
              </button>
              <CartIcon />

              <Link
                to="/checkout"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-lg hover:opacity-90 transition-all duration-300 w-full sm:w-auto text-center"
              >
                <ShoppingBag size={18} />
                <span>Order Now</span>
              </Link>
            </div>
          </ul>
        </div>
      </div>
      <SearchModal
        key={isSearchOpen ? "open" : "closed"}
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </nav>
  );
};

export default Navbar;