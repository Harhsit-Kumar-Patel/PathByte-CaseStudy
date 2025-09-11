import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Search, Clock, Target } from 'lucide-react';

const ProblemStatement: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-red-900/20 via-gray-900/30 to-orange-900/20">
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
            <span className="mono-font text-sm text-red-400 bg-red-400/10 px-4 py-2 rounded-full border border-red-400/20">
              Challenge Analysis
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 display-font gradient-text">The Problem</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Students face significant challenges when preparing for tech careers due to fragmented resources and lack of structured guidance.
          </p>
        </motion.div>

        {/* Career Assessment Screenshot */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card-premium p-4 rounded-3xl max-w-5xl mx-auto">
            <img 
              src="/Screenshot (49).png" 
              alt="Career Assessment Interface - Helping users identify their ideal tech career path through guided questions"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: Search,
                title: "Fragmentation of Resources",
                desc: "Students rely on blogs, YouTube tutorials, coding platforms, and paid courses spread across different platforms, forcing constant context switching and reducing learning efficiency.",
                color: "from-red-400 to-orange-500"
              },
              {
                icon: Target,
                title: "Lack of Clarity in Career Paths",
                desc: "While students know their end goal, they struggle to figure out the step-by-step journey required to reach it without structured guidance and clear milestones.",
                color: "from-orange-500 to-yellow-500"
              },
              {
                icon: Clock,
                title: "Wasted Time and Search Fatigue",
                desc: "Students spend 30-40% of their preparation time just searching for suitable roadmaps or learning materials, leading to burnout and reduced motivation.",
                color: "from-yellow-500 to-red-500"
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass-card p-6 rounded-2xl micro-hover">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${problem.color} flex items-center justify-center flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <problem.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:gradient-text transition-all duration-300">
                        {problem.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {problem.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card-premium p-8 rounded-3xl">
              <div className="text-center mb-6">
                <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Information Overload</h3>
                <p className="text-gray-400">The overwhelming amount of scattered resources</p>
              </div>
              
              <div className="space-y-4">
                {[
                  { width: "75%", label: "Blogs & Articles" },
                  { width: "60%", label: "YouTube Tutorials" },
                  { width: "45%", label: "Coding Platforms" },
                  { width: "30%", label: "Paid Courses" },
                  { width: "20%", label: "Documentation" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{item.label}</span>
                      <span className="text-gray-500">{item.width}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-red-400 to-orange-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: item.width }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
