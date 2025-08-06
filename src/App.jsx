import React, { useState, useEffect } from 'react';
import './index.css';
import {CursorTrail} from './components/ui/CursorTrail';
import {Navigation} from './components/sections/Navigation';
import HeroSection from './components/sections/HeroSection';
import {AboutSection} from './components/sections/AboutSection';
import {ServicesSection} from './components/sections/ServicesSection';
import {ProjectsSection} from './components/sections/ProjectsSection';
import {ProcessSection} from './components/sections/ProcessSection';
import {TeamSection} from './components/sections/TeamSection';
import {TestimonialsSection} from './components/sections/TestimonialsSection';
import {ContactSection} from './components/sections/ContactSection';
import {Footer} from './components/sections/Footer';
import { PageLoader } from './components/ui/pageLoader';
const App = () => {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-color-scheme', initialTheme);
  }, []);
  
  // Handle theme toggle
  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-color-scheme', newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  // Handle scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleContactClick = () => scrollToSection('#contact');
  const handleProjectsClick = () => scrollToSection('#projects');
  
  return (
    <div className="App">
      <CursorTrail />
      <PageLoader isLoading={isLoading} />
      
      <Navigation 
        activeSection={activeSection} 
        theme={theme} 
        onThemeToggle={handleThemeToggle} 
      />
      <div style={{
        paddingTop:"20px"
      }}>
        
      <HeroSection 
        onContactClick={handleContactClick}
        onProjectsClick={handleProjectsClick}
      />
      
      <AboutSection />
      <ServicesSection />
      {/* <ProjectsSection /> */}
      <ProcessSection />
      {/* <TeamSection /> */}
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
      </div>
    </div>
  );
};

export default App;