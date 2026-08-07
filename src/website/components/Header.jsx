import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";

import { FaMotorcycle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#111111] text-gray-300 border-b border-gray-800">
      <div className="max-w-7xl mx-auto h-10 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4 lg:gap-6 text-xs">
          <div className="flex items-center gap-1.5">
            <Phone size={12} className="text-orange-500 whitespace-nowrap" />
            <span>+1 (800) 123-4567</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5">
            <Mail size={12} className="text-orange-500" />
            <span>hello@sarabfood.com</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5">
            <MapPin size={12} className="text-orange-500" />
            <span>42 Flavor Street, NY</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center bg-linear-to-r from-red-600 to-orange-500 text-white text-[10px] font-semibold px-3 py-2 rounded-full whitespace-nowrap">
            <FaMotorcycle className="text-sm m-2" /> FREE DELIVERY TODAY!
          </span>

          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="Facebook"
              className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[#222] hover:bg-orange-500 transition-all duration-300 flex items-center justify-center"
            >
              <FaFacebookF size={12} />
            </a>

            <a
              href="#" 
              className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[#222] hover:bg-orange-500 transition-all duration-300 flex items-center justify-center"
            >
              <FaInstagram size={12} />
            </a>

            <a
              href="#"
              className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[#222] hover:bg-orange-500 transition-all duration-300 flex items-center justify-center"
            >
              <FaTiktok size={12} />
            </a>

            <a
              href="#"
              className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-[#222] hover:bg-orange-500 transition-all duration-300 flex items-center justify-center"
            >
              <FaYoutube size={12} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
