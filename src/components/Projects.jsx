import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    number: "01",
    title: "ZB Builder — Backend Architecture",
    description:
      "Enterprise no-code page builder platform. Engineered a versioned state-sync system that eliminated 95% of data conflicts caused by concurrent editor sessions across distributed database instances.",
    highlights: ["Versioned DB Layouts", "Conflict Resolution", "Node.js Streams", "PostgreSQL"],
    metrics: ["50k+ concurrent sessions", "95% conflict reduction"],
    github: null,           // Internal — no public repo
    live: null,             // Internal — no public demo
  },
  {
    number: "02",
    title: "ZenBasket — GraphQL API Layer",
    description:
      "Decoupled a monolithic REST-based e-commerce backend into an optimized GraphQL layer for a multi-language platform. Reduced API bandwidth by 50% and improved response latency across 30+ resolvers.",
    highlights: ["REST → GraphQL", "Real-time SSE", "Query Optimization", "Redis Caching"],
    metrics: ["50% bandwidth reduction", "30+ resolvers optimized"],
    github: null,
    live: null,
  },
  {
    number: "03",
    title: "SSO Gateway Service",
    description:
      "Designed a centralized authentication gateway using postMessage + OAuth 2.0 for seamless SSO across a suite of internal enterprise applications. Reduced login friction and centralized token management.",
    highlights: ["OAuth 2.0", "Redis Caching", "JWT / postMessage", "Security Auditing"],
    metrics: ["5 apps unified", "Sub-100ms token resolution"],
    github: "https://github.com/Pradeep-ECE",  // Link to profile if no public repo
    live: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  }),
};

const ProjectCard = ({ number, title, description, highlights, metrics, github, live, index }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={cardVariants}
    className="group relative h-full flex flex-col"
  >
    <div className="h-full glass-card rounded-[2rem] border border-white/10 hover:border-accent/30 hover:bg-white/[0.06] transition-all duration-500 overflow-hidden relative z-10 flex flex-col hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:-translate-y-2">
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Header */}
      <div className="p-8 pb-4 flex justify-between items-start relative z-20">
        {/* Project number badge */}
        <span className="text-4xl font-black text-transparent bg-clip-text heading-gradient opacity-50 group-hover:opacity-100 transition-opacity duration-500 font-display">
          {number}
        </span>
        {/* Action links — always visible, not hidden */}
        <div className="flex gap-3 items-center">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-all duration-200 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-accent transition-all duration-200 hover:scale-110 transform"
              aria-label="Live demo"
            >
              <FaExternalLinkAlt size={17} />
            </a>
          )}
          {!github && !live && (
            <span className="text-[10px] text-slate-600 font-mono tracking-widest uppercase border border-white/10 px-2 py-1 rounded-full">
              Internal
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-8 pb-8 flex-1 flex flex-col relative z-20">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 font-display leading-snug">
          {title}
        </h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
          {description}
        </p>

        {/* Key metrics */}
        <div className="flex flex-wrap gap-2 mb-5">
          {metrics.map((m, i) => (
            <span key={i} className="text-[11px] font-semibold text-accent-secondary bg-accent-secondary/10 border border-accent-secondary/20 px-2.5 py-1 rounded-full">
              ↑ {m}
            </span>
          ))}
        </div>

        {/* Tech highlights */}
        <div className="pt-5 border-t border-white/8 flex flex-wrap gap-2">
          {highlights.map((item, i) => (
            <span key={i} className="px-3 py-1 text-[11px] font-mono font-semibold text-accent bg-accent/8 border border-accent/15 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative z-10 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="section-label text-accent-secondary mb-4 inline-block">Production Systems</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight font-display">
            Selected <span className="heading-gradient">Works</span>.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Backend engineering at scale — real systems, real metrics, real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        {/* CTA to GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Pradeep-ECE"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-all duration-300 hover:gap-3 border border-white/10 hover:border-white/30 px-6 py-3 rounded-full"
          >
            <FaGithub size={16} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
