import React from "react";

import { FaPaperPlane, FaLock } from "react-icons/fa";

const Subscribe = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#cf1717] via-[#c91414] to-[#b80f0f] py-15 px-5">
      {/* Background Circles */}

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.15) 1.5px, transparent 1.5px)",
            backgroundSize: "75px 75px",
          }}
        ></div>
      </div>

      {/* Content */}

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Small Heading */}

        <p className="text-[#ffd7d7]  text-1xl font-play">Stay Connected</p>

        {/* Main Heading */}

        <h2 className="mt-4 text-2xl md:text-4xl lg:text-4xl font-playfair font-bold leading-tight text-white drop-shadow-lg">
          Subscribe & Get Exclusive{" "}
          <span className="text-[#f7a321]">Deals</span>
        </h2>

        {/* Description */}

        <p className="mt-6 text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-8">
          Get 15% off your first order plus early access to new menu items
        </p>

        {/* Part 2 */}

        <div className="mt-12">
          <div className="flex flex-col md:flex-row items-center justify-center  max-w-3xl mx-auto">
            {/* Email Input */}

            <div className="w-full lg:w-[65%]">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="
w-md
h-14
rounded-full
bg-white
px-8
text-lg
text-gray-700
placeholder:text-gray-400
outline-none
border
border-transparent
focus:border-[#f7a321]
focus:ring-4
focus:ring-yellow-200
transition-all
duration-300
shadow-[0_10px_30px_rgba(0,0,0,0.15)]
"
              />
            </div>

            {/* Subscribe Button */}

            <button
              className="
w-md
lg:w-auto
h-14
px-8
rounded-full
bg-[#f7a321]
hover:bg-[#ffb400]
text-[#1d1d1d]
font-bold
text-lg
flex
items-center
justify-center

transition-all
duration-300
hover:-translate-y-1
hover:scale-105
shadow-[0_12px_35px_rgba(247,163,33,0.45)]
"
            >
              <FaPaperPlane />
              Subscribe
            </button>
          </div>

          {/* Bottom Text */}

          <div className="mt-6 flex justify-center items-center gap-2 text-white/80">
            <FaLock className="text-sm" />

            <span className="text-sm md:text-base">
              No spam, unsubscribe anytime.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
