import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "../../components/common/HeroSection";
import { SectionHeader } from "../../components/common/SectionHeader";
import { ProjectCard } from "../../components/projects/ProjectCard";
import { CTASection } from "../../components/common/CTASection";
import { projectService } from "../../services/projectService";
import { projectCategories } from "../../data/projects";
import type { Project } from "../../types";
import { motion } from "framer-motion";

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filtered, setFiltered] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
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
    if (selectedCategory === "all") {
      setFiltered(projects);
    } else {
      const filtered = projects.filter((p) => p.category === selectedCategory);
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
        <meta
          name="description"
          content="Explore our successful water solution projects across Africa including irrigation, water treatment, borehole, and commercial installations."
        />
        <meta property="og:title" content="Projects - Wan Afrika Traders" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection
        title="Our Projects"
        subtitle="Successful water solutions deployed across Africa"
        backgroundImage="/Hero baner.png"
      />

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Project Gallery"
            subtitle="Browse our completed projects and case studies"
          />

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {projectCategories.map((category) => (
              <motion.button
                key={category.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary-blue to-primary-cyan text-white shadow-lg"
                    : "bg-light-secondary text-dark-primary hover:bg-gray-200"
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
              <p className="text-gray-600 text-lg">
                No projects found in this category.
              </p>
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
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center z-10"
            >
              ✕
            </button>

            {/* Main Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-96 object-cover"
            />

            {/* Content */}
            <div className="p-8">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-dark-primary">
                  {selectedProject.title}
                </h2>
                <span className="bg-primary-cyan text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {selectedProject.category.replace("-", " ").toUpperCase()}
                </span>
              </div>

              {selectedProject.location && (
                <p className="text-gray-600 mb-4 text-lg">
                  📍 <strong>Location:</strong> {selectedProject.location}
                </p>
              )}

              {selectedProject.completionDate && (
                <p className="text-gray-600 mb-6 text-lg">
                  📅 <strong>Completed:</strong>{" "}
                  {new Date(
                    selectedProject.completionDate,
                  ).toLocaleDateString()}
                </p>
              )}

              <div className="bg-light-secondary rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-dark-primary mb-3">
                  Project Details
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Gallery */}
              {selectedProject.galleryImages &&
                selectedProject.galleryImages.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-dark-primary mb-4">
                      Project Gallery
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.galleryImages.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                )}

              {/* CTA */}
              <div className="mt-8">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full bg-gradient-to-r from-primary-blue to-primary-cyan text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow"
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
