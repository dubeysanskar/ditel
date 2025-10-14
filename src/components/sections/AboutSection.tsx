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
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient-primary">Ditel Network Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in 2015, Ditel Network Solutions has emerged as a reliable and customer-centric technology company offering affordable and sustainable IT and network solutions. We bridge the gap between performance and affordability by providing top-quality refurbished laptops, high-speed internet services, and advanced surveillance systems. Our goal is to deliver solutions that combine innovation, service excellence, and long-term reliability.
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
