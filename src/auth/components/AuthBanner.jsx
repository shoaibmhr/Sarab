
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
    desc: "Fast billing with modern POS",
  },
  {
    icon: <FaChartLine />,
    title: "Sales Analytics",
    desc: "Monitor sales in real-time",
  },
  {
    icon: <FaUsers />,
    title: "Staff Management",
    desc: "Manage your team efficiently",
  },
];

const AuthBanner = () => {
  return (
    <div className="relative hidden lg:flex h-screen w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[#ef4423] via-orange-500 to-orange-600 p-8 xl:p-10 text-white"> 
      
      {/* Background Decorative Blur Orbs */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>

      {/* 1. TOP SECTION: Logo */}
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
          <FaUtensils className="text-xl" />
        </div>
        <div>
          <h1 className="text-xl xl:text-2xl font-extrabold tracking-tight">
            RestaurantPOS
          </h1>
          <p className="text-xs text-orange-100/80">
            Restaurant Management System
          </p>
        </div>
      </div>

      {/* 2. MIDDLE SECTION: Heading & Cards (Centered together to avoid overlap) */}
      <div className="relative z-10 flex flex-col justify-center my-auto py-6 space-y-8">
        
        {/* Main Headings */}
        <div className="space-y-3">
          <h2 className="text-3xl xl:text-4xl font-extrabold leading-tight tracking-tight">
            Manage Your Restaurant <br className="hidden xl:inline" />
            Like a Pro
          </h2>
          <p className="max-w-md text-sm xl:text-base leading-relaxed text-orange-100">
            Control orders, billing, inventory, customers, tables and reports from one powerful dashboard.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-3 max-w-md">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3.5 hover:bg-white/20 transition duration-300 ease-in-out cursor-pointer"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#ef4423] text-base shadow-md">
                {item.icon}
              </div>

              <div>
                <h3 className="font-semibold text-sm xl:text-base">
                  {item.title}
                </h3>
                <p className="text-xs xl:text-sm text-orange-100">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 3. BOTTOM SECTION: Footer */}
      <div className="relative z-10 border-t border-white/20 pt-3">
        <p className="text-xs xl:text-sm text-orange-100/90">
          Trusted by{" "}
          <span className="font-bold text-white">
            500+
          </span>{" "}
          Restaurants Worldwide
        </p>
      </div>

    </div>
  );
};

export default AuthBanner;