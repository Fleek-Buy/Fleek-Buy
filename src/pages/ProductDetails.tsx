import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star, Leaf, Minus, Plus, Truck, RotateCcw, Shield, Check, ChevronRight } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: "1",
    name: "Vitamin C Glow Serum",
    description: "Brightening face serum with 15% Vitamin C",
    longDescription: "Transform your skin with our luxurious Vitamin C Glow Serum. Formulated with 15% stabilized L-ascorbic acid, this potent serum delivers powerful antioxidant protection while visibly brightening and evening skin tone. Enriched with hyaluronic acid and vitamin E for deep hydration and protection against environmental stressors.",
    price: 68,
    originalPrice: 85,
    rating: 4.9,
    reviews: 234,
    images: [product1, product2, product3],
    badge: "Best Seller",
    isOrganic: true,
    inStock: true,
    benefits: [
      "Brightens and evens skin tone",
      "Reduces appearance of dark spots",
      "Protects against environmental damage",
      "Boosts collagen production",
    ],
    ingredients: "Water, L-Ascorbic Acid (15%), Propanediol, Glycerin, Sodium Hyaluronate, Tocopherol (Vitamin E), Ferulic Acid, Aloe Barbadensis Leaf Juice",
    howToUse: "Apply 4-5 drops to clean, dry skin morning and evening. Follow with moisturizer and SPF in the morning. Avoid contact with eyes.",
    size: "30ml / 1 fl oz",
  },
];

const relatedProducts = [
  { id: 2, name: "Nourishing Body Lotion", price: 42, image: product2, rating: 4.8 },
  { id: 3, name: "Hydra-Glow Face Cream", price: 78, image: product3, rating: 4.9 },
  { id: 4, name: "Calm & Balance Oil", price: 54, image: product4, rating: 4.7 },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'details' | 'ingredients' | 'how-to-use'>('details');
  // const [isWishlisted, setIsWishlisted] = useState(false);

  // Find product by id, or use first product as fallback
  const product = products.find(p => p.id === id) || products[0];

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 md:px-6 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/new-arrivals" className="hover:text-primary transition-colors">Skincare</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 rounded-full bg-accent text-accent-foreground px-4 py-1.5 text-sm font-semibold shadow-md">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square w-20 overflow-hidden rounded-xl border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-transparent hover:border-muted-foreground/30'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {product.isOrganic && (
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-secondary-light px-3 py-1 text-sm font-medium text-secondary">
                <Leaf className="h-4 w-4" />
                Certified Organic
              </div>
            )}

            <h1 className="text-3xl font-bold text-foreground md:text-4xl">{product.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{product.description}</p>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'}`}
                  />
                ))}
              </div>
              <span className="font-medium text-foreground">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                  <span className="rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
                    Save ${product.originalPrice - product.price}
                  </span>
                </>
              )}
            </div>

            <p className="mt-2 text-sm text-muted-foreground">{product.size}</p>

            {/* Buy Button */}
            <div className="mt-8">
              <Button 
                variant="hero" 
                className="w-full gap-2 text-base py-6"
                onClick={handleBuyNow}
              >
                <ShoppingCart className="h-5 w-5" />
                Buy Now - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl border border-border bg-muted/30 p-4">
              <div className="flex flex-col items-center text-center">
                <Truck className="h-6 w-6 text-secondary mb-2" />
                <span className="text-xs font-medium text-foreground">Free Shipping</span>
                <span className="text-xs text-muted-foreground">Orders $75+</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="h-6 w-6 text-secondary mb-2" />
                <span className="text-xs font-medium text-foreground">30-Day Returns</span>
                <span className="text-xs text-muted-foreground">Easy & Free</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-6 w-6 text-secondary mb-2" />
                <span className="text-xs font-medium text-foreground">Secure Checkout</span>
                <span className="text-xs text-muted-foreground">SSL Encrypted</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-8">
              <div className="flex gap-1 rounded-xl bg-muted p-1">
                {(['details', 'ingredients', 'how-to-use'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                      activeTab === tab
                        ? 'bg-background text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab === 'details' && 'Details'}
                    {tab === 'ingredients' && 'Ingredients'}
                    {tab === 'how-to-use' && 'How to Use'}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                {activeTab === 'details' && (
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-secondary" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeTab === 'ingredients' && (
                  <p className="text-muted-foreground leading-relaxed">{product.ingredients}</p>
                )}
                {activeTab === 'how-to-use' && (
                  <p className="text-muted-foreground leading-relaxed">{product.howToUse}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 md:mt-24">
          <h2 className="mb-6 text-2xl font-bold text-foreground">You May Also Like</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">${item.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm text-muted-foreground">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <div className="mt-[50px]">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
