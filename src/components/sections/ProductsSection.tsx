import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import products from "@/data/products.json";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface PricingRow {
  mbps: number;
  "1_month"?: number;
  "3_month"?: number;
  "6_month"?: number;
  "12_month"?: number;
  // derived single-price rows for plan-cards will use `price` field
  price?: number;
}

interface PricingTable {
  columns: string[];
  rows: PricingRow[];
  durationImages?: {
    "1_month"?: string;
    "3_month"?: string;
    "6_month"?: string;
    "12_month"?: string;
  };
}

interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  shortDescription: string;
  imageUrl: string;
  sku: string;
  features?: string[];
  pricingTable?: PricingTable;
}

/**
 * Fallback broadband products are used only when products.json contains no broadband entries.
 * They are simple plan-cards tied to durations (1m,3m,6m,12m) and expect images in /public.
 */
const broadbandFallbackPlans: Product[] = [
  {
    id: "xfiber-plan-1month",
    name: "XFiber — 1 Month Plan",
    category: "Broadband Services",
    subcategory: "1 month plan",
    shortDescription: "1 Month subscription — Broadband + Landline + OTT/IPTV. Pay-as-you-go plan.",
    imageUrl: "/1month.jpg",
    sku: "XF-PLAN-1M",
    features: ["Broadband + Landline + OTT/IPTV", "No long-term commitment", "24x7 support"],
    pricingTable: {
      columns: ["Speed", "Price"],
      rows: [
        { mbps: 50, price: 699 },
        { mbps: 100, price: 999 },
        { mbps: 200, price: 1499 },
        { mbps: 500, price: 2499 }
      ],
      durationImages: { "1_month": "/1month.jpg" }
    }
  },
  {
    id: "xfiber-plan-3month",
    name: "XFiber — 3 Months Plan",
    category: "Broadband Services",
    subcategory: "3-month plan",
    shortDescription: "3 Months subscription — Slight discount for quarterly payment.",
    imageUrl: "/3month.jpg",
    sku: "XF-PLAN-3M",
    features: ["Broadband + Landline + OTT/IPTV", "Quarterly billing", "Priority support (optional)"],
    pricingTable: {
      columns: ["Speed", "Price"],
      rows: [
        { mbps: 50, price: 1899 },
        { mbps: 100, price: 2799 },
        { mbps: 200, price: 4199 },
        { mbps: 500, price: 6999 }
      ],
      durationImages: { "3_month": "/3month.jpg" }
    }
  },
  {
    id: "xfiber-plan-6month",
    name: "XFiber — 6 Months Plan",
    category: "Broadband Services",
    subcategory: "6-month plan",
    shortDescription: "6 Months subscription — better savings, ideal for families.",
    imageUrl: "/6month.jpg",
    sku: "XF-PLAN-6M",
    features: ["Broadband + Landline + OTT/IPTV", "Half-year billing", "Installation & support included"],
    pricingTable: {
      columns: ["Speed", "Price"],
      rows: [
        { mbps: 50, price: 3599 },
        { mbps: 100, price: 5299 },
        { mbps: 200, price: 7999 },
        { mbps: 500, price: 12999 }
      ],
      durationImages: { "6_month": "/6month.jpg" }
    }
  },
  {
    id: "xfiber-plan-12month",
    name: "XFiber — 12 Months Plan",
    category: "Broadband Services",
    subcategory: "12-month plan",
    shortDescription: "12 Months subscription — best value for continuous service.",
    imageUrl: "/12month.jpg",
    sku: "XF-PLAN-12M",
    features: ["Broadband + Landline + OTT/IPTV", "Annual billing - best price", "Business-grade SLA available"],
    pricingTable: {
      columns: ["Speed", "Price"],
      rows: [
        { mbps: 50, price: 5999 },
        { mbps: 100, price: 8999 },
        { mbps: 200, price: 13999 },
        { mbps: 500, price: 23999 }
      ],
      durationImages: { "12_month": "/12months.jpg" }
    }
  }
];

