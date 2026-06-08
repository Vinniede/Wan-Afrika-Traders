import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HeroSection } from '../../components/common/HeroSection';
import { useCatalogue } from '../../hooks/useCatalogue';
import { motion } from 'framer-motion';
import { FaTrash, FaPlus, FaMinus, FaArrowRight } from 'react-icons/fa6';

export const Catalogue = () => {
  const { items, removeItem, updateQuantity, getTotalItems, getTotalPrice, clearCatalogue } = useCatalogue();

  return (
    <>
      <Helmet>
        <title>Catalogue - Wan Afrika Traders</title>
        <meta name="description" content="View and manage your selected products in your catalogue." />
      </Helmet>

      <HeroSection
        title="Your Catalogue"
        subtitle="Manage your selected products"
        backgroundImage="/Hero baner.png"
      />

      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {/* Catalogue Items */}
              <div className="lg:col-span-2">
                <h2 className="mb-6 text-2xl font-bold text-dark-primary sm:text-3xl">Items in Catalogue ({getTotalItems()})</h2>
                <div className="space-y-4">
                  {items.map((item, idx) => (
                    <motion.div
                      key={item.productId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow sm:flex-row sm:items-center sm:justify-between sm:p-6"
                    >
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-bold text-dark-primary">{item.productName}</h3>
                        <p className="text-slate-600">Product ID: {item.productId}</p>
                      </div>

                      {/* Quantity Control */}
                      <div className="flex items-center justify-between gap-4 sm:mx-6 sm:justify-center">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="bg-gray-200 hover:bg-gray-300 text-dark-primary rounded p-2 transition"
                        >
                          <FaMinus size={16} />
                        </button>
                        <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="bg-gray-200 hover:bg-gray-300 text-dark-primary rounded p-2 transition"
                        >
                          <FaPlus size={16} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => removeItem(item.productId)}
                        className="self-end rounded p-2 text-red-500 transition hover:bg-red-50 sm:self-auto"
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
                className="h-fit rounded-lg bg-light-secondary p-5 sm:p-8 lg:sticky lg:top-24"
              >
                <h3 className="text-2xl font-bold text-dark-primary mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6 pb-6 border-b">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Items:</span>
                    <span className="font-semibold">{getTotalItems()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-dark-primary">
                    <span>Total:</span>
                    <span>NGN {getTotalPrice().toLocaleString()}</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg bg-dark-primary px-4 py-3 text-center font-bold text-white transition-shadow hover:shadow-water"
                >
                  Proceed to Checkout
                  <FaArrowRight size={20} />
                </Link>

                <Link
                  to="/products"
                  className="block w-full rounded-lg border-2 border-primary-blue px-4 py-3 text-center font-bold text-primary-blue transition hover:bg-primary-blue/5"
                >
                  Continue Shopping
                </Link>
              </motion.div>
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-3xl font-bold text-dark-primary mb-4">Your Catalogue is Empty</h2>
              <p className="text-slate-600 mb-8 text-lg">Start adding products to get your water solution quote.</p>
              <Link
                to="/products"
                className="inline-block bg-dark-primary text-white px-8 py-3 rounded-lg font-bold hover:shadow-water transition-shadow"
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



