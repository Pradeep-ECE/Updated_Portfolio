import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const Counter = ({ value, suffix = '', label }) => {
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
      <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-accent to-accent-secondary mb-2 drop-shadow-[0_0_10px_rgba(56,189,248,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.7)] transition-all duration-300 font-display">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-slate-500 font-medium tracking-widest uppercase text-xs group-hover:text-slate-300 transition-colors">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-primary border-y border-white/5 relative overflow-hidden">
      {/* Subtle gradient sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent-secondary/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 max-w-4xl mx-auto"
        >
          <Counter value={3} suffix="+" label="Years Experience" />
          <Counter value={50} suffix="k+" label="Concurrent Users" />
          <Counter value={95} suffix="%" label="Conflict Reduction" />
          <Counter value={40} suffix="%" label="Query Speedup" />
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
