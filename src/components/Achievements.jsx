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
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative flex flex-col overflow-hidden group rounded-2xl p-[1px]"
            >
              {/* Animated glowing border background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-blue-500/50 group-hover:to-emerald-500/50 transition-colors duration-500 opacity-50 group-hover:opacity-100 rounded-2xl blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-blue-500/50 group-hover:to-emerald-500/50 transition-colors duration-500 rounded-2xl" />

              <div className="p-8 flex-1 flex flex-col items-center text-center relative z-10 glass-card rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-xl h-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-shadow duration-500">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-white/10 group-hover:to-white/5 group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
