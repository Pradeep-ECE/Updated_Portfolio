import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';

const MainLayout = () => {
  return (
    <div className="bg-primary min-h-screen text-white font-sans selection:bg-accent selection:text-primary relative">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Stats />
      <Experience />
      <Projects />
      <WhyMe />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
