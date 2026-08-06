import { ArrowRight, ShieldCheck, Clock, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
// Agar aapke paas koi achi image hai to use import kar lein, warna placeholder use ho rha hai
import ChefImage from "../../assets/image/banner-img.jpg"; 

const ExploreMore = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-emerald-500" size={24} />,
      title: "100% Fresh & Hygienic",
      desc: "Hum hamesha fresh aur premium ingredients use karte hain taake aapko behtareen taste mile."
    },
    {
      icon: <Clock className="text-amber-500" size={24} />,
      title: "Super Fast Delivery",
      desc: "Aapka khana garam aur fresh pahuchega, sirf 20 minutes ke andar aapke darwaze par."
    },
    {
      icon: <Award className="text-red-500" size={24} />,
      title: "Best Quality Chefs",
      desc: "Hamare experienced chefs har dish ko dil aur maharat se taiyar karte hain."
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: "850+ Happy Customers",
      desc: "Hamari pehchan hamare khush aur satisfied customers hain jo baar baar aate hain."
    }
  ];

  return (
    <div className="bg-[#fdf7ef] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ef4423] font-bold text-xs uppercase tracking-[3px] bg-red-50 px-4 py-2 rounded-full">
            Our Story & Mission
          </span>
          <h1 className="text-3xl lg:text-5xl font-playfair font-black text-[#111] mt-4 leading-tight">
            We Serve The Best Quality{" "}
            <span className="text-[#ef4423]">Fast Food</span> In Town
          </h1>
          <p className="text-gray-500 mt-4 text-sm lg:text-base leading-relaxed">
            Sarab Restaurant par hum sirf khana nahi bechte, balkay ek lazeez
            tajurba pesh karte hain. Hamara maqsad aap tak behtareen aur saaf
            suthra khana deliver karna hai.
          </p>
        </div>

        {/* Content Section (Grid) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side: Image with Decorative Elements */}
          <div className="relative flex justify-center">
            {/* Background decorative glow */}
            <div className="absolute w-72 h-72 bg-orange-300 blur-[80px] opacity-25 rounded-full top-10"></div>

            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition duration-500">
              <img
                src={ChefImage}
                alt="Our Kitchen & Chef"
                className="w-full max-w-md h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs uppercase tracking-widest text-orange-400 font-bold">
                  Since 2014
                </p>
                <h3 className="text-xl font-bold">Crafting Bold Flavors</h3>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 lg:right-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                🍳
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-[#111]">
                  Gourmet Quality
                </h4>
                <p className="text-xs text-gray-500">Made with love</p>
              </div>
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-black text-[#111]">
              Why People <span className="text-[#ef4423]">Choose Us?</span>
            </h2>

            <div className="grid gap-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#111]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA (Call To Action) Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden shadow-xl">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <h2 className="text-2xl lg:text-4xl font-extrabold mb-4 relative z-10">
            Hungry? Let's Order Some Delicious Food Now!
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-xs lg:text-sm mb-8 relative z-10 leading-relaxed">
            Abhi order karein aur enjoy karein hamare garma garam crispy
            burgers, loaded pizzas aur behad lazeez platters.
          </p>

          <div className="flex justify-center relative z-10">
            <Link
              to="/menu"
              className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300 text-xs flex items-center gap-2"
            >
              <span>View Full Menu</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;