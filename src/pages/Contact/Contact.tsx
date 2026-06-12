import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "../../components/common/HeroSection";
import { SectionHeader } from "../../components/common/SectionHeader";
import { ContactForm } from "../../components/common/ContactForm";
import { contactService } from "../../services/contactService";
import type { ContactFormData } from "../../types";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapPin,
  FaClock,
  FaCircleExclamation,
} from "react-icons/fa6";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      await contactService.submitContactForm(data);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      value: "+234 700 000 0000",
      link: "tel:+234700000000",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "info@wanafrika.com",
      link: "mailto:info@wanafrika.com",
    },
    {
      icon: FaMapPin,
      title: "Address",
      value: "Lagos, Nigeria",
      link: "#",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", time: "8:00 AM - 5:00 PM WAT" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM WAT" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Wan Afrika Traders</title>
        <meta
          name="description"
          content="Get in touch with Wan Afrika Traders. Send us a message or call our team for water solutions."
        />
        <meta property="og:title" content="Contact Us - Wan Afrika Traders" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team for water solutions and support"
        backgroundImage="/Hero baner.png"
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-primary mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                We'll respond to your inquiry within 24 hours.
              </p>
              <ContactForm onSubmit={handleSubmit} loading={loading} />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-primary mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
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
                        className="flex gap-4 p-4 rounded-lg hover:bg-light-secondary transition-colors"
                      >
                        <div className="bg-gradient-to-br from-primary-blue to-primary-cyan rounded-full w-12 h-12 flex items-center justify-center text-white flex-shrink-0">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-dark-primary">
                            {info.title}
                          </h3>
                          <p className="text-gray-600">{info.value}</p>
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
                className="bg-light-secondary rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <FaClock className="text-primary-cyan" size={24} />
                  <h3 className="text-xl font-bold text-dark-primary">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((hour, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="font-semibold text-dark-primary">
                        {hour.day}
                      </span>
                      <span className="text-gray-600">{hour.time}</span>
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
                className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <FaCircleExclamation
                    className="text-accent-amber"
                    size={24}
                  />
                  <h3 className="text-xl font-bold text-dark-primary">
                    Emergency Support
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  24/7 support available for emergency water issues
                </p>
                <a
                  href="tel:+234700000001"
                  className="inline-block bg-gradient-to-r from-primary-blue to-primary-cyan text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-shadow"
                >
                  +234 700 000 0001
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-light-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Find Us"
            subtitle="Visit our office or schedule an appointment"
          />
          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
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
