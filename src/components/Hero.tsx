import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";
import lotus from "@/assets/logo_design_without_background.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-vanilla/95 via-warm-cream/90 to-persimmon/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
           <img 
    src={lotus} 
    alt="Malar Lotus Logo" 
    className="mx-auto -mb-10 w-20 md:w-28 lg:w-32 opacity-90"
  />
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-rich-brown mb-1 tracking-tight">
            MALAR
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-rich-brown/80 mb-4">
            Makeup And Learning Space
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-sans text-lg md:text-xl text-rich-brown/70 tracking-wide"
        >
          Beauty Crafted with Grace
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12"
        >
          <a
            href="#services"
            className="inline-block px-10 py-4 bg-persimmon text-vanilla font-sans font-medium rounded-full shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
