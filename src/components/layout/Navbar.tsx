import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaX, FaCartShopping } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useCatalogue } from '../../hooks/useCatalogue';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCatalogue();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 navbar-3d-gradient shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group hover:opacity-80 transition">
          <img src="/favicon.jpg" alt="Wan Afrika Logo" className="w-11 h-11 rounded-lg object-cover shadow-md ring-2 ring-white/30 group-hover:ring-white transition-all" />
          <div className="hidden sm:block">
            <h1 className="font-bold text-sm md:text-base text-white group-hover:text-white/90 transition leading-tight">WAN AFRIKA TRADERS</h1>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-100">Water Solutions</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex xl:gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive(link.path)
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              } after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-gradient-to-r after:from-primary-cyan after:to-blue-300 after:transition-all after:duration-300 ${
                isActive(link.path)
                  ? 'after:w-full'
                  : 'after:w-0 hover:after:w-full'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Catalogue Button */}
        <Link
          to="/catalogue"
          className="relative hidden items-center gap-2 rounded-md bg-white text-dark-primary px-4 py-2 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-xl lg:flex font-semibold"
        >
          <FaCartShopping size={20} />
          <span className="font-medium">Catalogue</span>
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent-green text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center ring-2 ring-white">
              {getTotalItems()}
            </span>
          )}
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md border border-white/30 p-2 text-white lg:hidden hover:bg-white/10 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaX size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/10 bg-gradient-to-b from-dark-primary/95 to-[#0a4fa8]/95 lg:hidden"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`relative px-3 py-2.5 font-semibold transition-all duration-300 rounded-md ${
                  isActive(link.path)
                    ? 'text-white bg-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                } after:absolute after:bottom-1 after:left-3 after:h-[2px] after:bg-gradient-to-r after:from-primary-cyan after:to-blue-300 after:transition-all after:duration-300 ${
                  isActive(link.path)
                    ? 'after:w-6'
                    : 'after:w-0 hover:after:w-6'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/catalogue"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-md bg-white text-dark-primary px-4 py-3 font-semibold"
            >
              <FaCartShopping size={20} />
              Catalogue ({getTotalItems()})
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};


