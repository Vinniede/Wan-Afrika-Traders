import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../../components/common/HeroSection';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { CTASection } from '../../components/common/CTASection';
import { projectService } from '../../services/projectService';
import { projectCategories } from '../../data/projects';
import type { Project } from '../../types';
import { motion } from 'framer-motion';
import { FaCalendarDays, FaLocationDot, FaXmark } from 'react-icons/fa6';

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filtered, setFiltered] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      const all = await projectService.getProjects();
      setProjects(all);
      setFiltered(all);
      setLoading(false);
    };
    loadProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFiltered(projects);
    } else {
      const filtered = projects.filter(p => p.category === selectedCategory);
      setFiltered(filtered);
    }
  }, [selectedCategory, projects]);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <Helmet>
        <title>Projects - Wan Afrika Traders</title>
        <meta name="description" content="Explore our successful water solution projects across Africa including irrigation, water treatment, borehole, and commercial installations." />
        <meta property="og:title" content="Projects - Wan Afrika Traders" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        title="Our Projects"
        subtitle="Successful water solutions deployed across Africa"
        backgroundImage="/Hero baner.png"
      />

      {/* Projects Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Project Gallery"
            subtitle="Browse our completed projects and case studies"
          />

          {/* Category Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3 md:mb-12">
            {projectCategories.map((category) => (
              <motion.button
                key={category.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all sm:px-6 sm:text-base ${
                  selectedCategory === category.id
                    ? 'bg-dark-primary text-white shadow-glow'
                    : 'bg-light-secondary text-dark-primary hover:bg-gray-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div className="text-center py-12">Loading projects...</div>
          ) : filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard
                    project={project}
                    index={idx}
                    onViewDetails={handleViewDetails}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white shadow-water"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-dark-primary shadow-sm backdrop-blur transition hover:bg-primary-50"
              aria-label="Close project details"
            >
              <FaXmark />
            </button>

            {/* Main Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="h-56 w-full object-cover sm:h-80 md:h-96"
            />

            {/* Content */}
            <div className="p-4 sm:p-6 md:p-8">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold text-dark-primary sm:text-3xl">{selectedProject.title}</h2>
                <span className="bg-primary-cyan text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {selectedProject.category.replace('-', ' ').toUpperCase()}
                </span>
              </div>

              {selectedProject.location && (
                <p className="mb-4 text-base text-slate-600 sm:text-lg">
                  <FaLocationDot className="mr-2 inline text-primary-cyan" />
                  <strong>Location:</strong> {selectedProject.location}
                </p>
              )}

              {selectedProject.completionDate && (
                <p className="mb-6 text-base text-slate-600 sm:text-lg">
                  <FaCalendarDays className="mr-2 inline text-primary-cyan" />
                  <strong>Completed:</strong> {new Date(selectedProject.completionDate).toLocaleDateString()}
                </p>
              )}

              <div className="mb-6 rounded-lg bg-light-secondary p-4 sm:p-6">
                <h3 className="text-xl font-bold text-dark-primary mb-3">Project Details</h3>
                <p className="text-slate-600 leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Gallery */}
              {selectedProject.galleryImages && selectedProject.galleryImages.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-dark-primary mb-4">Project Gallery</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {selectedProject.galleryImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        className="h-44 w-full rounded-lg object-cover sm:h-48"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-8">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full rounded-md bg-dark-primary py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-blue hover:shadow-glow"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <CTASection
        title="Want to Start Your Project?"
        subtitle="Contact our team to discuss your water solution requirements"
        primaryButtonText="Get In Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="View Solutions"
        secondaryButtonLink="/solutions"
      />
    </>
  );
};


