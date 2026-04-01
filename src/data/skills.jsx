import React from 'react';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaMobileAlt, FaLayerGroup,
    FaNodeJs, FaServer, FaDatabase, FaLock, FaGitAlt, FaDocker, FaAws, FaLinux, FaGithub, FaKey
} from 'react-icons/fa';
import { SiRedux } from "react-icons/si";
import {
    SiPostman, SiJenkins, SiPostgresql, SiMongodb, SiRedis, SiGraphql, SiExpress
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

export const skillCategories = [
    {
        title: "Front-End",
        subtitle: "User Interface & Experience",
        delay: 0.2,
        skills: [
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "JavaScript (ES6+)", icon: <FaJs /> },
            { name: "React.js", icon: <FaReact /> },
            { name: "Responsive Design", icon: <FaMobileAlt /> },
            { name: "Component Architecture", icon: <FaLayerGroup /> },
        ]
    },
    {
        title: "Back-End",
        subtitle: "Server & Database",
        delay: 0.4,
        skills: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "REST APIs", icon: <FaServer /> },
            { name: "GraphQL", icon: <SiGraphql /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Redis (Caching)", icon: <SiRedis /> },
            { name: "Server-Sent Events", icon: <FaServer /> },
            { name: "Auth & Security", icon: <FaLock /> },
            { name: "SSO", icon: <FaKey /> },
            { name: "Schema Modeling", icon: <FaDatabase /> },
        ]
    },
    {
        title: "Tools & Others",
        subtitle: "Development & DevOps",
        delay: 0.6,
        skills: [
            { name: "Git & GitHub", icon: <FaGithub /> },
            { name: "Docker", icon: <FaDocker /> },
            { name: "AWS (EC2, S3, IAM)", icon: <FaAws /> },
            { name: "Jenkins (CI/CD)", icon: <SiJenkins /> },
            { name: "VS Code", icon: <VscVscode /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "Linux", icon: <FaLinux /> },
            { name: "Redux", icon: <SiRedux /> },
        ]
    }
];
