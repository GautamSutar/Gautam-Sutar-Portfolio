import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, BrainCircuit, Server, Code } from 'lucide-react';

const experiences = [
  {
    role: 'Python Developer',
    company: 'Alphawizz',
    duration: 'July 7, 2025 - Sep 3, 2025',
    description: 'Designed and implemented secure REST APIs for core services. Formulated and integrated custom ML models into backend endpoints.',
    icon: <Server size={20} className="text-blue-400" />
  },
  {
    role: 'Python Intern',
    company: 'Edunet Foundation',
    duration: 'Feb 15, 2025 - March 7, 2025',
    description: 'Collaborated on an AI-based resume ranking system that improved processing time for recruiters.',
    icon: <Code size={20} className="text-emerald-400" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative px-4 pointer-events-auto">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-0 md:pl-0 after:absolute after:inset-y-0 after:-left-[1px] after:w-[2px] after:bg-gradient-to-b after:from-blue-500/50 after:via-emerald-500/50 after:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-10 ml-8 md:ml-10 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0a0a0a] flex items-center justify-center mt-0.5 group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300 z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.8)]">
                 <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hidden md:flex items-center justify-center absolute shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:border-emerald-500/30 transition-all duration-300">
                   {exp.icon}
                 </div>
              </div>

              {/* Experience Card */}
              <motion.div 
                whileHover={{ x: 8, scale: 1.01 }}
                className="relative flex flex-col overflow-hidden rounded-2xl p-[1px]"
              >
                {/* Glowing border background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-blue-500/50 group-hover:to-emerald-500/50 transition-colors duration-500 opacity-50 group-hover:opacity-100 rounded-2xl blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-blue-500/50 group-hover:to-emerald-500/50 transition-colors duration-500 rounded-2xl" />

                <div className="glass-panel p-6 relative z-10 rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-shadow duration-500 h-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-300">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 rounded-full w-fit mt-2 md:mt-0 shadow-inner">
                      {exp.company}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-400 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 animate-pulse"></span>
                    {exp.duration}
                  </p>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
