import {
  FaClock,
  FaMotorcycle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const schedule = [
  {
    day: "Monday - Friday",
    time: "09:00 AM - 10:00 PM",
    color: "text-green-400",
  },
  {
    day: "Saturday",
    time: "10:00 AM - 11:00 PM",
    color: "text-yellow-400",
  },
  {
    day: "Sunday",
    time: "Closed",
    color: "text-red-400",
  },
];

export default function OpeningHours() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#195a43]">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0px, white 2px, transparent 2px, transparent 12px)",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-5">
          <p className="text-white text-1xl font-play">Opening Hours</p>

          <h2 className="text-2xl md:text-4xl font-semibold font-playfair text-white mt-2">
            We're Open For You
          </h2>

          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-5"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Opening Hours Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="space-y-5">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-white/10 pb-3 last:border-none"
                >
                  <div className="flex items-center gap-3">
                    <FaClock className="text-orange-400 text-sm" />

                    <span className="text-gray-200 text-sm">{item.day}</span>
                  </div>

                  <span className={`text-sm font-semibold ${item.color}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Order Online Card */}
          <div className="bg-[#ef4423] rounded-2xl text-center p-8 shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto">
              <FaMotorcycle className="text-white text-2xl" />
            </div>

            <h3 className="text-2xl font-bold text-white mt-5">Order Online</h3>

            <p className="text-white/90 mt-3 leading-7">
              Get hot food delivered in 25 minutes.
            </p>

            <button className="mt-7 bg-white text-[#ef4423] px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Order Now
            </button>
          </div>

          {/* Contact Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-orange-400" />
                  <span className="text-white">Find Us</span>
                </div>

                <span className="text-gray-300 text-sm">
                  47 Flavor Street, NY
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-orange-400" />
                  <span className="text-white">Phone</span>
                </div>

                <span className="text-gray-300 text-sm">+1 (999) 123-4567</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-orange-400" />
                  <span className="text-white">Email</span>
                </div>

                <span className="text-gray-300 text-sm">
                  hello@sarabfood.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
