
import banner from "../../assets/image/banner-img.jpg";
import pizza from "../../assets/image/pizza.jpg";
import burger from "../../assets/image/4.jpg";
import wrap from "../../assets/image/5.jpg";
import desert from "../../assets/image/6.jpg";

const categories = [
  {
    title: "Gourmet Burger",
    
    image: banner,
    large: true,
  },
  {
    title: "Pizza",
   
    image: pizza,
  },
  {
    title: "Burger",
    
    image: burger,
  },
  {
    title: "Wrap",
    
    image: wrap,
    half: true,
  },
   {
    title: "Desert",
    
    image: desert,
    half: true,
  },
];

const Card = ({ item }) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
        item.large ? "h-[620px]" : "h-[300px]"
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
        <div>
          <p className="text-amber-400 tracking-[3px] text-sm font-medium uppercase">
            {item.items}
          </p>

          <h3
            className={`font-serif font-bold text-white mt-2 ${
              item.large ? "text-2xl" : "text-2xl"
            }`}
          >
            {item.title}
          </h3>
        </div>

        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl transition-all duration-300 group-hover:bg-amber-400 group-hover:-translate-y-1">
          →
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20 ">
      <p className="uppercase tracking-[4px] text-center text-amber-400 text-sm font-semibold">
        Curated World
      </p>

      <h2 className="mt-3 mb-10 text-4xl md:text-5xl text-center font-bold font-serif">
        Shop by category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left */}
        <div className="md:col-span-4">
          <Card item={categories[0]} />
        </div>

        {/* Right */}
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.slice(1).map((item, index) => (
            <div
              key={index}
              className={item.full ? "md:col-span-2" : ""}
            >
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;