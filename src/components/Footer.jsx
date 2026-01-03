import { motion } from 'framer-motion';
import { Heart, Mail, Phone, Linkedin } from 'lucide-react';
import { personalInfo } from '../constants/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              Ibrahim<span className="text-primary">.</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Biomedical Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors"
            >
              <Mail size={18} />
            </motion.a>
            <motion.a
              href={`tel:${personalInfo.phone}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors"
            >
              <Phone size={18} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors"
            >
              <Linkedin size={18} />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-primary" /> © {currentYear}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
