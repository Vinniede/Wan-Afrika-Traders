import { FaComment } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../../constants/contact';

export const FloatingWhatsAppButton = () => {
  // Convert phone number to international format (add country code if needed)
  const whatsappNumber = CONTACT_INFO.phone.whatsapp.replace(/^0/, '254'); // Kenya country code
  const message = encodeURIComponent(CONTACT_INFO.whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-8 right-8 z-40 bg-green-500 text-white rounded-full p-4 shadow-water hover:shadow-glow transition-shadow"
      aria-label="Contact us on WhatsApp"
    >
      <FaComment size={32} />
    </motion.a>
  );
};

