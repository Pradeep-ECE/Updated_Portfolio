import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-500 top-0 pt-5">
      <div className="container mx-auto px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`
            flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500
            ${scrolled ? 'w-full md:w-[880px] glass-card border-white/10 shadow-lg' : 'w-full bg-transparent border-transparent'}
          `}
        >
          <a href="#" className="text-base font-bold text-white tracking-tight font-display whitespace-nowrap">
            Pradeep<span className="text-accent"> M</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/8'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                    />
                  )}
                </a>
              );
            })}
            <div className="w-px h-4 bg-white/10 mx-2" />
            <Link
              to="/resume"
              className="ml-2 px-5 py-2 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors text-sm font-bold font-display"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-xl p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-24 left-6 right-6 md:hidden glass-card rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col items-center py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-center py-3.5 text-base font-medium transition-all ${
                    activeSection === link.id
                      ? 'text-accent bg-white/5'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full h-px bg-white/10 my-2" />
              <Link
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-8 py-3 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors font-bold font-display"
              >
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
