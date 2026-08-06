import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaStar, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Food Enthusiast",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The truffle pasta blew my mind. I didn't expect that quality from a fast food place. Great ambiance, super friendly staff. Highly recommended!",
  },
  {
    id: 2,
    name: "David Park",
    role: "Corporate Client",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Catered our office party of 50 people and everything was flawless. Fresh, delicious, on time and well presented.",
  },
  {
    id: 3,
    name: "Monica Wilber",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Honestly the best burgers I've ever had. The smash burger is incredible - perfectly crispy edges, juicy inside.",
  },
  {
    id: 4,
    name: "James Anderson",
    role: "Food Blogger",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "Everything was fresh, delicious and beautifully presented. Definitely coming back with my family.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <p className="text-[#e6beb6] text-center text-1xl font-play">
          Visit Our Menu
        </p>

        <h2 className="text-2xl text-center font-playfair lg:text-5xl font-black mt-2">
          Our Delicious <span className="text-[#ef4423]">Menu</span>
        </h2>
        <div className="w-16 h-1 bg-[#f7a321] rounded-full mx-auto mt-4"></div>

        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-14 mt-15"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-full rounded-3xl bg-[#FFF8F3] p-8 border border-orange-100 hover:shadow-xl duration-300">
                {/* Stars */}
                <div className="flex gap-1 text-orange-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>

                {/* Quote */}
                <FaQuoteRight className="absolute top-7 right-7 text-4xl text-orange-100" />

                {/* Review */}
                <p className="text-gray-700 leading-8 min-h-[170px]">
                  {item.review}
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-2">
                  <img
                    src={item.image}
                    alt=""
                    className="w-14 h-14 rounded-full border-[3px] border-[#ef4423] object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
