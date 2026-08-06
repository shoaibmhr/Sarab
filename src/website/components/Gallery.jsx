import banner from "../../assets/image/banner-img.jpg";
import pizza from "../../assets/image/pizza.jpg";
import burger from "../../assets/image/4.jpg";
import wrap from "../../assets/image/5.jpg";
import desert from "../../assets/image/6.jpg";

const categories = [
  {
    title: "Gourmet Burger",
    image: banner,
    height: "h-[500px]",
    width: "w-full",
  },
  {
    title: "Pizza",
    image: pizza,
    height: "h-[240px]", // Change as you like
    width: "w-full",
  },
  {
    title: "Burger",
    image: burger,
    height: "h-[240px]", // Change as you like
    width: "w-full",
  },
  {
    title: "Wrap",
    image: wrap,
    height: "h-[240px]", // Change as you like
    width: "w-full",
  },
  {
    title: "Desert",
    image: desert,
    height: "h-[240px]", // Change as you like
    width: "w-full",
  },
];

const Card = ({ item }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl cursor-pointer ${item.height} ${item.width}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
        <div>
          <h3 className="font-serif font-bold text-white text-2xl">
            {item.title}
          </h3>
        </div>

        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl transition-all duration-300 group-hover:bg-[#ef4423] group-hover:text-white group-hover:-translate-y-1">
          →
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-20">
      <p className="uppercase tracking-[4px] text-center text-[#ef4423] text-sm font-semibold">
        Curated World
      </p>

      <h2 className="mt-3 mb-10 text-2xl md:text-4xl text-center font-bold font-serif">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Large Card */}
        <div className="md:col-span-4">
          <Card item={categories[0]} />
        </div>

        {/* Right Side */}
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.slice(1).map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;