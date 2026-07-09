

const timeline = [
  {
    year: "2012",
    title: "Evolution of Restaurants",
    desc: "Sarab opens its first 20-seat diner on Flavor Street. Within 3 months, lines stretch around the block every evening as word of our food spreads.",
  },
  {
    year: "2015",
    title: "Fine Dining & The Concept",
    desc: "Expanding the vision—we introduced our signature tasting menu and hired our first Michelin-trained chef, elevating our craft to remarkable new heights.",
  },
  {
    year: "2019",
    title: "Modern Fast Food Origins",
    desc: "Launched our signature fast-food line, merging gourmet quality with speed and convenience. Within 6 months we won 3 prestigious culinary awards nationally.",
  },
  {
    year: "2026",
    title: "National Expansion",
    desc: "Now operating in 8 cities across the US with an online delivery platform handling 10,000+ orders weekly—and growing every single day.",
  },
];

const Timeline = () => {
  return (
    <section className="bg-[#faf5ef] py-24 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#e94f37] text-2xl mb-2">Our Journey</p>

          <h2 className="text-4xl font-bold font-playfair text-gray-900">
            A History of
            <span className="text-[#e94f37]"> Restaurant</span>
          </h2>

          <div className="w-16 h-1 bg-[#f7a321] rounded-full mx-auto mt-4"></div>

          <p className="text-gray-500 max-w-xl mx-auto mt-6 leading-7">
            From humble beginnings to the city's most beloved restaurant — every
            chapter written with passion.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#e94f37]"></div>

          <div className="space-y-24">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "md:text-right md:pr-16"
                      : "md:order-2 md:text-left md:pl-16"
                  }`}
                >
                  <span className="text-[#e94f37] italic text-lg">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold font-serif mt-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7">{item.desc}</p>
                </div>

                {/* Empty Column */}
                <div
                  className={`hidden md:block ${
                    index % 2 === 0 ? "" : "md:order-1"
                  }`}
                ></div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-5 h-5 rounded-full border-2 border-[#e94f37] bg-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#e94f37]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
