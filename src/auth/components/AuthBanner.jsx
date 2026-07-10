import React from "react";
import {
  FaUtensils,
  FaChartLine,
  FaCashRegister,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCashRegister />,
    title: "Smart POS System",
    desc: "Fast billing with modern POS."
  },
  {
    icon: <FaChartLine />,
    title: "Sales Analytics",
    desc: "Track daily & monthly sales."
  },
  {
    icon: <FaUsers />,
    title: "Staff Management",
    desc: "Manage employees easily."
  }
];

const AuthBanner = () => {
  return (
    <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-12 text-white">

      {/* Background Blur */}

      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

      {/* Logo */}

      <div className="relative z-10 flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">

          <FaUtensils size={28} />

        </div>

        <div>

          <h1 className="text-4xl font-bold">
            RestaurantPOS
          </h1>

          <p className="text-orange-100">
            Restaurant Management System
          </p>

        </div>

      </div>

      {/* Middle */}

      <div className="relative z-10">

        <h2 className="text-5xl font-bold leading-tight">
          Manage Your Restaurant Like a Pro
        </h2>

        <p className="mt-6 max-w-lg text-lg text-orange-100 leading-8">
          Control orders, tables, kitchen, staff, inventory,
          customers and reports from one powerful dashboard.
        </p>

      </div>

      {/* Features */}

      <div className="relative z-10 space-y-5">

        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 rounded-2xl bg-white/10 backdrop-blur-md p-5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-orange-600 text-xl">

              {item.icon}

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-orange-100">
                {item.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default AuthBanner;