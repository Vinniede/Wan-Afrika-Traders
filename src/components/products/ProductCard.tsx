import { motion } from 'framer-motion';
import type { Product } from '../../types';
import { FaCartShopping } from 'react-icons/fa6';

interface ProductCardProps {
  product: Product;
  onAddToCatalogue: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCatalogue }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-xl transition-all duration-500 relative\n"
      style={{
        background: 'linear-gradient(135deg, #e3f2fd 0%, #b3e5fc 50%, #81d4fa 100%)',
        boxShadow: '0 12px 24px rgba(13, 110, 253, 0.25), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 20px rgba(0, 188, 212, 0.2)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-blue-400/20 pointer-events-none rounded-xl" />
      
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-cyan-100 to-blue-100 sm:h-52">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-blue-700 shadow-lg backdrop-blur border border-blue-200">
          {product.category.replace('-', ' ').toUpperCase()}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 relative z-10 bg-gradient-to-b from-white/60 via-blue-50/40 to-cyan-50/60">
        <h3 className="text-lg font-black text-blue-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-blue-700 text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="mb-4">
            <ul className="text-xs text-blue-600 space-y-1">
              {product.features.slice(0, 2).map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Add to Catalogue Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onAddToCatalogue(product)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl sm:text-base group/btn\"
        >
          <FaCartShopping size={18} />
          Add to Catalogue
        </motion.button>
      </div>
    </motion.div>
  );
};



