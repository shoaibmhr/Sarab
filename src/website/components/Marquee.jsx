

const Marquee = () => {
  const items = [
    "Ice Cream Shake",
    "Loaded Fries",
    "Grilled Sandwich",
    "Crispy Fried Chicken",
    "Gourmet Burgers",
    "Artison Pizzas"
  ];

  const all = [...items, ...items, ...items];

  return (
    <section className=" border-gray-700 bg-[#e8281a] py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {all.map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-6 uppercase tracking-[2px] text-sm text-white flex-shrink-0"
          >
            <span>{text}</span>
            <span className="text-yellow-#ffffff8c text-lg">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;