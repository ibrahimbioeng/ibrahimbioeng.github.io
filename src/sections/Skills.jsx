import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Wrench, 
  Wind, 
  Armchair, 
  Syringe, 
  Brain, 
  Users, 
  MessageSquare, 
  FolderKanban 
} from 'lucide-react';
import { skills } from '../constants/data';

const iconMap = {
  Wrench,
  Wind,
  Armchair,
  Syringe,
  Brain,
  Users,
  MessageSquare,
  FolderKanban,
};

const SkillCard = ({ skill, index }) => {
  const Icon = iconMap[skill.icon] || Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm cursor-pointer"
    >
      <motion.div
        whileHover={{ rotate: 5 }}
        className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4"
      >
        <Icon size={28} className="text-primary" />
      </motion.div>
      <h3 className="text-dark font-semibold text-lg">{skill.name}</h3>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 bg-white">
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
              My <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Technical Skills */}
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-dark mb-6 flex items-center gap-2"
            >
              <Wrench size={20} className="text-primary" />
              Technical Skills
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.technical.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-dark mb-6 flex items-center gap-2"
            >
              <Users size={20} className="text-primary" />
              Soft Skills
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.soft.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + 4} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
