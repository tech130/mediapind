import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#F5F6FA] border-t border-[#E5E7EB]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pb-14 border-b border-[#D1D5DB]">

          {/* Logo & Description */}
          <div>
            {/* <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#2264EC] flex items-center justify-center">
                <img src="/Word mark LOGO-1.png" alt="logo" className="w-5 h-5" />
              </div>
              <span className="text-2xl font-semibold text-[#2264EC]">
                Media Pind
              </span>
            </div> */}
            <a href="#">
  <img src="/mediapindlogo.svg" alt="Media Pind Logo" className="w-14 h-auto pb-4"  />
</a>

            <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
              Empowering brands to connect with top NRI creators across the world.
              We help you scale globally through authentic influencer-driven marketing.
            </p>

            <p className="text-sm text-black">
              mediapind@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-black mb-6">Quick Links</h4>
            <div className="space-y-3 text-[#4B5563] text-sm">
  <a href="#Brand" className="block hover:text-[#2264EC]">Our Brands</a>
  <a href="#Project" className="block hover:text-[#2264EC]">Our Work</a>
  <a href="#Offer" className="block hover:text-[#2264EC]">We Offer</a>
  <a href="#Contact" className="block hover:text-[#2264EC]">Contact Us</a>
</div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-black mb-6">Contact US</h4>
            <div className="space-y-2 text-sm">
              <p className="text-[#6B7280]">Call Us Directly</p>
              <p className="text-black font-medium">987 654 3210</p>

              <p className="text-[#6B7280] mt-4">Location</p>
              <p className="text-black">
                782, 1st Floor, Anna Salai,<br/> YMCA Grounds,
CIT Nagar East, <br/>Nandanam, Chennai,<br/>
Tamil Nadu,  600 035.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex justify-end pt-8">
          <div className="flex items-center gap-4">

            <a href="#" className="w-11 h-11 rounded-full bg-black flex items-center justify-center hover:scale-110 transition">
              <img src="../X.png" alt="Twitter" className="w-5 h-5" />
            </a>

            <a href="#" className="w-11 h-11 rounded-full bg-black flex items-center justify-center hover:scale-110 transition">
              <img src="../insta.png" alt="Instagram" className="w-5 h-5" />
            </a>

            <a href="#" className="w-11 h-11 rounded-full bg-black flex items-center justify-center hover:scale-110 transition">
              <img src="../linkedin.png" alt="LinkedIn" className="w-5 h-5" />
            </a>

            <a href="#" className="w-11 h-11 rounded-full bg-black flex items-center justify-center hover:scale-110 transition">
              <img src="../drible.png" alt="Dribbble" className="w-5 h-5" />
            </a>

            <a href="#" className="w-11 h-11 rounded-full bg-black flex items-center justify-center hover:scale-110 transition">
              <img src="../behance.png" alt="Behance" className="w-5 h-5" />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}