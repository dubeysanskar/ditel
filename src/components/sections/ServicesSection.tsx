import { motion } from "framer-motion";
import { Wifi, Camera, Laptop, ArrowRight, Shield, Gamepad2, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";

const services = [
  {
    icon: Laptop,
    title: "Refurbished Laptops & Gaming Systems",
    description:
      "Certified refurbished laptops from Dell, HP, Lenovo, and Apple with 100+ quality checks. Premium gaming PCs with performance-tuned hardware and comprehensive warranty.",
    features: [
      "Premium brands: Dell, HP, Lenovo, Apple/Mac, ASUS",
      "100+ quality checks per device",
      "Affordable gaming PCs with warranty",
      "Tested, upgraded & certified before delivery",
    ],
    gradient: "from-primary-light to-primary-light/50",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    learnMoreLink: "#products",
  },
  {
    icon: Wifi,
    title: "Telecom & Broadband Services",
    description:
      "High-speed broadband, leased lines, and enterprise connectivity solutions. Custom internet packages for homes, offices, and institutions with 24/7 support.",
    features: [
      "High-speed fiber broadband",
      "Dedicated leased line connectivity",
      "Custom packages for homes & offices",
      "24/7 support & network uptime guarantee",
    ],
    gradient: "from-secondary-light to-secondary-light/50",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    learnMoreLink: "#contact",
  },
  {
    icon: Camera,
    title: "Security & Automation Solutions",
    description:
      "Smart CCTV cameras, DVR/NVR systems, and access-control automation. AI-based motion detection with integrated surveillance for homes, offices, and industries.",
    features: [
      "IP & HD CCTV cameras",
      "DVR/NVR & access control systems",
      "AI-based motion detection",
      "Smart home integration & professional installation",
    ],
    gradient: "from-accent-light to-accent-light/50",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    learnMoreLink: "#contact",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Core <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to meet your computing,
            connectivity, and security needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`p-8 h-full bg-gradient-to-br ${service.gradient} border-none shadow-elegant hover:shadow-elegant-lg transition-all hover-lift flex flex-col`}>
                <div className={`inline-flex items-center justify-center w-14 h-14 ${service.iconBg} rounded-xl mb-6`}>
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <ArrowRight className={`h-5 w-5 ${service.iconColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1"
                  >
                    <Button variant="default" className="w-full h-full">
                      Contact via WhatsApp
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="w-full sm:flex-1"
                    onClick={() => {
                      const element = document.querySelector(service.learnMoreLink);
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
