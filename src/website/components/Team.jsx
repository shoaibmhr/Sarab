import chef1 from "../../assets/image/1.jpg";
import chef2 from "../../assets/image/2.jpg";
import chef3 from "../../assets/image/3.jpg";
import chef7 from "../../assets/image/7.jpg";

import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const chefs = [
  {
    name: "Alice Mortal",
    category: "HEAD CHEF",
    experience: "12 years experience",
    image: chef1,
  },
  {
    name: "Michael Corn",
    category: "GRILL MASTER",
    experience: "8 years experience",
    image: chef2,
  },
  {
    name: "Faz Chowdel",
    category: "PASTRY CHEF",
    experience: "10 years experience",
    image: chef3,
  },
  {
    name: "William Latnum",
    category: "PIZZA ARTISAN",
    experience: "9 years experience",
    image: chef7,
  },
];

export default function Team() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}

        <div className="text-center mb-14">
          <p className="text-[#ef4423] font-play text-1xl">The Culinary Team</p>

          <h2 className="text-2xl lg:text-4xl font-playfair font-bold font-serif mt-2">
            Meet Our Expert <span className="text-[#ef4423]">Chef</span>
          </h2>

          <div className="w-16 h-1 bg-[#f7a321] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="flex gap-4">
                    {/* Instagram */}
                    <a
                      href="#"
                      className="w-11 h-11 rounded-full bg-white text-[#ef4423] flex items-center justify-center hover:bg-[#ef4423] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <FaInstagram size={18} />
                    </a>

                    {/* Twitter */}
                    <a
                      href="#"
                      className="w-11 h-11 rounded-full bg-white text-[#ef4423] flex items-center justify-center hover:bg-[#ef4423] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <FaTwitter size={18} />
                    </a>

                    {/* Facebook */}
                    <a
                      href="#"
                      className="w-11 h-11 rounded-full bg-white text-[#ef4423] flex items-center justify-center hover:bg-[#ef4423] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <FaFacebookF size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center py-5 px-3">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {chef.name}
                </h3>

                <p className="text-[#ef4423] uppercase text-1xl mt-2 tracking-wide">
                  {chef.category}
                </p>

                <p className="text-gray-400 mt-3">{chef.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
