import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Search, Clock, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import blogs from "@/data/blogs.json";
import { useState, useMemo, useEffect } from "react";

const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = useMemo(() => {
    const cats = ["All", ...Array.from(new Set(blogs.map(blog => blog.category)))];
    return cats;
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Blog - Latest News & Insights | Ditel Network Solutions</title>
        <meta
          name="description"
          content="Stay updated with latest insights on refurbished laptops, internet services, CCTV systems, and IT solutions from Ditel Network."
        />
        <link rel="canonical" href={`${import.meta.env.VITE_SITE_URL || "https://yoursite.com"}/blog`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <WhatsAppFloat />

        <main className="flex-1 pt-16">
          {/* Hero Section */}
          <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Article & <span className="text-gradient-primary">News</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                  Explore our latest articles, insights, and updates on technology, IT solutions, and industry trends.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/')}
                  className="gap-2"
                >
                  <Home className="h-4 w-4" />
                  Back to Home
                </Button>
              </motion.div>

              {/* Search and Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12 space-y-6"
              >
                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className="cursor-pointer px-4 py-2 text-sm hover:scale-105 transition-transform"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Results Count */}
              {searchQuery && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-muted-foreground mb-6"
                >
                  Found {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''}
                </motion.p>
              )}

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${blog.id}`}>
                      <Card className="h-full overflow-hidden group hover:shadow-elegant-lg transition-all hover-lift">
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                              {blog.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3 flex-wrap">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            {blog.readTime && (
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{blog.readTime}</span>
                              </div>
                            )}
                          </div>

                          <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {blog.title}
                          </h2>

                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {blog.excerpt}
                          </p>

                          {blog.tags && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {blog.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}

                          <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                            <span>Read More</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
