import { Mail, Phone, MapPin, Clock, Truck, AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ShippingPolicy = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container px-4 md:px-6 max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Shipping Policy</h1>
            <p className="text-lg text-muted-foreground">
              Learn about our shipping process and delivery standards
            </p>
          </div>

          {/* Support Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">
                  support@FleekBuy.com
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Response time: Within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">
                  +91 (800)123-4567
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Available: Mon-Sat, 9 AM - 6 PM IST
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Shipping Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  Shipping Methods & Delivery Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Standard Shipping</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Delivery within 5-7 business days across India (all metro
                    and non-metro areas).
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Shipping Cost: Free on orders over ₹1,000
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Express Shipping</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Delivery within 2-3 business days to metro cities.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Shipping Cost: ₹99
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Overnight Shipping</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Delivery next business day for orders placed before 12 PM
                    IST (available in select cities).
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Shipping Cost: ₹199
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Order Processing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Order Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  All orders are processed within 1-2 business days. Orders
                  placed on weekends or holidays will be processed the next
                  business day. You will receive a confirmation email with
                  tracking information once your order ships.
                </p>
                <p className="text-sm text-muted-foreground">
                  Processing time does not include the shipping time.
                  International orders may take longer due to customs clearance.
                </p>
              </CardContent>
            </Card>

            {/* Shipping Restrictions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Shipping Restrictions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  We currently ship to:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>All States & Union Territories across India</li>
                  <li>
                    Major Metro Cities (Delhi, Mumbai, Bangalore, Hyderabad,
                    Chennai, Kolkata)
                  </li>
                  <li>Tier-2 & Tier-3 Cities</li>
                  <li>Rural areas (extended delivery time 7-10 days)</li>
                  <li>
                    Himalayan regions (Jammu & Kashmir, Himachal Pradesh,
                    Uttarakhand)
                  </li>
                  <li>Northeast India (with additional processing time)</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  For shipping to other countries, please contact our support
                  team.
                </p>
              </CardContent>
            </Card>

            {/* Tracking & Delivery */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Tracking Your Order
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Once your order ships, you will receive an email with a
                  tracking number. You can track your package in real-time
                  through our website or the carrier's website.
                </p>
                <p className="text-sm text-muted-foreground">
                  If your package hasn't arrived within the estimated delivery
                  window, please contact us immediately with your order number
                  and tracking information.
                </p>
              </CardContent>
            </Card>

            {/* Damaged or Lost Items */}
            <Card>
              <CardHeader>
                <CardTitle>Damaged or Lost Items</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  If your package arrives damaged or if the item is missing:
                </p>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
                  <li>Contact us within 48 hours of delivery with photos</li>
                  <li>Provide your order number and tracking information</li>
                  <li>
                    We will investigate and provide a replacement or refund
                  </li>
                  <li>
                    You may be asked to return the damaged item at our expense
                  </li>
                </ol>
                <p className="text-sm text-muted-foreground mt-4">
                  All damage claims must be reported within 7 days of delivery.
                </p>
              </CardContent>
            </Card>

            {/* Return Shipping */}
            <Card>
              <CardHeader>
                <CardTitle>Return Shipping</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  For eligible returns within 30 days:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Free return shipping for defective items</li>
                  <li>
                    Standard return shipping paid by customer for change of mind
                    returns
                  </li>
                  <li>Prepaid return labels provided for defective items</li>
                  <li>
                    Refunds processed within 5-7 business days of item receipt
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-1">
                    Can I change my shipping address?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Contact us immediately if you need to change your address.
                    If the order hasn't shipped yet, we can update it. After
                    shipment, you'll need to refuse the package or arrange a
                    redirect with the carrier.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">
                    Do you ship internationally?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Currently, we ship only within India. For international
                    inquiries, please contact our support team.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">
                    What if my order is delayed?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Contact us if your order exceeds the estimated delivery
                    date. We'll work with the carrier to locate your package and
                    provide updates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 bg-muted/40 rounded-lg border-2 border-primary/20">
            <h3 className="text-xl font-semibold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our customer support team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@FleekBuy.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingPolicy;
