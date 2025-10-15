import { motion } from "framer-motion";
import { Target, Compass } from "lucide-react";
import { Card } from "@/components/ui/card";

export function VisionMissionSection() {
  return (
    <section id="vision-mission" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative dotted pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-20 left-40 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-32 left-80 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-40 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-40 left-60 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-80 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>
      
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-20 w-48 h-48 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, -60, 0],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Vision & <span className="text-gradient-primary">Mission</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-primary-light/50 to-secondary-light/30 border-none shadow-elegant hover:shadow-elegant-lg transition-all hover-lift flex flex-col">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To empower individuals and organizations through affordable, reliable, and innovative technology solutions that promote connectivity, productivity, and safety.
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Experience Since 2015 – A decade of expertise in IT and networking.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Certified Products – Thoroughly tested refurbished laptops from leading brands.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Customer-First Approach – Dedicated support and quick issue resolution.</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-secondary-light/50 to-accent-light/30 border-none shadow-elegant hover:shadow-elegant-lg transition-all hover-lift flex flex-col">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-xl mb-6">
                <Compass className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <ul className="space-y-3 text-muted-foreground leading-relaxed flex-grow">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Redefine affordability in technology without compromising quality.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Deliver high-speed internet with excellent service reliability.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhance digital security through modern surveillance systems.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Build lasting client relationships based on trust and satisfaction.</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
