import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star, Leaf, Filter, Grid3X3, LayoutList, Percent } from "lucide-react";
import { Link } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import card3 from "@/assets/card3.png";

const saleProducts = [
  {
    id: 1,
    name: "Vitamin C Glow Serum",
    description: "Brightening face serum with 15% Vitamin C",
    price: 68,
    originalPrice: 85,
    rating: 4.9,
    reviews: 234,
    image: product1,
    discount: 20,
    isOrganic: true,
  },
  {
    id: 2,
    name: "Calm & Balance Oil",
    description: "Aromatherapy blend for relaxation",
    price: 54,
    originalPrice: 72,
    rating: 4.7,
    reviews: 156,
    image: product4,
    discount: 25,
    isOrganic: true,
  },
  {
    id: 3,
    name: "Hydrating Mask Set",
    description: "5-piece mask collection for all skin types",
    price: 45,
    originalPrice: 65,
    rating: 4.8,
    reviews: 89,
    image: product2,
    discount: 30,
    isOrganic: true,
  },
  {
    id: 4,
    name: "Anti-Aging Eye Serum",
    description: "Reduces fine lines and wrinkles",
    price: 72,
    originalPrice: 95,
    rating: 4.9,
    reviews: 201,
    image: product3,
    discount: 24,
    isOrganic: false,
  },
  {
    id: 5,
    name: "Detox Clay Mask",
    description: "Deep cleansing with French green clay",
    price: 28,
    originalPrice: 38,
    rating: 4.6,
    reviews: 145,
    image: product1,
    discount: 26,
    isOrganic: true,
  },
  {
    id: 6,
    name: "Luxury Body Butter",
    description: "Rich moisturizing formula with cocoa butter",
    price: 35,
    originalPrice: 48,
    rating: 4.8,
    reviews: 178,
    image: product2,
    discount: 27,
    isOrganic: true,
  },
];

const ProductCard = ({ product }: { product: typeof saleProducts[0] }) => {
  return (
    <Link to={`/product/${product.id}`} className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 block">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <span className="absolute left-3 top-3 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold shadow-md shadow-gold">
          {product.discount}% Off
        </span>

        <button 
          onClick={(e) => e.preventDefault()}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-all duration-300 hover:bg-background hover:scale-110"
        >
          <Heart className="h-4 w-4 text-foreground" />
        </button>

        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center bg-gradient-to-t from-background/90 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
          <Button variant="gold" className="w-full gap-2" onClick={(e) => e.preventDefault()}>
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
          <span className="text-lg font-bold text-accent">${product.price}</span>
          <span className="text-sm text-muted-foreground line-through">
            ${product.originalPrice}
          </span>
          <span className="rounded bg-accent-light px-1.5 py-0.5 text-xs font-medium text-accent-foreground">
            Save ${product.originalPrice - product.price}
          </span>
        </div>
      </div>
    </Link>
  );
};

const Sale = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${card3})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-foreground shadow-xl">
              <Percent className="h-4 w-4 text-accent" />
              Limited Time Only
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl mb-6 drop-shadow-2xl">
              Seasonal Sale
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-white/95 font-medium drop-shadow-lg leading-relaxed">
              Up to 30% off on select premium products. Don't miss these incredible deals on your favorite skincare essentials.
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
              <span className="text-sm text-muted-foreground">{saleProducts.length} products on sale</span>
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
            {saleProducts.map((product, index) => (
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

export default Sale;
