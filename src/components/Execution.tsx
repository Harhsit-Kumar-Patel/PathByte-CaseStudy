import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Rocket, Zap, Users, Target, CheckCircle } from 'lucide-react';

const Execution: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-900/30 via-black/20 to-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="mono-font text-sm text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
              Development Process
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 display-font gradient-text">Execution</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, here's how PathByte was built with precision and purpose.
          </p>
        </motion.div>

        {/* Complete Tech Career Roadmap Guide Screenshot */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card-premium p-4 rounded-3xl max-w-6xl mx-auto">
            <img 
              src="/Screenshot (48).png" 
              alt="Complete Tech Career Roadmap Guide - Comprehensive overview of all available career paths and learning tracks"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Development Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400/20 via-blue-500/30 to-purple-600/20 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                { 
                  phase: "Research & Planning", 
                  desc: "Market analysis, user research, and technical architecture design",
                  icon: Target,
                  color: "from-cyan-400 to-blue-500",
                  duration: "2 weeks"
                },
                { 
                  phase: "MVP Development", 
                  desc: "Core features implementation with React, TypeScript, and PostgreSQL",
                  icon: Code,
                  color: "from-blue-500 to-purple-500",
                  duration: "6 weeks"
                },
                { 
                  phase: "Launch & Iteration", 
                  desc: "Deployment, user feedback integration, and feature enhancements",
                  icon: Rocket,
                  color: "from-purple-500 to-pink-500",
                  duration: "Ongoing"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="glass-card-premium p-8 rounded-3xl text-center micro-hover group">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div className="mb-4">
                      <span className="mono-font text-xs text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:gradient-text transition-all duration-300">
                      {step.phase}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Connection Arrow */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <motion.div
                        animate={{ x: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-6 h-6 text-cyan-400" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white display-font">Technology Stack</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built with modern, scalable technologies for optimal performance and developer experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "React 18", category: "Frontend", color: "from-blue-400 to-cyan-400" },
              { name: "TypeScript", category: "Language", color: "from-blue-500 to-blue-600" },
              { name: "Tailwind CSS", category: "Styling", color: "from-cyan-400 to-teal-500" },
              { name: "Framer Motion", category: "Animation", color: "from-purple-400 to-pink-400" },
              { name: "Node.js", category: "Backend", color: "from-green-400 to-emerald-500" },
              { name: "Express", category: "Framework", color: "from-gray-400 to-gray-500" },
              { name: "PostgreSQL", category: "Database", color: "from-blue-600 to-indigo-600" },
              { name: "Knex.js", category: "Query Builder", color: "from-orange-400 to-red-400" },
              { name: "Docker", category: "Containerization", color: "from-blue-500 to-cyan-500" },
              { name: "Netlify", category: "Frontend Hosting", color: "from-cyan-500 to-blue-500" },
              { name: "Railway", category: "Backend Hosting", color: "from-purple-500 to-pink-500" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass-card p-4 rounded-2xl text-center micro-hover">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{tech.name.charAt(0)}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:gradient-text transition-all duration-300">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white display-font">Key Features</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Core functionality designed to provide the best learning experience for aspiring developers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Smart Onboarding", 
                desc: "Tailored to user goals and career aspirations with personalized recommendations",
                icon: Target,
                color: "from-cyan-400 to-blue-500"
              },
              { 
                title: "Multi-level Roadmaps", 
                desc: "Personalized roadmaps linked with curated resources for structured learning",
                icon: Zap,
                color: "from-blue-500 to-purple-500"
              },
              { 
                title: "Progress Tracking", 
                desc: "Built-in analytics to monitor learning progress and identify improvement areas",
                icon: CheckCircle,
                color: "from-purple-500 to-pink-500"
              },
              { 
                title: "Community Integration", 
                desc: "Peer support and collaboration features to enhance the learning journey",
                icon: Users,
                color: "from-pink-500 to-red-500"
              },
              { 
                title: "Minimalistic UI", 
                desc: "Distraction-free, intuitive interface designed for focused learning sessions",
                icon: Code,
                color: "from-red-500 to-orange-500"
              },
              { 
                title: "Quality Curation", 
                desc: "Balance of free and premium resources for comprehensive skill development",
                icon: Database,
                color: "from-orange-500 to-yellow-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass-card-premium p-8 rounded-3xl micro-hover h-full">
                  <motion.div
                    className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Execution;
