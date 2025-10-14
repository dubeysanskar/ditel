import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { getWhatsAppNumber, getGeneralEnquiryLink } from "@/lib/whatsapp";

const contactInfo = {
  email: "vijay.massey@ditel.co.in",
  phone: "8447373543",
  phone2: "9289020121",
  address: "520 Saini Plaza, Choma Road, Palam Vihar, Near Prem Motors, Gurugram, Haryana 122017",
  mapEmbed: import.meta.env.VITE_GOOGLE_MAPS_EMBED,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error("Please accept the privacy policy to continue.");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        consent: false,
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <WhatsAppFloat />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-light/30 via-background to-secondary-light/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Contact <span className="text-gradient-primary">Ditel Network</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions or need assistance? We're here to help. Reach out to
                our team and we'll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12 -mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-elegant-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-6 text-center hover:shadow-elegant-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-4">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <div className="space-y-1">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                    >
                      {contactInfo.phone}
                    </a>
                    <a
                      href={`tel:${contactInfo.phone2}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                    >
                      {contactInfo.phone2}
                    </a>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="p-6 text-center hover:shadow-elegant-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">
                    {contactInfo.address}
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 98765 43210"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) =>
                          setFormData({ ...formData, subject: value })
                        }
                        required
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Enquiry</SelectItem>
                          <SelectItem value="laptops">Refurbished Laptops</SelectItem>
                          <SelectItem value="isp">Internet Services</SelectItem>
                          <SelectItem value="cctv">CCTV/Surveillance</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        className="mt-1"
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, consent: checked as boolean })
                        }
                      />
                      <Label
                        htmlFor="consent"
                        className="text-sm text-muted-foreground cursor-pointer"
                      >
                        I agree to the privacy policy and consent to my data being
                        stored for the purpose of responding to my enquiry.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                      {/* Note: Thank you message will be shown on successful submission */}
                    </Button>
                  </form>
                </Card>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <iframe
                      src={contactInfo.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ditel Network Solutions Location"
                    ></iframe>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-primary-light/50 to-secondary-light/50">
                  <h3 className="font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-muted-foreground mb-3">
                      Prefer to chat? Connect with us instantly on WhatsApp!
                    </p>
                    <a href={getGeneralEnquiryLink()} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" className="w-full">
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
