import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden w-full text-center">
      <div className="container mx-auto px-6 z-10 relative flex flex-col items-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card hover:bg-white/10 transition-colors"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
          <span className="text-white/90 font-medium text-sm tracking-wide">Open to Senior Backend Roles</span>
        </motion.div>
        
        {/* Main Heading Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-4xl"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[1.15] tracking-tighter">
            Pradeep M<br />
            <span className="heading-gradient drop-shadow-[0_0_20px_rgba(56,189,248,0.45)]">
              <TypeAnimation
                sequence={[
                  'Backend Engineer.',
                  2500,
                  'Node.js Architect.',
                  2500,
                  'API Performance.',
                  2500,
                  'Systems Designer.',
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          
          <p className="text-slate-300 text-lg sm:text-xl mt-4 mb-10 font-light max-w-2xl text-center leading-relaxed">
            3+ years building production backend systems at scale — Node.js, PostgreSQL, GraphQL, Docker. Currently at Centizen Inc.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 bg-gradient-to-r from-accent to-accent-secondary text-white font-bold rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_40px_rgba(192,132,252,0.55)] transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              See My Work <FaArrowRight />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 glass-card text-white font-semibold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center w-full sm:w-auto"
            >
              Let's Connect
            </motion.a>
          </div>

          {/* Social Links — actually rendered */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-5 mt-10"
          >
            <a
              href="https://github.com/Pradeep-ECE"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 transform inline-flex items-center gap-2 text-sm font-medium"
            >
              <FaGithub size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <div className="w-px h-4 bg-white/20" />
            <a
              href="https://www.linkedin.com/in/pradeep-m-7367411a0/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-accent transition-all duration-300 hover:scale-110 transform inline-flex items-center gap-2 text-sm font-medium"
            >
              <FaLinkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — CSS pulse-fade, not animate-bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ delay: 2.5, duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#about" className="text-white/50 hover:text-accent transition-colors flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
