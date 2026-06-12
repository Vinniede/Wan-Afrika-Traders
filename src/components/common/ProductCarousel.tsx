import { motion } from 'framer-motion';
import { products } from '../../data/products';

export const ProductCarousel = () => {
  const uniqueProducts = products.filter(
    (product, index, allProducts) =>
      allProducts.findIndex((item) => item.image === product.image) === index
  );
  const firstRowProducts = uniqueProducts.filter((_, index) => index % 2 === 0);
  const secondRowProducts = uniqueProducts.filter((_, index) => index % 2 === 1);
  const firstRowLoop = [...firstRowProducts, ...firstRowProducts];
  const secondRowLoop = [...secondRowProducts, ...secondRowProducts];

  const carouselVariants = {
    animate: (direction: number) => ({
      x: direction === 1 ? ['0%', '-50%'] : ['-50%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop' as const,
          duration: 60,
          ease: 'linear' as const,
        },
      },
    }),
  };

  return (
    <section className="relative z-30 h-48 w-full overflow-hidden bg-white sm:h-56 md:h-64">
      <div className="flex h-full flex-col">
        <motion.div
          className="flex h-1/2 w-max min-w-full flex-nowrap"
          custom={1}
          variants={carouselVariants}
          animate="animate"
        >
          {firstRowLoop.map((product, idx) => (
            <div
              key={`left-${product.id}-${idx}`}
              className="h-full w-32 flex-none overflow-hidden sm:w-40 md:w-48"
            >
              <img
                src={product.image}
                alt={product.name}
                className="block h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex h-1/2 w-max min-w-full flex-nowrap"
          custom={-1}
          variants={carouselVariants}
          animate="animate"
        >
          {secondRowLoop.map((product, idx) => (
            <div
              key={`right-${product.id}-${idx}`}
              className="h-full w-32 flex-none overflow-hidden sm:w-40 md:w-48"
            >
              <img
                src={product.image}
                alt={product.name}
                className="block h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
