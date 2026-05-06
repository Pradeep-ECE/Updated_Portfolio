import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const ExperienceCard = ({ role, company, duration, responsibilities, techStack, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    className="relative pl-8 md:pl-0 w-full"
  >
    <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group w-full`}>
      {/* Spacer for timeline alignment */}
      <div className="hidden md:block w-[45%]" />

      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full border border-white/20 bg-primary transform md:-translate-x-1/2 mt-6 z-20 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.15)] group-hover:scale-125 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.4)] transition-all duration-500">
        <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
      </div>

      {/* Content card */}
      <div className="w-full md:w-[45%] mb-8 md:mb-0 relative">
        {/* Connecting line (desktop) */}
        <div className={`hidden md:block absolute top-[28px] w-[10%] h-px bg-white/15 ${index % 2 === 0 ? 'right-full' : 'left-full'} group-hover:bg-accent/40 transition-colors`} />

        <div className="glass-card p-6 md:p-8 rounded-[2rem] border border-white/10 hover:bg-white/[0.05] transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-accent/30">
          {/* Role + company */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-1 font-display">{role}</h3>
            <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-3">
              <FaBriefcase className="text-xs opacity-70" />
              {company}
            </div>
            <span className="inline-flex items-center gap-1.5 text-slate-500 text-xs font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">
              <FaCalendarAlt className="text-[10px]" />
              {duration}
            </span>
          </div>

          {/* Responsibilities */}
          <ul className="space-y-2.5 mb-5">
            {responsibilities.map((item, i) => (
              <li key={i} className="text-slate-300 text-sm flex items-start gap-3 leading-relaxed">
                <span className="text-accent mt-1 text-base leading-none shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack badges */}
          {techStack && (
            <div className="pt-4 border-t border-white/8 flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span key={i} className="px-2.5 py-1 text-[10px] font-mono font-semibold text-accent-secondary bg-accent-secondary/8 border border-accent-secondary/15 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const experiences = [
    {
      role: "Software Engineer — Backend",
      company: "Centizen Inc.",
      duration: "Aug 2023 – Present",
      responsibilities: [
        "Owned backend architecture for a no-code page builder platform serving 50k+ concurrent sessions — designed versioned state-sync that eliminated 95% of data conflicts.",
        "Led REST → GraphQL migration for a multi-language e-commerce engine, cutting API bandwidth by 50% and reducing over-fetching across 30+ resolvers.",
        "Engineered a real-time notification layer using Server-Sent Events (SSE), increasing active user session duration by 20%.",
        "Architected a centralized SSO gateway using postMessage + OAuth 2.0 across 5 internal enterprise applications.",
        "Optimized PostgreSQL query performance by 40% via indexing strategy, query analysis (EXPLAIN ANALYZE), and schema normalization.",
        "Containerized all backend services with Docker and automated CI/CD pipelines with Jenkins — reduced deployment time from 2h to 20 min.",
      ],
      techStack: ["Node.js", "Express.js", "PostgreSQL", "GraphQL", "SSE", "Redis", "Docker", "Jenkins", "AWS"],
    },
    {
      role: "Software Engineer Intern",
      company: "Centizen Inc.",
      duration: "Feb 2023 – Aug 2023",
      responsibilities: [
        "Built backend REST APIs in Node.js/Express for core e-commerce features — search, cart, and order workflows.",
        "Designed and implemented PostgreSQL schemas for multi-tenant data isolation with row-level security.",
        "Contributed to a horizontal scaling initiative — profiled bottlenecks and proposed caching strategies adopted in production.",
        "Participated in production incident triage, reducing average resolution time through systematic log analysis.",
      ],
      techStack: ["Node.js", "Express.js", "PostgreSQL", "REST APIs", "Postman", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-32 relative z-10 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="section-label text-accent-secondary mb-4 inline-block">Career Path</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight mt-4 font-display">
            Experience.
          </h2>
        </motion.div>

        <div className="relative space-y-16 mt-10">
          {/* Static timeline track */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 transform -translate-x-1/2 rounded-full" />
          {/* Scroll-driven animated progress */}
          <motion.div
            style={{ scaleY }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent to-accent-secondary origin-top transform -translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.5)] z-10"
          />

          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
