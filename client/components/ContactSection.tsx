import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-10 bg-white" id="Contact">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pr-8"
          >
            <h2 className="font-jakarta font-bold text-4xl md:text-8xl mb-12 leading-tight">
              <span className="text-gradient-blue">Let's Work</span>
              <br />
              <span className="text-black">Together</span>
            </h2>

            <p className="font-jakarta text-[#6F6C8F] text-lg md:text-l mb-8">
              Ready to reach 120M+ NRIs worldwide? Tell us your goal <br /> and we'll build the campaign that gets you there.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              
              {/* Blue Button */}
              <button className="py-3 md:py-4 px-8 rounded-xl font-jakarta font-semibold text-base md:text-lg text-white bg-gradient-to-r from-[#2264EC] to-[#3E7BFA] hover:shadow-lg transition-all duration-300 hover:scale-[1.05] active:scale-[0.95]">
                Apply as a Creator
              </button>

              {/* Green Button */}
              <button className="py-3 md:py-4 px-8 rounded-xl font-jakarta font-semibold text-base md:text-lg text-white bg-gradient-to-r from-[#0BA976] to-[#16C784] hover:shadow-lg transition-all duration-300 hover:scale-[1.05] active:scale-[0.95]">
                Enquire as a Brand
              </button>
            </div>

            {/* Checklist */}
           {/* Checklist */}
{/* Checklist */}
<div className="space-y-4">
  {[
    "Free to create an account and browse",
    "Dedicated campaign manager assigned",
    "Campaign live in 72 hours, guaranteed",
  ].map((text, index) => (
    <div key={index} className="flex items-center gap-3">

      {/* Square Checkbox */}
      <div className="w-7 h-7 rounded-md border-2 border-[#2264EC] flex items-center justify-center">
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <motion.path
            d="M5 13L9 17L19 7"
            stroke="#2264EC"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
        </motion.svg>
      </div>

      <span className="font-jakarta text-[#6F6C8F] text-base md:text-lg">
        {text}
      </span>
    </div>
  ))}
</div>
          </motion.div>

          {/* Right Column - Contact Form (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-3xl border border-[#D9DBE9] bg-white"
          >
            <h3 className="font-urbanist font-bold text-2xl md:text-3xl text-[#170F49] mb-2">
              Send us a message
            </h3>
            <p className="font-jakarta text-[#64748B] text-sm md:text-base mb-8">
              We reply within 24 hours, Guaranteed
            </p>

            <form className="space-y-4">
              <div className="p-3 md:p-4 rounded-2xl border border-[#D9D9D9] bg-white">
                <label className="block font-jakarta font-semibold text-[#2264EC] text-xs md:text-sm mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  placeholder="Jennifer Maddy"
                  className="w-full font-jakarta text-[#6F6C8F] text-sm md:text-base bg-transparent focus:outline-none placeholder-[#6F6C8F]"
                />
              </div>

              <div className="p-3 md:p-4 rounded-2xl border border-[#D9D9D9] bg-white">
                <label className="block font-jakarta font-semibold text-[#2264EC] text-xs md:text-sm mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="jennifermaddy911@gmail.com"
                  className="w-full font-jakarta text-[#6F6C8F] text-sm md:text-base bg-transparent focus:outline-none placeholder-[#6F6C8F]"
                />
              </div>

              <div className="p-3 md:p-4 rounded-2xl border border-[#D9D9D9] bg-white">
                <label className="block font-jakarta font-semibold text-[#2264EC] text-xs md:text-sm mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your campaign or goals..."
                  rows={4}
                  className="w-full font-jakarta text-[#6F6C8F] text-sm md:text-base bg-transparent focus:outline-none placeholder-[#6F6C8F] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 md:py-4 rounded-2xl bg-gradient-to-r from-[#2264EC] to-[#3E7BFA] text-white font-jakarta font-semibold text-base md:text-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}