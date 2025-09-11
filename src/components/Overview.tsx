import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Zap } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-gray-900/20 via-black/10 to-gray-900/20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
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
              Project Overview
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 display-font gradient-text">Overview</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            PathByte is a comprehensive web platform designed to bridge the gap between ambition and execution for students 
            aspiring to build careers in technology. By providing structured roadmaps and curated learning materials, 
            PathByte ensures students can focus on learning rather than wasting time searching for the right resources.
          </p>
        </motion.div>

        {/* Profile Dashboard Screenshot */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card-premium p-2 sm:p-4 rounded-3xl max-w-5xl mx-auto">
            <img 
              src="/Screenshot (51).png" 
              alt="PathByte Profile Dashboard - User progress tracking and personalized learning experience"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            { 
              icon: Target, 
              title: "Role-based Roadmaps", 
              desc: "Clear step-by-step guides for SDE, Data Analyst, and other tech roles with personalized learning paths",
              color: "from-cyan-400 to-blue-500"
            },
            { 
              icon: BookOpen, 
              title: "Curated Content", 
              desc: "Handpicked free and premium resources for quality learning with expert recommendations",
              color: "from-blue-500 to-purple-500"
            },
            { 
              icon: Zap, 
              title: "Smart Search & Filters", 
              desc: "Quickly find materials aligned with career stage and role with intelligent filtering",
              color: "from-purple-500 to-pink-500"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card-premium p-4 sm:p-6 md:p-8 rounded-3xl text-center micro-hover h-full">
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:gradient-text transition-all duration-300">{stat.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
