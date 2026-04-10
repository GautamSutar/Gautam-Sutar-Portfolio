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
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-blue-500/30 font-sans relative">
      <ParticleBackground />
      <Navbar />
      <main className="overflow-hidden relative z-10 pointer-events-none">
        {/* Child components will need pointer-events-auto to be clickable */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <div className="bg-black/20 backdrop-blur-sm relative z-10 border-y border-white/5 pointer-events-auto">
          <Experience />
        </div>
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 relative z-10 bg-black/40 backdrop-blur-md pointer-events-auto">
        <p>© {new Date().getFullYear()} Gautam Sutar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
