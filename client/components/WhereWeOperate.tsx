import { motion } from "framer-motion";

const col1 = [
  { name: "china", flag: "/china1.svg", region: "Asia-Pacific" },
  { name: "United Kingdom", flag: "/UK.svg", region: "Europe" },
  { name: "Japan", flag: "/japan1.svg", region: "Asia-Pacific" },
  { name: "Argentina", flag: "/Argi.svg", region: "Asia-Pacific" },
];

const col2 = [
  { name: "Korea", flag: "/korea2.svg", region: "Asia-Pacific" },
  { name: "Austria", flag: "/aus.svg", region: "Oceania" },
  { name: "United States", flag: "/US.svg", region: "North America" },
  { name: "Indonesia", flag: "/indo1.svg", region: "Asia-Pacific" },
];

const col3 = [
  { name: "Russia", flag: "/Russia.svg", region: "Europe & Asia" },
  { name: "Canada", flag: "/canada.svg", region: "North America" },
  { name: "Sweden", flag: "/swe.svg", region: "Europe" },
  { name: "German", flag: "/gem.svg", region: "Europe" },
];

function VerticalMarquee({
  items,
  direction = "up",
  duration = 18,
}: {
  items: any[];
  direction?: "up" | "down";
  duration?: number;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden h-[420px]">
      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#f7f8fc] to-transparent z-10" />
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f7f8fc] to-transparent z-10" />

      <motion.div
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6"
      >
        {duplicated.map((country, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 text-center
                       shadow-sm border border-gray-200
                       hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-center mb-3">
              <img
                src={country.flag}
                alt={country.name}
                className="w-14 h-14 object-contain"
              />
            </div>

            <p className="font-semibold text-gray-800 text-sm md:text-base">
              {country.name}
            </p>

            {/* <span className="text-xs text-blue-600 mt-2 inline-block bg-blue-50 px-3 py-1 rounded-full">
              {country.region}
            </span> */}
            <span className="text-[6px] md:text-xs text-blue-600 mt-2 inline-block bg-blue-50 px-3 py-1 rounded-full">
  {country.region}
</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function WhereWeOperate() {
  return (
    <section className="relative pt-24 pb-40 px-4 bg-[#f7f8fc] overflow-hidden">
      
      {/* Background World Map Image with Top → Bottom Fade */}
      <img
        src="../mapbase.svg"
        alt="world map"
        className="absolute bottom-0 left-0 w-full 
                   opacity-20 pointer-events-none
                   [mask-image:linear-gradient(to_bottom,transparent,transparent,black_100%)]
                   [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_40%,black_100%)]"
      />

      <div className="relative max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-5xl md:text-9xl font-bold leading-tight mb-6 text-[#1c1c3c]">
            Where <br />
            We <br/><span className="text-blue-600">Operate</span>
          </h2>

          <p className="text-gray-600 text-s max-w-md">
            Media Pind operates across the world's largest NRI hubs and we're expanding every quarter.
          </p>
        </div>

        {/* Right Columns */}
        <div className="grid grid-cols-3 gap-6">
          {/* Column 1 - Bottom → Top */}
          <VerticalMarquee items={col1} direction="up" duration={20} />

          {/* Column 2 - Top → Bottom */}
          <VerticalMarquee items={col2} direction="down" duration={22} />

          {/* Column 3 - Bottom → Top */}
          <VerticalMarquee items={col3} direction="up" duration={24} />
        </div>
      </div>

      {/* Bottom Text */}
      <p className="relative text-center text-gray-600 mt-20 text-sm md:text-base">
        The Indian Diaspora Is Everywhere. So Are We.
      </p>
    </section>
  );
}