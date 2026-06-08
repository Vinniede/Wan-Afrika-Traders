import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader = ({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-8 md:mb-12 ${centered ? 'text-center' : ''}`}
    >
      <p className={`mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-600 md:text-xs md:tracking-[0.22em] ${centered ? 'mx-auto' : ''}`}>
        Water systems expertise
      </p>
      <h2 className="mb-4 text-3xl font-black text-dark-primary sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 flex md:mt-6 ${centered ? 'justify-center' : ''}`}>
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-accent-green via-primary-cyan to-primary-blue" />
      </div>
    </motion.div>
  );
};

