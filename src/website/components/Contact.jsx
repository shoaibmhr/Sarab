import React from "react";
import { Clock3, Phone, Users, MapPin } from "lucide-react";

import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";

const Reservation = () => {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-b from-[#faf7f3] to-[#f4efe9] py-20 px-5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-14">
          <p className="text-[#d62828] text-1xl font-play font-medium">
            Get In Touch
          </p>

          <h2 className="text-2xl font-playfair lg:text-4xl font-black mt-2">
            Contact <span className="text-[#d62828]">Us</span>
          </h2>
          <div className="w-16 h-1 bg-[#f7a321] rounded-full mx-auto mt-4"></div>

          <p className="text-gray-500 max-w-xl mx-auto mt-3 text-md leading-8">
            Have a question, feedback, or want to plan a special event? We'd
            love to hear from you.
          </p>
        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-12 gap-8 mt-[-30px] items-start">
          {/* Left Contact Card */}

          <div className="lg:col-span-4">
            <div className="bg-[#171717] rounded-3xl p-6 text-white shadow-[0_25px_60px_rgba(0,0,0,0.35)] h-full">
              <h3 className="text-2xl font-bold mb-1">Let's Talk</h3>

              <p className="text-gray-400 leading-7 mb-10">
                We typically respond within 2 hours during business hours.
              </p>

              {/* Opening Hours */}

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#d62828] flex items-center justify-center">
                  <Clock3 size={22} />
                </div>

                <div>
                  <h4 className="uppercase text-sm font-bold tracking-wider">
                    Address
                  </h4>

                  <p className="text-gray-300">
                    42 Flavor Street, Manhattan, New York
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#d62828] flex items-center justify-center">
                  <Phone size={22} />
                </div>

                <div>
                  <h4 className="uppercase text-sm font-bold tracking-wider">
                    Phone
                  </h4>

                  <p className="text-gray-300">+1 (800) 123-4567</p>
                </div>
              </div>

              {/* Group Dining */}

              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#d62828] flex items-center justify-center">
                  <Users size={22} />
                </div>

                <div>
                  <h4 className="uppercase text-sm font-bold tracking-wider">
                    Email
                  </h4>

                  <p className="text-gray-300">hello@sarabfood.com</p>
                </div>
              </div>

              {/* Location */}

              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#d62828] flex items-center justify-center">
                  <MapPin size={22} />
                </div>

                <div>
                  <h4 className="uppercase text-sm font-bold tracking-wider">
                    Working Hours
                  </h4>

                  <p className="text-gray-300">Wed - Sun: 9 AM - 11 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="w-7 h-7 lg:w-8 lg:h-8 rounded-md bg-[#222] hover:bg-orange-500 transition-all duration-300 flex items-center justify-center"
                >
                  <FaFacebookF size={14} />
                </a>

                <a
                  href="#"
                  className="w-7 h-7 lg:w-8 lg:h-8 rounded-md bg-[#222] hover:bg-orange-500 transition-all duration-300 flex items-center justify-center"
                >
                  <FaInstagram size={14} />
                </a>

                <a
                  href="#"
                  className="w-7 h-7 lg:w-8 lg:h-8 rounded-md bg-[#222] hover:bg-orange-500 transition-all duration-300 flex items-center justify-center"
                >
                  <FaTiktok size={12} />
                </a>

                <a
                  href="#"
                  className="w-7 h-7 lg:w-8 lg:h-8 rounded-md bg-[#222] hover:bg-orange-500 transition-all duration-300 flex items-center justify-center"
                >
                  <FaYoutube size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Form */}

          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-5 md:p-7 shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-500">
              <form className="space-y-4">
                {/* Row 1 */}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full h-12 rounded-lg border border-gray-200 bg-white px-4 transition-all duration-300 outline-none focus:border-[#d62828] focus:ring-4 focus:ring-red-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone Number *
                    </label>

                    <input
                      type="text"
                      placeholder="+1 (800) 000-0000"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 resize-none outline-none transition-all duration-300 focus:border-[#d62828] focus:ring-4 focus:ring-red-100"
                    />
                  </div>
                </div>

                {/* Row 2 */}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="w-full h-12 rounded-lg border border-gray-200 bg-white px-4 transition-all duration-300 outline-none focus:border-[#d62828] focus:ring-4 focus:ring-red-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Subject *
                    </label>

                    <input
                      type="Subject"
                      placeholder="Enetr Subjec"
                      className="w-full h-12 rounded-lg border border-gray-200 bg-white px-4 transition-all duration-300 outline-none focus:border-[#d62828] focus:ring-4 focus:ring-red-100"
                    />
                  </div>
                </div>

                {/* Message */}

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Write your message hehe..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-red-500"
                  ></textarea>
                </div>

                {/* Button */}

                <button className="w-50 h-13 rounded-full bg-[#d62828] text-white font-semibold tracking-wide shadow-[0_10px_30px_rgba(214,40,40,0.35)] hover:bg-red-700 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(214,40,40,0.45)] transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
