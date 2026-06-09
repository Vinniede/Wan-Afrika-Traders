import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';
import { SectionHeader } from './SectionHeader';
import type { Testimonial } from '../../data/testimonials';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-light-secondary to-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Trusted by leading businesses across Africa for quality and reliability"
        />
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative p-6 rounded-xl transition-all duration-500 group overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #e8f7ff 0%, #d4f1ff 50%, #b3e5ff 100%)',
                boxShadow: '0 8px 20px rgba(13, 110, 253, 0.2), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 15px rgba(0, 188, 212, 0.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 via-blue-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-400/5 via-transparent to-white/30 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="text-sm text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author Info */}
                <div className="border-t border-blue-300/40 pt-4">
                  <p className="font-bold text-blue-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-blue-700 font-semibold">{testimonial.title}</p>
                  <p className="text-xs text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
