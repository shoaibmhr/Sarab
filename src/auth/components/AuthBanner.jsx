import React from 'react';
import { FaUtensils } from 'react-icons/fa';

const AuthBanner = () => {
  return (
    <div className="text-center max-w-lg space-y-6">
      {/* Brand Icon or Logo */}
      <div className="w-20 h-20 bg-[#ef4423] text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-[#ef4423]/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <FaUtensils className="text-4xl" />
      </div>

      {/* Brand Name & Headline */}
      <div className="space-y-3">
        <h1 className="text-4xl xl:text-5xl font-black text-gray-900 tracking-tight">
          Savor <span className="text-[#ef4423]">Control.</span>
        </h1>
        <p className="text-gray-500 text-base xl:text-lg leading-relaxed">
          Manage orders, customize your menu, and track restaurant analytics in real-time.
        </p>
      </div>

      {/* Subtle Stats Card to make it look Pro */}
      <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-50/50 flex justify-around text-center">
        <div>
          <h3 className="text-2xl font-extrabold text-gray-800">99.9%</h3>
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Uptime</p>
        </div>
        <div className="w-px bg-gray-100"></div>
        <div>
          <h3 className="text-2xl font-extrabold text-gray-800">&lt; 2s</h3>
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Sync Speed</p>
        </div>
      </div>
    </div>
  );
};

export default AuthBanner;