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
            <a href="https://github.com/GautamSutar" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/gautamsutar/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-emerald-500/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1">
              <FaLinkedin size={22} />
            </a>
            <a href="mailto:gautamsutar.in@gmail.com" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:text-blue-400 transition-all duration-300 hover:-translate-y-1">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        {/* Visual / Photo Side */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="relative flex justify-center items-center pointer-events-auto"
          style={{ minHeight: '460px' }}
        >
          {/* Warm amber glow — pulled from the photo's studio background */}
          <motion.div
            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.06, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-[28px]"
            style={{
              width: '340px', height: '420px',
              background: 'radial-gradient(ellipse at 50% 40%, rgba(190,130,55,0.28) 0%, rgba(120,70,20,0.15) 45%, transparent 75%)',
              filter: 'blur(28px)',
            }}
          />
          {/* Cool blue counter-glow at bottom for depth */}
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-0 rounded-b-[28px]"
            style={{
              width: '280px', height: '160px',
              background: 'radial-gradient(ellipse at 50% 100%, rgba(30,60,140,0.35) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />

          {/* Outer glow halo — amber-warm */}
          <motion.div
            animate={{ opacity: [0.18, 0.32, 0.18] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute z-0 rounded-[28px]"
            style={{
              width: '312px', height: '392px',
              boxShadow: '0 0 0 1px rgba(200,145,60,0.2), 0 0 40px rgba(190,120,40,0.25), 0 0 80px rgba(100,60,10,0.15)',
            }}
          />

          {/* Portrait card */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.025, y: -2 }}
            transition2={{ duration: 0.3 }}
            className="relative z-10 cursor-pointer"
          >
            {/* Outer border — warm gold top, cool blue bottom */}
            <div
              className="p-[1.5px] rounded-[22px]"
              style={{
                background: 'linear-gradient(170deg, rgba(218,165,60,0.9) 0%, rgba(200,150,70,0.5) 30%, rgba(40,60,130,0.5) 70%, rgba(60,100,200,0.7) 100%)',
              }}
            >
              {/* Inner dark gap — the "frame" */}
              <div className="p-[3px] rounded-[21px] bg-[#05080f]">
                {/* Inner subtle border */}
                <div
                  className="rounded-[18px] overflow-hidden relative"
                  style={{
                    width: '270px',
                    height: '350px',
                  }}
                >
                  <img
                    src="/Gautam.png"
                    alt="Gautam Sutar"
                    className="w-full h-full object-cover object-top"
                    style={{ objectPosition: '50% 5%' }}
                  />
                  {/* Top light hit — like light catching a frame edge */}
                  <div
                    className="absolute inset-x-0 top-0 h-24 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255,220,150,0.07) 0%, transparent 100%)',
                    }}
                  />
                  {/* Bottom dark vignette — shirt blends into dark frame */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(5,8,15,0.7) 0%, rgba(5,8,15,0.2) 60%, transparent 100%)',
                    }}
                  />
                  {/* Subtle diagonal gleam sweep */}
                  <motion.div
                    animate={{ x: ['-160%', '260%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
                    className="absolute inset-0 z-10 w-1/4 h-full pointer-events-none"
                    style={{
                      background: 'linear-gradient(to right, transparent, rgba(255,230,180,0.08), transparent)',
                      transform: 'skewX(-20deg)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Gold corner accents — top only (warm light hits top) */}
            <div
              className="absolute top-0 left-0 w-6 h-6 pointer-events-none"
              style={{
                borderTop: '2px solid rgba(218,165,60,0.85)',
                borderLeft: '2px solid rgba(218,165,60,0.85)',
                borderRadius: '20px 0 0 0',
              }}
            />
            <div
              className="absolute top-0 right-0 w-6 h-6 pointer-events-none"
              style={{
                borderTop: '2px solid rgba(218,165,60,0.85)',
                borderRight: '2px solid rgba(218,165,60,0.85)',
                borderRadius: '0 20px 0 0',
              }}
            />
            {/* Blue corner accents — bottom only (cool dark shadow area) */}
            <div
              className="absolute bottom-0 left-0 w-6 h-6 pointer-events-none"
              style={{
                borderBottom: '2px solid rgba(60,100,210,0.7)',
                borderLeft: '2px solid rgba(60,100,210,0.7)',
                borderRadius: '0 0 0 20px',
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none"
              style={{
                borderBottom: '2px solid rgba(60,100,210,0.7)',
                borderRight: '2px solid rgba(60,100,210,0.7)',
                borderRadius: '0 0 20px 0',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
