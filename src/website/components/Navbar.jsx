import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";


import { FaUtensils } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Menu",
    "Chefs",
    "Reservation",
    "Reviews",
    "Contact",
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white text-2xl">
             <FaUtensils />
            </div>

            <div>
              <h1 className="text-4xl font-extrabold">
                <span className="text-black">Sa</span>
                <span className="text-red-600">rab</span>
              </h1>

              <p className="text-[11px] tracking-[3px] text-gray-400 uppercase">
                Fast Food & Restaurant
              </p>
            </div>
          </div>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-10 font-medium text-gray-700">

            {navLinks.map((item) => (
              <li key={item} className="relative group cursor-pointer">

                <a
                  href="#"
                  className={`${
                    item === "Home"
                      ? "text-black font-semibold"
                      : "hover:text-red-600"
                  }`}
                >
                  {item}
                </a>

                <span
                  className={`absolute left-0 -bottom-8 h-[3px] bg-red-600 rounded-full transition-all duration-300
                  ${
                    item === "Home"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>

              </li>
            ))}

          </ul>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-6">

            <Search
              className="cursor-pointer hover:text-red-600"
              size={22}
            />

            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold px-7 py-3 rounded-xl shadow-lg hover:scale-105 duration-300 flex items-center gap-2">

              <ShoppingBag size={18} />

              Order Now

            </button>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
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
              <li key={item}>
                <a
                  href="#"
                  className={`block ${
                    item === "Home"
                      ? "text-red-600 border-l-4 border-red-600 pl-3"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}

            <div className="flex items-center gap-5 pt-3">

              <Search />

              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl flex items-center gap-2">
                <ShoppingBag size={18} />
                Order Now
              </button>

            </div>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;