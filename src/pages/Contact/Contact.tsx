import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../../components/common/HeroSection';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ContactForm } from '../../components/common/ContactForm';
import { contactService } from '../../services/contactService';
import type { ContactFormData } from '../../types';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapPin, FaClock, FaCircleExclamation, FaWhatsapp } from 'react-icons/fa6';
import { CONTACT_INFO } from '../../constants/contact';

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      await contactService.submitContactForm(data);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      value: CONTACT_INFO.phone.calls,
      link: `tel:${CONTACT_INFO.phone.calls}`,
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp & Emergency',
      value: CONTACT_INFO.phone.whatsapp,
      link: `https://wa.me/${CONTACT_INFO.phone.whatsapp.replace(/^0/, '254')}`,
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`,
    },
  ];

  const businessHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM WAT' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM WAT' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Wan Afrika Traders</title>
        <meta name="description" content="Get in touch with Wan Afrika Traders. Send us a message or call our team for water solutions." />
        <meta property="og:title" content="Contact Us - Wan Afrika Traders" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team for water solutions and support"
        backgroundImage="/Hero baner.png"
      />

      {/* Contact Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-2 text-2xl font-bold text-dark-primary sm:text-3xl md:text-4xl">Send us a Message</h2>
              <p className="text-slate-600 mb-8">We'll respond to your inquiry within 24 hours.</p>
              <ContactForm onSubmit={handleSubmit} loading={loading} />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              {/* Quick Contact */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-dark-primary sm:text-3xl md:mb-8 md:text-4xl">Contact Information</h2>
                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={idx}
                        href={info.link}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex gap-4 rounded-lg p-3 transition-colors hover:bg-light-secondary sm:p-4"
                      >
                        <div className="bg-gradient-to-br from-dark-primary via-primary-blue to-primary-cyan rounded-full w-12 h-12 flex items-center justify-center text-white flex-shrink-0">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-dark-primary">{info.title}</h3>
                          <p className="break-words text-slate-600">{info.value}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-light-secondary rounded-lg p-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <FaClock className="text-primary-cyan" size={24} />
                  <h3 className="text-xl font-bold text-dark-primary">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((hour, idx) => (
                    <div key={idx} className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                      <span className="font-semibold text-dark-primary">{hour.day}</span>
                      <span className="text-slate-600">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Emergency Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg border-2 border-amber-200 bg-amber-50 p-5 sm:p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <FaCircleExclamation className="text-accent-amber" size={24} />
                  <h3 className="text-xl font-bold text-dark-primary">Emergency Support</h3>
                </div>
                <p className="text-slate-600 mb-4">24/7 support available for emergency water issues via WhatsApp</p>
                <a
                  href={`https://wa.me/${CONTACT_INFO.phone.emergency.replace(/^0/, '254')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-shadow"
                >
                  <FaWhatsapp size={20} />
                  {CONTACT_INFO.phone.emergency}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-light-secondary py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Find Us"
            subtitle="Visit our office or schedule an appointment"
          />
          <div className="h-72 overflow-hidden rounded-lg shadow-water sm:h-80 md:h-96">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0924504089826!2d3.3754754!3d6.6430563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ee9a40c4f4f4f4f%3A0x4f4f4f4f4f4f4f4f!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};


