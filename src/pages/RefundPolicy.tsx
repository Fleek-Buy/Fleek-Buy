import { Mail, Phone, Clock, AlertCircle, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container px-4 md:px-6 max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
            <p className="text-lg text-muted-foreground">
              Your satisfaction is our priority. Understand our refund process.
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
                  Response within 24 hours
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
                  Mon-Sat, 9 AM - 6 PM IST
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Policy Content */}
          <div className="space-y-8">
            {/* Refund Window */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Refund Window
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Fleek Buy offers a <strong>30-day return window</strong> from
                  the date of delivery. This generous timeframe allows you to
                  thoroughly inspect and evaluate your purchase.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground">
                    <strong>Important:</strong> Returns must be initiated within
                    30 days of delivery. After this period, items cannot be
                    returned or refunded.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Refund Eligibility */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RotateCcw className="h-5 w-5 text-primary" />
                  Refund Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Eligible for Refund:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Defective or damaged items</li>
                    <li>Items not matching the description</li>
                    <li>Wrong items delivered (seller error)</li>
                    <li>Missing items from the package</li>
                    <li>Manufacturing defects</li>
                    <li>Change of mind (within 30 days)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">
                    Not Eligible for Refund:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Items used or damaged by the customer</li>
                    <li>Items with missing original tags or packaging</li>
                    <li>Items with signs of wear and tear</li>
                    <li>Items returned after 30 days</li>
                    <li>Customized or personalized items (non-defective)</li>
                    <li>Final sale or clearance items (unless defective)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Return Process */}
            <Card>
              <CardHeader>
                <CardTitle>How to Return an Item</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
                  <li>
                    <strong>Initiate Return:</strong> Go to your Orders, select
                    the product, and click "Return Item"
                  </li>
                  <li>
                    <strong>Select Reason:</strong> Choose the reason for return
                    from the provided options
                  </li>
                  <li>
                    <strong>Get Return Label:</strong> We'll provide a prepaid
                    return label for defective items
                  </li>
                  <li>
                    <strong>Pack the Item:</strong> Securely pack the item in
                    its original packaging with all tags attached
                  </li>
                  <li>
                    <strong>Ship Back:</strong> Use the return label to ship the
                    item back to us
                  </li>
                  <li>
                    <strong>Receive Refund:</strong> Once received and
                    inspected, refund will be processed
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Refund Processing */}
            <Card>
              <CardHeader>
                <CardTitle>Refund Processing Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/40 rounded-lg">
                    <h4 className="font-semibold mb-2">Defective Items</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Return Shipping: FREE
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Refund Timeline: 5-7 business days
                    </p>
                  </div>
                  <div className="p-4 bg-muted/40 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Change of Mind Returns
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Return Shipping: Paid by Customer
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Refund Timeline: 5-7 business days
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Processing time starts from when we
                    receive and inspect your returned item. The refund will be
                    credited to your original payment method.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Costs */}
            <Card>
              <CardHeader>
                <CardTitle>Return Shipping Costs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex justify-between p-3 bg-muted/40 rounded">
                    <span>Defective/Damaged Items:</span>
                    <span className="font-semibold">FREE</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted/40 rounded">
                    <span>Wrong Item Delivered:</span>
                    <span className="font-semibold">FREE</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted/40 rounded">
                    <span>Change of Mind:</span>
                    <span className="font-semibold">Customer Pays</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground italic">
                  We'll provide prepaid return labels for defective items. For
                  change of mind returns, you can use your preferred courier.
                </p>
              </CardContent>
            </Card>

            {/* Special Cases */}
            <Card>
              <CardHeader>
                <CardTitle>Special Cases & Exceptions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">
                    Damaged Items on Delivery:
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    If you receive damaged items, please refuse the package or
                    document the damage with photos immediately. Contact us
                    within 48 hours with proof.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Missing Items:</h4>
                  <p className="text-sm text-muted-foreground">
                    Check your package immediately upon delivery. If items are
                    missing, contact us within 24 hours with photos of the
                    opened package.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Wrong Item Delivered:</h4>
                  <p className="text-sm text-muted-foreground">
                    If you receive a different item than what you ordered,
                    contact us immediately. Return shipping will be FREE, and
                    you'll be eligible for a full refund or replacement.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Partial Refunds:</h4>
                  <p className="text-sm text-muted-foreground">
                    In cases where items are returned in poor condition, we may
                    issue a partial refund after inspection.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Refund to Original Method */}
            <Card>
              <CardHeader>
                <CardTitle>Refund to Original Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  All refunds are processed to the original payment method used
                  during purchase. This ensures maximum security and
                  convenience.
                </p>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>
                    <strong>Credit/Debit Cards:</strong> Refund appears in 5-7
                    business days
                  </div>
                  <div>
                    <strong>Digital Wallets:</strong> Refund appears in 2-5
                    business days
                  </div>
                  <div>
                    <strong>UPI:</strong> Refund appears in 2-3 business days
                  </div>
                </div>

                <p className="text-xs text-muted-foreground italic">
                  Bank processing times may vary. Contact your bank if refund
                  doesn't appear within the specified timeframe.
                </p>
              </CardContent>
            </Card>

            {/* Non-Returnable Items */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Non-Returnable Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Some items are final sale and cannot be returned, except if
                  defective:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Clearance or final sale items</li>
                  <li>Intimate apparel (unless defective)</li>
                  <li>Swimwear (unless defective)</li>
                  <li>Pierced jewelry (unless defective)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact for Issues */}
            <Card>
              <CardHeader>
                <CardTitle>Issues with Returns?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any issues or disputes regarding your refund,
                  please contact our support team immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:support@FleekBuy.com"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Email Support
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Last Updated */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>Last Updated: January 2026</p>
            <p>This policy is subject to change at any time without notice.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;
