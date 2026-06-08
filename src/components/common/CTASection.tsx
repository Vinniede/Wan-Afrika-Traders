import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const CTASection = ({
  title,
  subtitle,
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/contact',
  secondaryButtonText = 'Learn More',
  secondaryButtonLink = '/about',
}: CTASectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-primary via-primary-blue to-primary-cyan py-12 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mb-4 text-3xl font-black text-white sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative mx-auto mb-8 max-w-2xl text-base text-primary-50 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="relative flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            to={primaryButtonLink}
            className="flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-bold text-primary-blue transition-all hover:-translate-y-0.5 hover:shadow-glow sm:px-8"
          >
            {primaryButtonText}
            <FaArrowRight size={20} />
          </Link>
          <Link
            to={secondaryButtonLink}
            className="rounded-md border border-white/70 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10 sm:px-8"
          >
            {secondaryButtonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

