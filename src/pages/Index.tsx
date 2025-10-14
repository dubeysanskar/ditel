import { HeroBanner } from "@/components/HeroBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { VisionMissionSection } from "@/components/sections/VisionMissionSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSignalsSection } from "@/components/sections/TrustSignalsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { Button } from "@/components/ui/button";
import { getGeneralEnquiryLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone')}\nMessage: ${formData.get('message')}`;
    window.open(
      `https://wa.me/918447373543?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <>
      <Helmet>
        <title>Ditel Network Solutions - Refurbished Laptops, ISP & CCTV</title>
        <meta
          name="description"
          content="Affordable and reliable IT solutions since 2015. Quality refurbished laptops, high-speed internet, and CCTV surveillance in Gurugram."
        />
        <meta
          name="keywords"
          content="ISP services India, high-speed internet, CCTV cameras, surveillance systems, refurbished laptops, Dell laptops, HP laptops, MacBook, gaming laptops"
        />
        <link rel="canonical" href={import.meta.env.VITE_SITE_URL || "https://yoursite.com"} />

        {/* Open Graph */}
        <meta property="og:title" content="Ditel Network Solutions - Refurbished Laptops, ISP & CCTV" />
        <meta
          property="og:description"
          content="Affordable IT solutions - refurbished laptops, high-speed internet, and CCTV surveillance"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={import.meta.env.VITE_SITE_URL || "https://yoursite.com"} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ditel Network Solutions" />
        <meta
          name="twitter:description"
          content="Affordable refurbished laptops, ISP & CCTV solutions since 2015"
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <WhatsAppFloat />

        <main className="flex-1">
          {/* Hero Banner */}
          <HeroBanner />

          {/* About Section */}
          <AboutSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Vision & Mission Section */}
          <VisionMissionSection />

          {/* Products Section */}
          <ProductsSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Trust Signals Section */}
          <TrustSignalsSection />

          {/* FAQ Section */}
          <FAQSection />

          {/* Blog Section */}
          <BlogSection />

          {/* Contact Section - Get in Touch */}
          <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Get in <span className="text-gradient-primary">Touch</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Have a question or need assistance? We're here to help!
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                        <a href="tel:8447373543" className="text-muted-foreground hover:text-primary transition-colors">
                          8447373543
                        </a>
                        <br />
                        <a href="tel:9289020121" className="text-muted-foreground hover:text-primary transition-colors">
                          9289020121
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <a 
                          href="mailto:vijay.massey@ditel.co.in" 
                          className="text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          vijay.massey@ditel.co.in
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          520 Saini Plaza, Choma Road, Palam Vihar,<br />
                          Near Prem Motors, Gurugram,<br />
                          Haryana 122017
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </motion.div>
              </div>

              {/* WhatsApp Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-12"
              >
                <p className="text-muted-foreground mb-4">Prefer instant messaging?</p>
                <a
                  href={getGeneralEnquiryLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="shadow-elegant-lg">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Contact via WhatsApp
                  </Button>
                </a>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
