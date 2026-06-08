import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapPin, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { CONTACT_INFO } from '../../constants/contact';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {/* Company Info */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <img src="/favicon.jpg" alt="Wan Afrika Logo" className="w-12 h-12 rounded-lg object-cover shadow-lg ring-2 ring-primary-cyan" />
              <div>
                <h3 className="font-bold text-lg">Wan Afrika</h3>
                <p className="text-xs text-primary-200">Traders</p>
              </div>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-primary-100">Reliable water treatment, irrigation, pumps, pipes and valves for Africa.</p>
            <div className="flex gap-3">
              <a href="#" className="text-primary-100 hover:text-primary-cyan transition"><FaFacebook size={18} /></a>
              <a href="#" className="text-primary-100 hover:text-primary-cyan transition"><FaTwitter size={18} /></a>
              <a href="#" className="text-primary-100 hover:text-primary-cyan transition"><FaLinkedin size={18} /></a>
              <a href="#" className="text-primary-100 hover:text-primary-cyan transition"><FaInstagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 font-bold">Quick Links</h4>
            <ul className="space-y-1.5 text-sm text-primary-100">
              <li><Link to="/" className="hover:text-primary-cyan transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-cyan transition">About Us</Link></li>
              <li><Link to="/products" className="hover:text-primary-cyan transition">Products</Link></li>
              <li><Link to="/solutions" className="hover:text-primary-cyan transition">Solutions</Link></li>
              <li><Link to="/projects" className="hover:text-primary-cyan transition">Projects</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-3 font-bold">Products</h4>
            <ul className="space-y-1.5 text-sm text-primary-100">
              <li><a href="#" className="hover:text-primary-cyan transition">Water Treatment</a></li>
              <li><a href="#" className="hover:text-primary-cyan transition">Pumps</a></li>
              <li><a href="#" className="hover:text-primary-cyan transition">Pipes & Fittings</a></li>
              <li><a href="#" className="hover:text-primary-cyan transition">Valves</a></li>
              <li><a href="#" className="hover:text-primary-cyan transition">Irrigation Systems</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 font-bold">Contact Info</h4>
            <div className="space-y-3 text-sm text-primary-100">
              <div className="flex gap-2">
                <FaPhone size={14} className="text-primary-cyan flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-primary-200">Calls:</p>
                  <a href={`tel:${CONTACT_INFO.phone.calls}`} className="hover:text-primary-cyan transition font-semibold">
                    {CONTACT_INFO.phone.calls}
                  </a>
                </div>
              </div>
              <div className="flex gap-2">
                <FaWhatsapp size={14} className="text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-primary-200">WhatsApp & Emergency:</p>
                  <a href={`https://wa.me/${CONTACT_INFO.phone.whatsapp.replace(/^0/, '254')}`} className="hover:text-primary-cyan transition font-semibold" target="_blank" rel="noopener noreferrer">
                    {CONTACT_INFO.phone.whatsapp}
                  </a>
                </div>
              </div>
              <div className="flex gap-2">
                <FaEnvelope size={14} className="text-primary-cyan flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-primary-200">Email:</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary-cyan transition font-semibold break-all">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-primary-100">
          <p>&copy; {currentYear} Wan Afrika Traders. All rights reserved. Complete Water Solutions for Africa.</p>
        </div>
      </div>
    </footer>
  );
};

