import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, Award, Truck, ArrowRight } from "lucide-react"; // FIXED: Added ArrowRight import here

import MainImage from "../../assets/image/banner-img.jpg";
import SmallImage from "../../assets/image/banner-img.jpg";

import { FaUtensils } from "react-icons/fa";

const About = () => {
  const features = [
    {
      id: 1,
      icon: <Leaf size={18} />,
      title: "100% Fresh Ingredients",
      desc: "We source locally and sustainably. Every ingredient is hand-picked daily for maximum freshness.",
      color: "bg-red-100 text-red-600",
    },
    {
      id: 2,
      icon: <Award size={18} />,
      title: "Award-Winning Recipes",
      desc: "Our signature recipes have won national culinary awards 5 years in a row.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 3,
      icon: <Truck size={18} />,
      title: "Lightning-Fast Delivery",
      desc: "Order online and get hot, fresh food at your door in under 25 minutes.",
      color: "bg-green-100 text-green-700",
    },
  ];

  return (
    <section id="about" className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-5 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT ================= */}
          <div className="relative">
            {/* Main Image */}
            <img
              src={MainImage}
              alt="Restaurant"
              className="rounded-3xl w-full h-[430px] object-cover shadow-xl"
            />

            {/* Experience Box */}
            <div className="absolute animate-float top-8 -left-4 lg:-left-3 bg-[#ef4423] text-white rounded-2xl px-5 py-4 shadow-2xl">
              <h2 className="text-2xl font-black">12+</h2>
              <p className="text-xs mt-2 leading-6">
                Years of
                <br />
                Excellence
              </p>
            </div>

            {/* Small Image */}
            <img
              src={SmallImage}
              alt="Food"
              className="absolute -bottom-8 right-5 lg:right-0 w-40 lg:w-48 rounded-2xl border-4 border-white shadow-2xl"
            />
          </div>

          {/* ================= RIGHT ================= */}
          <div className="text-center lg:text-left">
            <h5 className="text-[#ef4423] font-play text-1xl mb-2">
              Our Story
            </h5>

            <h2 className="text-2xl lg:text-3xl font-playfair font-black leading-tight">
              We Invite You to Visit
              <br />
              Our <span className="text-[#ef4423]">Food Restaurant</span>
            </h2>

            {/* Underline */}
            <div className="w-16 h-1 bg-orange-400 rounded-full mt-5 mb-4 mx-auto lg:mx-0"></div>

            <p className="text-gray-500 leading-8 text-sm mb-0 max-w-xl mx-auto lg:mx-0">
              Founded in 2012, Sarab began as a small corner joint with a big
              dream — to serve food that brings people together. Today we're
              proud to serve thousands of happy customers every week with the
              same passion that started it all.
            </p>

            {/* Features */}
            <div className="mt-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-4 rounded-2xl hover:bg-gray-50 p-4 transition duration-300"
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${feature.color}`}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 mt-1 text-sm leading-7">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button (FIXED Link path) */}
            <div className="mt-4 flex justify-center lg:justify-start">
              <Link 
                to="/menu"
                className="bg-[#ef4423] hover:bg-[#db3a1c] transition duration-300 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-3 font-semibold shadow-lg w-full text-xs sm:w-auto text-center"
              >
                <span>Explore Menu</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;