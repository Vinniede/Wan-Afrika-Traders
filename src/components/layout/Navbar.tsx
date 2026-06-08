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
    <nav className="sticky top-0 z-40 border-b border-primary-100/80 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group hover:opacity-80 transition">
          <img src="/favicon.jpg" alt="Wan Afrika Logo" className="w-11 h-11 rounded-lg object-cover shadow-md ring-2 ring-primary-100 group-hover:ring-primary-blue transition-all" />
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg text-dark-primary group-hover:text-primary-blue transition">Wan Afrika</h1>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-600">Water Solutions</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex xl:gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition-all ${
                isActive(link.path)
                  ? 'bg-primary-50 text-primary-blue shadow-sm'
                  : 'text-slate-600 hover:bg-primary-50 hover:text-primary-blue'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Catalogue Button */}
        <Link
          to="/catalogue"
          className="relative hidden items-center gap-2 rounded-md bg-dark-primary px-4 py-2 text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-primary-blue lg:flex"
        >
          <FaCartShopping size={20} />
          <span className="font-medium">Catalogue</span>
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent-amber text-dark-primary text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center ring-2 ring-white">
              {getTotalItems()}
            </span>
          )}
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md border border-primary-100 p-2 text-dark-primary lg:hidden"
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
          className="border-t border-primary-100 bg-white/95 lg:hidden"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`rounded-md px-3 py-2 font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary-50 text-primary-blue'
                    : 'text-slate-600 hover:bg-primary-50 hover:text-primary-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/catalogue"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-md bg-dark-primary px-4 py-3 text-white"
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


