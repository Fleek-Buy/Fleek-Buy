import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqData = [
  {
    category: "General",
    questions: [
      {
        q: "What is Fleek Buy?",
        a: "Fleek Buy is a curated online marketplace that brings together premium and luxury products from leading platforms like Amazon, Flipkart, Meesho, and Myntra. We make it easy for you to discover and purchase high-quality items in one place.",
      },
      {
        q: "Is Fleek Buy a marketplace or a seller?",
        a: "Fleek Buy is a curated marketplace that sources products from various platforms and sellers. We act as a bridge to help you find premium products easily.",
      },
      {
        q: "How do I create an account?",
        a: "Click on the 'Sign Up' button on our website, enter your email address and create a password. You can also sign up using your Google or social media accounts for quick registration.",
      },
    ],
  },
  {
    category: "Orders & Shipping",
    questions: [
      {
        q: "How long does delivery take?",
        a: "Standard delivery takes 5-7 business days across India. Express delivery (2-3 days) and Overnight delivery options are also available in select cities. Refer to our Shipping Policy for detailed information.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently, we ship only within India. For international orders, please contact our support team at support@FleekBuy.com.",
      },
      {
        q: "Can I track my order?",
        a: "Yes! Once your order ships, you'll receive an email with a tracking number. You can track your package in real-time through our website or the carrier's tracking system.",
      },
      {
        q: "What if my order doesn't arrive on time?",
        a: "If your package exceeds the estimated delivery date, please contact us immediately with your order number. We'll work with the carrier to locate your package and provide updates.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer 30 days return policy from the date of delivery. Products must be in original condition with all tags and packaging intact. Refer to our Refund Policy for detailed terms.",
      },
      {
        q: "How do I initiate a return?",
        a: "Go to your Orders section, select the product you want to return, and click 'Return Item'. Follow the on-screen instructions and we'll provide a return label.",
      },
      {
        q: "How long does a refund take?",
        a: "Refunds are processed within 5-7 business days of us receiving your returned item. The amount will be credited to your original payment method.",
      },
      {
        q: "Do I have to pay for return shipping?",
        a: "For defective items, return shipping is free. For change of mind returns, customers bear the return shipping cost, unless specified otherwise.",
      },
    ],
  },
  {
    category: "Products & Quality",
    questions: [
      {
        q: "Are all products authentic?",
        a: "Yes! We are committed to authenticity. All products are sourced from authorized sellers and verified distributors. We guarantee 100% authentic products.",
      },
      {
        q: "How do you ensure product quality?",
        a: "Every product in our catalog is carefully selected by our expert team. We partner with trusted brands and sellers who meet our high quality standards.",
      },
      {
        q: "Can I exchange a product?",
        a: "We don't offer direct exchanges, but you can return the item and place a new order for the desired product. Return shipping is free for defective items.",
      },
      {
        q: "What if my product arrives damaged?",
        a: "Please contact us within 48 hours of delivery with photos of the damage. We'll investigate and provide a replacement or refund. All damage claims must be reported within 7 days of delivery.",
      },
    ],
  },
  {
    category: "Payment & Discounts",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, debit cards, digital wallets (PayPal, Google Pay, Apple Pay), and UPI payments. We also offer EMI options on select purchases.",
      },
      {
        q: "Is my payment information secure?",
        a: "Yes! We use industry-leading SSL encryption and comply with PCI DSS standards to protect your payment information.",
      },
      {
        q: "Do you offer discounts or promotional codes?",
        a: "Yes! We regularly offer discounts and promotional codes. Subscribe to our newsletter to stay updated on the latest deals and offers.",
      },
      {
        q: "Can I use multiple discount codes on one order?",
        a: "Typically, only one discount code can be applied per order. Some codes may have specific terms and conditions.",
      },
    ],
  },
  {
    category: "Account & Support",
    questions: [
      {
        q: "How do I update my profile information?",
        a: "Go to your Account section and click 'Edit Profile'. You can update your name, email, phone number, and address from there.",
      },
      {
        q: "How do I contact customer support?",
        a: "You can reach our support team via email at support@FleekBuy.com or call us at +91 (800)123-4567. We're available Mon-Sat, 9 AM - 6 PM IST.",
      },
      {
        q: "How can I delete my account?",
        a: "To delete your account, go to Account Settings and click 'Delete Account'. Please note that this action is permanent.",
      },
      {
        q: "What is the Wishlist feature?",
        a: "The Wishlist allows you to save products you love for later. You can add items to your wishlist and receive notifications when they go on sale.",
      },
    ],
  },
];

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
        <div className="container px-4 md:px-6 max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about Fleek Buy
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqData.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((item, itemIndex) => {
                    const globalIndex = sectionIndex * 100 + itemIndex;
                    return (
                      <Card
                        key={itemIndex}
                        className="cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => toggleExpand(globalIndex)}
                      >
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{item.q}</CardTitle>
                            {expandedIndex === globalIndex ? (
                              <ChevronUp className="h-5 w-5 text-primary" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                        </CardHeader>
                        {expandedIndex === globalIndex && (
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.a}
                            </p>
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center p-8 bg-muted/40 rounded-lg border-2 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">
              Didn't find your answer?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help! Get in touch with us for any
              queries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@FleekBuy.com"
                className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Email Us
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
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

export default FAQs;
