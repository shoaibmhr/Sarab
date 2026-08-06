import { useEffect, useState } from "react";
import Burger from "../../assets/image/banner-img.jpg";
const SaleBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 24 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();

      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);

        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
    bg-[linear-gradient(135deg,#1a0000_0%,#2d0000_100%)]
    w-full 
    h-120
    flex 
    justify-center 
    px-5 
    py-5
    bg-[#f5f5f5]
    "
    >
      <div
        className="
      w-full 
      max-w-7xl
      px-4 sm:px-6 lg:px-8 
      rounded-2xl
      p-8
      md:p-12
      flex
      items-center
      justify-between
      gap-10
      overflow-hidden

      flex-col
      lg:flex-row
      "
      >
        {/* LEFT SIDE */}

        <div
          className="
        flex-1
        text-white
        text-center
        lg:text-left
        "
        >
          <p
            className="
          text-[#c5a66a]
          text-xs
          tracking-[3px]
          mb-3
          "
          >
            SPECIAL SALE • TODAY ONLY
          </p>

          <h1
            className="
          text-3xl
          md:text-5xl
          lg:text-4xl
          leading-tight
          font-bold
          mb-5
          font-serif
          "
          >
            Get
            <span className="text-[#b48b3c]"> 30% off Our</span>
            <br />
            <span className="text-[#b48b3c]"> Signature</span> Burger Meal.
          </h1>

          <p
            className="
          text-[#b7bfd1]
          text-sm
          mb-5
          max-w-md
          mx-auto
          lg:mx-0
          "
          >
            Don't miss our weekend special - grab our award-winning signature
            burger combo with loaded fries.
          </p>

          {/* TIMER */}

          <div
            className="
          flex
          justify-center
          lg:justify-start
          gap-4
          mb-8
          "
          >
            {[
              {
                value: timeLeft.hours,
                label: "Hours",
              },
              {
                value: timeLeft.minutes,
                label: "Minutes",
              },
              {
                value: timeLeft.seconds,
                label: "Seconds",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
              w-20
              h-20
              md:w-[85px]
              md:h-[85px]
              rounded-xl
              border
              border-white/20
              flex
              flex-col
              justify-center
              items-center
              bg-white/5
              backdrop-blur-md
              "
              >
                <h3
                  className="
                text-2xl
                font-bold
                font-serif
                "
                >
                  {String(item.value).padStart(2, "0")}
                </h3>

                <span
                  className="
                text-xs
                text-[#aab3c5]
                mt-1
                "
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* BUTTON */}

          <button
            className="
          px-8
          py-3
          rounded-full
          bg-[#d8a44c]
          text-[#111]
          font-semibold
          transition
          duration-300
          hover:-translate-y-1
          hover:bg-[#efb556]
          "
          >
            Grab the Deal →
          </button>
        </div>

        {/* RIGHT SIDE */}

        <div
          className="
        flex-1
        flex
        justify-center
        "
        >
          <div
            className="
          w-full
          max-w-[300px]
          h-[320px]
          bg-[#efe3d2]
          rounded-2xl
          overflow-hidden
          relative
          flex
          items-center
          justify-center
          group
          "
          >
            <img
              src={Burger}
              alt="shoe"
              className="
              
              w-full
              h-full
              object-cover
              transition
              duration-500
              group-hover:scale-110
              "
            />

            {/* PRODUCT CARD */}

            <div
              className="
            absolute
            bottom-6
            left-5
            bg-black/70
            backdrop-blur-md
            px-5
            py-3
            rounded-2xl
            text-white
            w-48
            "
            >
              <p
                className="
              text-sm
              text-gray-300
              mb-1
              "
              >
                Our Signature
              </p>

              <h4
                className="
              text-xl
              font-bold
              font-serif
              "
              >
                $149
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleBanner;
