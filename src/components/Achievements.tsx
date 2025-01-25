import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  image: string;
  category: string;
  certificate?: string | string[]; // Can be single string or array of strings
}

const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const skillbuildCertificates = [
    './certificates/sk1.jpg',
    './certificates/sk2.jpg',
    './certificates/sk3.jpg',
    './certificates/sk4.jpg',
    './certificates/sk5.jpg',
    './certificates/sk6.jpg'
  ];

  const achievements: Achievement[] = [
    {
      title: 'IBM Certification',
      description: 'Successfully completed IBM Full Stack Development certification program.',
      image: './image/ibmcert.jpg',
      category: 'Certification',
      certificate: './certificates/ibm.jpg'
    },
    {
      title: 'Intel Unnati Program',
      description: 'Completed intensive training program in emerging technologies.',
      image: 'image/intelcert.jpg',
      category: 'Training',
      certificate: 'certificates/intel.jpg'
    },
    {
      title: 'IBM Skillbuild',
      description: 'Achieved proficiency in various technical skills through IBM Skillbuild platform.',
      image: 'image/ibmski.jpg',
      category: 'Training',
      certificate: skillbuildCertificates
    }
  ];

  const handleCertificateClick = (certificate: string | string[]) => {
    if (Array.isArray(certificate)) {
      setCurrentIndex(0);
      setSelectedCertificate(certificate[0]);
    } else {
      setSelectedCertificate(certificate);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (Array.isArray(achievements[2].certificate)) {
      setCurrentIndex((prev) => 
        prev === skillbuildCertificates.length - 1 ? 0 : prev + 1
      );
      setSelectedCertificate(skillbuildCertificates[
        currentIndex === skillbuildCertificates.length - 1 ? 0 : currentIndex + 1
      ]);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (Array.isArray(achievements[2].certificate)) {
      setCurrentIndex((prev) => 
        prev === 0 ? skillbuildCertificates.length - 1 : prev - 1
      );
      setSelectedCertificate(skillbuildCertificates[
        currentIndex === 0 ? skillbuildCertificates.length - 1 : currentIndex - 1
      ]);
    }
  };

  return (
    <>
      <section id="achievements" className="py-20 bg-surface/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">My Achievements</h2>
            <p className="text-xl text-gray-400">Milestones and recognitions along my journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {achievement.certificate && (
                    <div 
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer"
                      onClick={() => handleCertificateClick(achievement.certificate!)}
                    >
                      <span className="text-white text-lg font-semibold">View Achievement</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{achievement.description}</p>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                    {achievement.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-4xl w-full bg-surface p-2 rounded-lg"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute -top-4 -right-4 p-2 bg-primary rounded-full text-white hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              
              {/* Navigation Arrows - Only show for Skillbuild certificates */}
              {Array.isArray(achievements[2].certificate) && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-primary/80 rounded-full text-white hover:bg-primary transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-primary/80 rounded-full text-white hover:bg-primary transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <img
                src={selectedCertificate}
                alt="Certificate"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Achievements; 