import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "../../components/common/HeroSection";
import { SectionHeader } from "../../components/common/SectionHeader";
import { SolutionCard } from "../../components/solutions/SolutionCard";
import { CTASection } from "../../components/common/CTASection";
import { solutionService } from "../../services/solutionService";
import type { Solution } from "../../types";

export const Solutions = () => {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSolutions = async () => {
      const all = await solutionService.getSolutions();
      setSolutions(all);
      setLoading(false);
    };
    loadSolutions();
  }, []);

  return (
    <>
      <Helmet>
        <title>Solutions - Wan Afrika Traders</title>
        <meta
          name="description"
          content="Discover our comprehensive water solutions including irrigation, treatment, borehole, and industrial water systems."
        />
        <meta property="og:title" content="Solutions - Wan Afrika Traders" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        title="Water Solutions"
        subtitle="Tailored water management systems for every challenge"
        backgroundImage="/Hero baner.png"
      />

      {/* Solutions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Solutions"
            subtitle="Comprehensive water management systems designed for your specific needs"
          />

          {loading ? (
            <div className="text-center py-12">Loading solutions...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, idx) => (
                <SolutionCard
                  key={solution.id}
                  solution={solution}
                  index={idx}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Detailed Solutions Info */}
      <section className="py-16 md:py-24 bg-light-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-primary mb-12 text-center">
            Why Choose Our Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-dark-primary mb-4">
                Customized Approach
              </h3>
              <p className="text-gray-600 mb-4">
                Every water challenge is unique. We analyze your specific
                requirements and design custom solutions that maximize
                efficiency and minimize costs.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-cyan rounded-full" />
                  Site assessment and analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-cyan rounded-full" />
                  System design and planning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-cyan rounded-full" />
                  Installation and commissioning
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-dark-primary mb-4">
                Expert Support
              </h3>
              <p className="text-gray-600 mb-4">
                Our team of experienced engineers and technicians provides
                comprehensive support throughout the entire lifecycle of your
                water system.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-cyan rounded-full" />
                  Technical consultation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-cyan rounded-full" />
                  Training and maintenance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-cyan rounded-full" />
                  24/7 emergency support
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-dark-primary mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600 mb-4">
                All our solutions are built with premium materials and undergo
                rigorous testing to ensure durability and reliability.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-cyan rounded-full" />
                  ISO certified products
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-cyan rounded-full" />
                  International standards compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-cyan rounded-full" />
                  Warranty and guarantees
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-dark-primary mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600 mb-4">
                We focus on eco-friendly solutions that minimize environmental
                impact while maximizing resource efficiency.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-cyan rounded-full" />
                  Energy-efficient systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-cyan rounded-full" />
                  Water conservation measures
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-cyan rounded-full" />
                  Renewable energy options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready for Your Custom Water Solution?"
        subtitle="Schedule a consultation with our experts today"
        primaryButtonText="Request Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Products"
        secondaryButtonLink="/products"
      />
    </>
  );
};
