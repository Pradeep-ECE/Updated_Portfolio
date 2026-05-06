import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaPrint, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/**
 * ATS-OPTIMIZED RESUME — Single Page, Print Ready
 * All content verbatim from user-provided resume copy.
 */
const Resume = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 print:py-0 print:px-0 font-sans text-gray-900">

            {/* Action Buttons — hidden on print */}
            <div className="max-w-[860px] mx-auto mb-5 flex justify-between items-center print:hidden">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors text-sm font-medium"
                >
                    <FaArrowLeft size={12} /> Back to Portfolio
                </Link>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-5 py-2 bg-sky-500 text-white font-bold rounded-lg shadow hover:bg-sky-600 transition-all text-sm"
                >
                    <FaPrint size={13} /> Download PDF
                </button>
            </div>

            {/* ── A4 Resume Sheet ──────────────────────────────────────── */}
            <div className="max-w-[860px] mx-auto bg-white shadow-xl print:shadow-none print:max-w-none px-10 py-8 print:px-[15mm] print:py-[12mm]">

                {/* ── HEADER ────────────────────────────────────────────── */}
                <header className="mb-4">
                    <div className="flex flex-col items-center text-center border-b-2 border-gray-800 pb-3">
                        <h1 className="text-[26px] font-extrabold tracking-tight text-gray-900 uppercase mb-0.5">
                            Pradeep M
                        </h1>
                        <p className="text-[13px] font-semibold text-sky-600 tracking-widest uppercase mb-2.5">
                            Node.js Backend Engineer &nbsp;—&nbsp; GraphQL &nbsp;—&nbsp; 3+ Years
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-[11.5px] text-gray-600 font-medium">
                            <span className="flex items-center gap-1.5">
                                <FaPhone className="text-sky-500" size={10} />
                                +91 9487735946
                            </span>
                            <span className="flex items-center gap-1.5">
                                <FaEnvelope className="text-sky-500" size={10} />
                                pradeepery141@gmail.com
                            </span>
                            <span className="flex items-center gap-1.5">
                                <FaLinkedin className="text-sky-500" size={10} />
                                linkedin.com/in/pradeep-m-7367411a0
                            </span>
                            <span className="flex items-center gap-1.5">
                                <FaGithub className="text-sky-500" size={10} />
                                github.com/Pradeep-ECE
                            </span>
                        </div>
                    </div>
                </header>

                {/* ── PROFESSIONAL SUMMARY ──────────────────────────────── */}
                <Section title="Professional Summary">
                    <p className="text-[12.5px] leading-[1.55] text-gray-700 text-justify">
                        Backend Software Engineer with <b>3+ years</b> of production experience designing and deploying
                        scalable <b>REST and GraphQL APIs</b>, real-time systems, and CI/CD pipelines. Proficient in{' '}
                        <b>Node.js, PostgreSQL, Redis, Docker, and AWS</b>. Demonstrated ability to reduce API latency
                        by <b>40%</b>, eliminate data collision bugs by <b>90%</b>, and accelerate release cycles by{' '}
                        <b>50%</b> through infrastructure automation and query optimization. Experienced in Agile
                        environments with strong cross-functional collaboration skills.
                    </p>
                </Section>

                {/* ── TECHNICAL SKILLS ──────────────────────────────────── */}
                <Section title="Technical Skills">
                    <div className="grid grid-cols-1 gap-y-[3px] text-[12px]">
                        <SkillRow label="Backend"        value="Node.js, Express.js, GraphQL, REST APIs, Microservices Architecture" />
                        <SkillRow label="Database"       value="PostgreSQL, MySQL, MongoDB, Query Optimization, Indexing" />
                        <SkillRow label="Caching & Real-Time" value="Redis (Caching & Pub/Sub), WebSockets, Server-Sent Events (SSE)" />
                        <SkillRow label="DevOps & Cloud" value="Docker, Jenkins (CI/CD), AWS (EC2, S3, IAM, Lambda), Linux" />
                        <SkillRow label="Security & Auth" value="JWT, SSO (postMessage-based), Role-Based Access Control (RBAC)" />
                        <SkillRow label="Frontend"       value="React.js, Redux (working knowledge)" />
                        <SkillRow label="Tools"          value="Git, Postman, Agile / Scrum" />
                    </div>
                </Section>

                {/* ── PROFESSIONAL EXPERIENCE ───────────────────────────── */}
                <Section title="Professional Experience">

                    {/* Role Header */}
                    <div className="mb-1">
                        <div className="flex justify-between items-baseline">
                            <h3 className="text-[13.5px] font-bold text-gray-900">
                                Node.js Backend Engineer
                            </h3>
                            <span className="text-[11.5px] font-semibold text-gray-700">Feb 2023 – Present</span>
                        </div>
                        <p className="text-[12px] italic text-gray-500 mb-2">Centizen Inc, India</p>
                    </div>

                    {/* Project 1 */}
                    <div className="mb-3">
                        <p className="text-[12.5px] font-bold text-gray-800 mb-1">
                            ZenBasket — Multi-Tenant E-Commerce Platform
                        </p>
                        <ul className="list-disc ml-4 space-y-[4px] text-[12px] leading-[1.5] text-gray-700">
                            <li>Architected and scaled backend services using <b>Node.js</b> and <b>Express.js</b> for a high-traffic, multi-tenant e-commerce platform serving thousands of concurrent users.</li>
                            <li>Spearheaded migration of <b>90+ REST endpoints to GraphQL</b>, reducing over-fetching by ~30% and substantially improving data access efficiency across client applications.</li>
                            <li>Optimized critical <b>PostgreSQL queries</b> through strategic indexing and execution plan analysis, achieving <b>~40% reduction in API response times</b>.</li>
                            <li>Engineered <b>Redis caching layers and Pub/Sub channels</b> for high-throughput data access and real-time event broadcasting across distributed microservices.</li>
                            <li>Enforced <b>Single Sign-On (SSO)</b> across multiple Angular frontends using secure cross-origin postMessage communication, streamlining authentication flows.</li>
                            <li>Delivered real-time order and inventory notifications via <b>Server-Sent Events (SSE)</b>, eliminating an unnecessary Redis dependency and lowering infrastructure costs.</li>
                            <li>Collaborated with frontend engineers and product managers in <b>Agile sprints</b>, consistently delivering scalable backend solutions on schedule.</li>
                        </ul>
                    </div>

                    {/* Project 2 */}
                    <div>
                        <p className="text-[12.5px] font-bold text-gray-800 mb-1">
                            ZB Builder — No-Code Page Builder Platform
                        </p>
                        <ul className="list-disc ml-4 space-y-[4px] text-[12px] leading-[1.5] text-gray-700">
                            <li>Owned the full backend architecture of a production-grade, no-code page builder supporting dynamic <b>layout versioning, rollback, and audit-safe data handling</b>.</li>
                            <li>Designed a <b>version-based layout system</b> that prevents IndexedDB conflicts during concurrent editing sessions, cutting data collision bugs by <b>~90%</b>.</li>
                            <li>Containerized all backend services with <b>Docker</b> and configured automated <b>Jenkins CI/CD pipelines</b>, accelerating deployment frequency by <b>~50%</b>.</li>
                            <li>Integrated multilingual content support and <b>AI-assisted features</b>, extending the platform's reach for international user bases.</li>
                        </ul>
                    </div>
                </Section>

                {/* ── KEY PROJECTS ──────────────────────────────────────── */}
                <Section title="Key Projects">
                    <div className="space-y-2.5">

                        <Project
                            title="ZenBasket — E-Commerce Platform"
                            stack="Node.js, GraphQL, PostgreSQL, SSE"
                            bullets={[
                                "Directed the REST-to-GraphQL migration for 90+ endpoints, boosting data-fetching efficiency and improving developer productivity platform-wide.",
                                "Delivered real-time inventory and order push notifications using SSE for lightweight, scalable server-side event broadcasting.",
                            ]}
                        />

                        <Project
                            title="ZB Builder — No-Code Page Builder"
                            stack="Node.js, Express.js, PostgreSQL, Docker"
                            bullets={[
                                "Crafted layout versioning with rollback support, ensuring data integrity across concurrent editing workflows.",
                                "Added multilingual content pipelines and AI-assisted generation features, improving platform scalability and user experience.",
                            ]}
                        />

                        <Project
                            title="Full-Stack E-Commerce App (Personal)"
                            stack="React.js, Node.js, Express.js, PostgreSQL"
                            bullets={[
                                "Built a complete full-stack application with REST APIs covering products, cart, orders, and user account management.",
                                "Secured the system with JWT-based authentication, RBAC authorization, and a modular, maintainable backend architecture.",
                            ]}
                        />

                        <Project
                            title="Real-Time Chat Application (Personal)"
                            stack="React.js, Node.js, MongoDB, WebSocket"
                            bullets={[
                                "Developed one-to-one real-time messaging using WebSocket-based bidirectional communication protocols.",
                                "Hardened backend APIs with JWT authentication and layered middleware validation strategies.",
                            ]}
                        />
                    </div>
                </Section>

                {/* ── EDUCATION ─────────────────────────────────────────── */}
                <Section title="Education">
                    <div className="flex justify-between items-baseline text-[12.5px]">
                        <div>
                            <span className="font-bold text-gray-900">Bachelor of Engineering — Electronics & Communication Engineering</span>
                            <span className="text-gray-600 ml-2">| E.G.S. Pillay Engineering College, Nagapattinam</span>
                        </div>
                        <span className="font-semibold text-gray-700 whitespace-nowrap ml-4">2019 – 2023</span>
                    </div>
                </Section>

                {/* ── PRINT FOOTER ──────────────────────────────────────── */}
                <footer className="mt-6 pt-2 border-t border-gray-200 text-center text-[10px] text-gray-400 italic">
                    ATS Optimized · pradeepery141@gmail.com · github.com/Pradeep-ECE
                </footer>
            </div>

            {/* Web-only hint */}
            <p className="mt-6 text-center text-gray-400 text-xs print:hidden font-sans uppercase tracking-[0.2em]">
                ATS Optimized · Print Ready · Single Page
            </p>

            {/* Print styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media print {
                    @page {
                        size: A4;
                        margin: 12mm 15mm;
                    }
                    body {
                        background: white !important;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                        cursor: auto !important;
                    }
                    /* restore default cursor for print */
                    *, *::before, *::after {
                        cursor: auto !important;
                    }
                }
            `}} />
        </div>
    );
};

/* ── Helper sub-components ──────────────────────────────── */

const Section = ({ title, children }) => (
    <section className="mb-4">
        <h2 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gray-900 border-b-2 border-gray-800 pb-0.5 mb-2">
            {title}
        </h2>
        {children}
    </section>
);

const SkillRow = ({ label, value }) => (
    <p className="text-[12px] leading-[1.45] text-gray-700">
        <span className="font-bold text-gray-900">{label}:</span>{' '}{value}
    </p>
);

const Project = ({ title, stack, bullets }) => (
    <div>
        <p className="text-[12.5px] font-bold text-gray-900">
            {title}{' '}
            <span className="font-normal text-gray-500 text-[11.5px]">| {stack}</span>
        </p>
        <ul className="list-disc ml-4 space-y-[3px] text-[12px] leading-[1.5] text-gray-700 mt-0.5">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
    </div>
);

export default Resume;
