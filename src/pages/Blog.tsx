import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Luxury Fashion in 2026",
    excerpt:
      "Discover the latest trends in luxury fashion and how to style them for maximum impact.",
    author: "Sarah Designer",
    date: "Jan 20, 2026",
    category: "Fashion",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    title: "Sustainable Fashion: Looking Good While Doing Good",
    excerpt:
      "Learn how sustainable fashion is reshaping the industry and why it matters for your wardrobe.",
    author: "Emma Green",
    date: "Jan 15, 2026",
    category: "Sustainability",
    image: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  },
  {
    id: 3,
    title: "Investment Pieces: Fashion Items Worth the Price",
    excerpt:
      "Explore timeless investment pieces that will elevate your style and last for years.",
    author: "Marcus Style",
    date: "Jan 10, 2026",
    category: "Style Tips",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 4,
    title: "How to Shop Smarter and Save Big",
    excerpt:
      "Pro tips and tricks to find the best deals on luxury items without compromising quality.",
    author: "Lisa Budget",
    date: "Jan 5, 2026",
    category: "Shopping Tips",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    id: 5,
    title: "Celebrity Style: Where to Buy Their Looks",
    excerpt:
      "Get the celebrity looks you love and find similar items at various price points.",
    author: "James Celebrity",
    date: "Dec 30, 2025",
    category: "Celebrity",
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    id: 6,
    title: "Men's Fashion: Breaking Stereotypes",
    excerpt:
      "Explore bold and innovative men's fashion choices that challenge traditional norms.",
    author: "David Fashion",
    date: "Dec 25, 2025",
    category: "Men's Fashion",
    image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  },
];

const Blog = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-4">Fleek Buy Blog</h1>
            <p className="text-xl text-muted-foreground">
              Fashion Tips, Style Guides, and Luxury Lifestyle Insights
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden border-2">
              <div className="grid md:grid-cols-2">
                <div
                  className="h-64 md:h-80"
                  style={{
                    background: blogPosts[0].image,
                  }}
                />
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold uppercase">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div
                    className="h-48"
                    style={{
                      background: post.image,
                    }}
                  />
                  <CardHeader>
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 bg-muted text-xs font-semibold uppercase rounded">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                    </div>
                    <button className="text-primary font-semibold text-sm hover:underline">
                      Read More →
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border-2 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to get the latest articles and
              exclusive tips delivered to your inbox.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
