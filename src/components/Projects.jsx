import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const ProjectCard = ({ title, description, highlights, image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.02}
      transitionSpeed={2000}
      className="group relative rounded-xl overflow-hidden glass-card h-full"
    >
      {/* Image Overlay */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/10 transition-colors z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 relative z-20 bg-secondary/90 backdrop-blur-sm -mt-10 mx-4 rounded-lg border border-gray-800 shadow-xl">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Highlights</h4>
          <ul className="space-y-1">
            {highlights.map((item, i) => (
              <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="flex gap-4">
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors">
            <FaGithub /> Code
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div> */}
      </div>
    </Tilt>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "ZB Builder",
      description: "A no-code page builder platform focused on safe editing and version control. Designed to handle concurrent edits without data loss.",
      highlights: ["Versioned page layouts","Multi-language support", "AI-assisted features"],
      image: "/assets/project1.png"
    },
    {
      title: "ZenBasket",
      description: "Comprehensive e-commerce and content management platforms supporting multi-language",
      highlights: ["REST to GraphQL migration","Real-time updates (SSE)","API optimization","API optimization"],
      image: "/assets/project2.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-accent">04.</span> Featured Projects
          </h2>
          <p className="text-gray-400">Some of the key projects I've worked on.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
