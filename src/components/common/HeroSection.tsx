import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
      className="relative w-full min-h-[200px] overflow-hidden md:min-h-[250px]"
      style={{
        backgroundImage: backgroundImage
          ? `url('${backgroundImage}')`
          : "linear-gradient(135deg, #0057D9 0%, #00AEEF 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/45" />}

      <div className="relative z-10 container mx-auto px-4 h-full flex min-h-[200px] flex-col justify-center items-center text-center py-10 md:min-h-[250px] md:py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-3 text-3xl font-bold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)] md:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-6 max-w-2xl text-base text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] md:text-lg"
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