const categories = ["All", "Refurbished Laptops", "Internet Service Solutions", "CCTV Solutions", "Broadband Services"];
const laptopSubcategories = [
  "All",
  "Laptop",
  "Apple MacBook",
  "Gaming Laptop",
  "Servers",
  "Desktop",
  "Monitors",
  "IT Hardware & Networking Devices"
];

function isBroadbandCandidate(p: Product) {
  const combined = `${p.name || ""} ${p.subcategory || ""} ${p.category || ""}`.toLowerCase();
  return /(broadband|xfiber|triple play|triple-play|ott|iptv|landline)/i.test(combined);
}

/**
 * Expand any aggregated broadband product into four plan-cards (1m,3m,6m,12m).
 * Each derived product uses the duration image (if present), derives SKU and name,
 * and creates a pricingTable with single-price column for that duration.
 */
function expandBroadbandToPlans(productsList: Product[]): Product[] {
  const expanded: Product[] = [];

  for (const prod of productsList) {
    // If product is broadband (either category already Broadband Services OR candidate keywords) AND has pricingTable with rows & durationImages,
    // expand to per-duration plan cards.
    if ((prod.category === "Broadband Services" || isBroadbandCandidate(prod)) && prod.pricingTable && prod.pricingTable.rows && prod.pricingTable.durationImages) {
      const dtImages = prod.pricingTable.durationImages;
      const durations: Array<{ key: keyof PricingTable["durationImages"]; label: string }> = [
        ["1_month", "1 Month"],
        ["3_month", "3 Months"],
        ["6_month", "6 Months"],
        ["12_month", "12 Months"]
      ].map(([k, label]) => ({ key: k as keyof PricingTable["durationImages"], label }));

      for (const dur of durations) {
        const img = dtImages[dur.key];
        // produce rows where each row is { mbps, price: row[dur.key] }
        const priceRows = prod.pricingTable!.rows.map((r) => {
          return { mbps: r.mbps, price: (r as any)[dur.key] ?? undefined };
        }).filter(r => r.price !== undefined); // drop speeds without price for that duration

        // if no price rows for this duration, skip creating this plan
        if (priceRows.length === 0) continue;

        const derived: Product = {
          id: `${prod.id}-${dur.key}`,
          name: `${prod.name} — ${dur.label}`,
          category: "Broadband Services",
          subcategory: prod.subcategory || "Broadband",
          shortDescription: `${prod.shortDescription || ""} (${dur.label} plan)`.trim(),
          imageUrl: img || prod.imageUrl || "/1month.jpg",
          sku: `${prod.sku || prod.id}-${dur.key}`,
          features: prod.features,
          pricingTable: {
            columns: ["Speed", "Price"],
            rows: priceRows,
            durationImages: { [dur.key]: img || prod.imageUrl || "/1month.jpg" }
          }
        };
        expanded.push(derived);
      }
    } else {
      // Not an aggregated broadband product — keep as-is
      expanded.push(prod);
    }
  }

  return expanded;
}

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLaptopSubcategory, setSelectedLaptopSubcategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  // 1) Normalize categories: move any broadband-like items out of Internet Service Solutions into Broadband Services
  const normalized = (products as Product[]).map((p) => {
    if (p.category === "Internet Service Solutions" && isBroadbandCandidate(p)) {
      return { ...p, category: "Broadband Services" };
    }
    return p;
  });

  // 2) Expand broadband aggregated products into per-duration plan cards (only affects broadband products)
  const expandedProducts = expandBroadbandToPlans(normalized);

  // 3) If user selected Broadband Services but there are NO broadband products in data,
  //    fallback to the builtin broadbandFallbackPlans
  const hasBroadbandInData = expandedProducts.some(p => p.category === "Broadband Services");
  const effectiveProducts = hasBroadbandInData ? expandedProducts : [...expandedProducts, ...broadbandFallbackPlans];

  // 4) Filter products by category and subcategory (laptops)
  const filteredProducts = effectiveProducts.filter((product: Product) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory !== product.category) return false;

    if (selectedCategory === "Refurbished Laptops" && selectedLaptopSubcategory !== "All") {
      return product.subcategory === selectedLaptopSubcategory;
    }
    return true;
  });

  const displayProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, 6);
  const hasMoreProducts = filteredProducts.length > 6;

  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient-primary">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality refurbished laptops, professional ISP solutions, and advanced CCTV surveillance systems.
            Contact us via WhatsApp for detailed quotations and specifications.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category);
                if (category !== "Refurbished Laptops") {
                  setSelectedLaptopSubcategory("All");
                }
              }}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Laptop Subcategory Filters */}
        {selectedCategory === "Refurbished Laptops" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {laptopSubcategories.map((subcategory) => (
              <Badge
                key={subcategory}
                variant={selectedLaptopSubcategory === subcategory ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10 transition-colors px-4 py-2 text-xs"
                onClick={() => setSelectedLaptopSubcategory(subcategory)}
              >
                {subcategory}
              </Badge>
            ))}
          </motion.div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product: Product, index: number) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-elegant-lg transition-all hover-lift">
                {/* Product Image */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                    loading={index < 6 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <Badge
                    variant="secondary"
                    className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm text-foreground text-xs"
                  >
                    {product.subcategory}
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {product.shortDescription}
                  </p>

                  <div className="space-y-3 mt-auto">
                    <p className="text-base font-semibold text-primary">Request quotation via WhatsApp</p>

                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
                      >
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        WhatsApp
                      </Button>
                    </a>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => setSelectedProduct(product)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}

        {/* View All Button */}
        {hasMoreProducts && !showAllProducts && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAllProducts(true)}
              className="min-w-[200px]"
            >
              View All ({filteredProducts.length} products)
            </Button>
          </div>
        )}

        {showAllProducts && hasMoreProducts && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setShowAllProducts(false);
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="min-w-[200px]"
            >
              Show Less
            </Button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Product Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{selectedProduct.category}</Badge>
                    <Badge variant="outline">{selectedProduct.subcategory}</Badge>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-primary mb-1">Request quotation via WhatsApp</p>
                    <p className="text-sm text-muted-foreground mt-1">SKU: {selectedProduct.sku}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedProduct.shortDescription}</p>
                  </div>

                  {/* Features */}
                  {selectedProduct.features && selectedProduct.features.length > 0 && (
                    <div className="space-y-3 p-4 rounded-lg bg-muted/50">
                      <h4 className="font-semibold text-sm mb-2">Key Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        {selectedProduct.features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Pricing Table - for plan-cards we show Speed / Price only */}
                  {selectedProduct.pricingTable && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg">Pricing</h4>

                      <div className="hidden md:block overflow-x-auto rounded-lg border">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-muted/50">
                              {selectedProduct.pricingTable.columns.map((col, idx) => (
                                <th key={idx} className="px-4 py-3 text-left font-semibold text-sm">{col}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {selectedProduct.pricingTable.rows.map((row, idx) => (
                              <tr key={idx} className="border-t hover:bg-muted/30 transition-colors">
                                <td className="px-4 py-3 font-semibold">{row.mbps} Mbps</td>
                                {/* if derived plan rows use `price` field, print that; otherwise attempt to show 12_month or first available price */}
                                <td className="px-4 py-3 text-primary font-semibold">₹{(row as any).price ?? (row as any)["12_month"] ?? (row as any)["6_month"] ?? (row as any)["3_month"] ?? (row as any)["1_month"] ?? "-"}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Mobile Card View */}
                      <div className="md:hidden space-y-4">
                        {selectedProduct.pricingTable.rows.map((row, idx) => (
                          <div key={idx} className="p-4 rounded-lg border bg-card">
                            <h5 className="font-bold text-lg mb-3">{row.mbps} Mbps</h5>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Price:</span>
                              <span className="font-semibold text-primary">₹{(row as any).price ?? (row as any)["12_month"] ?? (row as any)["6_month"] ?? (row as any)["3_month"] ?? (row as any)["1_month"] ?? "-"}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Specifications Note */}
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground">
                      Full specifications, pricing, and availability details are provided upon request. Contact us via WhatsApp for a detailed quotation tailored to your needs.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="default" size="lg" className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white">
                        <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Get Quotation via WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default ProductsSection;
