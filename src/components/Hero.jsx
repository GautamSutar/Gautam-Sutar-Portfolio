import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-emerald-400 font-medium tracking-wide">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Gautam <span className="text-gradient">Sutar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 h-10">
            <Typewriter
              words={['Backend Developer', 'Python Developer', 'AI/ML Engineer']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            Passionate about building scalable applications and integrating AI/ML models into real-world backend systems. 
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#" className="px-6 py-3 glass-card text-white font-medium rounded-full transition-all flex items-center gap-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Resume <Download size={18} />
            </a>
          </div>

          <div className="flex gap-6 pt-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Decorative glowing blobs behind the image representation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-[60px] ml-10 mt-10"></div>
          
          {/* For now, a placeholder illustrative container for a 3D asset or profile pic */}
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 glass-panel rounded-full flex items-center justify-center border-4 border-white/5 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex flex-col items-center justify-center">
               <span className="text-6xl text-white/50">&lt;/&gt;</span>
               <span className="text-lg font-mono text-emerald-400 mt-4">AI x Backend</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
