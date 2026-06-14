import { products } from '../data/products';
import type { Product, ProductCategory } from '../types';

// Service abstraction for products
// Currently uses local mock data
// Can be easily extended to connect to Node.js/Express backend

export const productService = {
  // Get all products
  async getProducts(): Promise<Product[]> {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 100);
    });
  },

  // Get products by category
  async getProductsByCategory(category: ProductCategory): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = products.filter(p => p.category === category);
        resolve(filtered);
      }, 100);
    });
  },

  // Get single product by ID
  async getProductById(id: string): Promise<Product | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find(p => p.id === id);
        resolve(product || null);
      }, 100);
    });
  },

  // Search products
  async searchProducts(query: string): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const searchTerm = query.toLowerCase();
        const results = products.filter(
          p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm) ||
            p.shortDescription.toLowerCase().includes(searchTerm)
        );
        resolve(results);
      }, 100);
    });
  },

  // Get featured products
  async getFeaturedProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Return first product from each category as featured
        const featured = [
          products[0],
          products[3],
          products[6],
          products[9],
        ];
        resolve(featured);
      }, 100);
    });
  },

  // Get most admired/popular products
  async getMostAdmiredProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Return curated selection of featured products by ID
        const productIds = [
          'hdpe-004',  // HDPE Ball Valve Advanced
          'wt-005',    // Reverse Osmosis Undersink System
          'pump-005',  // Centrifugal Pump Irrigation
          'irr-007',   // Rain Hose for Irrigation Standard
          'san-001',   // Sanitary appliances full set
          'meter-004', // Super Meter Half Size
          'pvc-005',   // PVC Fittings Complete Set
          'ppr-005',   // PPR Fittings Professional
        ];
        
        const admired = productIds
          .map(id => products.find(p => p.id === id))
          .filter(p => p !== undefined) as Product[];
        
        resolve(admired);
      }, 100);
    });
  },
};

