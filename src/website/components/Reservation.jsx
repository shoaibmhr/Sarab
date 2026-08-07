import { Clock3, Phone, Users, MapPin } from "lucide-react";

import { FaUtensils } from "react-icons/fa";

const Reservation = () => {
  return (
    <section
      id="reservation"
      className="w-full bg-gradient-to-b from-[#faf7f3] to-[#f4efe9] py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Heading */}

        <div className="text-center mb-14">
          <p className="text-[#d62828] text-sm sm:text-base font-play font-medium">
            Book a Table
          </p>

          <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold font-playfair text-[#222] mt-2">
            Make a <span className="text-[#d62828]">Reservation</span>
          </h2>
          <div className="w-16 h-1 bg-[#f7a321] rounded-full mx-auto mt-3"></div>

          <p className="text-gray-500 max-w-xl mx-auto mt-3 leading-8">
            Reserve your table for a memorable dining experience. We recommend
            booking 24 hours in advance for weekend evenings.
          </p>
        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Card */}

          <div className="lg:col-span-4">
            <div className="bg-[#171717] rounded-3xl  p-5 text-white shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
              <h3 className="text-2xl font-bold mt-3 mb-3">Contact Info</h3>

              <p className="text-gray-400 leading-5 mb-5">
                We're happy to help you plan the perfect dining experience.
              </p>

              {/* Opening Hours */}

              <div className="flex items-start gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#d62828] flex items-center justify-center">
                  <Clock3 size={22} />
                </div>

                <div>
                  <h4 className="uppercase text-sm font-bold tracking-wider">
                    Opening Hours
                  </h4>

                  <p className="text-gray-300">Wed - Sun, 9 AM - 11 PM</p>
                </div>
              </div>

              {/* Phone */}

              <div className="flex items-start gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#d62828] flex items-center justify-center">
                  <Phone size={22} />
                </div>

                <div>
                  <h4 className="uppercase text-sm font-bold tracking-wider">
                    Call For Booking
                  </h4>

                  <p className="text-gray-300">+1 (800) 123-4567</p>
                </div>
              </div>

              {/* Group Dining */}

              <div className="flex items-start gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#d62828] flex items-center justify-center">
                  <Users size={22} />
                </div>

                <div>
                  <h4 className="uppercase text-sm font-bold tracking-wider">
                    Group Dining
                  </h4>

                  <p className="text-gray-300">Special menus for 10+ guests</p>
                </div>
              </div>

              {/* Location */}

              <div className="flex items-start gap-4 mb-12">
                <div className="w-12 h-12 rounded-xl bg-[#d62828] flex items-center justify-center">
                  <MapPin size={22} />
                </div>

                <div>
                  <h4 className="uppercase text-sm font-bold tracking-wider">
                    Location
                  </h4>

                  <p className="text-gray-300">42 Flavor Street, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}

          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-500">
              <form className="space-y-4">
                {/* Row 1 */}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full h-12 rounded-lg border border-gray-200 bg-white px-4 transition-all duration-300 outline-none focus:border-[#d62828] focus:ring-4 focus:ring-red-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Phone Number *
                    </label>

                    <input
                      type="text"
                      placeholder="+1 (800) 000-0000"
                      className="w-full h-12 rounded-lg border border-gray-200 px-4  resize-none outline-none transition-all duration-300 focus:border-[#d62828] focus:ring-4 focus:ring-red-100"
                    />
                  </div>
                </div>

                {/* Row 2 */}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="w-full h-12 rounded-lg border border-gray-200 bg-white px-4 transition-all duration-300 outline-none focus:border-[#d62828] focus:ring-4 focus:ring-red-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Number of Guests *
                    </label>

                    <select className="w-full h-12 border border-gray-300 rounded-lg px-4 outline-none focus:border-red-500">
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4 People</option>
                      <option>5+ People</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 */}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Date *
                    </label>

                    <input
                      type="date"
                      className="w-full h-12 rounded-lg border border-gray-200 bg-white px-4 transition-all duration-300 outline-none focus:border-[#d62828] focus:ring-4 focus:ring-red-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Time *
                    </label>

                    <select className="w-full h-12 border border-gray-300 rounded-lg px-4 outline-none focus:border-red-500">
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>01:00 PM</option>
                      <option>02:00 PM</option>
                      <option>03:00 PM</option>
                      <option>04:00 PM</option>
                      <option>05:00 PM</option>
                      <option>06:00 PM</option>
                      <option>07:00 PM</option>
                      <option>08:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Message */}

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Special Requests
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Allergies, dietary needs, special occasions..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none resize-none  transition-all duration-300 focus:border-[#d62828] focus:ring-4 focus:ring-red-100"
                  ></textarea>
                </div>

                {/* Button */}

                <div className="mt-3 flex justify-center">
                  <button className="flex bg-[#ef4423] hover:bg-[#d8391d] transition-all duration-300 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl items-center gap-3 font-semibold">
                    <FaUtensils /> Confirm Reservation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
