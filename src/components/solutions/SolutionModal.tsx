import { motion, AnimatePresence } from 'framer-motion';
import type { Solution } from '../../types';
import { FaX } from 'react-icons/fa6';

interface SolutionModalProps {
  solution: Solution | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SolutionModal = ({ solution, isOpen, onClose }: SolutionModalProps) => {
  if (!solution) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-16 bg-white rounded-xl sm:rounded-2xl shadow-2xl z-50 overflow-y-auto max-h-[98vh] sm:max-h-[96vh]"
          >
            {/* Close Button */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-500 px-4 sm:px-6 md:px-10 py-4 md:py-6 flex justify-between items-center z-10 gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white line-clamp-2">
                {solution.title}
              </h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors flex-shrink-0"
              >
                <FaX size={20} className="sm:w-6 sm:h-6" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-6 sm:space-y-8">
              {/* Hero Image */}
              <div className="rounded-lg sm:rounded-xl overflow-hidden bg-gray-200 h-56 sm:h-72 md:h-96">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main Description */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 md:mb-4">
                  Overview
                </h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {solution.description}
                </p>
              </div>

              {/* All Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 md:mb-4">
                    Key Benefits
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {solution.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <span className="mt-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0 rounded-full bg-cyan-400" />
                        <span className="text-gray-700 text-sm sm:text-base md:text-lg">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Why Choose */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 md:mb-4">
                    Why Choose This Solution?
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">Professional Design</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        Each solution is carefully engineered and designed by water management experts to meet your specific requirements.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">Quality Installation</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        Our experienced team ensures professional installation with attention to every detail for optimal performance.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">Ongoing Support</h4>
                      <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                        Continuous maintenance and technical support ensure your system operates at peak efficiency for years to come.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg sm:rounded-xl p-6 sm:p-8 text-white text-center mt-6 sm:mt-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Ready to Get Started?</h3>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                  Contact our team today to discuss how this solution can benefit your needs.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors text-base sm:text-lg"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
