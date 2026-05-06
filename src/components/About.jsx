import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const tags = [
    'Node.js Ecosystem',
    'PostgreSQL & Query Optimization',
    'GraphQL / REST APIs',
    'Redis Caching',
    'Docker & CI/CD',
    'Microservices Architecture',
    'SSO & Auth Systems',
    'Serverless / AWS',
  ];

  return (
    <section id="about" className="py-32 relative z-10 w-full overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden"
        >
          {/* Subtle internal accent glow */}
          <div className="absolute -top-1/2 -right-1/4 w-3/4 h-full bg-gradient-to-l from-accent-secondary/8 to-transparent rotate-12 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-16 relative z-10">
            {/* Image */}
            <div className="w-full lg:w-5/12">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="/assets/profile.png"
                  alt="Pradeep M — Backend Engineer"
                  className="w-full h-[400px] md:h-[480px] object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-1000"
                />
                {/* Overlay on default state */}
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors z-10 duration-700" />
              </div>
            </div>

            {/* Text */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <span className="section-label text-accent mb-4 inline-block">Behind the Code</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white font-display">
                About <span className="heading-gradient">Me</span>.
              </h2>

              <div className="space-y-5 text-slate-300 text-base leading-relaxed">
                <p>
                  I'm a <span className="text-white font-semibold">Backend Engineer</span> at Centizen Inc. with 3+ years designing and scaling production systems — from a no-code page builder handling 50k+ concurrent sessions to a GraphQL API layer that cut bandwidth by 50%.
                </p>
                <p>
                  I specialize in the harder problems: version-controlled state sync under concurrent writes, sub-100ms token resolution for SSO across five applications, and reducing PostgreSQL query costs by 40% through indexing strategy and schema normalization.
                </p>
                <p>
                  When I'm not debugging distributed systems, I'm thinking about developer experience, deployment automation, and building infrastructure that doesn't wake you up at 3am.
                </p>
              </div>

              {/* Skill tags — staggered animation */}
              <div className="flex flex-wrap gap-2.5 mt-10">
                {tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-300 font-medium hover:bg-accent/8 hover:border-accent/25 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
