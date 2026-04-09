import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative px-4">
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
            className="grid grid-cols-2 gap-6"
          >
            <div className="glass-card p-6 text-center hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-4xl font-bold text-gradient mb-2">120K+</h4>
              <p className="text-sm text-gray-400">Dataset Handled in ML</p>
            </div>
            <div className="glass-card p-6 text-center hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-4xl font-bold text-gradient mb-2">25%</h4>
              <p className="text-sm text-gray-400">Performance Improvement</p>
            </div>
            <div className="glass-card p-6 text-center hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-4xl font-bold text-gradient mb-2">100</h4>
              <p className="text-sm text-gray-400">Days of Python Code</p>
            </div>
            <div className="glass-card p-6 text-center hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-4xl font-bold text-gradient mb-2">Scale</h4>
              <p className="text-sm text-gray-400">Event-driven Systems</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
