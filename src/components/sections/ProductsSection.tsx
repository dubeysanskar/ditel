import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import products from "@/data/products.json";
import { getProductEnquiryLink } from "@/lib/whatsapp";
import { ExternalLink } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  shortDescription: string;
  imageUrl: string;
  sku: string;
  stock: number;
  urlSlug: string;
}

const conditionGrades = {
  "A+": "Excellent - Like new condition, minimal signs of use",
  "A": "Very Good - Light signs of use, fully functional",
  "B": "Good - Moderate signs of use, fully functional",
  "C": "Fair - Visible signs of use, fully functional"
};

const warrantyInfo = {
  "Laptops": "1 Year Comprehensive Warranty",
  "ISP": "Service Level Agreement (SLA) Included",
  "CCTV": "2 Year Parts & Installation Warranty"
};

const categories = ["All", "Laptops", "ISP", "CCTV"];
const laptopSubcategories = ["All Laptops", "Normal", "Apple/Mac", "Gaming"];

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLaptopSubcategory, setSelectedLaptopSubcategory] = useState("All Laptops");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter((product: Product) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory !== product.category) return false;
    
    if (selectedCategory === "Laptops" && selectedLaptopSubcategory !== "All Laptops") {
      return product.subcategory === selectedLaptopSubcategory;
    }
    
    return true;
  });

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
            Explore our extensive range of certified refurbished laptops from top brands 
            like Dell, HP, Lenovo, Apple, and ASUS, along with networking equipment and 
            surveillance systems.
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
                if (category !== "Laptops") {
                  setSelectedLaptopSubcategory("All Laptops");
                }
              }}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Laptop Subcategory Filters */}
        {selectedCategory === "Laptops" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {laptopSubcategories.map((subcategory) => (
              <Badge
                key={subcategory}
                variant={selectedLaptopSubcategory === subcategory ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10 transition-colors px-4 py-2"
                onClick={() => setSelectedLaptopSubcategory(subcategory)}
              >
                {subcategory}
              </Badge>
            ))}
          </motion.div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product: Product, index: number) => (
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
                    loading="lazy"
                  />
                  <Badge
                    variant="secondary"
                    className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm text-foreground"
                  >
                    {product.category}
                  </Badge>
                  {product.category === "Laptops" && (
                    <Badge
                      variant="outline"
                      className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm text-foreground border-foreground/20"
                    >
                      {product.subcategory}
                    </Badge>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="mb-3">
                    {product.price && (
                      <p className="text-2xl font-bold text-primary mb-1">
                        ₹{product.price.toLocaleString()}
                      </p>
                    )}
                    {product.category === "Laptops" && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          Grade A+
                        </Badge>
                        <span>•</span>
                        <span>1 Year Warranty</span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {product.shortDescription}
                  </p>

                  <div className="flex gap-2 mt-auto">
                    <a
                      href={getProductEnquiryLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="default" size="sm" className="w-full">
                        WhatsApp
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Details
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
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{selectedProduct.category}</Badge>
                    {selectedProduct.category === "Laptops" && (
                      <Badge variant="outline">{selectedProduct.subcategory}</Badge>
                    )}
                  </div>

                  {selectedProduct.price && (
                    <div>
                      <p className="text-3xl font-bold text-primary">
                        ₹{selectedProduct.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        SKU: {selectedProduct.sku}
                      </p>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProduct.shortDescription}
                    </p>
                  </div>

                  {/* Condition & Warranty Info */}
                  {selectedProduct.category === "Laptops" && (
                    <div className="space-y-3 p-4 rounded-lg bg-muted/50">
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Condition Grade: A+</h4>
                        <p className="text-xs text-muted-foreground">
                          {conditionGrades["A+"]}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Warranty</h4>
                        <p className="text-xs text-muted-foreground">
                          {warrantyInfo[selectedProduct.category as keyof typeof warrantyInfo]}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">What's Included</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Original Charger</li>
                          <li>• Laptop Bag</li>
                          <li>• Quality Certification</li>
                          <li>• Warranty Card</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {selectedProduct.stock > 0 ? (
                    <p className="text-sm text-secondary font-medium">
                      ✓ In Stock ({selectedProduct.stock} available)
                    </p>
                  ) : (
                    <p className="text-sm text-destructive font-medium">
                      Out of Stock
                    </p>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={getProductEnquiryLink(selectedProduct.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="default" size="lg" className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Enquire on WhatsApp
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
