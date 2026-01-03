import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, MapPin, Globe, Languages } from 'lucide-react';
import { personalInfo } from '../constants/data';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const infoItems = [
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Globe, label: 'Nationality', value: personalInfo.nationality },
    { icon: Languages, label: 'Languages', value: personalInfo.languages.join(', ') },
  ];

  return (
    <section id="about" className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Content Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <User size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark mb-2">Who I Am</h3>
                <p className="text-gray-medium leading-relaxed">
                  {personalInfo.about}
                </p>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-100">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-3 p-4 bg-gray-light rounded-xl"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-medium uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-dark font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
