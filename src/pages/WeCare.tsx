import {
  Users,
  GraduationCap,
  Home,
  Heart,
  Handshake,
  TreePine,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WeCare = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container px-4 md:px-6 max-w-5xl">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-4">We Care</h1>
            <p className="text-xl text-muted-foreground">
              Making a Positive Impact on Society and Communities
            </p>
          </div>

          {/* Our Philosophy */}
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Fleek Buy, we believe that success isn't just measured in
              profits. We are committed to using our platform and resources to
              create positive change in the communities we operate in and the
              world at large. Corporate social responsibility is at the core of
              everything we do.
            </p>
          </div>

          {/* CSR Initiatives */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our CSR Programs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Education for All
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    We provide scholarships and educational support to
                    underprivileged students.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 100+ scholarships awarded annually</li>
                    <li>• Digital literacy programs</li>
                    <li>• Career development workshops</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" />
                    Community Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Supporting local communities through infrastructure and
                    livelihood projects.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Community centers setup</li>
                    <li>• Skill development programs</li>
                    <li>• Women empowerment initiatives</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Health & Wellness
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Promoting health and wellness in underserved areas.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Free health camps</li>
                    <li>• Mental health awareness</li>
                    <li>• Healthcare access programs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TreePine className="h-5 w-5 text-primary" />
                    Environmental Conservation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Protecting and preserving our natural environment for future
                    generations.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Tree plantation drives</li>
                    <li>• Wildlife protection</li>
                    <li>• Clean water initiatives</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Impact Numbers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-muted/40 rounded-lg">
                <p className="text-4xl font-bold text-primary mb-2">5000+</p>
                <p className="text-muted-foreground">Lives Impacted</p>
              </div>
              <div className="text-center p-6 bg-muted/40 rounded-lg">
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-muted-foreground">Scholarships Given</p>
              </div>
              <div className="text-center p-6 bg-muted/40 rounded-lg">
                <p className="text-4xl font-bold text-primary mb-2">50K+</p>
                <p className="text-muted-foreground">Trees Planted</p>
              </div>
              <div className="text-center p-6 bg-muted/40 rounded-lg">
                <p className="text-4xl font-bold text-primary mb-2">₹1Cr+</p>
                <p className="text-muted-foreground">Contributed</p>
              </div>
            </div>
          </div>

          {/* Women Empowerment */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Women Empowerment</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Handshake className="h-5 w-5 text-primary" />
                  Supporting Women Entrepreneurs & Workers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We are committed to creating opportunities for women in our
                  supply chain and beyond:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 40% of our workforce are women</li>
                  <li>✓ Equal pay for equal work policy</li>
                  <li>✓ Women-led supplier partnerships</li>
                  <li>✓ Maternal and childcare benefits</li>
                  <li>✓ Leadership development programs for women</li>
                  <li>✓ Support for women entrepreneurs</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Volunteer & Support */}
          <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border-2 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-lg text-muted-foreground mb-6">
              You can make a difference too! Join us in our mission to create
              positive change.
            </p>
            <div className="space-y-3 text-left inline-block">
              <p>• Volunteer with us on community projects</p>
              <p>• Donate to our CSR initiatives</p>
              <p>• Participate in awareness campaigns</p>
              <p>• Support eco-friendly practices</p>
              <p>• Share your skills and expertise</p>
            </div>
            <p className="text-muted-foreground mt-8">
              Email us at csr@FleekBuy.com to learn more about volunteering
              opportunities.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WeCare;
