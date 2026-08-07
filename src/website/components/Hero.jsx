import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Burger from "../../assets/image/banner-img.jpg";
import { FaHamburger, FaFire, FaMotorcycle, FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-x-hidden bg-[#fdf7ef]">
      {/* Background Shapes */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ================= LEFT ================= */}

          <div className="relative z-10 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-md mb-3">
              <span className="text-orange-500 text-lg">
                <FaHamburger className="text-xl text-[#ef4423]" />
              </span>

              <p className="text-xs font-semibold text-gray-700">
                #1 Rated Fast Food Restaurant in New York
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-black leading-tight text-[#111]">
              Delicious <span className="text-[#ef4423]">Fast</span>
              <br />
              <span className="text-[#ef4423]">Food </span> for Every
              <br />
              Moment
            </h1>

            {/* Description */}
            <p className="mt-2 text-gray-500 leading-7 lg:leading-8 max-w-lg mx-auto text-center lg:mx-0 lg:text-left text-sm">
              Experience bold flavors crafted from premium ingredients. From
              crispy burgers to gourmet pizzas, every bite is an adventure worth
              savoring.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-4">
              {/* FIXED: Link target changed from "/about" to "/menu" */}
              <Link
                to="/menu"
                className="bg-[#ef4423] hover:bg-[#db3a1c] transition duration-300 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-3 font-semibold shadow-lg w-full text-xs sm:w-auto text-center"
              >
                <span>Explore Menu</span>
                <ArrowRight size={18} />
              </Link>

              {/* Watch Story Button */}
              <button className="flex items-center justify-center gap-3 font-semibold text-gray-700 hover:text-[#ef4423] transition w-full sm:w-auto text-xs">
                <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                  <Play
                    size={18}
                    className="text-[#ef4423] ml-1 fill-[#ef4423]"
                  />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
              <div className="bg-white rounded-2xl p-3 text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <h2 className="text-2xl font-black text-[#ef4423]">850+</h2>
                <p className="mt-3 text-xs uppercase tracking-[2px] text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div className="bg-white rounded-2xl p-3 text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <h2 className="text-2xl font-black text-[#ef4423]">120+</h2>
                <p className="mt-3 text-xs uppercase tracking-[2px] text-gray-500">
                  Menu Items
                </p>
              </div>

              <div className="bg-white rounded-2xl p-3 text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <h2 className="text-2xl font-black text-[#ef4423]">15+</h2>
                <p className="mt-3 text-xs uppercase tracking-[2px] text-gray-500">
                  Expert Chefs
                </p>
              </div>

              <div className="bg-white rounded-2xl p-3 text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <h2 className="text-2xl font-black text-[#ef4423]">12+</h2>
                <p className="mt-3 text-xs uppercase tracking-[2px] text-gray-500">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div
            className="relative flex justify-center items-center min-h-[320px]
             sm:min-h-[420px] lg:min-h-[500px]"
          >
            {/* Glow */}
            <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] bg-orange-300 blur-[100px] opacity-20 rounded-full"></div>

            {/* Burger */}
            <img
              src={Burger}
              alt="Burger"
              className="relative z-20 w-[250px]
                sm:w-[300px]
                lg:w-[360px] rounded-full drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />

            {/* Hot Deal */}
            <div className="hidden md:block absolute lg:left-0 md:left-20  top-20 animate-float bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-30">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <FaFire className="text-xl text-[#ef4423]" />
              </div>

              <div>
                <h3 className="font-bold text-xs ">Hot Deal</h3>
                <p className="text-xs text-gray-500">50% off on every burger</p>
              </div>
            </div>

            {/* Delivery */}
            <div className="hidden md:block absolute lg:right-10 md:right-30  top-14 animate-float bg-white rounded-2xl shadow-xl px-8 py-3 flex items-center gap-3 z-30">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <FaMotorcycle className="text-xl text-[#ef4423]" />
              </div>

              <div>
                <h3 className="font-bold text-xs">20 min</h3>
                <p className="text-xs text-gray-500">Fast Delivery</p>
              </div>
            </div>

            {/* Rating */}
            <div className="hidden md:block absolute lg:right-7 md:right-23 bottom-10 animate-float bg-white rounded-2xl shadow-xl px-8 py-3 flex items-center gap-3 z-30">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <FaStar className="text-xl text-[#f7a321]" />
              </div>

              <div>
                <h3 className="font-bold text-xs">4.9/5</h3>
                <p className="text-xs text-gray-500">Customer Rating</p>
              </div>
            </div>

            {/* Decorative Ring */}
            <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[460px] lg:h-[460px]  rounded-full  border-[20px] sm:border-[28px] lg:border-[35px] border-white/30"></div>

            {/* Blur Circle */}
            <div className="absolute bottom-10 right-20 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
