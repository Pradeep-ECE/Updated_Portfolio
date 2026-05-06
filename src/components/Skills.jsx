import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import Tilt from 'react-parallax-tilt';

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const SkillCard = ({ title, subtitle, skills }) => (
  <motion.div variants={cardVariants} className="h-full">
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      perspective={1200}
      transitionSpeed={1200}
      glareEnable={false}
      className="h-full"
    >
      <div className="h-full glass-card p-7 rounded-3xl group relative overflow-hidden flex flex-col hover:border-accent/30 hover:bg-white/[0.05] transition-all duration-400">
        {/* Hover glow */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-accent/0 to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl z-0 pointer-events-none" />

        <div className="mb-6 relative z-10">
          <h3 className="text-lg font-bold text-white mb-1 font-display">{title}</h3>
          <p className="text-accent text-xs font-semibold uppercase tracking-wider">{subtitle}</p>
        </div>

        <div className="flex-1 flex flex-wrap gap-2.5 content-start relative z-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.06, y: -2 }}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/8 hover:border-accent-secondary/40 hover:bg-white/10 transition-all duration-250 cursor-default"
            >
              <span className="text-slate-300 group-hover:text-accent-secondary text-base transition-colors">
                {skill.icon}
              </span>
              <span className="text-slate-200 font-medium text-xs sm:text-sm whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative z-10 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="section-label text-accent mb-4 inline-block">Technical Expertise</span>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white font-display">
            Engineered Stack.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Backend-first. The tools I use daily in production to build reliable, scalable systems.
          </p>
        </motion.div>

        {/* 4-column grid (matches 4 categories) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
