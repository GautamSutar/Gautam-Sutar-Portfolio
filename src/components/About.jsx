import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative px-4 pointer-events-auto">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-12 relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Passionate & Driven</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a dedicated Backend and AI/ML Engineer with a strong focus on Python, Django, and Flask. 
              My journey involves building scalable applications, designing robust REST APIs, and harnessing the power of Machine Learning to craft intelligent systems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With hands-on experience using PostgreSQL, Redis, Celery, and Docker, I excel at optimizing performance 
              and creating seamless integrations between AI models and real-world backend architectures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-center border-l-4 border-blue-500/30 hover:border-blue-500/80 transition-colors duration-500"
          >
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-emerald-400">⚡</span> Core Focus Areas
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">Backend Architecture & APIs</h4>
                  <p className="text-xs text-gray-400 mt-1">Designing scalable, event-driven async systems with Python, Django, and Celery.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-emerald-400 transition-colors">AI & LLM Integration</h4>
                  <p className="text-xs text-gray-400 mt-1">Embedding intelligent models directly into core infrastructures.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors">Autonomous Agent Systems</h4>
                  <p className="text-xs text-gray-400 mt-1">Building multi-agent task loops for optimization and enterprise workflows.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-orange-400 transition-colors">Data Modeling & Performance</h4>
                  <p className="text-xs text-gray-400 mt-1">Optimizing Postgres caching strategies, complex queries, and Redis pipelines.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
