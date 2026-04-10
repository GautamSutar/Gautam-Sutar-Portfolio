import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal } from 'lucide-react';

const achievements = [
  {
    title: 'Chief Minister Scholarship',
    description: 'Awarded for exceptional academic and co-curricular excellence.',
    icon: <Star size={24} className="text-yellow-400" />
  },
  {
    title: 'Merit-based Scholarships',
    description: 'Received multiple scholarships recognizing consistent academic performance.',
    icon: <Medal size={24} className="text-blue-400" />
  },
  {
    title: 'Hackathon Runner-up',
    description: 'Secured runner-up position demonstrating problem-solving and rapid prototyping skills.',
    icon: <Trophy size={24} className="text-emerald-400" />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative px-4 pointer-events-auto">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card p-8 flex flex-col items-center text-center group hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
