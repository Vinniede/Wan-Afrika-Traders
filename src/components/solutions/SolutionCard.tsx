import { motion } from 'framer-motion';
import type { Solution } from '../../types';
import { FaArrowRight } from 'react-icons/fa6';

interface SolutionCardProps {
  solution: Solution;
  index?: number;
}

export const SolutionCard = ({ solution, index = 0 }: SolutionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-xl transition-all duration-500 relative\n"
      style={{
        background: 'linear-gradient(135deg, #e0f7ff 0%, #b3e5fc 50%, #80deea 100%)',
        boxShadow: '0 12px 24px rgba(13, 110, 253, 0.25), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 20px rgba(0, 188, 212, 0.2)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-blue-400/20 pointer-events-none rounded-xl" />
      
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-cyan-100 to-blue-100 sm:h-52">
        <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 relative z-10 bg-gradient-to-b from-white/60 via-blue-50/40 to-cyan-50/60">
        <h3 className="mb-3 text-lg font-black text-blue-900 sm:text-xl">
          {solution.title}
        </h3>
        <p className="text-blue-700 text-sm mb-4 line-clamp-3">
          {solution.description}
        </p>

        {/* Benefits */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-blue-900 mb-2">Key Benefits:</h4>
          <ul className="text-xs text-blue-600 space-y-1">
            {solution.benefits.slice(0, 3).map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl sm:text-base"
        >
          Request Consultation
          <FaArrowRight size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
};


