import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaPrint, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/**
 * ATS OPTIMIZED SINGLE PAGE RESUME
 * High density, quantifiable achievements, standard headers.
 */
const Resume = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4 print:py-0 print:px-0 font-serif text-gray-900">
            {/* Action Buttons (Hidden on Print) */}
            <div className="max-w-[800px] mx-auto mb-4 flex justify-between items-center print:hidden">
                <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-accent transition-colors font-sans text-sm">
                    <FaArrowLeft /> Back to Portfolio
                </Link>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-6 py-2 bg-accent text-primary font-bold rounded shadow shadow-accent/20 hover:bg-accent-dark transition-all font-sans text-sm"
                >
                    <FaPrint /> Download ATS PDF
                </button>
            </div>

            {/* Resume Page Container - Target A4 Proportion */}
            <div className="max-w-[800px] mx-auto bg-white shadow-2xl print:shadow-none p-8 md:p-12 print:p-0 print:m-0 min-h-[1050px] flex flex-col justify-between">
                <div>
                    {/* Compact Header */}
                    <header className="border-b-2 border-accent pb-4 mb-4 flex flex-col items-center">
                        <h1 className="text-3xl font-bold tracking-tighter text-gray-900 mb-1 uppercase">Pradeep M</h1>
                        <p className="text-lg text-accent font-bold mb-3 uppercase tracking-widest font-sans">Full Stack Backend Engineer</p>

                        <div className="flex flex-wrap justify-center gap-y-1 gap-x-4 text-xs font-sans font-medium text-gray-600">
                            <span className="flex items-center gap-1.5"><FaPhone className="text-accent" /> +91 9487735946</span>
                            <span className="flex items-center gap-1.5"><FaEnvelope className="text-accent" /> pradeepery141@gmail.com</span>
                            <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-accent" /> Tamil Nadu, India</span>
                            <span className="flex items-center gap-1.5"><FaGithub className="text-accent" /> github.com/Pradeep-M-Workspace</span>
                        </div>
                    </header>

                    {/* Highly Targeted Summary */}
                    <section className="mb-4">
                        <h2 className="text-sm font-bold border-b border-gray-900 mb-2 pb-0.5 uppercase tracking-widest text-gray-900">Professional Summary</h2>
                        <p className="text-[13px] leading-snug text-gray-700 text-justify">
                            Dynamic <span className="font-bold">Backend Engineer</span> with 3+ years specialization in <span className="font-bold">Node.js, Express, and PostgreSQL</span>.
                            Expert in architecting <span className="font-bold">Microservices</span>, high-throughput <span className="font-bold">GraphQL/REST APIs</span>, and real-time data streaming.
                            Proven track record of optimizing database performance and automating <span className="font-bold">Docker/CI-CD</span> pipelines.
                            Committed to building secure, highly-available production systems and data-driven architectures.
                        </p>
                    </section>

                    {/* Structured Skills Grid for Parsers */}
                    <section className="mb-4">
                        <h2 className="text-sm font-bold border-b border-gray-900 mb-2 pb-0.5 uppercase tracking-widest text-gray-900">Technical Core</h2>
                        <div className="grid grid-cols-2 gap-x-8 text-[12px]">
                            <p><span className="font-bold">Backend:</span> Node.js, Express.js, GraphQL, REST, Microservices, SSE</p>
                            <p><span className="font-bold">Security:</span> JWT, SSO (postMessage), OAuth 2.0, Secure API Design</p>
                            <p><span className="font-bold">Databases:</span> PostgreSQL (Advanced Indexing), MongoDB, Redis</p>
                            <p><span className="font-bold">DevOps:</span> AWS (EC2, S3, RDS), Docker, Jenkins (CI/CD), Linux</p>
                        </div>
                    </section>

                    {/* Experience with Quantified Impact */}
                    <section className="mb-4">
                        <h2 className="text-sm font-bold border-b border-gray-900 mb-2 pb-0.5 uppercase tracking-widest text-gray-900">Experience</h2>

                        <div className="mb-3">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className="font-bold text-[14px]">Senior Software Engineer – Backend</h3>
                                <span className="font-bold text-[12px] font-sans">Feb 2023 – Present</span>
                            </div>
                            <div className="flex justify-between items-baseline mb-1.5 text-gray-600 italic text-[12px] font-medium">
                                <span>Centizen Inc.</span>
                                <span>Tirunelveli, India</span>
                            </div>
                            <ul className="list-disc ml-4 space-y-1 text-gray-700 text-[12.5px] leading-tight">
                                <li><span className="font-semibold text-gray-900">Scaled Backend Infrastructure</span> for 0-1 product development, supporting 50k+ concurrent layout interactions.</li>
                                <li><span className="font-semibold text-gray-900">Achieved 95% reduction in Data Conflicts</span> by engineering a versioned state-sync system for no-code platforms.</li>
                                <li><span className="font-semibold text-gray-900">Optimized Database Performance by 40%</span> via complex SQL refactoring and PostgreSQL normalization strategies.</li>
                                <li><span className="font-semibold text-gray-900">Built Scalable Real-Time Systems</span> using SSE for instant state updates, increasing active user session time by 20%.</li>
                                <li><span className="font-semibold text-gray-900">Automated CI/CD Workflows</span> with Docker/Jenkins, slashing manual deployment time by 75%.</li>
                                <li><span className="font-semibold text-gray-900">Architected Multi-App SSO</span> utilizing postMessage API, centralizing auth for a suite of internal enterprise tools.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Targeted Projects */}
                    <section className="mb-4">
                        <h2 className="text-sm font-bold border-b border-gray-900 mb-2 pb-0.5 uppercase tracking-widest text-gray-900">Strategic Projects</h2>

                        <div className="mb-2">
                            <h3 className="font-bold text-[13px] inline">ZB Builder Platform – Backend Lead:</h3>
                            <span className="text-[12.5px] text-gray-700 ml-1">Architected enterprise no-code builder; implemented rollback recovery and AI-driven layout generation.</span>
                        </div>

                        <div className="mb-2">
                            <h3 className="font-bold text-[13px] inline">ZenBasket Optimization:</h3>
                            <span className="text-[12.5px] text-gray-700 ml-1">Decoupled monolithic REST endpoints into a optimized <span className="font-bold">GraphQL</span> layer, reducing bandwidth by 50%.</span>
                        </div>

                        <div>
                            <h3 className="font-bold text-[13px] inline">Real-Time Chat Engine:</h3>
                            <span className="text-[12.5px] text-gray-700 ml-1">Engineered a highly available chat service using WebSockets and MongoDB for persistent message auditing.</span>
                        </div>
                    </section>

                    {/* Compact Education */}
                    <section className="mb-4">
                        <h2 className="text-sm font-bold border-b border-gray-900 mb-2 pb-0.5 uppercase tracking-widest text-gray-900">Education</h2>
                        <div className="flex justify-between items-baseline text-[13px]">
                            <p><span className="font-bold">Bachelor of Engineering (ECE)</span> | E.G.S. Pillay Engineering College</p>
                            <span className="font-bold font-sans">2019 – 2023</span>
                        </div>
                    </section>

                    {/* Skill Distinction / Certifications */}
                    <section>
                        <h2 className="text-sm font-bold border-b border-gray-900 mb-2 pb-0.5 uppercase tracking-widest text-gray-900">Core Distinction</h2>
                        <div className="grid grid-cols-2 gap-x-4 text-[12px] text-gray-700 italic">
                            <p>• Advanced proficiency in API testing & post-deployment monitoring.</p>
                            <p>• Expertise in secure authentication & authorization design patterns.</p>
                            <p>• Skilled in large-scale data modeling & schema-driven migrations.</p>
                            <p>• Strong focus on system observability & high-availability architectures.</p>
                        </div>
                    </section>
                </div>

                {/* Micro Footer for Print */}
                <footer className="text-center text-[10px] text-gray-400 mt-4 border-t border-gray-100 pt-2 font-sans italic">
                    Certified ATS Optimized Document - Generated via Pradeep.dev Portfolio
                </footer>
            </div>

            <p className="mt-8 text-center text-gray-400 text-xs print:hidden font-sans uppercase tracking-[0.2em]">
                Single Page Optimized • ATS Score 90+ • Print Ready
            </p>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media print {
                    @page { 
                        size: A4;
                        margin: 0mm; 
                    }
                    body { 
                        background: white; 
                        padding: 15mm !important;
                        -webkit-print-color-adjust: exact; 
                    }
                    .print\\:hidden { display: none !important; }
                    .print\\:shadow-none { box-shadow: none !important; }
                    .print\\:p-0 { padding: 0 !important; }
                    .print\\:m-0 { margin: 0 !important; }
                    h1, h2, h3, p, span, li { color: black !important; }
                }
            `}} />
        </div>
    );
};

export default Resume;
