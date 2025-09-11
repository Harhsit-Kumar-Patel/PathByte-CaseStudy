import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Impact: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-emerald-900/20 via-gray-900/30 to-cyan-900/20">
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
            <span className="mono-font text-sm text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20">
              Project Impact
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 display-font gradient-text">Impact & Results</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Measurable outcomes and positive feedback from students who used PathByte for their learning journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              icon: Target, 
              metric: 35, 
              suffix: "%", 
              desc: "Time saved on resource searching",
              color: "from-emerald-400 to-green-500"
            },
            { 
              icon: Users, 
              metric: 85, 
              suffix: "%", 
              desc: "Student satisfaction rate",
              color: "from-green-500 to-cyan-500"
            },
            { 
              icon: TrendingUp, 
              metric: 60, 
              suffix: "%", 
              desc: "Reduction in search fatigue",
              color: "from-cyan-500 to-blue-500"
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
              <div className="glass-card-premium p-8 rounded-3xl text-center micro-hover h-full">
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-5xl font-black gradient-text mb-4">
                  <AnimatedCounter 
                    value={stat.metric} 
                    suffix={stat.suffix}
                    duration={2.5}
                    className="display-font"
                  />
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Impact;
