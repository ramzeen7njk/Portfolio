import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import emailjs from '@emailjs/browser';
import { ThemeProvider } from './context/ThemeContext';
import Achievements from './components/Achievements';

function App() {
  useEffect(() => {
    emailjs.init('00UUB451EQRZC8l1w');
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-text">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <Projects />
                <Achievements />
                <Contact />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;