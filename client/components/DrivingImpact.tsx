import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { number: 1000, suffix: "+", label: "Influencer", delay: 0 },
  { number: 750, suffix: "+", label: "Campaigns", delay: 0.1 },
  { number: 250, suffix: "+", label: "Brands", delay: 0.2 },
  { number: 30, suffix: "+", label: "Countries", delay: 0.3 },
];

function CountUpNumber({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function DrivingImpact() {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-br from-black via-[#050b1a] to-blue-900 text-white">
      
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500 opacity-20 blur-[150px] rounded-full" />

      <div className="relative max-w-[1400px] mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-bold text-4xl md:text-6xl mb-6">
            Driving <span className="text-blue-500">Impact</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Building meaningful collaborations between Indian creators <br/>abroad and leading global brands.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="relative p-8 rounded-2xl border border-white/10 
                         bg-white/5 backdrop-blur-xl 
                         overflow-hidden group hover:border-blue-500/40 
                         transition-all duration-500"
            >
              {/* Bottom Blue Glow */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-600/40 to-transparent blur-xl opacity-60 group-hover:opacity-80 transition duration-500" />

              {/* Faded Background Number */}
              <div className="absolute bottom-2 right-4 text-[100px] font-bold text-white/5 select-none">
                {stat.number}
              </div>

              {/* Main Number */}
              <div className="relative text-4xl md:text-5xl font-bold mb-3 text-white">
                <CountUpNumber target={stat.number} />
                {stat.suffix}
              </div>

              <p className="relative text-gray-300 text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}