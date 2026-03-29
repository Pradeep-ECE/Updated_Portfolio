import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const WhyMe = () => {
  const reasons = [
    {
      title: "End-to-End Ownership",
      description: "I don't just write code; I own the entire backend lifecycle from design to deployment."
    },
    {
      title: "Scalability First",
      description: "I design systems that can handle growth, focusing on performance and reliability."
    },
    {
      title: "Production Ready",
      description: "Comfortable handling production issues, monitoring, and ensuring high availability."
    },
    {
      title: "Business Focused",
      description: "I build solutions that directly support business goals and user needs."
    }
  ];

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-accent">Me?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I bring more than just coding skills to the table.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary/50 p-6 rounded-xl border border-gray-800 hover:border-accent/50 transition-colors"
            >
              <div className="mb-4 text-accent">
                <FaCheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
