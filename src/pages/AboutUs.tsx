import { Heart, Zap, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container px-4 md:px-6 max-w-5xl">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-4">About Fleek Buy</h1>
            <p className="text-xl text-muted-foreground">
              Redefining Luxury Fashion for the Modern Consumer
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fleek Buy was founded with a simple mission: to bring premium,
              high-quality fashion and lifestyle products to discerning
              customers across India. What started as a small boutique in Mumbai
              has grown into a comprehensive online marketplace, partnering with
              some of the world's most prestigious brands.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that luxury shouldn't be inaccessible. By curating the
              finest selection of products from Amazon, Flipkart, Meesho,
              Myntra, and other leading platforms, we make it easier for you to
              discover and purchase premium items all in one place.
            </p>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Quality First
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We meticulously select every product to ensure it meets our
                    high standards of quality and authenticity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We continuously improve our platform to provide the best
                    shopping experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Customer Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our customers are at the heart of everything we do. Your
                    satisfaction is our success.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We strive for excellence in every aspect of our business,
                    from products to service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Why Choose Fleek Buy?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Curated Selection</h3>
                  <p className="text-muted-foreground">
                    Every product is handpicked by our expert team to ensure
                    quality and authenticity.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    Get the best deals on premium products without compromising
                    on quality.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Fast Delivery</h3>
                  <p className="text-muted-foreground">
                    Quick and reliable shipping across India with real-time
                    tracking.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Excellent Customer Support
                  </h3>
                  <p className="text-muted-foreground">
                    Our dedicated support team is always ready to help you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="text-center p-8 bg-muted/40 rounded-lg border-2 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground">
              We're a passionate team of fashion enthusiasts, entrepreneurs, and
              tech innovators dedicated to bringing luxury to everyone.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
