
// Images
import Burger from "../../assets/image/banner-img.jpg";
import Pizza from "../../assets/image/pizza.jpg";
import Chicken from "../../assets/image/4.jpg";
import Wrap from "../../assets/image/5.jpg";
import Dessert from "../../assets/image/6.jpg";

const Category = () => {
  const categories = [
    {
      id: 1,
      title: "All Items",
      items: "99 items",
      image: Burger,
      active: false,
    },
    {
      id: 2,
      title: "Burgers",
      items: "24 items",
      image: Burger,
      active: false,
    },
    {
      id: 3,
      title: "Pizza",
      items: "18 items",
      image: Pizza,
      active: true,
    },
    {
      id: 4,
      title: "Fried Chicken",
      items: "15 items",
      image: Chicken,
      active: false,
    },
    {
      id: 5,
      title: "Wraps",
      items: "12 items",
      image: Wrap,
      active: false,
    },
    {
      id: 6,
      title: "Desserts",
      items: "20 items",
      image: Dessert,
      active: false,
    },
  ];

  return (
    <section className="bg-[#fdf8f2] py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}

        <div className="text-center">
          <h4 className="text-[#ef4423] font-play text-2xl ">
            What We Offer
          </h4>

          <h2 className="mt-3 text-4xl font-playfair md:text-6xl font-black leading-tight">
            Browse by <span className="text-[#ef4423]">Category</span>
          </h2>

          <div className="w-16 h-1 bg-[#f7a321] rounded-full mx-auto mt-4"></div>

          <p className="max-w-xl mx-auto text-gray-500 mt-8 text-lg leading-8">
            From sizzling burgers to exotic world cuisines - find your favourite
            in our menu
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group bg-white rounded-3xl p-6 text-center shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-2xl ${
                category.active
                  ? "border-2 border-[#ef4423]"
                  : "border-2 border-transparent hover:border-[#ef4423]"
              }`}
            >
              {/* Image */}

              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              </div>

              {/* Title */}

              <h3 className="mt-6 text-xl font-bold text-gray-800">
                {category.title}
              </h3>

              {/* Items */}

              <p className="mt-2 text-gray-400">{category.items}</p>
              {/* Decorative Background */}

              <div className="absolute left-0 top-20 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40 -z-10"></div>

              <div className="absolute right-0 bottom-10 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
