import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewArrivals from "./pages/NewArrivals";
import Sale from "./pages/Sale";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import BundleSelection from "./pages/BundleSelection";
import ShippingPolicy from "./pages/ShippingPolicy";
import AboutUs from "./pages/AboutUs";
import EcoFriendly from "./pages/EcoFriendly";
import WeCare from "./pages/WeCare";
import Blog from "./pages/Blog";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import RefundPolicy from "./pages/RefundPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/eco-friendly" element={<EcoFriendly />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/we-care" element={<WeCare />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/bundle-selection" element={<BundleSelection />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
