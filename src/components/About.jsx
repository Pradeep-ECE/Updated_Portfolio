import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/assets/profile.png"
                alt="Pradeep M Workspace"
                className="relative rounded-lg shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              <span className="text-accent">01.</span> About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a <span className="text-accent font-semibold">Backend Engineer</span> with hands-on experience in building production-grade systems using Node.js, Express.js, PostgreSQL, and DevOps tools.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I enjoy solving real-world backend problems such as data consistency, performance optimization, real-time updates, and system scalability. In my current role, I handle backend ownership end-to-end — from designing APIs and database schemas to deploying services and supporting production environments.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {['Backend Architecture', 'Database Design', 'API Development', 'Cloud Deployment'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-primary border border-gray-700 rounded-full text-sm text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
