import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star, Leaf, Trash2, HeartOff, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import { useState } from "react";

interface WishlistItem {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  reviews: number;
  image: string;
  isOrganic: boolean;
  inStock: boolean;
}

const initialWishlistItems: WishlistItem[] = [
  {
    id: 1,
    name: "Vitamin C Glow Serum",
    description: "Brightening face serum with 15% Vitamin C",
    price: 68,
    originalPrice: 85,
    rating: 4.9,
    reviews: 234,
    image: product1,
    isOrganic: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Hydra-Glow Face Cream",
    description: "24-hour moisture with hyaluronic acid",
    price: 78,
    originalPrice: null,
    rating: 4.9,
    reviews: 312,
    image: product3,
    isOrganic: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Nourishing Body Lotion",
    description: "Deep hydration with shea butter & aloe",
    price: 42,
    originalPrice: null,
    rating: 4.8,
    reviews: 189,
    image: product2,
    isOrganic: true,
    inStock: false,
  },
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(initialWishlistItems);

  const removeItem = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 md:px-6 py-8 md:py-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">My Wishlist</h1>
          <span className="text-muted-foreground">{wishlistItems.length} items</span>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <HeartOff className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="mb-2 text-2xl font-semibold text-foreground">Your wishlist is empty</h2>
            <p className="mb-6 text-muted-foreground">Save items you love for later.</p>
            <Link to="/">
              <Button variant="premium" className="gap-2">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlistItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/product/${item.id}`} className="block">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${!item.inStock ? 'opacity-50' : ''}`}
                    />
                    
                    {!item.inStock && (
                      <div className="absolute inset-0 flex items-center justify-center bg-background/60">
                        <span className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground">
                          Out of Stock
                        </span>
                      </div>
                    )}

                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        removeItem(item.id);
                      }}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/90 backdrop-blur-sm transition-all duration-300 hover:bg-destructive hover:scale-110"
                    >
                      <Trash2 className="h-4 w-4 text-destructive-foreground" />
                    </button>
                  </div>
                </Link>

                <div className="p-4">
                  {item.isOrganic && (
                    <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-secondary-light px-2 py-0.5 text-xs font-medium text-secondary">
                      <Leaf className="h-3 w-3" />
                      Organic
                    </div>
                  )}

                  <Link to={`/product/${item.id}`}>
                    <h3 className="mb-1 font-semibold text-foreground transition-colors hover:text-primary">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="mb-3 text-sm text-muted-foreground line-clamp-1">
                    {item.description}
                  </p>

                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium text-foreground">{item.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({item.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">${item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${item.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      variant="premium" 
                      size="sm" 
                      className="gap-1"
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="h-3 w-3" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
