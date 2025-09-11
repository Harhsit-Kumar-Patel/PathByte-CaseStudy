import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Eye } from 'lucide-react';

const VisionGoals: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-green-900/20 via-gray-900/30 to-blue-900/20">
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
            <span className="mono-font text-sm text-green-400 bg-green-400/10 px-4 py-2 rounded-full border border-green-400/20">
              Our Mission
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 display-font gradient-text">Vision & Goals</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The vision of PathByte is to make tech career preparation simple, structured, and student-friendly. 
            We believe every aspiring developer deserves a clear path to success.
          </p>
        </motion.div>

        {/* Detailed Career Roadmap Screenshot */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card-premium p-4 rounded-3xl max-w-6xl mx-auto">
            <img 
              src="/Screenshot (55).png" 
              alt="Detailed Career Roadmap - Comprehensive step-by-step learning path with milestones and progress tracking"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Target, 
              title: "Structured Roadmaps", 
              desc: "Design role-specific roadmaps that break complex career paths into clear, actionable steps with measurable milestones and progress tracking.",
              color: "from-green-400 to-emerald-500"
            },
            { 
              icon: Users, 
              title: "Curated Resources", 
              desc: "Curate resources from the best platforms—free and paid—so students can trust they are learning from credible, high-quality content.",
              color: "from-emerald-500 to-cyan-500"
            },
            { 
              icon: TrendingUp, 
              title: "Focused Learning", 
              desc: "Build a platform where learners spend less time searching and more time progressing toward their goals with minimal distractions.",
              color: "from-cyan-500 to-blue-500"
            }
          ].map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card-premium p-8 rounded-3xl text-center micro-hover h-full">
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${goal.color} flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <goal.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:gradient-text transition-all duration-300">{goal.title}</h3>
                <p className="text-gray-400 leading-relaxed">{goal.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-card-premium p-12 rounded-3xl text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Eye className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-6 text-white display-font">Our Vision</h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To become the go-to platform for tech career preparation, where every student can find their path to success 
              without the confusion and overwhelm that currently exists in the learning ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionGoals;
