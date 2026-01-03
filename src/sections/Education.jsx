import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../constants/data';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section id="education" className="py-20 bg-white">
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
              <span className="text-primary">Education</span> & Certifications
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Degree Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-gray-light p-8 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="p-4 bg-primary/10 rounded-xl"
                >
                  <GraduationCap size={32} className="text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-gray-medium font-medium">
                    {education.university}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-gray-light p-8 rounded-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="p-4 bg-primary/10 rounded-xl"
                >
                  <Award size={32} className="text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-dark">
                    Certifications & Courses
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {education.courses.map((course, index) => (
                  <motion.li
                    key={course}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-medium"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                    {course}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
