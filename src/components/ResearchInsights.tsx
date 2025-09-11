import React from 'react';
import { motion } from 'framer-motion';
import ComparisonCard from './ComparisonCard';
import { Search, Users, Clock, Target } from 'lucide-react';

const ResearchInsights: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-purple-900/20 via-gray-900/30 to-indigo-900/20">
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
            <span className="mono-font text-sm text-purple-400 bg-purple-400/10 px-4 py-2 rounded-full border border-purple-400/20">
              Market Research
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 display-font gradient-text">Research & Insights</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive market analysis and user research that shaped PathByte's development strategy.
          </p>
        </motion.div>

        {/* Research Findings Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-white display-font text-center">Research Findings</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl micro-hover"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Search className="w-6 h-6 text-white" />
                </motion.div>
                <p className="text-gray-300 leading-relaxed text-sm">"Generic platforms offered endless lists of tutorials without structured guidance"</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl micro-hover"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Target className="w-6 h-6 text-white" />
                </motion.div>
                <p className="text-gray-300 leading-relaxed text-sm">"Learners expressed desire for step-by-step roadmaps from beginner to advanced levels"</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl micro-hover"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Clock className="w-6 h-6 text-white" />
                </motion.div>
                <p className="text-gray-300 leading-relaxed text-sm">"Students spend 30-40% of time searching for resources instead of learning"</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl micro-hover"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Users className="w-6 h-6 text-white" />
                </motion.div>
                <p className="text-gray-300 leading-relaxed text-sm">"Existing platforms excel at practice but lack structured career paths"</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Competitor Analysis Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-white display-font text-center">Competitor Analysis</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ComparisonCard
              platform="LeetCode & GeeksforGeeks"
              focus="Coding Practice"
              strengths={["Extensive problem sets", "Active community", "Interview preparation"]}
              weaknesses={["No structured career paths", "Overwhelming for beginners", "Limited guidance"]}
              score={65}
            />
            <ComparisonCard
              platform="Coursera & Udemy"
              focus="Course Catalog"
              strengths={["High-quality content", "Diverse topics", "Industry partnerships"]}
              weaknesses={["Generic learning paths", "No role-specific guidance", "Fragmented experience"]}
              score={70}
            />
            <ComparisonCard
              platform="PathByte"
              focus="Roadmap-First Platform"
              strengths={["Structured career paths", "Role-specific guidance", "Curated resources"]}
              weaknesses={["Newer platform", "Limited content library", "Growing community"]}
              score={85}
              isHighlighted={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchInsights;
