import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/ojastyagi',
      color: 'hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/ojastyagi',
      color: 'hover:text-purple-400'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:ojas.tyagi@example.com',
      color: 'hover:text-purple-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-slate-200 font-inter font-bold text-xl mb-2">
              Ojas Tyagi
            </h3>
            <p className="text-slate-400 text-sm">
              Computer Science & Engineering Student
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`text-slate-400 transition-colors duration-300 ${link.color}`}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Right - Back to Top */}
          <div className="text-center md:text-right">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 text-slate-400 hover:text-purple-400 transition-colors duration-300"
            >
              <span className="text-sm font-inter font-medium">Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-700/50 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center space-x-1">
            <span>© 2024 Ojas Tyagi. Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;