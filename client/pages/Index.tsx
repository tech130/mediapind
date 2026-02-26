import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BrandsSection from "../components/BrandsSection";
import DrivingImpact from "../components/DrivingImpact";
import WhereWeOperate from "../components/WhereWeOperate";
import RecentProjects from "../components/RecentProjects";
import WhatWeOffer from "../components/WhatWeOffer";
import JoinSection from "../components/JoinSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import AuthModal from "@/components/AuthModal";


export default function Index() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <DrivingImpact />
      <WhereWeOperate />
      <RecentProjects />
      <WhatWeOffer />
      <JoinSection />
      <ContactSection />
      
      <Footer />
    </main>
  );
}
