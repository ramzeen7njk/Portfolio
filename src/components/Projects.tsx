import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Blind Assistance System',
      description: 'An innovative system using computer vision and AI to help visually impaired individuals navigate their environment safely.',
      image: './image/blind.jpeg',
      tags: ['Python', 'TensorFlow', 'OpenCV', 'AI'],
      links: {
        demo: '#',
        github: 'https://github.com/ramzeen7njk/voice-enabled-blind-assistance/blob/main/face.py'
      }
    },
    {
      title: 'Homify',
      description: 'Online home service web application connecting service providers with customers.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      links: {
        demo: '#',
        github: 'https://github.com/ramzeen7njk/Homify'
      }
    },
    {
      title: 'Smart Attendance System',
      description: 'AI-powered attendance system using facial recognition technology.',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'OpenCV', 'Face Recognition', 'SQLite'],
      links: {
        demo: '#',
        github: 'https://github.com/ramzeen7njk/face-attendance/blob/main/attendance.py'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400">Showcasing some of my best work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/20 rounded-full hover:bg-primary/40 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="View Code"
                  >
                    <Github className="w-7 h-7 text-white" />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;