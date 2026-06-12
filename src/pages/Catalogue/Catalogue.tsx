import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HeroSection } from "../../components/common/HeroSection";
import { useCatalogue } from "../../hooks/useCatalogue";
import { motion } from "framer-motion";
import { FaTrash, FaPlus, FaMinus, FaArrowRight } from "react-icons/fa6";

export const Catalogue = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCatalogue,
  } = useCatalogue();

  return (
    <>
      <Helmet>
        <title>Catalogue - Wan Afrika Traders</title>
        <meta
          name="description"
          content="View and manage your selected products in your catalogue."
        />
      </Helmet>

      <HeroSection
        title="Your Catalogue"
        subtitle="Manage your selected products"
        backgroundImage="/Hero baner.png"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Catalogue Items */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-dark-primary mb-6">
                  Items in Catalogue ({getTotalItems()})
                </h2>
                <div className="space-y-4">
                  {items.map((item, idx) => (
                    <motion.div
                      key={item.productId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      className="bg-white rounded-lg shadow p-6 flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-dark-primary">
                          {item.productName}
                        </h3>
                        <p className="text-gray-600">
                          Product ID: {item.productId}
                        </p>
                      </div>

                      {/* Quantity Control */}
                      <div className="flex items-center gap-4 mx-6">
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity - 1)
                          }
                          className="bg-gray-200 hover:bg-gray-300 text-dark-primary rounded p-2 transition"
                        >
                          <FaMinus size={16} />
                        </button>
                        <span className="font-bold text-lg w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity + 1)
                          }
                          className="bg-gray-200 hover:bg-gray-300 text-dark-primary rounded p-2 transition"
                        >
                          <FaPlus size={16} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => removeItem(item.productId)}
                        className="text-red-500 hover:bg-red-50 p-2 rounded transition"
                      >
                        <FaTrash size={20} />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>

                {/* Clear Catalogue */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={clearCatalogue}
                  className="mt-6 text-red-600 hover:text-red-700 font-semibold"
                >
                  Clear Entire Catalogue
                </motion.button>
              </div>

              {/* Checkout Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-light-secondary rounded-2xl p-8 h-fit sticky top-24"
              >
                <h3 className="text-2xl font-bold text-dark-primary mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6 pb-6 border-b">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Items:</span>
                    <span className="font-semibold">{getTotalItems()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-dark-primary">
                    <span>Total:</span>
                    <span>₦{getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="w-full bg-gradient-to-r from-primary-blue to-primary-cyan text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow mb-4"
                >
                  Proceed to Checkout
                  <FaArrowRight size={20} />
                </Link>

                <Link
                  to="/products"
                  className="w-full border-2 border-primary-blue text-primary-blue py-3 rounded-lg font-bold text-center hover:bg-primary-blue/5 transition"
                >
                  Continue Shopping
                </Link>
              </motion.div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛍️</div>
              <h2 className="text-3xl font-bold text-dark-primary mb-4">
                Your Catalogue is Empty
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Start adding products to get your water solution quote.
              </p>
              <Link
                to="/products"
                className="inline-block bg-gradient-to-r from-primary-blue to-primary-cyan text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-shadow"
              >
                Browse Products
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
