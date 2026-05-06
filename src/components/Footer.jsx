import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/5 py-10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-black text-white tracking-tighter font-display">
              Pradeep<span className="text-accent"> M</span>
            </p>
            <p className="text-slate-500 text-xs mt-1">
              © {currentYear} Pradeep M. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6 text-xs text-slate-500 font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/Pradeep-ECE"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/8 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all text-base"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pradeep-m-7367411a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/8 text-slate-400 hover:text-accent hover:border-accent/30 hover:bg-accent/8 transition-all text-base"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:pradeepery141@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/8 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all text-base"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Built with note */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs">
            Built with React · Framer Motion · Tailwind CSS · Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
