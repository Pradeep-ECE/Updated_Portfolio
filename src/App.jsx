import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import Resume from './components/Resume';

// Scroll progress bar — thin 2px gradient line at top of viewport
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  );
};

const MainLayout = () => {
  return (
    <div className="bg-primary min-h-screen text-white font-sans selection:bg-accent selection:text-primary relative">
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Stats />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      {/* CustomCursor is outside Routes so it renders on ALL pages, including /resume.
          index.css hides the native cursor globally, so without this the resume page
          would have no cursor at all. */}
      <CustomCursor />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
