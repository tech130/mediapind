import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const offerings = [
  {
    title: "Reach & Frequency Campaigns",
    description:
      "Maximize brand visibility across NRI audiences with multi-creator campaigns for strong recall.",
    icon: "/Research1.png",
  },
  {
    title: "Product Sampling Campaigns",
    description:
      "Connect with trusted Indian creators abroad for authentic, culturally relevant content.",
    icon: "/Product.png",
  },
  {
    title: "Online & Offline Events",
    description:
      "From digital launches to curated events beyond the screen.",
    icon: "/Event.png",
  },
  {
    title: "Affiliate & Conversion Campaigns",
    description:
      "Performance-driven collaborations designed to track clicks and sales.",
    icon: "/Affiliate.png",
  },
  {
    title: "Unboxing Campaigns",
    description:
      "Premium unboxing experiences that showcase product value authentically.",
    icon: "/Unboxing.png",
  },
  {
    title: "Podcast Collaborations",
    description:
      "Build authority and deeper engagement through trusted voices.",
    icon: "/Podcast.png",
  },
  {
    title: "Strategic Product Placement",
    description:
      "Seamless brand integration into lifestyle content.",
    icon: "/Placement.png",
  },
  {
    title: "Multi Market Reach",
    description:
      "One brief, 30+ markets. Campaigns that feel local everywhere.",
    icon: "/Global.png",
  },
];

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4 md:px-10 bg-black text-white overflow-hidden" id="Offer">

      {/* 🔵 SECTION BACKGROUND */}
      <div className="absolute inset-0 z-0 bg-black">

        <div
          className="absolute rounded-full"
          style={{
            width: "1366px",
            height: "1246px",
            left: "654px",
            top: "364px",
            background: "#4C89F4",
            filter: "blur(150px)",
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            width: "1303.66px",
            height: "689.74px",
            left: "-308.63px",
            top: "281.64px",
            transform: "rotate(11deg)",
            transformOrigin: "top left",
            background: "#0025CE",
            filter: "blur(200px)",
          }}
        />

        <div
          className="absolute"
          style={{
            width: "1173.16px",
            height: "773.59px",
            left: "-335.73px",
            top: "188.19px",
            background: "#2157C7",
            filter: "blur(100px)",
          }}
        />

        <div
          className="absolute"
          style={{
            width: "1861.10px",
            height: "637.62px",
            left: "-95.50px",
            top: "599.04px",
            background: "#69A2FA",
            filter: "blur(100px)",
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            width: "591px",
            height: "930px",
            left: "-319px",
            top: "22px",
            background: "#203458",
            filter: "blur(150px)",
          }}
        />

      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            What We <span className="text-blue-500">Offer</span>
          </h2>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Explore campaigns powered by NRI creators who deliver global reach and authentic engagement.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(isActive ? null : idx)}
                className="relative rounded-2xl overflow-hidden cursor-pointer min-h-[280px] border border-white/20 backdrop-blur-sm"
              >

                {/* 🟦 CARD GRADIENT BACKGROUND */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(140deg, #131313 33%, rgba(19, 19, 19, 0.87) 41%, rgba(41, 41, 41, 0) 100%)",
                  }}
                />

                {/* Navy Bottom Blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3d] via-[#0b1c3d]/70 to-transparent" />

                {/* Left Black Arch */}
                <div
                  className="absolute left-0 top-0 h-full w-[70%] bg-black"
                  style={{
                    opacity: 0.6,
                    maskImage:
                      "radial-gradient(ellipse 100% 100% at 0% 0%, black 65%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 100% 120% at 0% 0%, black 65%, transparent 100%)",
                  }}
                />

                {/* Dot Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-end">

                  <motion.div
                    animate={{ y: isActive ? -90 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#2264EC] flex items-center justify-center mb-3">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-6 h-6 object-contain"
                      />
                    </div>

                    <h3 className="font-bold text-2xl leading-snug">
                      {item.title}
                    </h3>
                  </motion.div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-300 text-sm absolute bottom-6 left-6 right-6"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                </div>

              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-gray-300 mt-16 max-w-2xl mx-auto">
          We don't believe in one-size-fits-all campaigns. Media Pind delivers the right format for the right audience every single time.
        </p>

      </div>
    </section>
  );
}