import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    icon: <FaLinkedin size={22} />,
    href: "https://www.linkedin.com/in/pradeep-m-7367411a0/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub size={22} />,
    href: "https://github.com/Pradeep-ECE",
    label: "GitHub",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-primary border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto glass-card p-12 lg:p-20 rounded-[2.5rem] border border-white/8 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/6 to-accent-secondary/6 pointer-events-none" />

          <div className="relative z-10">
            <span className="section-label text-accent-secondary mb-6 inline-block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-black mb-5 text-white tracking-tight font-display">
              Let's Build<br />
              <span className="heading-gradient">Together.</span>
            </h2>
            <p className="text-slate-400 mb-10 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
              Available for senior backend and full-stack roles. Response guaranteed within 24 hours.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <motion.a
                href="mailto:pradeepery141@gmail.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all"
              >
                <FaEnvelope />
                Send an Email
              </motion.a>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/resume"
                  className="flex items-center justify-center gap-3 px-8 py-4 glass-card border border-white/15 text-white font-semibold rounded-xl hover:bg-white/8 hover:border-white/25 transition-all"
                >
                  <FaFileDownload />
                  View Resume
                </Link>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="flex justify-center items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-14 h-14 flex flex-col items-center justify-center gap-1 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="text-[9px] uppercase tracking-widest opacity-60">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
