import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus, Minus } from "lucide-react";
import { BundleItem } from "@/hooks/use-bundle";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

interface ProductSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToBundle: (item: BundleItem) => void;
}

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

const ProductSelectionModal = ({
  isOpen,
  onClose,
  onAddToBundle,
}: ProductSelectionModalProps) => {
  const [selectedQuantities, setSelectedQuantities] = useState<
    Record<number, number>
  >({});

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

  const handleAddProducts = () => {
    Object.entries(selectedQuantities).forEach(([productId, quantity]) => {
      if (quantity > 0) {
        const product = AVAILABLE_PRODUCTS.find(
          (p) => p.id === parseInt(productId),
        );
        if (product) {
          onAddToBundle({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity,
            image: product.image,
          });
        }
      }
    });

    // Reset quantities and close modal
    setSelectedQuantities({});
    onClose();
  };

  const hasSelectedItems = Object.values(selectedQuantities).some(
    (qty) => qty > 0,
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add Items to Your Bundle</DialogTitle>
          <DialogDescription>
            Select products and quantities to add to your bundle
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {AVAILABLE_PRODUCTS.map((product) => {
            const quantity = selectedQuantities[product.id] || 0;

            return (
              <div
                key={product.id}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                {/* Product Image */}
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <p className="text-lg font-semibold text-primary mt-1">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(product.id, -1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="w-12 text-center">
                    <span className="text-lg font-medium text-foreground">
                      {quantity}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(product.id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 justify-end border-t border-border pt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="hero"
            onClick={handleAddProducts}
            disabled={!hasSelectedItems}
          >
            Add to Bundle
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductSelectionModal;
