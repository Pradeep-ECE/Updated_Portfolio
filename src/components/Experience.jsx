import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

const ExperienceCard = ({ role, company, duration, responsibilities, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="relative pl-8 md:pl-0"
    >
        <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
            {/* Spacer for timeline alignment */}
            <div className="hidden md:block w-5/12"></div>

            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-primary transform md:-translate-x-1/2 mt-6 z-10 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>

            {/* Content Card */}
            <div className="w-full md:w-5/12 mb-8 md:mb-0">
                <div className="glass-card p-6 rounded-xl border-l-4 border-accent hover:bg-white/5 transition-all hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-white mb-1">{role}</h3>
                    <h4 className="text-accent font-medium mb-2 flex items-center gap-2">
                        <FaBriefcase className="text-sm" /> {company}
                    </h4>
                    <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        <FaCalendar className="text-sm" /> {duration}
                    </p>
                    <ul className="space-y-2">
                        {responsibilities.map((item, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                <span className="text-accent mt-1.5">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
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
            role: "Software Engineer – Backend",
            company: "Centizen Inc.",
            duration: "August 2023 – Present",
            responsibilities: [
                "Developed and maintained scalable backend services using Node.js and Express.js.",
                "Owned backend architecture for a no-code page builder platform.",
                "Implemented version-based page layout management to prevent IndexedDB conflicts.",
                "Built real-time notification and update features using Server-Sent Events (SSE).",
                "Implemented secure Single Sign-On (SSO) across multiple applications.",
                "Optimized PostgreSQL queries using indexing and query analysis.",
                "Containerized backend services using Docker and configured CI/CD pipelines."
            ]
        },
        {
            role: "Software Engineer Intern",
            company: "Centizen Inc.",
            duration: "February 2023 – August 2023",
            responsibilities: [
                "Assisted in developing backend APIs using Node.js and Express.js.",
                "Worked with PostgreSQL for schema design, CRUD operations, and query writing.",
                "Supported REST API implementation and testing using Postman.",
                "Collaborated with senior engineers to understand backend architecture and data flow.",
                "Helped debug QA and production issues under guidance.",
                "Used Git for version control and team collaboration.",
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-secondary relative">
            <div className="container mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-accent">03.</span> Experience
                    </h2>
                    <p className="text-gray-400">My professional journey in the tech industry.</p>
                </motion.div>

                <div className="relative space-y-12">
                    {/* Animated Timeline Line */}
                    <motion.div
                        style={{ scaleY }}
                        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent origin-top transform -translate-x-1/2"
                    />
                    {/* Static Background Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
