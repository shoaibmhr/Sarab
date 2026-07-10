import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-gray-400">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-bold text-white">
              Sara<span className="text-[#ef4423]">b</span>
            </h2>

            <p className="mt-5 leading-8 text-sm">
              We bring the world's finest flavors together in a fast, friendly,
              and affordable experience. Every meal crafted with love.
            </p>

            <div className="flex gap-3 mt-6">
              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaTwitter />,
                <FaYoutube />,
                <FaTiktok />,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-[#252525] rounded-md flex items-center justify-center text-gray-300 hover:bg-[#ef4423] hover:text-white duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold relative inline-block mb-8">
              Quick Links
              <span className="absolute left-0 -bottom-2 w-14 h-[2px] bg-[#ef4423]"></span>
            </h3>

            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Our Menu",
                "Reservation",
                "Blog",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-[#ef4423] duration-300"
                  >
                    <FaChevronRight className="text-xs text-[#ef4423]" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Menu */}
          <div>
            <h3 className="text-white text-xl font-semibold relative inline-block mb-8">
              Our Menu
              <span className="absolute left-0 -bottom-2 w-14 h-[2px] bg-[#ef4423]"></span>
            </h3>

            <ul className="space-y-4">
              {[
                "Burgers",
                "Pizza",
                "Fried Chicken",
                "Wraps & Rolls",
                "Pasta",
                "Desserts",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-[#ef4423] duration-300"
                  >
                    <FaChevronRight className="text-xs text-[#ef4423]" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-semibold relative inline-block mb-8">
              Get In Touch
              <span className="absolute left-0 -bottom-2 w-14 h-[2px] bg-[#ef4423]"></span>
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-md bg-[#2a1f1d] flex items-center justify-center text-[#ef4423]">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Address</h4>
                  <p className="text-sm">
                    42 Flavor Street, Manhattan, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-md bg-[#2a1f1d] flex items-center justify-center text-[#ef4423]">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-sm">+1 (800) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-md bg-[#2a1f1d] flex items-center justify-center text-[#ef4423]">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-sm">hello@sarabfood.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-md bg-[#2a1f1d] flex items-center justify-center text-[#ef4423]">
                  <FaClock />
                </div>

                <div>
                  <h4 className="text-white font-semibold">Hours</h4>
                  <p className="text-sm">Wed - Sun: 09 AM - 11 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © 2026{" "}
            <span className="text-[#ef4423] font-semibold">
              Sarab Restaurant
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-[#ef4423] duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#ef4423] duration-300">
              Terms
            </a>
            <a href="#" className="hover:text-[#ef4423] duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
