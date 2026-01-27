import { useState, useEffect } from "react";

export interface BundleItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const BUNDLE_STORAGE_KEY = "Fleek_buy_bundle";

export const useBundle = () => {
  const [bundleItems, setBundleItems] = useState<BundleItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load bundle from localStorage on mount
  useEffect(() => {
    const savedBundle = localStorage.getItem(BUNDLE_STORAGE_KEY);
    if (savedBundle) {
      try {
        setBundleItems(JSON.parse(savedBundle));
      } catch (error) {
        console.error("Failed to load bundle from localStorage:", error);
        setBundleItems([]);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save bundle to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(BUNDLE_STORAGE_KEY, JSON.stringify(bundleItems));
    }
  }, [bundleItems, isLoaded]);

  const addToBundle = (item: BundleItem) => {
    setBundleItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        // If item already exists, increment quantity
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i,
        );
      } else {
        // Add new item to bundle
        return [...prevItems, item];
      }
    });
  };

  const removeFromBundle = (id: number) => {
    setBundleItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateBundleQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromBundle(id);
    } else {
      setBundleItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity } : item,
        ),
      );
    }
  };

  const clearBundle = () => {
    setBundleItems([]);
  };

  const getBundleTotal = () => {
    return bundleItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  };

  const getBundleItemCount = () => {
    return bundleItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return {
    bundleItems,
    addToBundle,
    removeFromBundle,
    updateBundleQuantity,
    clearBundle,
    getBundleTotal,
    getBundleItemCount,
    isLoaded,
  };
};
