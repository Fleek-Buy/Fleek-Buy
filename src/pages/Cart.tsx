import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Shield, Truck, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number | null;
  quantity: number;
  image: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Vitamin C Glow Serum",
    description: "Brightening face serum with 15% Vitamin C",
    price: 68,
    originalPrice: 85,
    quantity: 2,
    image: product1,
  },
  {
    id: 2,
    name: "Nourishing Body Lotion",
    description: "Deep hydration with shea butter & aloe",
    price: 42,
    originalPrice: null,
    quantity: 1,
    image: product2,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 75 ? 0 : 8.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 md:px-6 py-8 md:py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="mb-2 text-2xl font-semibold text-foreground">Your cart is empty</h2>
            <p className="mb-6 text-muted-foreground">Looks like you haven't added anything yet.</p>
            <Link to="/">
              <Button variant="premium" className="gap-2">
                Continue Shopping
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:shadow-md"
                >
                  <Link to={`/product/${item.id}`} className="shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-xl object-cover md:h-32 md:w-32"
                    />
                  </Link>
                  
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link to={`/product/${item.id}`} className="hover:text-primary transition-colors">
                        <h3 className="font-semibold text-foreground">{item.name}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                          {item.originalPrice && (
                            <p className="text-xs text-muted-foreground line-through">
                              ${(item.originalPrice * item.quantity).toFixed(2)}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                <h2 className="mb-6 text-xl font-semibold text-foreground">Order Summary</h2>
                
                <div className="space-y-4 border-b border-border pb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-foreground">
                      {shipping === 0 ? (
                        <span className="text-secondary">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Spend ${(75 - subtotal).toFixed(2)} more for free shipping
                    </p>
                  )}
                </div>

                <div className="flex justify-between py-4">
                  <span className="text-lg font-semibold text-foreground">Total</span>
                  <span className="text-lg font-bold text-primary">${total.toFixed(2)}</span>
                </div>

                <Button variant="hero" className="w-full gap-2 mb-4">
                  Proceed to Checkout
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <Link to="/" className="block">
                  <Button variant="ghost" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>

                {/* Trust Badges */}
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Shield className="h-5 w-5 text-secondary mb-1" />
                    <span className="text-xs text-muted-foreground">Secure</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Truck className="h-5 w-5 text-secondary mb-1" />
                    <span className="text-xs text-muted-foreground">Fast Ship</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <RotateCcw className="h-5 w-5 text-secondary mb-1" />
                    <span className="text-xs text-muted-foreground">Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <div className="mt-[50px]">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
