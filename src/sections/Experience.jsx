import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Wind, Users, Activity } from 'lucide-react';
import { experiences } from '../constants/data';

const iconMap = {
  Briefcase,
  Wind,
  Users,
  Activity,
};

const ExperienceCard = ({ experience, index, isLeft }) => {
  const Icon = iconMap[experience.icon] || Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`flex items-center gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Content Card */}
      <motion.div
        whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
        className="flex-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
      >
        <div className="flex items-start gap-4">
          <motion.div
            whileHover={{ rotate: 5 }}
            className="p-3 bg-primary/10 rounded-xl shrink-0"
          >
            <Icon size={24} className="text-primary" />
          </motion.div>
          <div className="flex-1">
            <span className="text-primary font-semibold text-sm">
              {experience.period}
            </span>
            <h3 className="text-xl font-bold text-dark mt-1">
              {experience.company}
            </h3>
            <p className="text-gray-medium font-medium mb-2">{experience.role}</p>
            <p className="text-gray-medium text-sm leading-relaxed">
              {experience.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Timeline Dot - Hidden on mobile */}
      <div className="hidden lg:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
          className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden lg:block flex-1" />
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 bg-gray-light">
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
              Work <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

            {/* Experience Cards */}
            <div className="space-y-8 lg:space-y-12">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.company}
                  experience={experience}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
