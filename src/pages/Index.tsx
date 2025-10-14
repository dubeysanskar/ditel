import { HeroGeometric } from "@/components/ui/shape-landing-hero";
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

const Index = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
          {/* Hero Section */}
          <section id="home" className="relative">
            <HeroGeometric
              badge="Affordable & Reliable IT Solutions Since 2015"
              title1="Connecting People"
              title2="Through Technology"
              description="Affordable, Reliable, and Innovative IT & Network Solutions Since 2015."
            />

            {/* CTA Buttons */}
            <div className="absolute bottom-12 left-0 right-0 z-20">
              <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                  <button
                    className="w-full sm:w-auto"
                    onClick={() => scrollToSection("#services")}
                  >
                  <Button size="lg" className="w-full sm:w-auto shadow-elegant-lg">
                    Explore Services
                  </Button>
                  </button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-background/80 backdrop-blur-sm shadow-elegant"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </section>

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

          {/* Contact Section */}
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
                  Contact <span className="text-gradient-primary">Us</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Get in touch with us for any inquiries about our products and services.
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center p-6 rounded-xl bg-card shadow-elegant hover:shadow-elegant-lg transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-sm text-muted-foreground">8447373543</p>
                    <p className="text-sm text-muted-foreground">9289020121</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center p-6 rounded-xl bg-card shadow-elegant hover:shadow-elegant-lg transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-4">
                      <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground break-all">vijay.massey@ditel.co.in</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center p-6 rounded-xl bg-card shadow-elegant hover:shadow-elegant-lg transition-shadow"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-sm text-muted-foreground">520 Saini Plaza, Choma Road, Palam Vihar, Near Prem Motors, Gurugram, Haryana 122017</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <a
                    href={getGeneralEnquiryLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="shadow-elegant-lg">
                      Contact via WhatsApp
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
