import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import type { Partner } from '../../data/partners';

interface PartnersProps {
  partners: Partner[];
}

export const Partners = ({ partners }: PartnersProps) => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-light-secondary">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Partners"
          subtitle="Strategic partnerships with industry leaders across Africa and beyond"
        />
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg bg-white transition-all duration-500 group overflow-hidden"
              style={{
                boxShadow: '0 4px 12px rgba(13, 110, 253, 0.15), inset 0 1px 0 rgba(255,255,255,0.6)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-full h-32 flex items-center justify-center mb-3 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 group-hover:from-blue-100 group-hover:to-cyan-100 transition-colors duration-300">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-20 w-auto object-contain px-2"
                  />
                ) : (
                  <div className="text-center px-2">
                    <div className="text-2xl font-bold text-primary-blue mb-1">
                      {partner.name.substring(0, 1)}
                    </div>
                    <p className="text-xs text-primary-blue font-semibold line-clamp-2">{partner.name}</p>
                  </div>
                )}
              </div>
              
              <div className="relative z-10 text-center w-full">
                <p className="font-semibold text-sm text-dark-primary line-clamp-2 mb-1">
                  {partner.name}
                </p>
                <p className="text-xs text-slate-500">{partner.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Interested in becoming a partner? Let's grow together!
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-primary-blue px-8 py-3 font-bold text-white transition-all hover:bg-dark-primary hover:-translate-y-0.5 hover:shadow-lg"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};
