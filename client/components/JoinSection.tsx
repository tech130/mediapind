import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= Floating Input ================= */

const Input = ({ label, placeholder, green }: any) => (
  <div className="relative">
    <div className="w-full px-4 pt-5 pb-3 rounded-xl border border-[#E6E8F0] bg-white">
      <label
        className={`absolute top-2 left-4 text-[11px] font-medium ${
          green ? "text-[#16A34A]" : "text-[#2264EC]"
        }`}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-[#1E1B4B] placeholder-[#9CA3AF] focus:outline-none"
      />
    </div>
  </div>
);

/* ================= Floating Select ================= */

const Select = ({ label, green }: any) => (
  <div className="relative">
    <div className="w-full px-4 pt-5 pb-3 rounded-xl border border-[#E6E8F0] bg-white">
      <label
        className={`absolute top-2 left-4 text-[11px] font-medium ${
          green ? "text-[#16A34A]" : "text-[#2264EC]"
        }`}
      >
        {label}
      </label>
      <select className="w-full bg-transparent text-sm text-[#9CA3AF] focus:outline-none appearance-none">
        <option>Select {label}</option>
      </select>
    </div>
  </div>
);

/* ================= FAQ DATA ================= */

const influencerFaqs = [
  {
    q: "Do I need a minimum number of followers to apply?",
    a: "No strict minimum. We assess creators based on content quality, audience engagement, and authenticity.",
  },
  {
    q: "What platforms do you accept creators from?",
    a: "Instagram, YouTube, TikTok and more.",
  },
  {
    q: "How long does the verification process take?",
    a: "Usually 5–7 business days.",
  },
];

const brandFaqs = [
  {
    q: "Do you work with global brands targeting NRI communities?",
    a: "Yes. International brands looking to reach NRI audiences find our network uniquely positioned.",
  },
  {
    q: "What does a typical campaign look like?",
    a: "Depends on your campaign objective.",
  },
  {
    q: "What types of brands do you work with?",
    a: "Retail, Tech, Finance, Lifestyle and more.",
  },
];

/* ================= MAIN COMPONENT ================= */

export default function JoinSection() {
  const [openInfluencer, setOpenInfluencer] = useState<number | null>(0);
  const [openBrand, setOpenBrand] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 md:px-10 bg-[#F3F4FA]" id="MainForm">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1B3A]">
            Join Media Pind <span className="text-[#2264EC]">Today</span>
          </h2>
          <p className="text-[#6F6C8F] mt-4">
            Whether you're an influencer or a brand — we have a place for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ================= Influencer Card ================= */}
          <div className="bg-white rounded-2xl border border-[#E6E8F0] p-10">

            {/* ICON ADDED */}
            <div className="w-12 h-12 rounded-lg bg-[#2264EC] flex items-center justify-center mb-6">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0001 7.60095L5.00609 15.791C4.86505 15.9836 4.7976 16.2204 4.81594 16.4585C4.83429 16.6965 4.9372 16.9202 5.10609 17.089L5.92309 17.907C6.09444 18.0781 6.32208 18.1813 6.56375 18.1973C6.80541 18.2133 7.04467 18.141 7.23709 17.994L15.0901 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5003 21.174C15.5003 20.5 14.3723 20 13.0003 20C10.9423 20 9.07228 22.356 7.00028 22C4.92828 21.644 4.22528 18.631 5.50028 17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12C18.7614 12 21 9.76142 21 7C21 4.23858 18.7614 2 16 2C13.2386 2 11 4.23858 11 7C11 9.76142 13.2386 12 16 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>

            <h3 className="text-2xl font-bold text-[#1B1B3A] mb-2">
              Join as Influencer
            </h3>
            <p className="text-[#6F6C8F] mb-6">
              Are you an NRI creator? We'd love to have you.
            </p>

            <div className="border-t border-[#E6E8F0] mb-6"></div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input label="First name" placeholder="Shiva" />
              <Input label="Last name" placeholder="Kumar" />
            </div>

            <Input label="Email Address" placeholder="jennifer@gmail.com" />
            <div className="mt-4">
              <Input label="Phone number" placeholder="+1 000-000-0000" />
            </div>

            <div className="mt-4">
              <Select label="Country" />
            </div>

            <div className="mt-4">
              <Select label="Primary Platform" />
            </div>

            <div className="mt-4">
              <Select label="Content Niche" />
            </div>

            <div className="mt-4">
              <Input label="Profile / Channel URL" placeholder="Link URL" />
            </div>

            <button className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-[#2B59E0] to-[#3E7BFA] text-white font-semibold">
              Join as Influencer
            </button>

            {/* FAQ */}
            <div className="mt-10">
              <p className="font-semibold text-[#1B1B3A] mb-4">
                Frequently Asked Questions by{" "}
                <span className="text-[#2264EC]">Influencer</span>
              </p>

              {influencerFaqs.map((faq, i) => (
                <div key={i} className="border-b border-[#E6E8F0] py-4">
                  <button
                    onClick={() =>
                      setOpenInfluencer(openInfluencer === i ? null : i)
                    }
                    className="flex justify-between w-full text-left font-medium text-sm"
                  >
                    {faq.q}
                    <span className="text-[#2264EC]">
                      {openInfluencer === i ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openInfluencer === i && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-sm text-[#6F6C8F] mt-3"
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* ================= Brand Card ================= */}
          <div className="bg-white rounded-2xl border border-[#E6E8F0] p-10">

            {/* ICON ADDED */}
            <div className="w-12 h-12 rounded-lg bg-[#16A34A] flex items-center justify-center mb-6">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 3L20 7V14M18 17L12 21L6 17M4 14V7L10 3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 7L12 12M12 12V21M12 12L20 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>

            <h3 className="text-2xl font-bold text-[#1B1B3A] mb-2">
              Join as Brand
            </h3>
            <p className="text-[#6F6C8F] mb-6">
              We'll guarantee results. Reach out to see how we can help.
            </p>

            <div className="border-t border-[#E6E8F0] mb-6"></div>

            <Input label="Brand name" placeholder="Virtus" green />
            <div className="mt-4">
              <Input label="Work E-mail" placeholder="jennifer@gmail.com" green />
            </div>
            <div className="mt-4">
              <Input label="Phone number" placeholder="+1 000-000-0000" green />
            </div>
            <div className="mt-4">
              <Input label="Brand/Company" placeholder="Your brand name" green />
            </div>
            <div className="mt-4">
              <Select label="Industry" green />
            </div>
            <div className="mt-4">
              <Select label="Campaign Objective" green />
            </div>
            <div className="mt-4">
              <Input label="Website / LinkedIn link" placeholder="https://" green />
            </div>

            <button className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-[#0BA976] to-[#16C784] text-white font-semibold">
              Partner as Brand
            </button>

            {/* FAQ */}
            <div className="mt-10">
              <p className="font-semibold text-[#1B1B3A] mb-4">
                Frequently Asked Questions by{" "}
                <span className="text-[#16A34A]">Brands</span>
              </p>

              {brandFaqs.map((faq, i) => (
                <div key={i} className="border-b border-[#E6E8F0] py-4">
                  <button
                    onClick={() => setOpenBrand(openBrand === i ? null : i)}
                    className="flex justify-between w-full text-left font-medium text-sm"
                  >
                    {faq.q}
                    <span className="text-[#16A34A]">
                      {openBrand === i ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openBrand === i && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-sm text-[#6F6C8F] mt-3"
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}