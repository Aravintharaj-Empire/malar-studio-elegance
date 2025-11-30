import { motion } from "framer-motion";
import { Sparkles, PartyPopper, Airplay, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Bridal Makeup",
    description: "Timeless elegance for your special day with personalized bridal looks that enhance your natural beauty.",
  },
  {
    icon: PartyPopper,
    title: "Party Makeup",
    description: "Glamorous looks for any celebration, from cocktails to galas, crafted to make you shine.",
  },
  {
    icon: Airplay,
    title: "HD & Airbrush Makeup",
    description: "Flawless, camera-ready finish with high-definition techniques for a picture-perfect appearance.",
  },
  {
    icon: GraduationCap,
    title: "Makeup Training Sessions",
    description: "Learn professional techniques in personalized workshops. Master the art of makeup application.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-rich-brown mb-4">
            Our Services
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium beauty services, each crafted with expertise and artistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-border/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-persimmon/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-persimmon" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-rich-brown mb-4">
                  {service.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
