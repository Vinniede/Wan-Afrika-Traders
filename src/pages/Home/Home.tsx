import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  FaAward,
  FaBoxOpen,
  FaDroplet,
  FaEarthAfrica,
  FaFileLines,
  FaGear,
  FaHeadset,
  FaShield,
  FaShieldHalved,
  FaTruckFast,
  FaSeedling,
  FaWrench,
  FaFaucet,
  FaHouse,
} from 'react-icons/fa6';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ProductCard } from '../../components/products/ProductCard';
import { CTASection } from '../../components/common/CTASection';
import { Testimonials } from '../../components/common/Testimonials';
import { useCatalogue } from '../../hooks/useCatalogue';
import { productService } from '../../services/productService';
import { testimonials } from '../../data/testimonials';
import type { Product } from '../../types';

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCatalogue();

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      const featured = await productService.getFeaturedProducts();
      setProducts(featured);
      setLoading(false);
    };
    loadFeaturedProducts();
  }, []);

  const handleAddToCatalogue = (product: Product) => {
    addItem({
      productId: product.id,
      productName: product.name,
      quantity: 1,
      price: product.price || 0,
    });
  };

  const features = [
    {
      icon: FaAward,
      title: 'Premium Quality',
      description: 'High-quality water solutions engineered for durability and performance.',
    },
    {
      icon: FaBoxOpen,
      title: 'Wide Product Range',
      description: 'Complete solutions from water treatment to irrigation systems.',
    },
    {
      icon: FaTruckFast,
      title: 'Fast Delivery',
      description: 'Quick delivery and installation across Africa.',
    },
    {
      icon: FaHeadset,
      title: 'Expert Support',
      description: 'Dedicated technical support and after-sales service.',
    },
  ];

  const categories = [
    { name: 'Water Treatment Equipment', image: '/categories/water treatment equipment.jpeg' },
    { name: 'Irrigation Equipment', image: '/categories/Irrigation Equipment.jpeg' },
    { name: 'Pumps', image: '/categories/Pumps.jpeg' },
    { name: 'HDPE Pipes', image: '/categories/HDPE Pipes E.jpg' },
    { name: 'PVC & UPVC Fittings', image: '/categories/PVC & UPVC Fittings.jpeg' },
    { name: 'PPR Pipes & Fittings', image: '/categories/PPR Pipes & Fittings.jpeg' },
    { name: 'Industrial Valves', image: '/categories/Industrial Valves.jpg' },
    { name: 'Water Storage Solutions', image: '/categories/Water Storage Solutions.jpeg' },
  ];

  const industries = [
    { name: 'Agriculture', icon: FaSeedling },
    { name: 'Construction', icon: FaWrench },
    { name: 'Manufacturing', icon: FaGear },
    { name: 'Water Utilities', icon: FaFaucet },
    { name: 'Residential Projects', icon: FaHouse },
  ];

  return (
    <>
      <Helmet>
        <title>Wan Afrika Traders - Complete Water Solutions for Africa</title>
        <meta name="description" content="Premium water solutions including treatment systems, irrigation equipment, pumps, pipes, and valves." />
        <meta property="og:title" content="Wan Afrika Traders - Water Solutions" />
        <meta property="og:description" content="Complete water solutions for Africa" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative overflow-hidden bg-[#eaf9ff] md:min-h-[100px] lg:min-h-[110px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Hero baner.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/60 via-[50%] to-white/20 sm:from-white/65 sm:via-white/50 sm:via-[55%] sm:to-white/15 md:bg-gradient-to-r md:from-white/50 md:via-white/40 md:via-[45%] md:to-white/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-[#0a62cf]/15" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#bdeeff]/75 to-transparent md:bottom-[35px] md:h-12" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 pt-3 sm:px-6 sm:pt-4 md:min-h-[80px] md:px-8 lg:px-10 lg:pt-3"
        >
          <div className="mb-2 flex max-w-full items-center gap-2 sm:mb-3 sm:gap-2.5">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-b-[16px] rounded-t-[22px] bg-gradient-to-b from-[#123fb4] to-[#13aee6] text-white shadow-glow sm:h-11 sm:w-10">
              <FaEarthAfrica className="text-lg sm:text-xl" />
            </div>
            <div className="min-w-0 leading-none">
              <p className="text-xs font-black uppercase tracking-wide text-[#143ba8] sm:text-sm md:text-base">Wan Afrika</p>
              <p className="text-xs font-light uppercase tracking-[0.14em] text-[#0fa9e4] sm:text-sm sm:tracking-[0.18em] md:text-base">Traders</p>
              <p className="mt-1 text-xs font-semibold text-[#09275c] sm:text-xs md:text-xs">Complete Water Solutions for Africa</p>
            </div>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-lg font-black uppercase leading-[1.15] tracking-wider text-[#061f4b] min-[420px]:text-2xl sm:text-3xl lg:text-4xl">
              Complete
              <span className="mt-1 block text-[#1454d6]">Water Solutions</span>
              <span className="mt-1 block text-[#061f4b]">For Africa</span>
            </h1>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-700 sm:text-xs md:text-sm">
              Your trusted partner for water treatment, irrigation, pumps, pipes, valves and sustainable water solutions.
            </p>

            <div className="mt-3 flex flex-col gap-2.5 sm:mt-3 sm:flex-row sm:gap-3">
              <Link
                to="/products"
                className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1554d1] to-[#0a3ba5] px-4 py-2.5 text-xs font-black uppercase text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:from-[#0b3ea8] hover:to-[#082d7a] sm:px-5 sm:py-2.5 sm:text-xs"
              >
                <FaDroplet size={16} />
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#1554d1] bg-white/80 px-4 py-2.5 text-xs font-black uppercase text-[#1554d1] shadow-md transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-lg sm:px-5 sm:py-2.5 sm:text-xs"
              >
                <FaFileLines size={16} />
                Request Quote
              </Link>
            </div>
          </div>

          <div className="mt-3 grid max-w-2xl grid-cols-2 gap-2 sm:mt-3 sm:grid-cols-4 sm:gap-0">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`flex min-h-14 flex-col items-center justify-center rounded-lg bg-white/65 px-2.5 py-3 text-center text-[#09275c] shadow-sm backdrop-blur-sm transition-all hover:bg-white/80 sm:min-h-16 sm:rounded-none sm:bg-transparent sm:py-3 sm:px-3 sm:shadow-none sm:backdrop-blur-0 sm:hover:bg-transparent ${
                    idx > 0 ? 'sm:border-l sm:border-[#1454d6]/30' : ''
                  }`}
                >
                  <Icon className="mb-1.5 text-xl text-[#1554d1] sm:mb-1 sm:text-2xl" />
                  <p className="text-xs font-black uppercase leading-tight sm:text-xs">
                    {feature.title}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="relative z-0 w-full overflow-hidden pt-24 pb-6 sm:pt-28 sm:pb-6 md:pt-28 md:pb-6">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg viewBox="0 0 1200 500" preserveAspectRatio="none" className="w-full h-full pointer-events-none">
              <path d="M0,200 Q300,80 600,200 T1200,200 L1200,500 L0,500 Z" fill="#0a4fa8" />
              <path d="M0,240 Q300,120 600,240 T1200,240 L1200,500 L0,500 Z" fill="#0d6fd6" opacity="0.8" />
              <path d="M0,280 Q300,160 600,280 T1200,280 L1200,500 L0,500 Z" fill="#0099dd" opacity="0.6" />
            </svg>
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-6 px-3 sm:px-6 md:grid-cols-3 md:gap-6 md:px-8 lg:px-10">
            {[
              { icon: FaDroplet, title: 'Sustainable Solutions', copy: 'For a better tomorrow' },
              { icon: FaEarthAfrica, title: 'Serving Africa', copy: 'With pride and commitment' },
              { icon: FaShieldHalved, title: 'Reliable. Durable. Trusted.', copy: 'Quality you can depend on' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center"
                >
                  <Icon className="mb-2 text-2xl text-white sm:text-3xl" />
                  <h3 className="text-xs font-black uppercase text-white sm:text-xs">{item.title}</h3>
                  <p className="mt-1 text-xs text-white/90 md:text-xs">{item.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Product Categories"
            subtitle="Explore our comprehensive range of water solutions"
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {categories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="cursor-pointer rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl group relative"
                style={{
                  background: 'linear-gradient(135deg, #e0f7ff 0%, #bff0ff 50%, #a8e6ff 100%)',
                  boxShadow: '0 8px 16px rgba(15, 169, 228, 0.3), inset 0 1px 0 rgba(255,255,255,0.6), 0 0 20px rgba(13, 110, 253, 0.1)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-400/10 pointer-events-none" />
                <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-gradient-to-b from-cyan-100 to-blue-100">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent" />
                </div>
                <div className="p-4 sm:p-6 relative z-10 bg-gradient-to-b from-transparent to-blue-50/50">
                  <p className="text-xs font-semibold text-blue-900 sm:text-sm">{category.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-secondary py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Featured Products"
            subtitle="Explore our best-selling water solutions"
          />
          {loading ? (
            <div className="py-12 text-center">Loading products...</div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCatalogue={handleAddToCatalogue}
                />
              ))}
            </div>
          )}
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-block rounded-md bg-dark-primary px-8 py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-blue hover:shadow-glow"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Industries We Serve"
            subtitle="Trusted by businesses across diverse sectors"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-5">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative p-5 sm:p-6 text-center transition-all duration-500 rounded-xl group overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #d4f1ff 0%, #b3e5ff 50%, #80deea 100%)',
                    boxShadow: '0 8px 20px rgba(13, 110, 253, 0.25), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 15px rgba(0, 188, 212, 0.15)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/30 via-blue-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-400/10 via-transparent to-white/40 pointer-events-none" />
                  <div className="relative z-10">
                    <Icon className="mx-auto mb-3 text-3xl text-blue-700 sm:text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-900" />
                    <p className="font-semibold text-blue-900">{industry.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonials} />

      <CTASection
        title="Ready to Transform Your Water Solutions?"
        subtitle="Contact our experts today for a personalized consultation and quote"
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="View Solutions"
        secondaryButtonLink="/solutions"
      />
    </>
  );
};

