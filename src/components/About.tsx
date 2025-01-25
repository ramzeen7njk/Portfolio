import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code, Brain, Database, Clock, Puzzle, Users, MessageSquare, Compass } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'IBM',
      period: '2024',
      description: 'Contributed to full-stack web development projects using modern technologies.'
    },
    {
      title: 'Intern',
      company: 'Intel Unnati Program',
      period: '2024',
      description: 'Participated in cutting-edge technology programs and hands-on projects.'
    }
  ];

  const education = {
    degree: 'B.Tech in IoT',
    institution: 'Crescent University, Chennai',
    gpa: '9.24 CGPA',
    achievements: ['Academic Excellence Award', 'Multiple Hackathon Participations']
  };

  const technicalSkills = [
    { name: 'HTML/CSS', icon: Code, level: 90 },
    { name: 'JavaScript/React', icon: Code, level: 85 },
    { name: 'Python', icon: Brain, level: 80 },
    { name: 'SQL/PHP', icon: Database, level: 75 },
  ];

  const softSkills = [
    { 
      name: 'Time Management',
      icon: Clock,
      level: 90,
      description: 'Efficiently organizing and prioritizing tasks to meet deadlines'
    },
    { 
      name: 'Problem Solving',
      icon: Puzzle,
      level: 85,
      description: 'Analytical thinking and creative solution development'
    },
    { 
      name: 'Team Collaboration',
      icon: Users,
      level: 88,
      description: 'Working effectively in team environments and group projects'
    },
    { 
      name: 'Communication',
      icon: MessageSquare,
      level: 85,
      description: 'Clear and effective verbal and written communication'
    },
    { 
      name: 'Adaptability',
      icon: Compass,
      level: 87,
      description: 'Quick learning and adaptation to new technologies and situations'
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg text-gray-400 mb-4">
              Full-stack developer and creative video editor, blending technical expertise with artistic vision. 
              When I'm not crafting clean code or editing compelling visuals, you'll find me exploring the 
              latest AI tools and turning innovative ideas into reality. 🚀
            </p>
            <p className="text-lg text-gray-400">
              Driven by curiosity and powered by coffee, I thrive at the intersection of development, 
              multimedia, and artificial intelligence. Always excited to push creative boundaries and 
              bring unique perspectives to every project. Whether it's debugging code or perfecting 
              that frame-perfect edit, I'm all in! ✨
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="text-primary" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-surface p-6 rounded-lg"
                  >
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.period}</p>
                    <p className="mt-2">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="text-primary" />
                Education
              </h3>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-surface p-6 rounded-lg"
              >
                <h4 className="font-semibold text-lg">{education.degree}</h4>
                <p className="text-primary">{education.institution}</p>
                <p className="text-accent font-semibold mt-2">GPA: {education.gpa}</p>
                <div className="mt-4">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="text-accent w-4 h-4" />
                    Achievements
                  </h5>
                  <ul className="list-disc list-inside space-y-1">
                    {education.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Code className="text-primary" />
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px -15px rgba(var(--color-primary), 0.3)" 
                    }}
                    className="bg-surface p-4 rounded-lg transform-gpu"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <skill.icon className="text-primary w-5 h-5" />
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Brain className="text-primary" />
                Soft Skills
              </h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <h4 className="font-medium">{skill.name}</h4>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{skill.description}</p>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;