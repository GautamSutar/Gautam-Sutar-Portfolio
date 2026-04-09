import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 font-sans">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <div className="bg-[#050505]">
          <Experience />
        </div>
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 relative z-10 bg-[#020202]">
        <p>© {new Date().getFullYear()} Gautam Sutar. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with React, Tailwind CSS & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
