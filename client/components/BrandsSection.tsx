import { motion } from "framer-motion";

const row1 = [
  "/Toyota.svg",
  "/sanomed.svg",
  "/GoDaddy_logo.svg.png",
  "/InstaRem_logo.svg.png",
  "/Kruger-Logo.svg.png",
   "/Lucky_Mobile_logo.png",
  "MoneyGram_Logo.svg.png",
  "Pringles.png",
  "/Western-Union-Logo.png",
  "/TD bank.png",
];

const row2 = [
  "/range rover.png",
  "/Rogers_logo.svg.png",
  "/sanomed pharm.png",
  "/TBooth_Logo_2022_RGB_CLR_EN.png",
  "/TD bank.png",
   "/telas.png",
  "/Telstra_logo_PNG6.png",
  "/Unsmoke-Canada-logo-Sep23-EN.png",
  "/Western-Union-Logo.png",
  "/Walmart_logo.svg.png",
];

const row3 = [
  "/Western-Union-Logo.png",
  "/worksafebc_logo.png",
  "/sanomed pharm.png",
  "/TBooth_Logo_2022_RGB_CLR_EN.png",
  "/TD bank.png",
   "/telas.png",
  "/Telstra_logo_PNG6.png",
  "/Unsmoke-Canada-logo-Sep23-EN.png",
   "/Lucky_Mobile_logo.png",
  "/MoneyGram_Logo.svg.png",
  "/Pringles.png",
  
];

function MarqueeRow({
  logos,
  direction = "left",
  speed = 30,
}: {
  logos: string[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const duplicated = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      {/* Fade Left */}
      <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-[#f9fafb] to-transparent z-10" />
      {/* Fade Right */}
      <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-[#f9fafb] to-transparent z-10" />

      <motion.div
        className="flex gap-6 md:gap-5 py-2 whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicated.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center 
                       min-w-[180px] h-16 md:h-20 
                       px-6 rounded-xl 
                       border border-gray-200 
                       bg-white shadow-sm 
                       hover:shadow-md transition-all duration-300"
          >
            <img
              src={logo}
              alt="brand logo"
              className="h-8 md:h-10 object-contain transition duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-[#f9fafb]" id="Brand">
      <div className="max-w-[1440px] mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Brands <span className="text-blue-600">Trust Us</span>
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Brands That Believe in the Power of the Diaspora.
        </p>

        {/* Row 1 - Left → Right */}
        <MarqueeRow logos={row1} direction="right" speed={35} />

        {/* Row 2 - Right → Left */}
        <MarqueeRow logos={row2} direction="left" speed={30} />

        {/* Row 3 - Left → Right */}
        <MarqueeRow logos={row3} direction="right" speed={35} />
      </div>
    </section>
  );
}