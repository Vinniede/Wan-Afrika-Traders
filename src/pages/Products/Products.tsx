import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "../../components/common/HeroSection";
import { SectionHeader } from "../../components/common/SectionHeader";
import { ProductCard } from "../../components/products/ProductCard";
import { CTASection } from "../../components/common/CTASection";
import { productService } from "../../services/productService";
import { productCategories } from "../../data/products";
import { useCatalogue } from "../../hooks/useCatalogue";
import type { Product } from "../../types";
import { motion } from "framer-motion";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const { addItem } = useCatalogue();

  useEffect(() => {
    const loadProducts = async () => {
      const all = await productService.getProducts();
      setProducts(all);
      setFiltered(all);
      setLoading(false);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFiltered(products);
    } else {
      const filtered = products.filter((p) => p.category === selectedCategory);
      setFiltered(filtered);
    }
  }, [selectedCategory, products]);

  const handleAddToCatalogue = (product: Product) => {
    addItem({
      productId: product.id,
      productName: product.name,
      quantity: 1,
      price: product.price || 0,
    });
  };

  return (
    <>
      <Helmet>
        <title>Products - Wan Afrika Traders</title>
        <meta
          name="description"
          content="Explore our comprehensive range of water treatment equipment, irrigation systems, pumps, pipes, valves, and more."
        />
        <meta property="og:title" content="Products - Wan Afrika Traders" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        title="Our Product Range"
        subtitle="Premium water solutions for every need"
        backgroundImage="/Hero baner.png"
      />

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Browse Products"
            subtitle="Filter by category to find what you need"
          />

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {productCategories.map((category) => (
              <motion.button
                key={category.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary-blue to-primary-cyan text-white shadow-lg"
                    : "bg-light-secondary text-dark-primary hover:bg-gray-200"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filtered.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ProductCard
                    product={product}
                    onAddToCatalogue={handleAddToCatalogue}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Help Finding the Right Product?"
        subtitle="Our experts are ready to assist you with product selection and recommendations"
        primaryButtonText="Contact Our Team"
        primaryButtonLink="/contact"
        secondaryButtonText="View Solutions"
        secondaryButtonLink="/solutions"
      />
    </>
  );
};
