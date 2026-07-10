import React from "react";
import AuthBanner from "./AuthBanner";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Side */}

        <AuthBanner />

        {/* Right Side */}

        <div className="relative flex items-center justify-center p-6">

          {/* Background */}

          <div className="absolute inset-0">

            <div className="absolute top-16 left-20 h-60 w-60 rounded-full bg-orange-200 blur-3xl opacity-40"></div>

            <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-red-200 blur-3xl opacity-40"></div>

          </div>

          <div className="relative w-full max-w-md">

            {children}

          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthLayout;