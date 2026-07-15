import React, { useState } from "react";
import AuthBanner from "./AuthBanner";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthLayout = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden select-none">
      <div className="grid h-full w-full lg:grid-cols-2">

        {/* Left Side: Auth Banner (Only visible on large screens) */}
        <div className="hidden lg:block h-full w-full">
          <AuthBanner />
        </div>

        {/* Right Side: Dynamic Forms */}
        <div className="relative flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto h-full">

          {/* Background Decorative Blur Circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-300/20 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/20 blur-3xl"></div>
          </div>

          {/* Form Container (Z-Index applied to stay on top of blur backgrounds) */}
          <div className="relative z-10 w-full flex justify-center items-center my-auto">
            {isLogin ? (
              <LoginForm setIsLogin={setIsLogin} />
            ) : (
              <RegisterForm setIsLogin={setIsLogin} />
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default AuthLayout;