import React from 'react';
import {
    FaNodeJs, FaServer, FaDatabase, FaLock,
    FaGitAlt, FaDocker, FaAws, FaLinux, FaGithub, FaKey, FaReact, FaJs
} from 'react-icons/fa';
import { SiRedux } from "react-icons/si";
import {
    SiPostman, SiJenkins, SiPostgresql, SiMongodb, SiRedis, SiGraphql, SiExpress
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

export const skillCategories = [
    {
        title: "Back-End Core",
        subtitle: "APIs, Server & Runtime",
        delay: 0.1,
        skills: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "GraphQL", icon: <SiGraphql /> },
            { name: "REST APIs", icon: <FaServer /> },
            { name: "Server-Sent Events", icon: <FaServer /> },
            { name: "Auth / SSO", icon: <FaLock /> },
            { name: "JWT / OAuth 2.0", icon: <FaKey /> },
        ]
    },
    {
        title: "Databases & Caching",
        subtitle: "Storage, Querying & Optimization",
        delay: 0.2,
        skills: [
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Redis", icon: <SiRedis /> },
            { name: "Schema Modeling", icon: <FaDatabase /> },
            { name: "Query Optimization", icon: <FaDatabase /> },
        ]
    },
    {
        title: "DevOps & Tooling",
        subtitle: "Infra, CI/CD & Cloud",
        delay: 0.3,
        skills: [
            { name: "Docker", icon: <FaDocker /> },
            { name: "Jenkins (CI/CD)", icon: <SiJenkins /> },
            { name: "AWS (EC2, S3, RDS)", icon: <FaAws /> },
            { name: "Linux", icon: <FaLinux /> },
            { name: "Git & GitHub", icon: <FaGithub /> },
            { name: "Postman", icon: <SiPostman /> },
        ]
    },
    {
        title: "Full-Stack Touch",
        subtitle: "Frontend Proficiency",
        delay: 0.4,
        skills: [
            { name: "React.js", icon: <FaReact /> },
            { name: "JavaScript (ES6+)", icon: <FaJs /> },
            { name: "Redux", icon: <SiRedux /> },
        ]
    },
];
