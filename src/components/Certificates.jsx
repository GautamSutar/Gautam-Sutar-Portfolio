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
    <section id="certificates" className="py-20 relative px-4 pointer-events-auto">
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

        {/* Inject reverse CSS & Creative 3D Wave */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes infinite-scroll-reverse {
            /* Start far left, move right towards 0 */
            0% { transform: translateX(calc(-50% - 12px)); }
            100% { transform: translateX(0); }
          }
          .animate-infinite-scroll-reverse {
            animation: infinite-scroll-reverse 45s linear infinite;
            width: max-content;
            padding-top: 40px;
            padding-bottom: 40px;
          }
          .animate-infinite-scroll-reverse:hover {
            animation-play-state: paused !important;
          }
          /* Creative UI wave effect */
          .cert-wrap:nth-child(even) {
            transform: translateY(25px) rotate(3deg);
          }
          .cert-wrap:nth-child(odd) {
            transform: translateY(-25px) rotate(-3deg);
          }
          .cert-wrap:hover {
            transform: translateY(0) rotate(0deg) scale(1.05) !important;
            z-index: 50;
          }
        `}} />

        {/* Reverse Infinite Marquee Slider */}
        <div className="overflow-hidden w-full py-10 -mx-4 px-4 sm:mx-0 sm:px-0 mt-4 relative perspective-1000">
          
          {/* Subtle fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>

          <div className="animate-infinite-scroll-reverse flex gap-8">
            {/* First Set */}
            <div className="flex gap-8 shrink-0 mt-2">
              {certificates.map((cert, idx) => (
                <div key={`${cert.id}-1`} className="cert-wrap w-[300px] md:w-[350px] shrink-0 h-full transition-all duration-500 ease-out">
                  <motion.div
                    whileHover={{ scale: 1 }} // handled by css
                    onClick={() => setSelectedCert(cert)}
                    className="relative flex flex-col overflow-hidden group rounded-2xl p-[1px] cursor-pointer h-full"
                  >
                    {/* Animated glowing border background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-blue-500/50 group-hover:to-emerald-500/50 transition-colors duration-500 opacity-50 group-hover:opacity-100 rounded-2xl blur-sm" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-blue-500/50 group-hover:to-emerald-500/50 transition-colors duration-500 rounded-2xl" />

                    <div className="flex-1 flex flex-col relative z-10 glass-card rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-xl h-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-shadow duration-500">
                      {/* Thumbnail */}
                      <div className="h-40 overflow-hidden border-b border-white/5 flex-shrink-0 relative rounded-t-2xl">
                        <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>

                      {/* Info */}
                      <div className="p-5 flex flex-col gap-3 flex-1">
                        <div className="flex justify-between items-start">
                          <span className={`text-[10px] px-2.5 py-1 rounded-full font-semibold border ${cert.tagColor.replace('bg-', 'border-').replace('/10', '/30')} ${cert.tagColor} shadow-inner`}>
                            {cert.tag}
                          </span>
                        </div>
                        
                        <h3 className="text-[15px] font-bold text-white leading-snug line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-300">
                          {cert.title}
                        </h3>
                        
                        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-semibold text-emerald-400 truncate">{cert.issuer}</p>
                            {cert.date && <p className="text-[11px] text-gray-500 mt-0.5">{cert.date}</p>}
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border group-hover:border-blue-500/30 transition-all duration-300 ml-2 shrink-0">
                            <ExternalLink size={14} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Duplicate Set for Seamless Looping */}
            <div className="flex gap-8 shrink-0 mt-2" aria-hidden="true">
              {certificates.map((cert) => (
                <div key={`${cert.id}-2`} className="cert-wrap w-[300px] md:w-[350px] shrink-0 h-full transition-all duration-500 ease-out">
                  <motion.div
                    whileHover={{ scale: 1 }}
                    onClick={() => setSelectedCert(cert)}
                    className="relative flex flex-col overflow-hidden group rounded-2xl p-[1px] cursor-pointer h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-blue-500/50 group-hover:to-emerald-500/50 transition-colors duration-500 opacity-50 group-hover:opacity-100 rounded-2xl blur-sm" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-blue-500/50 group-hover:to-emerald-500/50 transition-colors duration-500 rounded-2xl" />

                    <div className="flex-1 flex flex-col relative z-10 glass-card rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-xl h-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-shadow duration-500">
                      <div className="h-40 overflow-hidden border-b border-white/5 flex-shrink-0 relative rounded-t-2xl">
                        <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <div className="p-5 flex flex-col gap-3 flex-1">
                        <div className="flex justify-between items-start">
                          <span className={`text-[10px] px-2.5 py-1 rounded-full font-semibold border ${cert.tagColor.replace('bg-', 'border-').replace('/10', '/30')} ${cert.tagColor} shadow-inner`}>
                            {cert.tag}
                          </span>
                        </div>
                        <h3 className="text-[15px] font-bold text-white leading-snug line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-300">
                          {cert.title}
                        </h3>
                        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-semibold text-emerald-400 truncate">{cert.issuer}</p>
                            {cert.date && <p className="text-[11px] text-gray-500 mt-0.5">{cert.date}</p>}
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border group-hover:border-blue-500/30 transition-all duration-300 ml-2 shrink-0">
                            <ExternalLink size={14} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
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
