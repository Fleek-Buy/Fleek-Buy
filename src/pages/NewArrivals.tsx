import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star, Leaf, Filter, Grid3X3, LayoutList } from "lucide-react";
import { Link } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const newProducts = [
  {
    id: 1,
    name: "Rose Petal Face Mist",
    description: "Hydrating mist with pure rose water",
    price: 38,
    originalPrice: null,
    rating: 4.9,
    reviews: 45,
    image: product1,
    badge: "Just In",
    badgeColor: "bg-secondary text-secondary-foreground",
    isOrganic: true,
  },
  {
    id: 2,
    name: "Retinol Night Cream",
    description: "Anti-aging formula with 0.5% retinol",
    price: 89,
    originalPrice: null,
    rating: 4.8,
    reviews: 23,
    image: product2,
    badge: "New",
    badgeColor: "bg-secondary text-secondary-foreground",
    isOrganic: true,
  },
  {
    id: 3,
    name: "Collagen Boost Serum",
    description: "Firms and plumps with marine collagen",
    price: 95,
    originalPrice: null,
    rating: 5.0,
    reviews: 12,
    image: product3,
    badge: "New",
    badgeColor: "bg-secondary text-secondary-foreground",
    isOrganic: false,
  },
  {
    id: 4,
    name: "Green Tea Cleanser",
    description: "Gentle daily cleanser with antioxidants",
    price: 32,
    originalPrice: null,
    rating: 4.7,
    reviews: 67,
    image: product4,
    badge: "Just In",
    badgeColor: "bg-secondary text-secondary-foreground",
    isOrganic: true,
  },
  {
    id: 5,
    name: "Peptide Eye Cream",
    description: "Reduces dark circles and puffiness",
    price: 65,
    originalPrice: null,
    rating: 4.9,
    reviews: 34,
    image: product1,
    badge: "New",
    badgeColor: "bg-secondary text-secondary-foreground",
    isOrganic: true,
  },
  {
    id: 6,
    name: "Bakuchiol Serum",
    description: "Natural retinol alternative for sensitive skin",
    price: 72,
    originalPrice: null,
    rating: 4.8,
    reviews: 28,
    image: product2,
    badge: "Just In",
    badgeColor: "bg-secondary text-secondary-foreground",
    isOrganic: true,
  },
];

const ProductCard = ({ product }: { product: typeof newProducts[0] }) => {
  return (
    <Link to={`/product/${product.id}`} className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 block">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {product.badge && (
          <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-md ${product.badgeColor}`}>
            {product.badge}
          </span>
        )}

        <button 
          onClick={(e) => e.preventDefault()}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-all duration-300 hover:bg-background hover:scale-110"
        >
          <Heart className="h-4 w-4 text-foreground" />
        </button>

        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center bg-gradient-to-t from-background/90 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
          <Button variant="premium" className="w-full gap-2" onClick={(e) => e.preventDefault()}>
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="p-4">
        {product.isOrganic && (
          <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-secondary-light px-2 py-0.5 text-xs font-medium text-secondary">
            <Leaf className="h-3 w-3" />
            Organic
          </div>
        )}

        <h3 className="mb-1 font-semibold text-foreground transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        <p className="mb-3 text-sm text-muted-foreground line-clamp-1">
          {product.description}
        </p>

        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-medium text-foreground">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

const NewArrivals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-secondary-light to-background py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary text-secondary-foreground px-4 py-1.5 text-sm font-medium">
              Fresh Drops
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl mb-4">
              New Arrivals
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Discover our latest collection of premium skincare and wellness products, crafted with the finest organic ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          {/* Filters Bar */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <span className="text-sm text-muted-foreground">{newProducts.length} products</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <LayoutList className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {newProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewArrivals;
