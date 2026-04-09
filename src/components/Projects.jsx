import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'JobVerse',
    subtitle: 'AI Hiring Platform',
    description:
      'AI-powered interview and assessment platform delivering real-time feedback, intelligent evaluation, and secure proctoring. Helps candidates improve faster and enables recruiters to make smarter, data-driven decisions.',
    tech: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'AI/ML'],
    impact: ['AI-based resume scoring & interview feedback', 'Improved async performance 25% via Celery + Redis', 'Secure proctoring with real-time evaluation'],
    github: 'https://github.com/GautamSutar/JobVerse',
    demo: null,
    tag: 'AI + Backend',
    tagColor: 'text-blue-300 bg-blue-500/10',
  },
  {
    id: 2,
    title: 'LinkChat',
    subtitle: 'Real-time Chat & Video App',
    description:
      'Full-stack web app connecting people worldwide for anonymous real-time text and video chats using Django Channels for WebSocket communication and WebRTC for secure P2P video calls.',
    tech: ['Django', 'Django Channels', 'WebSockets', 'WebRTC', 'React'],
    impact: ['Anonymous real-time text messaging', 'P2P video calls via WebRTC', 'Event-driven scalable architecture'],
    github: 'https://github.com/GautamSutar/LinkChat',
    demo: 'https://linkchat-seven.vercel.app/',
    tag: 'Real-time',
    tagColor: 'text-emerald-300 bg-emerald-500/10',
  },
  {
    id: 3,
    title: 'TravelMitra',
    subtitle: 'AI-Assisted Travel Planner',
    description:
      'Full-stack MERN web app that simplifies travel planning with personalized recommendations, hotel bookings, and cultural insights. AI-assisted trip suggestions with manual customization.',
    tech: ['Node.js', 'Express', 'React', 'MongoDB', 'REST API'],
    impact: ['AI-powered travel recommendations', 'Hotel bookings & cultural insights', 'Hidden gems & local festival discovery'],
    github: 'https://github.com/GautamSutar/TravelMitra1',
    demo: 'https://travel-mitra1-kw8x.vercel.app/',
    tag: 'Full Stack',
    tagColor: 'text-purple-300 bg-purple-500/10',
  },
  {
    id: 4,
    title: 'NEURAVEND',
    subtitle: 'Autonomous Multi-Agent Vendor System',
    description:
      'Autonomous multi-agent vendor decision system using MCDA (TOPSIS), ethics scoring, scenario simulation, and transparent logging to help retail and procurement teams identify optimal vendors.',
    tech: ['Python', 'Multi-Agent AI', 'TOPSIS/MCDA', 'LLM', 'Streamlit'],
    impact: ['Autonomous vendor scoring with ethics layer', 'Offline + AI-augmented support', 'Compliance-ready transparent logging'],
    github: 'https://github.com/GautamSutar/NEURAVEND-Autonomous-Multi-Agent-Vendor-Decision-System',
    demo: null,
    tag: 'AI Agents',
    tagColor: 'text-yellow-300 bg-yellow-500/10',
  },
  {
    id: 5,
    title: 'CogitoCore',
    subtitle: 'Sustainable Vendor Decision System',
    description:
      'Multi-Agent AI system built for Kaggle AI Agentic Competition. Optimizes vendor selection with a focus on supply chain sustainability for enterprise purchasing teams.',
    tech: ['Python', 'Streamlit', 'Multi-Agent AI', 'LLM', 'Sustainability AI'],
    impact: ['Kaggle AI Agentic Competition entry', 'Team: Hei Yiu Chiu, Joshua B, Aakarshak Sethi', 'Supply chain sustainability optimization'],
    github: 'https://github.com/GautamSutar/Sustainable-Vendor-Decision-System-CogitoCore',
    demo: 'https://sustainable-vendor-decision-system-cogitocore-tl2juvlnpmbdbat7.streamlit.app/',
    tag: 'AI (Team)',
    tagColor: 'text-green-300 bg-green-500/10',
  },
  {
    id: 6,
    title: 'ASL Translator',
    subtitle: 'AI Sign Language Translator',
    description:
      'Deep learning project that translates American Sign Language (ASL) into spoken English in real-time. Includes the full workflow for data collection, model training, and live inference.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Deep Learning'],
    impact: ['Real-time ASL to English translation', 'Complete ML pipeline: data → train → infer', 'Accessibility-focused AI application'],
    github: 'https://github.com/GautamSutar/AI-powered-Sign-Language-Translator',
    demo: null,
    tag: 'Deep Learning',
    tagColor: 'text-pink-300 bg-pink-500/10',
  },
  {
    id: 7,
    title: 'CatDogVision',
    subtitle: 'CNN Image Classifier',
    description:
      'Lightweight deep learning project that classifies images of cats and dogs using a Convolutional Neural Network built with TensorFlow and Keras.',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Image Classification'],
    impact: ['Binary image classification with CNN', 'Built and trained from scratch', 'High accuracy on test dataset'],
    github: 'https://github.com/GautamSutar/Convolutional-Neural-Network--CatDogVision',
    demo: null,
    tag: 'ML / CV',
    tagColor: 'text-orange-300 bg-orange-500/10',
  },
  {
    id: 8,
    title: 'Bank Churn Predictor',
    subtitle: 'ANN Customer Churn Model',
    description:
      'ANN model built with TensorFlow/Keras to predict bank customer churn. Features full data preprocessing including Label & One-Hot Encoding and feature scaling.',
    tech: ['Python', 'TensorFlow', 'Keras', 'ANN', 'Scikit-learn'],
    impact: ['Predicts at-risk customers for retention', 'Confusion matrix & accuracy evaluation', 'Full preprocessing pipeline'],
    github: 'https://github.com/GautamSutar?tab=repositories',
    demo: null,
    tag: 'ML / ANN',
    tagColor: 'text-cyan-300 bg-cyan-500/10',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const tags = ['All', 'AI + Backend', 'Real-time', 'Full Stack', 'AI Agents', 'Deep Learning', 'ML / CV', 'ML / ANN', 'AI (Team)'];

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.tag === filter);

  return (
    <section id="projects" className="py-20 relative px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                filter === tag
                  ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="glass-card flex flex-col overflow-hidden group"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${project.tagColor}`}>
                      {project.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                    <p className="text-sm text-gray-400">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                <ul className="mb-4 space-y-1.5">
                  {project.impact.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-emerald-400 mt-0.5 shrink-0">▹</span> {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <FaGithub size={16} /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/GautamSutar?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full text-sm font-medium transition-all"
          >
            <FaGithub size={18} /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
