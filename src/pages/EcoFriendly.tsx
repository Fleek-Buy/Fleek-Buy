import { Leaf, Recycle, Droplet, Wind, Globe, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EcoFriendly = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container px-4 md:px-6 max-w-5xl">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-4">We Are Eco-Friendly</h1>
            <p className="text-xl text-muted-foreground">
              Committed to Sustainable Fashion & Responsible Business Practices
            </p>
          </div>

          {/* Our Commitment */}
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold">Our Environmental Commitment</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Fleek Buy, we believe that luxury and sustainability can
              coexist. We're dedicated to reducing our environmental footprint
              while delivering premium products to our customers. Our
              eco-friendly initiatives span across packaging, sourcing, and
              operations.
            </p>
          </div>

          {/* Initiatives */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Green Initiatives</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    Sustainable Packaging
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We use 100% recyclable and biodegradable packaging
                    materials. No plastic fillers or unnecessary waste in any
                    shipment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Recycle className="h-5 w-5 text-green-600" />
                    Recycling Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Customers can return packaging materials to us for
                    recycling. We'll provide prepaid labels for zero-waste
                    returns.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplet className="h-5 w-5 text-green-600" />
                    Water Conservation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our warehouses implement water-efficient systems and we
                    partner with brands that minimize water usage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wind className="h-5 w-5 text-green-600" />
                    Carbon Neutral Shipping
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We offset 100% of our shipping carbon emissions through
                    certified environmental projects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-green-600" />
                    Ethical Sourcing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We partner with brands that follow fair trade practices and
                    ethical manufacturing standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-green-600" />
                    Community Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    1% of our profits go to environmental conservation and
                    community development projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sustainable Brands */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              Supporting Sustainable Brands
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We actively source from and promote sustainable and eco-conscious
              brands that align with our values. Look for our "Eco-Certified"
              badge on products to identify environmentally responsible choices.
            </p>
            <div className="bg-muted/40 p-8 rounded-lg border-2 border-green-200">
              <h3 className="font-semibold text-lg mb-4">
                Benefits of Choosing Eco-Friendly Products:
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Reduces environmental impact and carbon footprint</li>
                <li>✓ Supports ethical manufacturing practices</li>
                <li>✓ Higher quality and durability</li>
                <li>✓ Safer for your health (no harmful chemicals)</li>
                <li>✓ Contributes to global sustainability efforts</li>
              </ul>
            </div>
          </div>

          {/* How You Can Help */}
          <div className="text-center p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-300">
            <h2 className="text-3xl font-bold mb-4">How You Can Help</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Every purchase and choice you make contributes to a more
              sustainable future. Together, we can make a difference.
            </p>
            <div className="space-y-3 text-left inline-block">
              <p>• Choose eco-certified products</p>
              <p>• Reuse or recycle packaging materials</p>
              <p>• Spread awareness about sustainable fashion</p>
              <p>• Participate in our recycling program</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EcoFriendly;
