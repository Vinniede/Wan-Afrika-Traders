import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCircleCheck, FaEnvelope } from 'react-icons/fa6';
import type { ContactFormData } from '../../types';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  loading?: boolean;
}

export const ContactForm = ({ onSubmit, loading = false }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-700"
        >
          <FaCircleCheck />
          Thank you! Your message has been received. We'll contact you shortly.
        </motion.div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-dark-primary mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-cyan transition"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-dark-primary mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-cyan transition"
          placeholder="your@email.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-dark-primary mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-cyan transition"
          placeholder="+234 700 000 0000"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-dark-primary mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-cyan transition resize-none"
          placeholder="Your message here..."
        />
      </div>

      {/* Submit Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={loading}
        className="w-full bg-dark-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-water transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Message'}
        <FaEnvelope size={20} />
      </motion.button>
    </form>
  );
};


