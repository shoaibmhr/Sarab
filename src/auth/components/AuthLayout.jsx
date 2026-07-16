import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthBanner from './AuthBanner';

const AuthLayout = () => {
  return (
    // min-h-screen aur overflow-hidden se scrollbar gayab ho jayega
    <div className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-gray-50">
      
      {/* LEFT SECTION (50% Width on Large Screens) */}
      <div className="hidden lg:flex lg:w-1/2 h-full min-h-screen bg-[#ef4423]/5 items-center justify-center p-12 border-r border-gray-100">
        <AuthBanner />
      </div>

      {/* RIGHT SECTION (50% Width on Large Screens) */}
      <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center p-6 md:p-12 bg-white lg:bg-gray-50/30 overflow-y-auto">
        {/* Yahan aapka LoginForm ya RegisterForm render hoga */}
        <div className="w-full max-w-md flex justify-center items-center">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default AuthLayout;