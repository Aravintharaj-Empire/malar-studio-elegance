import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import portfolio1 from "@/assets/portfolio1.webp";
import portfolio2 from "@/assets/portfolio2.webp";
import portfolio3 from "@/assets/portfolio8.webp";
import portfolio4 from "@/assets/portfolio4.webp";
import portfolio5 from "@/assets/portfolio5.webp";
//import portfolio6 from "@/assets/portfolio6.jpg";
import portfolio7 from "@/assets/portfolio7.webp";
import portfolio9 from "@/assets/portfolio9.webp";
import portfolio10 from "@/assets/portfolio10.webp";

const portfolioImages = [
  portfolio1,
  portfolio5,
  portfolio3,
  portfolio4,
  portfolio2,
  portfolio7,
  portfolio9,
  portfolio10,
];

const Portfolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const scrollContainer = scrollRef.current;
  if (!scrollContainer) return;
  scrollContainer.scrollLeft = 0;


  let isPaused = false;

  let lastTimestamp = 0;
  const speed = 0.5; // smoother & stable on mobile

  const smoothScroll = (timestamp: number) => {
  if (!lastTimestamp) lastTimestamp = timestamp;
  const delta = timestamp - lastTimestamp;
  lastTimestamp = timestamp;

  if (!isPaused) {
    scrollContainer.scrollLeft += speed * (delta / 16);

    // ✅ FIXED looping logic
    const maxScroll = scrollContainer.scrollWidth / 2;

    if (scrollContainer.scrollLeft >= maxScroll) {
      scrollContainer.scrollLeft = 0;
    }
  }

  requestAnimationFrame(smoothScroll);
};


  // Auto scroll start
  requestAnimationFrame(smoothScroll);

  // Pause on user interactions
  const pause = () => (isPaused = true);
  const resume = () => (isPaused = false);

  scrollContainer.addEventListener("touchstart", pause);
  scrollContainer.addEventListener("touchend", resume);
  scrollContainer.addEventListener("mouseenter", pause);
  scrollContainer.addEventListener("mouseleave", resume);

  return () => {
    scrollContainer.removeEventListener("touchstart", pause);
    scrollContainer.removeEventListener("touchend", resume);
    scrollContainer.removeEventListener("mouseenter", pause);
    scrollContainer.removeEventListener("mouseleave", resume);
  };
}, []);

  return (
    <section className="py-24 bg-warm-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-rich-brown mb-4">
            Our Portfolio
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our artistry and the beauty we create.
          </p>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 touch-pan-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Duplicate images for seamless loop */}
        {[...portfolioImages, ...portfolioImages].map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="flex-shrink-0 w-80 md:w-96 h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300"
          >
            <img
              src={image}
              alt={`Portfolio ${(index % 6) + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
