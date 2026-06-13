import { motion } from 'framer-motion';
import type { Solution } from '../../types';
import { FaArrowRight, FaBook } from 'react-icons/fa6';

interface SolutionCardProps {
  solution: Solution;
  index?: number;
  onLearnMore?: (solution: Solution) => void;
}

export const SolutionCard = ({ solution, index = 0, onLearnMore }: SolutionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-xl transition-all duration-500 relative h-full flex flex-col"
      style={{
        background: 'linear-gradient(135deg, #e0f7ff 0%, #b3e5fc 50%, #80deea 100%)',
        boxShadow: '0 12px 24px rgba(13, 110, 253, 0.25), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 20px rgba(0, 188, 212, 0.2)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-blue-400/20 pointer-events-none rounded-xl" />
      
      {/* Image */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-cyan-100 to-blue-100 flex-shrink-0 aspect-video sm:aspect-square md:aspect-video">
        <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 relative z-10 bg-gradient-to-b from-white/60 via-blue-50/40 to-cyan-50/60 flex flex-col flex-grow">
        <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-black text-blue-900 line-clamp-2">
          {solution.title}
        </h3>
        <p className="text-blue-700 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
          {solution.description}
        </p>

        {/* Benefits */}
        <div className="mb-4 sm:mb-6 flex-grow">
          <h4 className="text-xs sm:text-sm font-bold text-blue-900 mb-1.5 sm:mb-2">Key Benefits:</h4>
          <ul className="text-xs text-blue-600 space-y-0.5 sm:space-y-1">
            {solution.benefits.slice(0, 3).map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-1.5 sm:gap-2">
                <span className="mt-1 h-1 w-1 sm:h-1.5 sm:w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                <span className="line-clamp-1">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => onLearnMore?.(solution)}
            className="flex flex-1 items-center justify-center gap-1 sm:gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span>Learn More</span>
            <FaBook size={14} className="sm:w-4 sm:h-4" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex flex-1 items-center justify-center gap-1 sm:gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span>Contact</span>
            <FaArrowRight size={14} className="sm:w-4 sm:h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};


