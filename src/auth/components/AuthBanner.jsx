// src/auth/components/AuthBanner.jsx
import { FaUtensils } from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Real-time order management",
  "Complete inventory tracking",
  "Detailed sales analytics",
  "Multi-role staff access",
];

const AuthBanner = () => {
  return (
    <div
      className="
        relative hidden w-[42%] flex-col justify-between overflow-hidden
        bg-[#2B120D] p-8 text-white md:flex
      "
    >
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-orange-600/10 blur-3xl" />

      {/* Logo */}
      <div className="relative flex items-center gap-2.5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600">
          <FaUtensils size={18} />
        </div>
        <div>
          <h1 className="text-base font-bold leading-none">Sarab</h1>
          <p className="mt-0.5 text-xs text-orange-200">
            Restaurant Management
          </p>
        </div>
      </div>

      {/* Middle content */}
      <div className="relative">
        <h2 className="text-2xl font-bold leading-snug">
          Manage your restaurant, all in one place.
        </h2>
        <p className="mt-3 text-sm text-orange-100/80">
          Orders, inventory, staff, aur customers — sab kuch ek professional
          dashboard se control karein.
        </p>

        <div className="mt-6 space-y-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2.5">
              <CheckCircle2
                size={16}
                className="flex-shrink-0 text-orange-400"
              />
              <span className="text-sm text-orange-50">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="relative text-xs text-orange-200/60">
        © 2026 Sarab Restaurant. All rights reserved.
      </p>
    </div>
  );
};

export default AuthBanner;
