import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary"></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 text-accent/20 text-6xl blur-sm"
      >
        <FaNodeJs />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 text-purple-500/20 text-6xl blur-sm"
      >
        <FaReact />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-1/3 text-blue-500/20 text-4xl blur-sm"
      >
        <FaDatabase />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-accent font-mono text-lg mb-4 tracking-wide">
            Hello, I'm Pradeep M
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Backend Engineer building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
              <TypeAnimation
                sequence={[
                  'scalable systems.',
                  2000,
                  'REST APIs.',
                  2000,
                  'real-time apps.',
                  2000,
                  'GraphQL APIs.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed md:mx-0 mx-auto">
            I design and own backend systems end-to-end — from APIs and databases to deployment and real-time features.
            Specializing in Node.js, PostgreSQL, and Cloud Architecture.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-4 bg-accent text-primary font-bold rounded hover:bg-accent-dark transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              View My Work <FaArrowRight />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-gray-700 text-white font-bold rounded hover:border-accent hover:text-accent transition-all flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-gray-500 hover:text-accent transition-colors">
          <span className="sr-only">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
