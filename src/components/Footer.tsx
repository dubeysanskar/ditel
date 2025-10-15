import { Mail, Phone, MapPin } from "lucide-react";

const companyInfo = {
  email: import.meta.env.VITE_CONTACT_EMAIL || "vijay.massey@ditel.co.in",
  phone: "8447373543",
  phone2: "9289020121",
  address: "520 Saini Plaza, Choma Road, Palam Vihar, Near Prem Motors, Gurugram, Haryana 122017",
};

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact Us", href: "#contact" },
];

const services = [
  "Refurbished Laptops",
  "High-Speed Internet",
  "CCTV Installation",
  "Surveillance Systems",
  "Technical Support",
  "Network Setup",
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/ditellogo.png" 
                alt="Ditel Network Solutions" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted partner for quality refurbished laptops, high-speed 
              internet, and advanced surveillance systems. Delivering excellence 
              since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : link.href.startsWith("/") ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-muted-foreground"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-start space-x-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span className="group-hover:underline">{companyInfo.email}</span>
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-start space-x-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <div className="group-hover:underline">
                  <div>{companyInfo.phone}</div>
                  <div>{companyInfo.phone2}</div>
                </div>
              </a>
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>{companyInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8">
          <div className="flex justify-center items-center">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Ditel Network Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
