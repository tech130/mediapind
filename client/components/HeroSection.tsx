import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Instagram,
  Linkedin,
  Youtube,
  Music2,
} from "lucide-react";

const floatAnim = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
};

export default function HeroSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-2 pb-0 " >
      <div className="max-w-[2560px] mx-auto">

        {/* Main Rounded Container */}
        {/* <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-[#f8f9fb] px-6 md:px-16 py-24 shadow-sm"> */}
        <div className="relative overflow-hidden rounded-[28px] 
                border border-blue-100 
                bg-gradient-to-b from-[#FFFFFF] to-[#BFD2F0]
                px-6 md:px-16 py-24 
                shadow-sm
                md:min-h-[850px]">

          {/* Dotted Background */}
          <div className="absolute inset-0 
            bg-[radial-gradient(#0000000d_1.5px,transparent_1.5px)] 
            [background-size:26px_26px]" 
          />

          {/* Content */}
          <div className="relative z-10 text-center max-w-5xl mx-auto">
          

            {/* Top Badge */}
            <div className="flex justify-center mb-10">
              <div className="flex items-center gap-3 bg-white border border-blue-200 shadow-sm px-4 py-2 rounded-full text-sm font-medium ">
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  New
                </span>
                <span className="text-gray-700">
                  100% Verified NRI Influencer Profiles
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight ">
              World's Largest
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent  lg:text-6xl ">
                NRI Influencers Marketing Agency
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-8 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Media Pind is a premium global influencer agency connecting
              verified Indian creators all around the world with leading
              international brands.
            </p>

            <p className="mt-10 font-semibold text-gray-800">
              Partner with us
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
            <div className="relative inline-block">

  {/* Glow / Border Shadow Layer */}
  <div
    className="absolute inset-0
               bg-[#2264EC]
               opacity-80
               rounded-[34.06px]
               blur-[14.75px]"
  ></div>

  {/* Button */}
  <a href="#MainForm"><button
    className="relative z-10
               group inline-flex items-center 
               gap-[11.49px]
               pl-[34px] pr-[8px] py-[8px]
               bg-[#2264EC]
               rounded-[34.06px]
               text-white
               text-[18px]
               font-medium
               transition-all duration-300"
  >
    <span className="whitespace-nowrap">
      As Influencers
    </span>

    <span
      className="w-[40.87px] h-[40.87px]
                 flex items-center justify-center
                 rounded-full
                 bg-white/10
                 transition-transform duration-300
                 group-hover:translate-x-1"
    >
      <ArrowRight size={18} />
    </span>
  </button></a>

</div>
          <div className="relative inline-block">

  {/* Glow Layer */}
  <div
    className="absolute inset-0
               bg-[#2264EC]
               opacity-70
               rounded-[34.06px]
               blur-[14.75px]"
  ></div>

  {/* Button */}
  <a href="#MainForm"><button
    className="relative z-10
               group inline-flex items-center
               gap-[11.49px]
               pl-[34px] pr-[8px] py-[8px]
               bg-[#F4F6FF]
               text-[#2264EC]
               rounded-[34.06px]
               text-[18px]
               font-medium
               border border-[#2264EC]/40
               transition-all duration-300"
  >
    <span className="whitespace-nowrap">
      As Brand
    </span>

    <span
      className="w-[40.87px] h-[40.87px]
                 flex items-center justify-center
                 rounded-full
                 bg-[#2264EC]/10
                 transition-transform duration-300
                 group-hover:translate-x-1"
    >
      <ArrowRight size={18} />
    </span>
  </button></a>

</div>
            </div>
          </div>

        

            {/* Floating Cards */}

      {/* 🇺🇸 USA */}
    <motion.div
  {...floatAnim}
  style={{ rotate: -10 }}
  className="hidden md:flex items-center gap-3 absolute left-6 top-20
             rounded-[18px] px-5 py-3
             bg-gradient-to-b from-white to-[#f5f5f5]
             border border-gray-200/80
             shadow-[0_8px_20px_rgba(0,0,0,0.10)]"
>
  {/* Smaller Flag */}
  <div className="w-8 h-8 rounded-full overflow-hidden">
    <img 
      src="/flay1.png" 
      alt="USA Flag" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text */}
  <div>
    <p className="font-semibold text-[14px] text-gray-900 leading-tight">
      United States Creators
    </p>
    <p className="text-[11px] text-gray-400 mt-0.5">
      5,000+ Verified Indian Influencers
    </p>
  </div>
</motion.div>
<motion.div
  {...floatAnim}
  style={{ rotate: 10 }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  className="hidden md:flex items-center gap-2 absolute left-40 top-40
             rounded-[18px] px-3 py-2
             bg-gradient-to-b from-white to-[#f5f5f5]
             border border-gray-200/80
             shadow-[0_6px_8px_rgba(0,0,0,0.08)]"
>
  {/* Blue Icon Circle (Smaller) */}
  <div className="w-8 h-8 rounded-full bg-[#4C89F4] flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-3 h-3 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <rect x="3" y="4" width="20" height="20" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  </div>

  {/* Text */}
  <div>
    <p className="font-semibold text-[12px] text-gray-900 leading-snug">
      Online & Offline <br/> Events
    </p>
  </div>
</motion.div>

<motion.div
  {...floatAnim}
  style={{ rotate: 10, zIndex: 1 }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  className="hidden md:flex flex-col items-start gap-2 absolute right-40 top-7
             rounded-[18px] px-3 py-2
             bg-gradient-to-b from-white to-[#f5f5f5]
             border border-gray-200/80
             shadow-[0_6px_8px_rgba(0,0,0,0.08)]"
>
  {/* Top row: Your Custom SVG + Text */}
  <div className="flex items-center gap-2">
    
    {/* Blue Icon Circle with YOUR SVG */}
    <div className="w-8 h-8 rounded-full bg-[#C4C9CC] flex items-center justify-center">
      <img 
  src="/girl.svg" 
  alt="icon"
  className="w-9 h-9 rounded-full object-cover"
/>
    </div>

    <p className="font-semibold text-[12px] text-gray-900 leading-snug">
      Canada creators live
    </p>
  </div>

  {/* Join Now Button */}
  <button
    className="w-full flex items-center justify-center gap-2 py-1
               bg-[#4C89F4] text-white text-[10px] font-medium
               rounded-lg shadow-sm hover:bg-blue-500 transition-all"
  >
    Join Now +
  </button>
</motion.div>

      {/* 🇨🇦 Canada */}
      {/* <motion.div
        {...floatAnim}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute right-16 top-20 bg-white shadow-2xl rounded-2xl px-6 py-4 rotate-[10deg]"
      >
        <p className="font-semibold text-gray-800">
          🇨🇦 Canada Creators Live
        </p>
        <button className="mt-2 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
          Join now
        </button>
      </motion.div> */}
      <motion.div
  {...floatAnim}
  style={{ rotate: -20 }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  className="hidden md:flex items-center gap-2 absolute right-20 top-24
             rounded-[18px] px-3 py-2
             bg-gradient-to-b from-white to-[#f5f5f5]
             border border-gray-200/80
             shadow-[0_6px_8px_rgba(0,0,0,0.08)]"
>
  {/* Blue Icon Circle (Smaller) */}
  <div className="w-8 h-8 rounded-full bg-[#4C89F4] flex items-center justify-center">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0828 14.2078C13.1947 13.374 15.0415 10.1754 14.2076 7.0635C13.3738 3.95161 10.1752 2.10488 7.06328 2.93871C3.95139 3.77254 2.10466 6.97117 2.93849 10.0831C3.77232 13.1949 6.97095 15.0417 10.0828 14.2078Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.06348 2.93872C7.80342 2.74045 8.57517 2.68987 9.33466 2.78986C10.0941 2.88985 10.8265 3.13845 11.4899 3.52147C12.1533 3.9045 12.7348 4.41444 13.2012 5.02218C13.6675 5.62992 14.0096 6.32357 14.2078 7.06351L8.57325 8.57329L7.06348 2.93872Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </div>

  {/* Text */}
  <div>
    <p className="font-semibold text-[12px] text-gray-900 leading-snug">
     120M Total <br/> Research
    </p>
  </div>
  
</motion.div>

      {/* Education */}
      {/* <motion.div
        {...floatAnim}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute left-20 bottom-28 bg-white shadow-2xl rounded-2xl px-6 py-4 rotate-[8deg]"
      >
        <p className="font-semibold text-gray-800">
          Canda Creators
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Trusted Student Community
        </p>
      </motion.div> */}
      <motion.div
  {...floatAnim}
  style={{ rotate: 10 }}
  className="hidden md:flex items-center gap-3 absolute left-32 bottom-52
             rounded-[18px] px-5 py-3
             bg-gradient-to-b from-white to-[#f5f5f5]
             border border-gray-200/80
             shadow-[0_8px_20px_rgba(0,0,0,0.10)]"
>
  {/* Smaller Flag */}
  <div className="w-8 h-8 rounded-full overflow-hidden">
    <img 
      src="/flay1.png" 
      alt="USA Flag" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text */}
  <div>
    <p className="font-semibold text-[14px] text-gray-900 leading-tight">
      Canada creators
    </p>
    <p className="text-[8px] text-gray-400 mt-0.5">
      High Engagement NRI community
    </p>
  </div>
</motion.div>



<motion.div
  {...floatAnim}
  style={{ rotate: -10 }}
  className="hidden md:flex flex-col absolute left-20 bottom-6
             rounded-[12px] p-2
             bg-white
             shadow-[0_6px_10px_rgba(0,0,0,0.15)]"
>
  {/* Image Container */}
  <div className="w-[160px] h-[120px] bg-[#E1EAFF] rounded-[8px] overflow-hidden relative">
    
    {/* Background decorative images */}
    <img
      src="/girl1.svg"
      className="absolute left-[5px] top-[30px] w-[104px] h-[104px] -rotate-3"
      alt=""
    />
    
    <img
      src="/boy1.svg"
      className="absolute right-[-10px] bottom-[-10px] w-[106px] h-[106px] rotate-3"
      alt=""
    />
  </div>

  {/* Text Section */}
  <div className="w-[150px] px-1 mt-2 flex flex-col gap-1">
    <p className="text-[11px] font-semibold text-[#1D1D1D]">
      Education & Study Abroad
    </p>

    <p className="text-[8px] text-gray-500">
      Trusted Student Community Voices
    </p>
  </div>
</motion.div>

      {/* Verified */}
     <motion.div
  {...floatAnim}
  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
  className="hidden md:flex absolute right-20 bottom-20
             rotate-[-10deg]
             bg-white
             shadow-[0_6px_12px_rgba(0,0,0,0.25)]
             rounded-[14px]
             p-[6px]"
>
  {/* LEFT IMAGE */}
  <div className="w-[120px] bg-[#E1EAFF] rounded-[10px] overflow-hidden relative">
    <img
      src="/women.svg"
      alt="Campaign"
      className="w-[150px] h-[185px] absolute -left-4 -top-2 object-cover"
    />
  </div>

  {/* RIGHT CONTENT */}
  <div className="flex flex-col justify-between pl-4 py-2">
    
    {/* Badge */}
    <div className="bg-blue-100/60 rounded-full px-3 py-1 w-fit">
      <span className="text-[10px] text-gray-500 font-medium">
        High-Impact Branding
      </span>
    </div>

    {/* Title */}
    <div className="mt-2">
      <h4 className="text-sm font-semibold text-[#170F49] leading-tight max-w-[150px]">
        End-to-End Campaign Management
      </h4>

      <p className="text-[10px] text-gray-500 mt-2 leading-relaxed">
        • Strategy <br />
        • Execution <br />
        • Reporting
      </p>
    </div>

  </div>
</motion.div>

<motion.div
  {...floatAnim}
   style={{ rotate: -25 }}
  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
  className="hidden md:flex absolute right-64 bottom-64
             rotate-[-23deg]
             bg-white
             shadow-[0_6px_10px_rgba(0,0,0,0.25)]
             rounded-[11px]
             px-4 py-3
             items-center gap-3"
>
  {/* Icon Circle */}
  <div className="w-[24px] h-[24px]
                  bg-[#2264EC]/70
                  rounded-full
                  flex items-center justify-center">
    {/* Replace with your SVG if needed */}
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="3" fill="none" />
    </svg>
  </div>

  {/* Text */}
  <p className="text-[11px] font-semibold text-[#1D1D1D] whitespace-nowrap">
    100% Verified Profiles
  </p>
</motion.div>

          {/* Bottom Social Icons */}
         <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-6 pointer-events-none">

  {/* TOP ROW - 2 Icons */}
  <div className="flex justify-center gap-20 ">
    
  <motion.div
  animate={{ y: [0, -6, 0], rotate: [-20, -15, -20] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  className="w-[70px] h-[70px] flex items-center justify-center"
>
  <img
    src="/icon1.svg"
    alt="Instagram"
    className="w-full h-full object-contain"
  />
</motion.div>
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="rotate-[20deg]
                 w-[70px] h-[70px] 
                 flex items-center justify-center"
    >
      <img src="/you.svg" alt="YouTube" className="w-full h-full object-contain" />
    </motion.div>

  </div>

  {/* BOTTOM ROW - 3 Icons */}
  <div className="flex justify-center gap-20 ">
    
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
      className="rotate-[18deg]
                 w-[70px] h-[70px] 
                 flex items-center justify-center"
      >
      <img src="/tik.svg" alt="TikTok" className="w-full h-full object-contain" />
    </motion.div>

    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 5.5, repeat: Infinity }}
      className="rotate-[-15deg]
                 w-[70px] h-[70px] 
                 flex items-center justify-center"
    >
      <img src="/link.svg" alt="LinkedIn" className="w-full h-full object-contain" />
    </motion.div>

    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4.5, repeat: Infinity }}
      className="rotate-[12deg]
                 w-[70px] h-[70px] 
                 flex items-center justify-center"
    >
      <img src="/twit.svg" alt="Music" className="w-full h-full object-contain" />
    </motion.div>

  </div>

</div>
        </div>
      </div>
    </section>
  );
}