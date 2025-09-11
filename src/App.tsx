import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Download, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import AnimatedSection from './components/AnimatedSection';
import SectionDivider from './components/SectionDivider';
import PageTransition from './components/PageTransition';
import MicroInteraction from './components/MicroInteraction';
import Overview from './components/Overview';
import ProblemStatement from './components/ProblemStatement';
import VisionGoals from './components/VisionGoals';
import ResearchInsights from './components/ResearchInsights';
import Execution from './components/Execution';
import Impact from './components/Impact';
import LearningsNextSteps from './components/LearningsNextSteps';
import CallToAction from './components/CallToAction';


const App: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16">
        {/* Modern Animated Background */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Floating Geometric Shapes */}
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 via-blue-500/15 to-purple-600/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-cyan-400/15 rounded-full blur-3xl"
            animate={{ 
              x: [0, -35, 0],
              y: [0, 25, 0],
              scale: [1, 0.8, 1],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 3
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 via-cyan-400/8 to-blue-500/10 rounded-full blur-2xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear"
            }}
          />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-40">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }} />
          </div>
        </motion.div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
            className="mb-12"
          >
            <motion.h1 
              className="text-8xl md:text-9xl font-black mb-8 display-font"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            >
              <span className="gradient-text">PathByte</span>
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 gradient-text-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
            >
              Simplifying Tech Career Preparation
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }}
            >
              A comprehensive roadmap platform that transforms overwhelming tech resources into clear, structured learning paths for aspiring developers.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <MicroInteraction type="hover-lift" intensity="subtle">
              <motion.a 
                href="https://pathbyte.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card-premium px-8 py-4 rounded-full flex items-center gap-3 group btn-animated"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <ExternalLink className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold">Live Project</span>
                <motion.div
                  className="w-4 h-4"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </motion.div>
              </motion.a>
            </MicroInteraction>
            <MicroInteraction type="hover-scale" intensity="subtle">
              <motion.a 
                href="https://github.com/Harhsit-Kumar-Patel/PathByte" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card px-8 py-4 rounded-full flex items-center gap-3 group btn-animated"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Github className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">GitHub Repo</span>
                <motion.div
                  className="w-4 h-4"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </motion.div>
              </motion.a>
            </MicroInteraction>
            <MicroInteraction type="ripple" intensity="medium">
              <motion.a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-8 py-4 rounded-full flex items-center gap-3 group btn-animated"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Download className="w-5 h-5 text-purple-400" />
                <span className="font-semibold">View Resume (PDF)</span>
                <motion.div
                  className="w-4 h-4"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                </motion.div>
              </motion.a>
            </MicroInteraction>
          </motion.div>
        </div>
      </section>

      {/* All Sections with Enhanced Animations */}
        <AnimatedSection id="overview" animationType="fade-in-up" duration={0.6}>
        <Overview />
      </AnimatedSection>
      <SectionDivider />
      
      <AnimatedSection id="problem" animationType="fade-in-left" duration={0.6}>
        <ProblemStatement />
      </AnimatedSection>
      <SectionDivider />
      
      <AnimatedSection id="vision" animationType="fade-in-right" duration={0.6}>
        <VisionGoals />
      </AnimatedSection>
      <SectionDivider />
      
      <AnimatedSection id="research" animationType="slide-up" duration={0.6}>
        <ResearchInsights />
      </AnimatedSection>
      <SectionDivider />
      
      <AnimatedSection id="execution" animationType="scale-in" duration={0.6}>
        <Execution />
      </AnimatedSection>
      <SectionDivider />
      
      <AnimatedSection id="impact" animationType="fade-in-up" duration={0.6}>
        <Impact />
      </AnimatedSection>
      <SectionDivider />
      
      <AnimatedSection id="learnings" animationType="fade-in-up" duration={0.6}>
        <LearningsNextSteps />
      </AnimatedSection>
      <SectionDivider />
      
      <AnimatedSection id="contact" animationType="stagger-children" duration={0.6} staggerDelay={0.1}>
        <CallToAction />
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 PathByte Case Study. Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>
      </div>
    </PageTransition>
  );
};

export default App;
