import { motion } from "framer-motion";
import { Shield, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Clock, value: "9+", label: "Years Experience" },
  { icon: Award, value: "99.9%", label: "Uptime Guarantee" },
  { icon: Shield, value: "24/7", label: "Support Available" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative animated elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-16 h-16 bg-accent/5 rounded-full blur-xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
        >
          About <span className="text-gradient-primary">Ditel Network Solutions</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <img 
              src="/aboutus .png" 
              alt="About Ditel Network Solutions" 
              className="w-full rounded-xl shadow-elegant-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Established in 2015, Ditel Network Solutions has emerged as a reliable and customer-centric technology company offering affordable and sustainable IT and network solutions. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We take pride in bridging the gap between performance and affordability by providing top-quality refurbished laptops, high-speed internet services, and advanced surveillance systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our focus is on delivering solutions that combine innovation, service excellence, and long-term reliability.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-light/50 to-secondary-light/50 hover:shadow-elegant transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-background rounded-full mb-4 shadow-md">
                <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
