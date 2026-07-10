
import { ArrowRight, Play } from "lucide-react";
import Burger from "../../assets/image/banner-img.jpg";

import {  FaHamburger, FaFire, FaMotorcycle, FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#fdf7ef]">
      {/* Background Shapes */}
      
      

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT ================= */}

          <div className="relative z-10 text-center lg:text-left
          ">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md mb-7">
              <span className="text-orange-500 text-lg"><FaHamburger className="text-1xl text-[#ef4423]" /></span>

              <p className="text-xs font-semibold text-gray-700">
                #1 Rated Fast Food Restaurant in New York
              </p>
            </div>

            {/* Heading */}

            <h1 className="text-5xl lg:text-7xl font-playfair font-black leading-tight text-[#111]">
              Delicious
              <br />
              <span className="text-[#ef4423]">Fast Food</span>
              <br />
              for Every
              <br />
              Moment
            </h1>

            {/* Description */}

           <p className="mt-7 text-gray-500 leading-8 max-w-lg mx-auto text-center lg:mx-0 lg:text-left">
  Experience bold flavors crafted from premium ingredients. From
  crispy burgers to gourmet pizzas, every bite is an adventure worth
  savoring.
</p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-10">
  {/* Explore Menu Button */}
  <button className="bg-[#ef4423] hover:bg-[#db3a1c] transition duration-300 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold shadow-lg w-full sm:w-auto">
    Explore Menu
    <ArrowRight size={18} />
  </button>

  {/* Watch Story Button */}
  <button className="flex items-center justify-center gap-3 font-semibold text-gray-700 hover:text-[#ef4423] transition w-full sm:w-auto">
    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
      <Play
  size={18}
  className="text-[#ef4423] ml-1 fill-[#ef4423]"
/>
    </div>
    <span>Watch Our Story</span>
  </button>
</div>

            {/* Stats */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14">
              <div>
                <h2 className="text-3xl font-playfair font-black text-[#111]">850+</h2>

                <p className="text-xs uppercase tracking-wider text-gray-500 mt-2">
                  Happy Customers
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-black text-[#111]">120+</h2>

                <p className="text-xs uppercase tracking-wider text-gray-500 mt-2">
                  Menu Items
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-black text-[#111]">15+</h2>

                <p className="text-xs uppercase tracking-wider text-gray-500 mt-2">
                  Expert Chefs
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair font-black text-[#111]">12yr</h2>

                <p className="text-xs uppercase tracking-wider text-gray-500 mt-2">
                  Experience
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="relative flex justify-center items-center min-h-[600px]">
            {/* Background Circle */}

            {/* <div className="absolute w-[420px] h-[420px] rounded-full bg-[#f5eadf]"></div> */}

            {/* <div className="absolute w-[330px] h-[330px] rounded-full bg-[#fff5eb]"></div>

            <div className="absolute w-[270px] h-[270px] rounded-full bg-[#202437] shadow-2xl"></div> */}

            {/* Glow */}

            <div className="absolute w-[320px] h-[320px] bg-orange-300 blur-[100px] opacity-20 rounded-full"></div>

            {/* Burger */}

            <img
              src={Burger}
              alt="Burger"
              className="relative z-20 w-[270px] lg:w-[340px] rounded-full drop-shadow-2xl hover:scale-105 duration-500"
            />

            {/* Hot Deal */}

            <div className="hidden md:block absolute left-0 top-24 animate-float bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 z-30">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <FaFire className="text-1xl text-[#ef4423]" />
              </div>

              <div >
                <h3 className="font-bold text-sm ">Hot Deal</h3>

                <p className="text-xs text-gray-500">50% off on every burger</p>
              </div>
            </div>

            {/* Delivery */}

            <div className="hidden md:block absolute right-7 top-44 animate-float bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 z-30">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <FaMotorcycle className="text-1xl text-[#ef4423]" />
              </div>

              <div>
                <h3 className="font-bold text-sm">20 min</h3>

                <p className="text-xs text-gray-500">Fast Delivery</p>
              </div>
            </div>

            {/* Rating */}

            <div className="hidden md:block absolute right-7 bottom-24 animate-float bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 z-30">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <FaStar className="text-1xl text-[#f7a321]" />
              </div>

              <div>
                <h3 className="font-bold text-sm">4.9/5</h3>

                <p className="text-xs text-gray-500">Customer Rating</p>
              </div>
            </div>
            {/* Decorative Ring */}

            <div className="absolute w-[460px] h-[460px] rounded-full border-[35px] border-white/30"></div>

            {/* Small Dots */}
{/* 
            <div className="absolute top-16 right-16 w-4 h-4 rounded-full bg-orange-400 animate-pulse"></div>

            <div className="absolute bottom-20 left-10 w-3 h-3 rounded-full bg-red-500 animate-ping"></div> */}

            {/* Blur Circle */}

            <div className="absolute bottom-10 right-20 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
