import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { HeroSection } from "../../components/common/HeroSection";
import { SectionHeader } from "../../components/common/SectionHeader";
import { CTASection } from "../../components/common/CTASection";
import {
  FaHeart,
  FaBullseye,
  FaEye,
  FaLightbulb,
  FaUsers,
  FaAward,
} from "react-icons/fa6";

export const About = () => {
  const [stats, setStats] = useState({
    yearsInBusiness: 0,
    productsOffered: 0,
    clientsSatisfied: 0,
    projectsCompleted: 0,
  });

  useEffect(() => {
    // Animate counter
    const targetStats = {
      yearsInBusiness: 15,
      productsOffered: 200,
      clientsSatisfied: 5000,
      projectsCompleted: 500,
    };

    const interval = setInterval(() => {
      setStats((prev) => ({
        yearsInBusiness: Math.min(
          prev.yearsInBusiness + 1,
          targetStats.yearsInBusiness,
        ),
        productsOffered: Math.min(
          prev.productsOffered + 10,
          targetStats.productsOffered,
        ),
        clientsSatisfied: Math.min(
          prev.clientsSatisfied + 100,
          targetStats.clientsSatisfied,
        ),
        projectsCompleted: Math.min(
          prev.projectsCompleted + 10,
          targetStats.projectsCompleted,
        ),
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const coreValues = [
    {
      icon: FaHeart,
      title: "Customer Focus",
      description:
        "We prioritize customer satisfaction and long-term relationships.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "Continuous improvement and adoption of modern water technologies.",
    },
    {
      icon: FaAward,
      title: "Quality Excellence",
      description:
        "Unwavering commitment to quality in every product and service.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Wan Afrika Traders - Our Story & Mission</title>
        <meta
          name="description"
          content="Learn about Wan Afrika Traders, our mission, vision, and commitment to providing complete water solutions for Africa."
        />
        <meta property="og:title" content="About Wan Afrika Traders" />
        <meta
          property="og:description"
          content="Complete water solutions provider for Africa"
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        title="About Wan Afrika Traders"
        subtitle="Pioneering water solutions across Africa since 2009"
        backgroundImage="/Hero baner.png"
      />

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-dark-primary mb-4">
                Our Journey
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Founded in 2009, Wan Afrika Traders has emerged as a leading
                provider of water solutions across Africa. With over 15 years of
                industry experience, we have successfully served thousands of
                clients across various sectors.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our commitment to excellence, innovation, and customer
                satisfaction has made us a trusted partner for organizations
                seeking reliable, sustainable, and cost-effective water
                management solutions.
              </p>
              <p className="text-gray-600 text-lg">
                From agricultural irrigation to industrial water treatment, we
                provide comprehensive solutions tailored to meet the unique
                needs of each client.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-blue to-primary-cyan rounded-2xl p-12 text-white"
            >
              <h3 className="text-2xl font-bold mb-8">Quick Facts</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold">{stats.yearsInBusiness}+</p>
                  <p className="text-white/80">Years in Business</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">{stats.productsOffered}+</p>
                  <p className="text-white/80">Products Available</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">
                    {stats.clientsSatisfied}+
                  </p>
                  <p className="text-white/80">Satisfied Customers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-light-secondary">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Mission, Vision & Values"
            subtitle="Guiding principles that define our company"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="bg-gradient-to-br from-primary-blue to-primary-cyan rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl mb-4">
                <FaBullseye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-dark-primary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide innovative, sustainable, and affordable water
                solutions that improve the quality of life for communities and
                businesses across Africa.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="bg-gradient-to-br from-primary-blue to-primary-cyan rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl mb-4">
                <FaEye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-dark-primary mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the leading provider of water solutions in Africa,
                recognized for our commitment to quality, innovation, and
                sustainability.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="bg-gradient-to-br from-primary-blue to-primary-cyan rounded-full w-16 h-16 flex items-center justify-center text-white text-3xl mb-4">
                <FaUsers size={32} />
              </div>
              <h3 className="text-2xl font-bold text-dark-primary mb-4">
                Our Values
              </h3>
              <p className="text-gray-600">
                Integrity, excellence, innovation, customer focus, and
                sustainability guide every decision we make and every solution
                we provide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Core Values"
            subtitle="The principles that drive our success"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Icon className="text-primary-cyan text-4xl mb-4" />
                  <h3 className="text-xl font-bold text-dark-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-blue to-primary-cyan">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold mb-2">
                {stats.yearsInBusiness}+
              </p>
              <p className="text-lg">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold mb-2">
                {stats.productsOffered}+
              </p>
              <p className="text-lg">Products</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold mb-2">
                {stats.clientsSatisfied}+
              </p>
              <p className="text-lg">Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl font-bold mb-2">
                {stats.projectsCompleted}+
              </p>
              <p className="text-lg">Projects</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's Work Together"
        subtitle="Discover how we can help transform your water solutions"
        primaryButtonText="Get In Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="View Solutions"
        secondaryButtonLink="/solutions"
      />
    </>
  );
};
