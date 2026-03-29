import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pradeep M. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/Pradeep-ECE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pradeep-m-7367411a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:contact@pradeep.dev"
            className="text-gray-400 hover:text-accent transition-colors text-xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
