import { motion } from 'framer-motion';
import type { Project } from '../../types';
import { FaMapPin, FaEye } from 'react-icons/fa6';
import { formatDate } from '../../utils/helpers';

interface ProjectCardProps {
  project: Project;
  index?: number;
  onViewDetails?: (project: Project) => void;
}

export const ProjectCard = ({ project, index = 0, onViewDetails }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-xl transition-all duration-500 relative\n"
      style={{
        background: 'linear-gradient(135deg, #e0f7ff 0%, #b3e5fc 50%, #80deea 100%)',
        boxShadow: '0 12px 24px rgba(13, 110, 253, 0.25), inset 0 1px 0 rgba(255,255,255,0.9), 0 0 20px rgba(0, 188, 212, 0.2)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-blue-400/20 pointer-events-none rounded-xl" />
      
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-cyan-100 to-blue-100 sm:h-52">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-blue-700 shadow-lg backdrop-blur border border-blue-200">
          {project.category.replace('-', ' ').toUpperCase()}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 relative z-10 bg-gradient-to-b from-white/60 via-blue-50/40 to-cyan-50/60">
        <h3 className="text-lg font-black text-blue-900 mb-2 line-clamp-2">
          {project.title}
        </h3>

        {/* Location */}
        {project.location && (
          <div className="flex items-center gap-2 text-blue-600 text-sm mb-3">
            <FaMapPin size={16} />
            <span>{project.location}</span>
          </div>
        )}

        <p className="text-blue-700 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Date */}
        {project.completionDate && (
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-800 mb-4">
            Completed: {formatDate(project.completionDate)}
          </p>
        )}

        {/* View Details Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onViewDetails?.(project)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl sm:text-base"
        >
          <FaEye size={18} />
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};



