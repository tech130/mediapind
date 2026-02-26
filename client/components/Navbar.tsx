import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import AuthModal from "./AuthModal";

const navLinks = [
  { label: "Our Brands", href: "#Brand" },
  { label: "Our Work", href: "#Project" },
  { label: "We Offer", href: "#Offer" },
  { label: "Contact Us", href: "#Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalType, setModalType] = useState<"signin" | "signup" | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white"
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between h-[65px]">
          
          {/* Logo */}
          <a href="#">
  <img src="/Word mark LOGO-1.png" alt="Media Pind Logo" className="w-60 h-auto" />
</a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#5A5A59] hover:text-[#2264EC] transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
          <button
  onClick={() => setModalType("signin")}
  className="px-6 py-2 rounded-full bg-[#2264EC] text-white font-semibold inline-flex items-center gap-3 border border-blue"
>
  Sign in

  {/* Circle with arrow */}
  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
    <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></div>
  </div>
</button>
<button
  onClick={() => setModalType("signup")}
  className="px-6 py-2 rounded-full bg-white text-black font-semibold inline-flex items-center gap-3 border border-[#454444]"
>
  Sign up

  {/* Circle with arrow */}
  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-[#454444]">
    <div className="w-2 h-2 border-t-2 border-r-2 border-[#454444] rotate-45"></div>
  </div>
</button>
            
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[#5A5A59]"
                  >
                    {link.label}
                  </a>
                ))}

                <button
                  onClick={() => {
                    setModalType("signin");
                    setMobileOpen(false);
                  }}
                  className="w-full py-2 rounded-full bg-[#2264EC] text-white"
                >
                  Sign in
                </button>

                <button
                  onClick={() => {
                    setModalType("signup");
                    setMobileOpen(false);
                  }}
                  className="w-full py-2 rounded-full border border-gray-300"
                >
                  Sign up
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* AUTH MODAL */}
      <AnimatePresence>
        {modalType && (
          <AuthModal
            type={modalType}
            onClose={() => setModalType(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}