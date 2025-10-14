import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, User, Clock, Share2, Tag } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import blogs from "@/data/blogs.json";
import { toast } from "sonner";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const relatedPosts = blogs
    .filter((b) => b.id !== id && b.category === blog?.category)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        text: blog?.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | Ditel Network Solutions</title>
        <meta name="description" content={blog.description} />
        <link rel="canonical" href={`${import.meta.env.VITE_SITE_URL || "https://yoursite.com"}/blog/${blog.id}`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <WhatsAppFloat />

        <main className="flex-1 pt-16">
          <article className="py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <Link to="/">
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Homepage
                  </Button>
                </Link>
              </motion.div>

              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  {blog.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                {blog.title}
              </motion.h1>

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap items-center justify-between gap-4 text-muted-foreground mb-8 pb-8 border-b"
              >
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{blog.author}</span>
                  </div>
                  {blog.readTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  )}
                </div>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </motion.div>

              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12 rounded-xl overflow-hidden shadow-elegant"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto max-h-[500px] object-cover"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="prose prose-lg max-w-none mb-12"
              >
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  {blog.description}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {blog.content}
                </p>
              </motion.div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-12 pb-8 border-b"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((post) => (
                      <Link key={post.id} to={`/blog/${post.id}`}>
                        <Card className="h-full overflow-hidden group hover:shadow-elegant transition-all hover-lift">
                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="p-4">
                            <Badge variant="outline" className="mb-2 text-xs">
                              {post.category}
                            </Badge>
                            <h3 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Back to Blog CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="pt-8 border-t"
              >
                <Link to="/blog">
                  <Button size="lg" className="w-full sm:w-auto">
                    View More Articles
                  </Button>
                </Link>
              </motion.div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogDetail;
