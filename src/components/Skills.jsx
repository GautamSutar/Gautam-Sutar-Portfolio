import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiDjango, SiFlask,
  SiNodedotjs, SiMongodb, SiPostgresql, SiRedis, SiDocker,
  SiTensorflow, SiPytorch, SiApachekafka, SiScikitlearn,
  SiGit, SiStreamlit, SiMysql,
} from 'react-icons/si';
import { FaBrain, FaLeaf, FaAws, FaLink } from 'react-icons/fa';

const allSkills = [
  // Languages
  { name: 'Python',      icon: SiPython,        color: '#3B82F6', category: 'Languages' },
  { name: 'JavaScript',  icon: SiJavascript,    color: '#F7DF1E', category: 'Languages' },
  { name: 'TypeScript',  icon: SiTypescript,    color: '#3178C6', category: 'Languages' },

  // Frameworks
  { name: 'Django',      icon: SiDjango,        color: '#092E20', category: 'Frameworks' },
  { name: 'Flask',       icon: SiFlask,         color: '#FFFFFF', category: 'Frameworks' },
  { name: 'React',       icon: SiReact,         color: '#61DAFB', category: 'Frameworks' },
  { name: 'Node.js',     icon: SiNodedotjs,     color: '#339933', category: 'Frameworks' },
  { name: 'Streamlit',   icon: SiStreamlit,     color: '#FF4B4B', category: 'Frameworks' },
  { name: 'Celery',      icon: FaLeaf,           color: '#37814A', category: 'Frameworks' },

  // Databases
  { name: 'PostgreSQL',  icon: SiPostgresql,    color: '#4169E1', category: 'Databases' },
  { name: 'MongoDB',     icon: SiMongodb,       color: '#47A248', category: 'Databases' },
  { name: 'MySQL',       icon: SiMysql,         color: '#4479A1', category: 'Databases' },
  { name: 'Redis',       icon: SiRedis,         color: '#FF4438', category: 'Databases' },

  // Cloud & DevOps
  { name: 'Docker',      icon: SiDocker,        color: '#2496ED', category: 'Cloud & DevOps' },
  { name: 'AWS',         icon: FaAws,           color: '#FF9900', category: 'Cloud & DevOps' },
  { name: 'Git',         icon: SiGit,           color: '#F05032', category: 'Cloud & DevOps' },
  { name: 'Kafka',       icon: SiApachekafka,   color: '#231F20', category: 'Cloud & DevOps' },

  // AI & ML
  { name: 'TensorFlow',  icon: SiTensorflow,    color: '#FF6F00', category: 'AI & ML' },
  { name: 'PyTorch',     icon: SiPytorch,       color: '#EE4C2C', category: 'AI & ML' },
  { name: 'Scikit-learn',icon: SiScikitlearn,   color: '#F7931E', category: 'AI & ML' },
  { name: 'LangChain',   icon: FaLink,          color: '#34D399', category: 'AI & ML' },
];

const categories = ['All', 'Languages', 'Frameworks', 'Databases', 'Cloud & DevOps', 'AI & ML'];

const SkillCard = ({ skill, idx }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: idx * 0.04 }}
      whileHover={{ y: -6, scale: 1.07 }}
      className="group relative flex flex-col items-center justify-center gap-3 p-5 glass-card cursor-default aspect-square"
    >
      {/* Glow blob behind icon */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{ backgroundColor: `${skill.color}22` }}
      />

      {/* Icon */}
      <div
        className="relative z-10 text-5xl transition-all duration-300"
        style={{ filter: `drop-shadow(0 0 0px ${skill.color})` }}
        onMouseEnter={e => e.currentTarget.style.filter = `drop-shadow(0 0 10px ${skill.color})`}
        onMouseLeave={e => e.currentTarget.style.filter = `drop-shadow(0 0 0px ${skill.color})`}
      >
        <Icon style={{ color: skill.color }} />
      </div>

      {/* Name */}
      <span className="relative z-10 text-xs font-semibold text-gray-300 group-hover:text-white transition-colors text-center leading-tight">
        {skill.name}
      </span>

      {/* Bottom glow line on hover */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-2/3 transition-all duration-400 rounded-full"
        style={{ backgroundColor: skill.color }}
      />
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative px-4 pointer-events-auto">
      {/* Background ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-2">What I Work With</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tools &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 text-sm tracking-widest uppercase">
            Languages · Frameworks · Databases · Cloud · AI
          </p>
        </motion.div>

        {/* Category filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_12px_rgba(59,130,246,0.45)]'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {filtered.map((skill, idx) => (
            <SkillCard key={skill.name} skill={skill} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
