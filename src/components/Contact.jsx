import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-card p-10 rounded-2xl border border-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:contact@pradeep.dev"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded hover:bg-accent-dark transition-all transform hover:scale-105"
            >
              <FaEnvelope /> Say Hello
            </a>
            <a
              href="/resume.pdf"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 text-white font-bold rounded hover:border-accent hover:text-accent transition-all"
            >
              <FaFileDownload /> Download Resume
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-8">
            <a href="https://www.linkedin.com/in/pradeep-m-7367411a0/" target="_blank" className="text-gray-400 hover:text-accent transition-colors">
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/Pradeep-ECE" target="_blank" className="text-gray-400 hover:text-accent transition-colors">
              <FaGithub size={32} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
