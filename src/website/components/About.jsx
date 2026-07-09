import { Leaf, Award, Truck } from "lucide-react";

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
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT ================= */}

          <div className="relative">
            {/* Main Image */}

            <img
              src={MainImage}
              alt="Restaurant"
              className="rounded-3xl w-full h-[550px] object-cover shadow-xl"
            />

            {/* Experience Box */}

            <div className="absolute animate-float top-8 -left-4 lg:-left-8 bg-[#ef4423] text-white rounded-2xl px-7 py-6 shadow-2xl">
              <h2 className="text-5xl font-black">12+</h2>

              <p className="text-sm mt-2 leading-6">
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

          <div>
            <h5 className="text-[#ef4423] font-play text-2xl mb-2">Our Story</h5>

            <h2 className="text-4xl lg:text-4xl font-playfair font-black">
              We Invite You to Visit
              <br />
              Our <span className="text-[#ef4423]">Food Restaurant</span>
            </h2>

            <div className="w-16 h-1 bg-orange-400 rounded-full mt-5 mb-4"></div>

            <p className="text-gray-500 leading-8">
              Founded in 2012, Sarab began as a small corner joint with a big
              dream — to serve food that brings people together. Today we're
              proud to serve thousands of happy customers every week with the
              same passion that started it all.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-5">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start gap-4  rounded-2xl hover:bg-gray-50 transition duration-300"
                >
                  {/* Icon */}

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.color}`}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}

                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {feature.title}
                    </h3>

                    <p className="text-gray-500 mt-1 leading-7">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}

            <div className="mt-10">
              <button className="bg-[#ef4423] hover:bg-[#d8391d] transition-all duration-300 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl flex items-center gap-3 font-semibold">
                 <FaUtensils /> View Full Menu
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
