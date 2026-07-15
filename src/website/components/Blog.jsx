import Burger from "../../assets/image/banner-img.jpg";
import Pizza from "../../assets/image/pizza.jpg";
import Chicken from "../../assets/image/4.jpg";

import { FaUser, FaComment, FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const foods = [
    {
      id: 1,
      image: Burger,
      category: "FOOD & HEALTH",
      badge: "14 March",
      title: "Healthy Fast Food: A Myth or Beautiful Reality",
      author: "James Writer",
      comments: "24 Comments",
    },
    {
      id: 2,
      image: Pizza,
      category: "FOOD SCIENCE",
      badge: "18 March",
      title: "The Secret Behind Authentic Italian Pizza",
      author: "James Writer",
      comments: "18 Comments",
    },
    {
      id: 3,
      image: Chicken,
      category: "RECIPES",
      badge: "22 March",
      title: "Crispy Chicken Recipe Everyone Loves",
      author: "James Writer",
      comments: "31 Comments",
    },
  ];

  return (
    <section id="blog" className="bg-[#fdf8f2] py-15">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}

        <div className="text-center">
          <p className="text-[#ef4423] text-1xl font-play">Our Blog</p>

          <h2 className="text-2xl lg:text-4xl font-bold font-playfair mt-3">
            Latest Food <span className="text-[#ef4423]">Articles</span>
          </h2>

          <div className="w-16 h-1 bg-[#f7a321] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Blog Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-13">
          {foods.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={food.image}
                  alt={food.title}
                  className="w-full h-50 object-cover group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-5 left-5 bg-[#ef4423] text-white px-2 py-2 rounded-full text-sm font-semibold">
                  {food.badge}
                </span>
              </div>

              {/* Body */}

              <div className="p-5">
                <p className="uppercase text-[#ef4423] font-semibold tracking-wider text-sm">
                  {food.category}
                </p>

                <h3 className="text-l font-semibold mt-2 leading-snug text-gray-900">
                  {food.title}
                </h3>

                <div className="flex items-center gap-6 mt-3 text-gray-500">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-[#ef4423] text-md" />
                    <span>{food.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaComment className="text-[#e6392f] text-md" />
                    <span>{food.comments}</span>
                  </div>
                </div>

                <button className="mt-5 text-[#ef4423] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Read More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
