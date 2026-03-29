import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const SkillCard = ({ title, subtitle, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="h-full"
    >
        <div className="h-full p-8 rounded-2xl bg-gradient-to-b from-purple-900/20 to-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_15px_rgba(124,58,237,0.1)] hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] hover:border-purple-500/30 transition-all duration-300 group">
            <div className="mb-8 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide uppercase">{title}</h3>
                <p className="text-gray-400 text-sm font-medium tracking-wider">{subtitle}</p>
            </div>

            <div className="space-y-3">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-purple-500/20 transition-all duration-200 cursor-default"
                    >
                        <div className="text-purple-400 text-xl">
                            {skill.icon}
                        </div>
                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-primary relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        A comprehensive overview of my technical stack, focused on building scalable, secure, and high-performance applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
