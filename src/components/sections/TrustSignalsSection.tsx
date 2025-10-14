import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Clock, Headphones, Zap, CheckCircle2 } from "lucide-react";

const trustSignals = [
  {
    icon: Shield,
    title: "1 Year Warranty",
    description: "All refurbished laptops come with comprehensive warranty coverage",
    badge: "Quality Assured"
  },
  {
    icon: Award,
    title: "Certified Products",
    description: "100% tested and certified by our expert technicians",
    badge: "Certified"
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "Serving customers with reliable IT solutions since 2015",
    badge: "Trusted"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your queries",
    badge: "Always Available"
  },
  {
    icon: Zap,
    title: "Quick Installation",
    description: "Fast and professional installation for ISP and CCTV services",
    badge: "Fast Service"
  },
  {
    icon: CheckCircle2,
    title: "Genuine Parts",
    description: "Only authentic components used in all our refurbished devices",
    badge: "100% Genuine"
  }
];

const paymentMethods = [
  { name: "UPI", icon: "₹" },
  { name: "Credit Card", icon: "💳" },
  { name: "Debit Card", icon: "💳" },
  { name: "Net Banking", icon: "🏦" },
  { name: "Cash", icon: "💵" }
];

export function TrustSignalsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Trust Signals Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-gradient-primary">Ditel Network Solutions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <motion.div
                  key={signal.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="p-6 h-full hover:shadow-elegant-lg transition-all hover-lift">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{signal.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {signal.badge}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {signal.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-6">Secure Payment Methods</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card shadow-sm hover:shadow-elegant transition-shadow"
              >
                <span className="text-2xl">{method.icon}</span>
                <span className="text-sm font-medium">{method.name}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            All transactions are secure and encrypted
          </p>
        </motion.div>
      </div>
    </section>
  );
}
