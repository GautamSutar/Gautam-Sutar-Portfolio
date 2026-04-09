import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025]',
    issuer: 'Udemy',
    date: 'April 14, 2025',
    hours: '43 total hours',
    certNo: 'UC-dacaa6fa-ea54-470c-a7c2-f0885e0d61c1',
    verifyUrl: 'https://ude.my/UC-dacaa6fa-ea54-470c-a7c2-f0885e0d61c1',
    image: '/cert-ml-az.png',
    tag: 'Machine Learning',
    tagColor: 'bg-blue-500/10 text-blue-300',
  },
  {
    id: 2,
    title: '100 Days of Code™: The Complete Python Pro Bootcamp',
    issuer: 'Udemy',
    date: 'March 20, 2026',
    hours: '56.5 total hours',
    certNo: 'UC-ad1afc19-b8e7-49ee-9c5b-a17ce0472c9c',
    verifyUrl: 'https://ude.my/UC-ad1afc19-b8e7-49ee-9c5b-a17ce0472c9c',
    image: '/python.jpg',
    tag: 'Python',
    tagColor: 'bg-yellow-500/10 text-yellow-300',
  },
  {
    id: 3,
    title: 'React, NodeJS, Express & MongoDB — The MERN Fullstack Guide',
    issuer: 'Udemy',
    date: 'April 21, 2025',
    hours: '19 total hours',
    certNo: 'UC-2e3599bd-fc8b-4ca4-beb1-9fb611e9bbfb',
    verifyUrl: 'https://ude.my/UC-2e3599bd-fc8b-4ca4-beb1-9fb611e9bbfb',
    image: '/mern_certificate.jpg',
    tag: 'Full Stack',
    tagColor: 'bg-emerald-500/10 text-emerald-300',
  },
  {
    id: 4,
    title: '5-Day AI Agents Intensive Course with Google',
    issuer: 'Kaggle × Google',
    date: 'December 18, 2025',
    hours: null,
    certNo: null,
    verifyUrl: '#',
    image: '/5-Day AI Agents Intensive Course with Google.png',
    tag: 'AI / LLMs',
    tagColor: 'bg-purple-500/10 text-purple-300',
  },
  {
    id: 5,
    title: 'From Learner to Builder: Become an AI Agent Architect',
    issuer: 'IBM SkillsBuild',
    date: 'July 11, 2025',
    hours: null,
    certNo: 'PLAN-3B7347E6D3C0',
    verifyUrl: '#',
    image: '/ibm.jpg',
    tag: 'AI Architecture',
    tagColor: 'bg-blue-500/10 text-blue-300',
  },
  {
    id: 6,
    title: 'Gen AI Study Jam Campaign — Certificate of Completion',
    issuer: 'Google Developer Student Club (GDSC), PIEMR',
    date: 'May 28, 2024',
    hours: null,
    certNo: null,
    verifyUrl: '#',
    image: '/gdgcertificate.png',
    tag: 'Gen AI',
    tagColor: 'bg-green-500/10 text-green-300',
  },
  {
    id: 7,
    title: 'GCET Hackathon 2026 — Certificate of Participation',
    issuer: 'G H Patel College of Engineering & Technology',
    date: '2026',
    hours: null,
    certNo: null,
    verifyUrl: '#',
    image: '/hackthone.jpg',
    tag: 'Hackathon',
    tagColor: 'bg-orange-500/10 text-orange-300',
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 relative px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm">Click any certificate to view it in detail</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card cursor-pointer group overflow-hidden flex flex-col"
            >
              {/* Thumbnail */}
              <div className="h-40 overflow-hidden border-b border-white/5 flex-shrink-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <span className={`text-xs px-2 py-0.5 rounded-full w-fit font-medium ${cert.tagColor}`}>
                  {cert.tag}
                </span>
                <h3 className="text-sm font-bold text-white leading-snug line-clamp-2">{cert.title}</h3>
                <div className="mt-auto pt-2 flex items-center justify-between">
                  <p className="text-xs text-emerald-400 font-medium truncate">{cert.issuer}</p>
                  <ExternalLink size={14} className="text-gray-500 group-hover:text-white transition-colors shrink-0 ml-2" />
                </div>
                {cert.date && <p className="text-xs text-gray-500">{cert.date}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl glass-panel overflow-hidden"
              >
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full rounded-t-2xl"
                />
                <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${selectedCert.tagColor}`}>
                      {selectedCert.tag}
                    </span>
                    <h3 className="text-white font-bold text-sm leading-snug mt-2">{selectedCert.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{selectedCert.issuer}{selectedCert.date ? ` · ${selectedCert.date}` : ''}{selectedCert.hours ? ` · ${selectedCert.hours}` : ''}</p>
                    {selectedCert.certNo && (
                      <p className="text-gray-500 text-xs mt-1 font-mono">Cert: {selectedCert.certNo}</p>
                    )}
                  </div>
                  {selectedCert.verifyUrl && selectedCert.verifyUrl !== '#' && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center gap-2 transition-colors"
                    >
                      Verify <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;
