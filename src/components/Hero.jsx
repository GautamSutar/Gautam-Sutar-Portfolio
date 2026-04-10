import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden pointer-events-auto">

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full pointer-events-none">
        
        {/* Main Content Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 pointer-events-auto"
        >
          <p className="text-emerald-400 font-bold tracking-widest uppercase text-sm">Welcome to my space</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
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
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:-translate-y-1">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#" className="px-6 py-3 glass-card text-white font-medium rounded-full transition-all duration-300 flex items-center gap-2 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-1">
              Resume <Download size={18} />
            </a>
          </div>

          <div className="flex gap-6 pt-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-emerald-500/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1">
              <FaLinkedin size={22} />
            </a>
            <a href="mailto:contact@example.com" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:text-blue-400 transition-all duration-300 hover:-translate-y-1">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        {/* Visual / 3D Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center pointer-events-auto"
        >
          {/* Decorative glowing blobs behind the image representation */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/30 rounded-full blur-[80px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-[60px] ml-10 mt-10"
          />
          
          {/* Floating interactive container */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 glass-panel rounded-full flex items-center justify-center border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)] cursor-pointer"
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-emerald-500/10 flex flex-col items-center justify-center backdrop-blur-sm">
               <motion.span 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="text-6xl text-white/50 mb-2 inline-block"
               >
                 &lt;/&gt;
               </motion.span>
               <span className="text-xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mt-2 tracking-wider">
                 AI x Backend
               </span>
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
