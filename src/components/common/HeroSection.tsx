import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

export const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  children,
}: HeroSectionProps) => {
  return (
    <div
      className="relative min-h-[200px] w-full overflow-hidden sm:min-h-[220px] md:min-h-[300px]"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(120deg, rgba(8, 45, 63, 0.88), rgba(7, 94, 137, 0.78), rgba(23, 183, 213, 0.55)), url('${backgroundImage}')`
          : 'linear-gradient(135deg, #082D3F 0%, #075E89 52%, #17B7D5 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/25 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

      <div className="relative z-10 container mx-auto flex h-full flex-col items-center justify-center px-4 py-9 text-center sm:py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-3 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-50 backdrop-blur"
        >
          Wan Afrika Water Systems
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-5xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-5 mt-3 max-w-2xl text-base leading-relaxed text-primary-50 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
};

