import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react"; // For hover play icon

// Sample videos
const projects = [
  {
    id: 1,
    video: "https://billiontags-media.s3.ap-south-1.amazonaws.com/creatives/Walmart+FY26-2025+Diwali+15s+OLV.mp4",
    title: "Campaign 1",
  },
  {
    id: 2,
    video: "https://billiontags-media.s3.ap-south-1.amazonaws.com/creatives/Q4+15+1080x1920_CLEAN.mp4",
    title: "Campaign 2",
  },
  {
    id: 3,
    video: "https://billiontags-media.s3.ap-south-1.amazonaws.com/creatives/ATEEZ26_916-15-OSN.mp4",
    title: "Campaign 3",
  },
   {
    id: 4,
    video: "https://billiontags-media.s3.ap-south-1.amazonaws.com/creatives/MAHINDRAXUV700Ebony30.mp4",
    title: "Campaign 3",
  },
   {
    id: 5,
    video: "https://billiontags-media.s3.ap-south-1.amazonaws.com/creatives/28+Greengate%2C+New+Epping+9x16+FINALr1.mov",
    title: "Campaign 3",
  },
   {
    id: 6,
    video: "https://billiontags-media.s3.ap-south-1.amazonaws.com/creatives/PCAU_TACTICAL_30_16x9_v4+(1).mp4",
    title: "Campaign 3",
  },
];

export default function RecentProjects() {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const closeModal = () => {
    if (modalVideoRef.current) modalVideoRef.current.pause();
    setActiveVideoIndex(null);
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const prevVideo = () => {
    if (activeVideoIndex !== null) {
      setActiveVideoIndex(
        activeVideoIndex === 0 ? projects.length - 1 : activeVideoIndex - 1
      );
    }
  };

  const nextVideo = () => {
    if (activeVideoIndex !== null) {
      setActiveVideoIndex(
        activeVideoIndex === projects.length - 1 ? 0 : activeVideoIndex + 1
      );
    }
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevVideo();
      if (e.key === "ArrowRight") nextVideo();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeVideoIndex]);

  return (
    <section className="py-16 md:py-24 px-4 md:px-10 bg-white" id="Project">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bold text-3xl md:text-5xl mb-4">
            Recent NRI <span className="text-blue-600">Influencer Projects</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore campaigns powered by NRI creators who deliver global reach.
          </p>
        </div>

        {/* Scroll Buttons */}
        <div className="relative">
         

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto no-scrollbar scroll-smooth"
          >
            <div className="flex gap-6">

              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveVideoIndex(idx)}
                  className="
                    relative
                    flex-shrink-0
                    w-[48%] sm:w-[42%] md:w-[32%] lg:w-[18.66%]
                    rounded-2xl
                    overflow-hidden
                    cursor-pointer
                    shadow-lg
                  "
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30 z-10">
                    <Play className="text-white w-12 h-12" />
                  </div>

                  {/* Video */}
                  <div className="aspect-[8/16] bg-black">
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* ===== Modal ===== */}
      <AnimatePresence>
        {activeVideoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md md:max-w-lg"
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white text-3xl font-bold"
              >
                ✕
              </button>

             

              {/* <div className="aspect-[9/16] bg-black rounded-xl overflow-hidden"> */}
              <div className="bg-black rounded-xl overflow-hidden h-[100vh] max-h-[600px]">
                <video
                  ref={modalVideoRef}
                  src={projects[activeVideoIndex].video}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}