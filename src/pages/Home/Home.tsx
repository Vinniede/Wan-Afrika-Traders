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
  FaShieldHalved,
  FaTruckFast,
  FaSeedling,
  FaWrench,
  FaFaucet,
  FaHouse,
} from 'react-icons/fa6';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ProductCard } from '../../components/products/ProductCard';
import { ProductCarousel } from '../../components/common/ProductCarousel';
import { CTASection } from '../../components/common/CTASection';
import { useCatalogue } from '../../hooks/useCatalogue';
import { productService } from '../../services/productService';
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
    { name: 'Pumps', image: '/categories/Pumps category.jpg' },
    { name: 'PPR Pipes and Fittings', image: '/categories/PPR Pipes and Fittings.png' },
    { name: 'PVC or High-Pressure pipes and fittings', image: '/categories/PVC or High-Pressure pipes and fittings.png' },
    { name: 'UPVC Pipes and Fittings', image: '/categories/UPVC Pipes and Fittings.png' },
    { name: 'CPVC and Fabricated Fittings', image: '/categories/CPVC and Fabricated Fittings.jpeg' },
    { name: 'HDPE Pipes and Fittings', image: '/categories/HDPE Pipes and Fittings.png' },
    { name: 'Irrigation Equipment', image: '/categories/Irrigation Equipment.jpeg' },
    { name: 'Valves Category', image: '/categories/Valves Category.jpeg' },
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

      <section className="relative overflow-hidden bg-[#eaf9ff] sm:min-h-[390px] lg:min-h-[420px] xl:min-h-[440px]">
        <div
          className="absolute inset-0 bg-cover bg-[62%_center] sm:bg-[58%_center] lg:bg-center"
          style={{ backgroundImage: "url('/Hero baner.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/70 via-[42%] to-transparent sm:from-white/88 sm:via-white/58 md:from-white/84 md:via-white/46 md:via-[40%] md:to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto flex min-h-[250px] max-w-7xl flex-col justify-center px-4 pb-4 pt-3 sm:min-h-[280px] sm:px-6 sm:pb-28 md:px-8 lg:min-h-[315px] lg:px-10 lg:pb-32 xl:min-h-[330px]"
        >
          <div className="mb-2 flex max-w-full items-center gap-2 sm:mb-2.5 sm:gap-2.5">
            <div className="flex h-9 w-8 flex-shrink-0 items-center justify-center rounded-b-[17px] rounded-t-[21px] bg-gradient-to-b from-[#123fb4] to-[#08aeea] text-white shadow-glow sm:h-10 sm:w-9 lg:h-12 lg:w-10">
              <FaEarthAfrica className="text-lg sm:text-xl lg:text-2xl" />
            </div>
            <div className="min-w-0 uppercase leading-none">
              <p className="text-lg font-black tracking-wide text-[#113fae] sm:text-xl lg:text-2xl">Wan Afrika</p>
              <p className="text-base font-light tracking-[0.14em] text-[#0fa9e4] sm:text-lg lg:text-xl">Traders</p>
              <p className="mt-0.5 text-[10px] font-semibold normal-case tracking-normal text-[#09275c] sm:text-[11px]">Complete Water Solutions for Africa</p>
            </div>
          </div>

          <div className="max-w-[36rem]">
            <h1 className="text-xl font-black uppercase leading-none tracking-wide text-[#061f4b] sm:text-2xl md:text-3xl lg:text-4xl">
              Complete
              <span className="block text-[#1454d6]">Water Solutions</span>
              <span className="block text-[#061f4b]">For Africa</span>
            </h1>
            <p className="mt-1.5 max-w-xl text-xs leading-snug text-slate-800 sm:text-sm">
              Your trusted partner for water treatment, irrigation, pumps, pipes, valves and sustainable water solutions.
            </p>

            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-3">
              <Link
                to="/products"
                className="flex min-h-10 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#1554d1] to-[#0a3ba5] px-4 py-2 text-xs font-black uppercase text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:from-[#0b3ea8] hover:to-[#082d7a] sm:px-5"
              >
                <FaDroplet size={16} />
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="flex min-h-10 items-center justify-center gap-2 rounded-md border-2 border-[#1554d1] bg-white/75 px-4 py-2 text-xs font-black uppercase text-[#1554d1] shadow-md transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-lg sm:px-5"
              >
                <FaFileLines size={16} />
                Request Quote
              </Link>
            </div>
          </div>

          <div className="mt-3 grid max-w-2xl grid-cols-2 gap-y-1.5 sm:grid-cols-4 sm:gap-y-0">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`flex min-h-9 flex-col items-center justify-center px-2 text-center text-[#09275c] sm:min-h-10 ${
                    idx > 0 ? 'sm:border-l sm:border-[#1454d6]/35' : ''
                  }`}
                >
                  <Icon className="mb-0.5 text-lg text-[#1554d1] sm:text-xl" />
                  <p className="text-xs font-black uppercase leading-tight">
                    {feature.title}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="relative z-20 overflow-hidden pb-5 pt-12 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:pb-5 sm:pt-12 lg:pb-6 lg:pt-14">
          <div className="absolute inset-0 overflow-hidden">
            <svg viewBox="0 0 1200 220" preserveAspectRatio="none" className="h-full w-full">
              <path d="M0,62 C230,138 438,70 646,92 C840,112 1012,66 1200,22 L1200,220 L0,220 Z" fill="#063aa8" />
              <path d="M0,92 C270,145 474,94 682,112 C876,129 1026,90 1200,54 L1200,220 L0,220 Z" fill="#0857d9" opacity="0.85" />
              <path d="M0,118 C282,158 506,122 712,135 C905,147 1055,116 1200,86 L1200,220 L0,220 Z" fill="#019fe3" opacity="0.55" />
            </svg>
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-2.5 px-4 text-white sm:grid-cols-3 sm:gap-4 sm:px-6 md:px-8 lg:px-10">
            {[
              { icon: FaDroplet, title: 'Sustainable Solutions', copy: 'For a better tomorrow' },
              { icon: FaEarthAfrica, title: 'Serving Africa', copy: 'With pride and commitment' },
              { icon: FaShieldHalved, title: 'Reliable. Durable. Trusted.', copy: 'Quality you can depend on' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-md bg-white/10 px-3 py-2 text-left shadow-sm sm:justify-center sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:border-l sm:border-white/45 sm:first:border-l-0 sm:first:pl-0 sm:pl-6"
                >
                  <Icon className="h-7 w-7 flex-none text-white sm:h-8 sm:w-8 lg:h-9 lg:w-9" />
                  <div className="min-w-0">
                    <h3 className="text-xs font-black uppercase">{item.title}</h3>
                    <p className="mt-0.5 text-xs leading-snug text-white/90 sm:text-sm">{item.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <ProductCarousel />

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

