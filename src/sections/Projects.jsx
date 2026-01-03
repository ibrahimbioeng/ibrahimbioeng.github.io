import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Settings, GraduationCap, ExternalLink, CheckCircle } from 'lucide-react';
import { projects } from '../constants/data';

const iconMap = {
  Settings,
  GraduationCap,
};

const ProjectCard = ({ project, index }) => {
  const Icon = iconMap[project.icon] || Settings;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
    >
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gray-light flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="p-6 bg-primary/10 rounded-2xl"
        >
          <Icon size={48} className="text-primary" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-3">{project.title}</h3>
        <p className="text-gray-medium text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Benefits */}
        <div className="space-y-2 mb-6">
          {project.benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-sm text-gray-medium">
              <CheckCircle size={14} className="text-primary shrink-0" />
              {benefit}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-primary text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors"
          >
            View Details
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2.5 border-2 border-primary text-primary rounded-lg font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
