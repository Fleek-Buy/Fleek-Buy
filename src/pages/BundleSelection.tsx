import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Plus, Minus, Search, ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

// Available products for bundle
const AVAILABLE_PRODUCTS = [
  {
    id: 1,
    name: "Vitamin C Glow Serum",
    description: "Brightening face serum with 15% Vitamin C",
    price: 68,
    image: product1,
  },
  {
    id: 2,
    name: "Nourishing Body Lotion",
    description: "Deep hydration with shea butter & aloe",
    price: 42,
    image: product2,
  },
  {
    id: 3,
    name: "Hydrating Face Mask",
    description: "Intensive hydration treatment for all skin types",
    price: 35,
    image: product1,
  },
  {
    id: 4,
    name: "Luxury Night Cream",
    description: "Premium night moisturizer with retinol",
    price: 72,
    image: product2,
  },
  {
    id: 5,
    name: "Gentle Cleanser",
    description: "Mild daily cleanser suitable for sensitive skin",
    price: 28,
    image: product1,
  },
  {
    id: 6,
    name: "Brightening Eye Serum",
    description: "Targeted treatment for dark circles and fine lines",
    price: 55,
    image: product2,
  },
];

const BundleSelection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedQuantities, setSelectedQuantities] = useState<
    Record<number, number>
  >({});

  // Filter products based on search query
  const filteredProducts = AVAILABLE_PRODUCTS.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleQuantityChange = (productId: number, delta: number) => {
    setSelectedQuantities((prev) => {
      const current = prev[productId] || 0;
      const newQuantity = Math.max(0, current + delta);
      if (newQuantity === 0) {
        const { [productId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [productId]: newQuantity };
    });
  };

  const handleNext = () => {
    // Collect all selected products
    const itemsToAdd: Array<
      (typeof AVAILABLE_PRODUCTS)[0] & { quantity: number }
    > = [];

    Object.entries(selectedQuantities).forEach(([productId, quantity]) => {
      if (quantity > 0) {
        const product = AVAILABLE_PRODUCTS.find(
          (p) => p.id === parseInt(productId),
        );
        if (product) {
          itemsToAdd.push({
            ...product,
            quantity,
          });
        }
      }
    });

    // Get existing bundle from localStorage
    const BUNDLE_STORAGE_KEY = "aura_luxe_bundle";
    interface BundleItemType {
      id: number;
      name: string;
      price: number;
      quantity: number;
      image: string;
    }
    let existingBundle: BundleItemType[] = [];
    try {
      const saved = localStorage.getItem(BUNDLE_STORAGE_KEY);
      if (saved) {
        existingBundle = JSON.parse(saved);
      }
    } catch (error) {
      console.error("Failed to read bundle from localStorage:", error);
    }

    // Add new items to existing bundle
    itemsToAdd.forEach((product) => {
      const existingItem = existingBundle.find(
        (item) => item.id === product.id,
      );
      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        existingBundle.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          image: product.image,
        });
      }
    });

    // Save to localStorage immediately
    localStorage.setItem(BUNDLE_STORAGE_KEY, JSON.stringify(existingBundle));

    // Navigate to checkout
    navigate("/checkout");
  };

  const hasSelectedItems = Object.values(selectedQuantities).some(
    (qty) => qty > 0,
  );
  const totalSelectedCount = Object.values(selectedQuantities).reduce(
    (sum, qty) => sum + qty,
    0,
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container px-4 md:px-6 py-8 md:py-12">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Select Bundle Items</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Build Your Bundle
          </h1>
          <p className="text-muted-foreground">
            Select the products you'd like to include in your bundle
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11"
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
          {/* Products Grid */}
          <div>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No products found matching "{searchQuery}"
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => {
                  const quantity = selectedQuantities[product.id] || 0;
                  const isSelected = quantity > 0;

                  return (
                    <div
                      key={product.id}
                      className={`rounded-2xl border transition-all overflow-hidden flex flex-col ${
                        isSelected
                          ? "border-primary bg-primary/5 shadow-lg shadow-primary/20"
                          : "border-border bg-card hover:border-primary/50 hover:shadow-md"
                      }`}
                    >
                      {/* Product Image */}
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-semibold text-foreground text-base line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">
                          {product.description}
                        </p>
                        <p className="text-xl font-bold text-primary mb-4">
                          ${product.price.toFixed(2)}
                        </p>

                        {/* Quantity Selector */}
                        <div className="flex items-center justify-center gap-3 bg-muted/50 rounded-lg p-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 rounded-md hover:bg-background"
                            onClick={() => handleQuantityChange(product.id, -1)}
                            disabled={quantity === 0}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-lg font-bold text-foreground w-8 text-center">
                            {quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 rounded-md hover:bg-background"
                            onClick={() => handleQuantityChange(product.id, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        {isSelected && (
                          <div className="mt-3 text-center">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                              Added to Bundle
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Summary Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Bundle Summary
              </h2>

              {hasSelectedItems ? (
                <>
                  <div className="space-y-3 mb-6">
                    {Object.entries(selectedQuantities)
                      .filter(([_, qty]) => qty > 0)
                      .map(([productId, quantity]) => {
                        const product = AVAILABLE_PRODUCTS.find(
                          (p) => p.id === parseInt(productId),
                        );
                        if (!product) return null;

                        return (
                          <div
                            key={productId}
                            className="flex items-start justify-between text-sm"
                          >
                            <div>
                              <p className="font-medium text-foreground">
                                {product.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Qty: {quantity} × ${product.price.toFixed(2)}
                              </p>
                            </div>
                            <p className="font-semibold text-foreground">
                              ${(product.price * quantity).toFixed(2)}
                            </p>
                          </div>
                        );
                      })}
                  </div>

                  <div className="space-y-2 text-sm border-t border-border pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Items</span>
                      <span className="font-medium text-foreground">
                        {totalSelectedCount}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-bold text-lg text-primary">
                        $
                        {Object.entries(selectedQuantities)
                          .reduce((sum, [productId, quantity]) => {
                            const product = AVAILABLE_PRODUCTS.find(
                              (p) => p.id === parseInt(productId),
                            );
                            return sum + (product?.price || 0) * quantity;
                          }, 0)
                          .toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="hero"
                    className="w-full gap-2"
                    size="lg"
                    onClick={handleNext}
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    Select items to continue
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Use the + button to add products to your bundle
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <div className="mt-[50px]">
        <Footer />
      </div>
    </div>
  );
};

export default BundleSelection;
