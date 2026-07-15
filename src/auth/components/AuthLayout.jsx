import { Outlet } from "react-router-dom";
import AuthBanner from "./AuthBanner";

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side */}
      <div className="hidden lg:block">
        <AuthBanner />
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-6 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
