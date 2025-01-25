import React from 'react';
import { motion } from 'framer-motion';
import { Code, Video, Brain, Database, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web development using modern technologies like React, Node.js, and more.',
      features: ['Responsive Design', 'API Integration', 'Performance Optimization']
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing and post-production services for various content types.',
      features: ['Motion Graphics', 'Color Grading', 'Sound Design']
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Custom AI and machine learning solutions for business automation and optimization.',
      features: ['Computer Vision', 'Natural Language Processing', 'Predictive Analytics']
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Comprehensive data analysis and visualization services for informed decision-making.',
      features: ['Data Visualization', 'Statistical Analysis', 'Reporting']
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-xl text-gray-400">Delivering excellence across multiple domains</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-surface p-6 rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary px-8 py-4 rounded-lg transition-colors"
          >
            <Users className="w-5 h-5" />
            <span>Work with Me</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;