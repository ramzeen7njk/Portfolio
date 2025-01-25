import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Video, Brain, Database, Coffee, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const [coffeeCount, setCoffeeCount] = useState(0);
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ABDUL RAMZEEN
          </motion.h1>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: Code, text: "Web Developer", color: "text-primary" },
              { icon: Video, text: "Video Editor", color: "text-accent" },
              { icon: Brain, text: "AI Expert", color: "text-primary" },
              { icon: Database, text: "Data Analyst", color: "text-accent" }
            ].map((role, index) => (
              <motion.span
                key={role.text}
                className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <role.icon className={`w-5 h-5 ${role.color}`} />
                <span>{role.text}</span>
              </motion.span>
            ))}
          </div>

          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transforming ideas into digital reality through innovative web solutions,
            creative video content, and cutting-edge AI applications.
            <span className="block mt-2 text-sm text-gray-400">
              Powered by {coffeeCount} cups of coffee and endless{' '}
              <Heart className="w-4 h-4 inline-block text-red-500" /> for coding
            </span>
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#contact"
              className="bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Let's Work Together
            </a>
            <button
              onClick={() => setCoffeeCount(prev => prev + 1)}
              className="flex items-center gap-2 bg-surface hover:bg-surface/80 px-8 py-4 rounded-lg transition-all duration-300"
            >
              <Coffee className="w-5 h-5" />
              <span>Buy me coffee #{coffeeCount + 1}</span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <AnimatePresence mode="wait">
              <motion.img
                key={theme}
                src={theme === 'dark' ? "/image/bg_2.png" : "/image/bg_1.png"}
                alt="Abdul Ramzeen"
                className="relative rounded-2xl w-full h-[600px] md:h-[700px] object-contain"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.05 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;