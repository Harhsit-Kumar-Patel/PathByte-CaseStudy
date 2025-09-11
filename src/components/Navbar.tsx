import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink, Github, Download } from 'lucide-react';
import MicroInteraction from './MicroInteraction';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'overview', 'problem', 'vision', 'research', 'execution', 'impact', 'learnings', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Overview', id: 'overview' },
    { name: 'Problem', id: 'problem' },
    { name: 'Vision', id: 'vision' },
    { name: 'Research', id: 'research' },
    { name: 'Execution', id: 'execution' },
    { name: 'Impact', id: 'impact' },
    { name: 'Learnings', id: 'learnings' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out"
      style={{ 
        backgroundColor: isScrolled 
          ? 'rgba(15, 23, 42, 0.95)' // Dark slate with high opacity
          : 'rgba(15, 23, 42, 0.1)', // Very subtle background when not scrolled
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(10px)',
        borderBottom: isScrolled 
          ? '1px solid rgba(139, 92, 246, 0.3)' // Purple border
          : '1px solid rgba(139, 92, 246, 0.1)',
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(139, 92, 246, 0.15), 0 2px 8px rgba(0, 0, 0, 0.3)' 
          : '0 4px 16px rgba(139, 92, 246, 0.05)',
        backgroundImage: isScrolled 
          ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)'
          : 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-black gradient-text cursor-pointer display-font tracking-tight"
            >
              PathByte
            </button>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2.5 text-sm font-medium transition-all duration-300 relative group rounded-xl ${
                    activeSection === item.id 
                      ? 'text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/40 shadow-lg shadow-purple-500/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5 hover:border hover:border-white/10'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.05 }}
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                  <motion.span 
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: activeSection === item.id ? '80%' : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Action Buttons - Right Aligned */}
          <div className="hidden md:flex items-center space-x-2">
            <MicroInteraction type="hover-scale" intensity="subtle">
              <motion.a
                href="https://pathbyte.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium text-white hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Live Project</span>
                <span className="sm:hidden">Live</span>
              </motion.a>
            </MicroInteraction>
            <MicroInteraction type="hover-glow" intensity="subtle">
              <motion.a
                href="https://github.com/Harhsit-Kumar-Patel/PathByte"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-600/20 to-gray-700/20 border border-gray-500/30 px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium text-white hover:from-gray-600/30 hover:to-gray-700/30 hover:border-gray-500/50 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
                <span className="sm:hidden">Code</span>
              </motion.a>
            </MicroInteraction>
            <MicroInteraction type="ripple" intensity="subtle">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium text-white hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Resume</span>
                <span className="sm:hidden">CV</span>
              </motion.a>
            </MicroInteraction>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <MicroInteraction type="hover-scale" intensity="medium">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </MicroInteraction>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: 'auto' 
            }}
            exit={{ 
              opacity: 0, 
              height: 0 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="px-4 pt-4 pb-6 space-y-2 bg-slate-900/98 backdrop-blur-xl border-t border-gradient-to-r from-purple-400/30 to-blue-400/30"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {/* Navigation Items */}
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <MicroInteraction key={item.name} type="hover-lift" intensity="subtle">
                    <motion.button
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/40' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5 hover:border hover:border-white/10'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      {item.name}
                    </motion.button>
                  </MicroInteraction>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <MicroInteraction type="hover-scale" intensity="subtle">
                  <motion.a
                    href="https://pathbyte.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 px-4 py-3 rounded-xl flex items-center justify-center gap-3 text-sm font-medium text-white hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Project
                  </motion.a>
                </MicroInteraction>
                <MicroInteraction type="hover-glow" intensity="subtle">
                  <motion.a
                    href="https://github.com/Harhsit-Kumar-Patel/PathByte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-gray-600/20 to-gray-700/20 border border-gray-500/30 px-4 py-3 rounded-xl flex items-center justify-center gap-3 text-sm font-medium text-white hover:from-gray-600/30 hover:to-gray-700/30 hover:border-gray-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repository
                  </motion.a>
                </MicroInteraction>
                <MicroInteraction type="ripple" intensity="subtle">
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 px-4 py-3 rounded-xl flex items-center justify-center gap-3 text-sm font-medium text-white hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <Download className="w-4 h-4" />
                    View Resume
                  </motion.a>
                </MicroInteraction>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
