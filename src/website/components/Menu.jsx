import  { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { FaUtensils } from "react-icons/fa";

import Burger from "../../assets/image/banner-img.jpg";
import Pizza from "../../assets/image/pizza.jpg";
import Chicken from "../../assets/image/4.jpg";
import Wraps from "../../assets/image/5.jpg";
import Dessert from "../../assets/image/6.jpg";

const Menu = () => {

  const [activeCategory, setActiveCategory] = useState("All");


  const categories = [
    "All",
    "Burger",
    "Pizza",
    "Chicken",
    "Wrap",
    "Dessert",
  ];


  const foods = [
    {
      id: 1,
      image: Burger,
      title: "Classic Smash Burger",
      category: "Burger",
      price: "$8.99",
      oldPrice: "$12.99",
      badge: "Best Seller",
    },

    {
      id: 2,
      image: Pizza,
      title: "Margherita Pizza",
      category: "Pizza",
      price: "$14.99",
      oldPrice: "$18.99",
      badge: "New",
    },

    {
      id: 3,
      image: Chicken,
      title: "Fried Chicken",
      category: "Chicken",
      price: "$10.99",
      oldPrice: "$14.99",
      badge: "Popular",
    },

    {
      id: 4,
      image: Wraps,
      title: "Loaded Veggie Wrap",
      category: "Wrap",
      price: "$6.99",
      oldPrice: "$9.99",
      badge: "Hot",
    },

    {
      id: 5,
      image: Dessert,
      title: "Nutella Lava Cake",
      category: "Dessert",
      price: "$5.99",
      oldPrice: "$8.99",
      badge: "Sweet",
    },

    {
      id: 6,
      image: Pizza,
      title: "Truffle Mushroom Pizza",
      category: "Pizza",
      price: "$16.99",
      oldPrice: "$20.99",
      badge: "Premium",
    },
  ];


  const filteredFoods =
    activeCategory === "All"
      ? foods
      : foods.filter(
          (food) =>
            food.category.toLowerCase() ===
            activeCategory.toLowerCase()
        );


  return (

    <section className="bg-[#fdf8f2] py-24">

      <div className="max-w-7xl mx-auto px-4">


        {/* Heading */}

        <div className="text-center">

          <p className="text-[#ef4423]  text-2xl font-play">
            Visit Our Menu
          </p>


          <h2 className="text-4xl font-playfair lg:text-5xl font-black mt-2">

            Our Delicious{" "}

            <span className="text-[#ef4423]">
              Menu
            </span>

          </h2>
          <div className="w-16 h-1 bg-[#f7a321] rounded-full mx-auto mt-4"></div>



          {/* Category Buttons */}

          <div className="flex flex-wrap justify-center gap-3 mt-10">


            {categories.map((item)=>(

              <button
                key={item}
                onClick={()=>setActiveCategory(item)}
                className={`
                px-6 py-2 rounded-full border-light transition duration-300
                ${
                  activeCategory === item
                  ? "bg-[#ef4423] text-white border-[#ef4423]"
                  : "bg-white hover:bg-[#ef4423] hover:text-white"
                }
                `}
              >

                {item}

              </button>


            ))}


          </div>


        </div>




        {/* Food Cards */}


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">


          {filteredFoods.map((food)=>(


            <div
              key={food.id}
              className="
              bg-white 
              rounded-3xl 
              overflow-hidden 
              shadow-lg 
              hover:shadow-2xl 
              hover:-translate-y-2 
              transition-all 
              duration-300 
              group
              "
            >



              {/* Image */}

              <div className="relative overflow-hidden">


                <img
                  src={food.image}
                  alt={food.title}
                  className="
                  w-full 
                  h-64 
                  object-cover 
                  group-hover:scale-110 
                  transition 
                  duration-500
                  "
                />



                <span className="
                absolute 
                top-4 
                left-4 
                bg-[#ef4423] 
                text-white 
                px-3 
                py-1 
                rounded-full 
                text-xs 
                font-semibold
                ">

                  {food.badge}

                </span>



                <button
                className="
                absolute 
                top-4 
                right-4 
                w-10 
                h-10 
                rounded-full 
                bg-white 
                shadow-lg 
                flex 
                text-dark
                items-center 
                justify-center 
                hover:bg-[#ef4423] 
                 hover:text-white 
                transition
                " 
                >

                  <FontAwesomeIcon 
                  icon={faHeart}
                  />

                </button>


              </div>





              {/* Card Body */}


              <div className="p-6">


                <p className="text-[#ef4423] font-medium text-sm">

                  {food.category}

                </p>



                <h3 className="
                text-2xl 
                font-playfair
                font-bold 
                mt-2 
                text-gray-800
                ">

                  {food.title}

                </h3>



                <p className="
                text-gray-500 
                leading-7 
                mt-3
                ">

                  Fresh ingredients, premium quality and unforgettable taste for every customer.

                </p>




                <div className="
                flex 
                items-center 
                justify-between 
                mt-6
                ">


                  <div>

                    <span className="
                    text-[#ef4423] 
                    text-2xl 
                    font-bold
                    ">

                      {food.price}

                    </span>


                    <span className="
                    text-gray-400 
                    line-through 
                    ml-2
                    ">

                      {food.oldPrice}

                    </span>


                  </div>



                  <button
                  className="
                  w-11 
                  h-11 
                  rounded-full 
                  bg-[#ef4423] 
                  text-white 
                  text-xl 
                  hover:rotate-90 
                  transition-all 
                  duration-300
                  "
                  >

                    +

                  </button>


                </div>



              </div>



            </div>



          ))}



        </div>





        {/* Button */}


       <div className="mt-10 flex justify-center">
              <button className="flex bg-[#ef4423] hover:bg-[#d8391d] transition-all duration-300 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl items-center gap-3 font-semibold">
                 <FaUtensils /> View Full Menu
              </button>
             
            </div>


      </div>


    </section>

  );

};


export default Menu;