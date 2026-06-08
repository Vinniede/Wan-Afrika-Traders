import { useState, useEffect } from 'react';
import type { CatalogueItem } from '../types';

const CATALOGUE_KEY = 'wan_afrika_catalogue';

export const useCatalogue = () => {
  const [items, setItems] = useState<CatalogueItem[]>(() => {
    // Load from localStorage on init
    const saved = localStorage.getItem(CATALOGUE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem(CATALOGUE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (item: CatalogueItem) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.productId === item.productId);
      if (existingItem) {
        return prevItems.map(i =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prevItems, item];
    });
  };

  const removeItem = (productId: string) => {
    setItems(prevItems => prevItems.filter(i => i.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems(prevItems =>
      prevItems.map(i =>
        i.productId === productId ? { ...i, quantity } : i
      )
    );
  };

  const clearCatalogue = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  };

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCatalogue,
    getTotalItems,
    getTotalPrice,
  };
};


