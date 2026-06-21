import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { HeroSection } from '../../components/common/HeroSection';
import { useCatalogue } from '../../hooks/useCatalogue';
import { quoteService } from '../../services/contactService';
import { CONTACT_INFO } from '../../constants/contact';
import { generateWhatsAppMessage, formatPhoneForWhatsApp } from '../../utils/helpers';
import { motion } from 'framer-motion';
import { FaCartShopping, FaCircleCheck, FaComment, FaPaperPlane } from 'react-icons/fa6';

export const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCatalogue } = useCatalogue();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    projectLocation: '',
    additionalNotes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.fullName || !formData.phoneNumber || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    const message = generateWhatsAppMessage(
      formData.fullName,
      formData.companyName,
      items.map(i => ({ name: i.productName, quantity: i.quantity })),
      formData.projectLocation,
      formData.additionalNotes
    );

    // Send to company's WhatsApp number, not user's phone
    const companyWhatsApp = CONTACT_INFO.phone.whatsapp.replace(/^\+?/, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${companyWhatsApp}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
    handleSubmitSuccess();
  };

  const handleEmailSubmit = async () => {
    if (!formData.fullName || !formData.phoneNumber || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const quoteData = {
        fullName: formData.fullName,
        companyName: formData.companyName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        projectLocation: formData.projectLocation,
        additionalNotes: formData.additionalNotes,
        products: items,
        totalAmount: getTotalPrice(),
      };

      await quoteService.submitQuoteRequest(quoteData);
      
      // Log the generated summary
      const summary = quoteService.generateQuoteSummary(quoteData);
      console.log('Quote Summary:', summary);

      handleSubmitSuccess();
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('Error submitting quote. Please try again.');
    }
  };

  const handleSubmitSuccess = () => {
    setSubmitted(true);
    setFormData({
      fullName: '',
      companyName: '',
      phoneNumber: '',
      email: '',
      projectLocation: '',
      additionalNotes: '',
    });
    clearCatalogue();
    setTimeout(() => navigate('/'), 3000);
  };

  if (items.length === 0 && !submitted) {
    return (
      <>
        <Helmet>
          <title>Checkout - Waan Afrika Water Solution</title>
        </Helmet>
        <HeroSection title="Checkout" subtitle="Complete your quote request" />
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <FaCartShopping className="mx-auto mb-4 text-6xl text-primary-cyan" />
            <h2 className="mb-4 text-2xl font-bold text-dark-primary sm:text-3xl">No Items Selected</h2>
            <p className="text-slate-600 mb-8 text-lg">Add products to your catalogue first.</p>
            <Link
              to="/products"
              className="inline-block bg-dark-primary text-white px-8 py-3 rounded-lg font-bold hover:shadow-water transition-shadow"
            >
              Back to Products
            </Link>
          </div>
        </section>
      </>
    );
  }

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Quote Submitted - Waan Afrika Water Solution</title>
        </Helmet>
        <HeroSection title="Quote Request Submitted" subtitle="Thank you for your order" />
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mb-6"
            >
              <img src="/favicon.jpeg" alt="Waan Afrika Water Solution Logo" className="h-24 w-24 rounded-xl shadow-lg mx-auto mb-4 object-contain" />
              <FaCircleCheck className="mx-auto text-7xl text-primary-cyan" />
            </motion.div>
            <h2 className="mb-4 text-3xl font-bold text-dark-primary sm:text-4xl">Thank You!</h2>
            <p className="text-slate-600 mb-6 text-lg">
              Your quote request has been received and sent successfully. Our team will contact you within 24 hours 
              with pricing and availability information.
            </p>
            <div className="bg-light-secondary rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold text-dark-primary mb-4">What Happens Next:</h3>
              <ol className="space-y-3 text-slate-600">
                <li>1. We review your quote requirements</li>
                <li>2. Our team prepares a customized proposal</li>
                <li>3. We contact you with pricing and timeline</li>
                <li>4. We provide technical support throughout</li>
              </ol>
            </div>
            <Link
              to="/"
              className="inline-block bg-dark-primary text-white px-8 py-3 rounded-lg font-bold hover:shadow-water transition-shadow"
            >
              Return Home
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Checkout - Waan Afrika Water Solution</title>
        <meta name="description" content="Complete your quote request for water solutions." />
      </Helmet>

      <HeroSection title="Checkout" subtitle="Review and submit your quote request" />

      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-dark-primary sm:mb-8 sm:text-3xl">Your Information</h2>

              <form className="space-y-5 rounded-lg bg-white p-4 shadow sm:space-y-6 sm:p-8">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-dark-primary mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-primary-100 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-primary-cyan"
                    placeholder="Your full name"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-semibold text-dark-primary mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-primary-100 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-primary-cyan"
                    placeholder="Your company name"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-dark-primary mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-primary-100 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-primary-cyan"
                    placeholder="+234 700 000 0000"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-dark-primary mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-primary-100 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-primary-cyan"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Project Location */}
                <div>
                  <label className="block text-sm font-semibold text-dark-primary mb-2">
                    Project Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-primary-100 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-primary-cyan"
                    placeholder="City/Region"
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-semibold text-dark-primary mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none rounded-lg border border-primary-100 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-primary-cyan"
                    placeholder="Any specific requirements or questions?"
                  />
                </div>
              </form>
            </div>

            {/* Order Summary & Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="space-y-6 rounded-lg bg-light-secondary p-5 sm:p-8 lg:sticky lg:top-24">
                <h3 className="text-2xl font-bold text-dark-primary">Order Summary</h3>

                {/* Items */}
                <div className="bg-white rounded-lg p-4 max-h-48 overflow-y-auto">
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.productId} className="flex flex-col gap-1 text-sm sm:flex-row sm:justify-between">
                        <span className="text-slate-600">{item.productName} x{item.quantity}</span>
                        <span className="font-semibold text-dark-primary">
                          NGN {((item.price || 0) * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div className="border-t-2 pt-4">
                  <div className="mb-6 flex flex-col gap-1 text-lg font-bold text-dark-primary sm:flex-row sm:justify-between sm:text-xl">
                    <span>Total Amount:</span>
                    <span>NGN {getTotalPrice().toLocaleString()}</span>
                  </div>

                  {/* WhatsApp Submit */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWhatsAppSubmit}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 mb-3 transition"
                  >
                    <FaComment size={20} />
                    Send via WhatsApp
                  </motion.button>

                  {/* Email Submit */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEmailSubmit}
                    className="w-full bg-dark-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition"
                  >
                    <FaPaperPlane size={20} />
                    Submit Quote Request
                  </motion.button>
                </div>

                <Link
                  to="/catalogue"
                  className="block text-center text-primary-blue hover:text-primary-cyan font-semibold py-2"
                >
                  Back to Catalogue
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

