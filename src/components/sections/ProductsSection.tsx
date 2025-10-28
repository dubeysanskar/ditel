import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import products from "@/data/products.json";
import { getWhatsAppLink } from "@/lib/whatsapp";

/* ---------------------------
   SAMPLE products.json SNIPPET
   (Add this object to your products.json)
   ---------------------------

  {
    "id": "broadband-xfiber",
    "name": "XFiber Broadband — Triple Play",
    "category": "Broadband Services",
    "subcategory": "Broadband",
    "shortDescription": "XFiber Triple Play — high-speed broadband, landline and OTT/IPTV packages with flexible subscriptions and SLA-backed support.",
    "imageUrl": "/1month.jpg",
    "sku": "XF-TRIPLE-001",
    "features": [
      "Broadband + Landline + OTT/IPTV",
      "Static IP on request",
      "24x7 Technical Support",
      "Flexible subscription durations"
    ],
    "pricingTable": {
      "columns": ["Speed", "1 Month", "3 Months", "6 Months", "12 Months"],
      "rows": [
        { "mbps": 50, "1_month": 699, "3_month": 1899, "6_month": 3599, "12_month": 5999 },
        { "mbps": 100, "1_month": 999, "3_month": 2799, "6_month": 5299, "12_month": 8999 },
        { "mbps": 200, "1_month": 1499, "3_month": 4199, "6_month": 7999, "12_month": 13999 },
        { "mbps": 500, "1_month": 2499, "3_month": 6999, "6_month": 12999, "12_month": 23999 }
      ],
      "durationImages": {
        "1_month": "/1month.jpg",
        "3_month": "/3month.jpg",
        "6_month": "/6month.jpg",
        "12_month": "/12month.jpg"
      }
    }
  }

  NOTE: Put the four images in the public/ folder exactly as:
    public/1month.jpg
    public/3month.jpg
    public/6month.jpg
    public/12month.jpg

*/

interface PricingRow {
  mbps: number;
  "1_month": number;
  "3_month": number;
  "6_month": number;
  "12_month": number;
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

const categories = ["All", "Refurbished Laptops", "Internet Service Solutions", "CCTV Solutions", "Broadband Services"];
const laptopSubcategories = [
  "All",
  "Laptop",
  "Apple Mac Book",
  "Gaming Laptop",
  "Servers",
  "Desktop",
  "Monitors",
  "IT Hardware & Networking Devices"
];

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLaptopSubcategory, setSelectedLaptopSubcategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Filter products by category and (for laptops) subcategory
  const filteredProducts = (products as Product[]).filter((product: Product) => {
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
                  {/* Improve perceived load time: load first N images eagerly (visible on page) */}
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
                    <p className="text-base font-semibold text-primary">
                      Request quotation via WhatsApp
                    </p>

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
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
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
            <p className="text-muted-foreground">
              No products found in this category.
            </p>
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
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
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
                    <p className="text-2xl font-bold text-primary mb-1">
                      Request quotation via WhatsApp
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      SKU: {selectedProduct.sku}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProduct.shortDescription}
                    </p>
                  </div>

                  {/* Features for ISP/CCTV */}
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

                  {/* Pricing Table */}
                  {selectedProduct.pricingTable && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg">Pricing Plans</h4>

                      {/* Duration Images */}
                      {selectedProduct.pricingTable.durationImages && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {selectedProduct.pricingTable.durationImages["1_month"] && (
                            <div className="text-center">
                              <img
                                src={selectedProduct.pricingTable.durationImages["1_month"]}
                                alt="1 Month Plan"
                                className="w-full h-auto rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                                loading="eager"
                              />
                              <p className="text-sm font-medium mt-2">1 Month</p>
                            </div>
                          )}
                          {selectedProduct.pricingTable.durationImages["3_month"] && (
                            <div className="text-center">
                              <img
                                src={selectedProduct.pricingTable.durationImages["3_month"]}
                                alt="3 Month Plan"
                                className="w-full h-auto rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                                loading="eager"
                              />
                              <p className="text-sm font-medium mt-2">3 Months</p>
                            </div>
                          )}
                          {selectedProduct.pricingTable.durationImages["6_month"] && (
                            <div className="text-center">
                              <img
                                src={selectedProduct.pricingTable.durationImages["6_month"]}
                                alt="6 Month Plan"
                                className="w-full h-auto rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                                loading="eager"
                              />
                              <p className="text-sm font-medium mt-2">6 Months</p>
                            </div>
                          )}
                          {selectedProduct.pricingTable.durationImages["12_month"] && (
                            <div className="text-center">
                              <img
                                src={selectedProduct.pricingTable.durationImages["12_month"]}
                                alt="12 Month Plan"
                                className="w-full h-auto rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                                loading="eager"
                              />
                              <p className="text-sm font-medium mt-2">12 Months</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Desktop Table View */}
                      <div className="hidden md:block overflow-x-auto rounded-lg border">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-muted/50">
                              {selectedProduct.pricingTable.columns.map((col, idx) => (
                                <th key={idx} className="px-4 py-3 text-left font-semibold text-sm">
                                  {col}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {selectedProduct.pricingTable.rows.map((row, idx) => (
                              <tr key={idx} className="border-t hover:bg-muted/30 transition-colors">
                                <td className="px-4 py-3 font-semibold">{row.mbps} Mbps</td>
                                <td className="px-4 py-3">₹{row["1_month"]}</td>
                                <td className="px-4 py-3">₹{row["3_month"]}</td>
                                <td className="px-4 py-3">₹{row["6_month"]}</td>
                                <td className="px-4 py-3 text-primary font-semibold">₹{row["12_month"]}</td>
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
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">1 Month:</span>
                                <span className="font-semibold">₹{row["1_month"]}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">3 Months:</span>
                                <span className="font-semibold">₹{row["3_month"]}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">6 Months:</span>
                                <span className="font-semibold">₹{row["6_month"]}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">12 Months:</span>
                                <span className="font-semibold text-primary">₹{row["12_month"]}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Specifications Note */}
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground">
                      Full specifications, pricing, and availability details are provided upon request.
                      Contact us via WhatsApp for a detailed quotation tailored to your needs.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        variant="default" 
                        size="lg" 
                        className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
                      >
                        <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
