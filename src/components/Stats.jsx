import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { skillCategories } from '../data/skills';

const Counter = ({ value, label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center group">
            <motion.div
                className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-600 mb-2 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300"
            >
                <motion.span>{rounded}</motion.span>
                {label === "Years Experience" && "+"}
            </motion.div>
            <div className="text-gray-500 font-medium tracking-widest uppercase text-sm group-hover:text-gray-300 transition-colors">
                {label}
            </div>
        </div>
    );
};

const Stats = () => {
    // Calculate stats dynamically
    const totalTechnologies = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
    const totalCategories = skillCategories.length;

    // Calculate years of experience (Start Year: 2023)
    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    const yearsExperience = currentYear - startYear;

    return (
        <section className="py-12 bg-primary border-b border-white/5 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-black to-blue-900/10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-4xl mx-auto"
                >
                    <Counter value={totalTechnologies} label="Technologies" />
                    <Counter value={totalCategories} label="Categories" />
                    <Counter value={yearsExperience} label="Years Experience" />
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
