import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Lightbulb, Users, Target, TrendingUp } from 'lucide-react';

const LearningsNextSteps: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-indigo-900/20 via-gray-900/30 to-purple-900/20">
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
            <span className="mono-font text-sm text-indigo-400 bg-indigo-400/10 px-4 py-2 rounded-full border border-indigo-400/20">
              Reflection & Growth
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 display-font gradient-text">Learnings & Next Steps</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Key insights gained from building PathByte and the impact it has created in the learning ecosystem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white display-font">Key Learnings</h3>
            <div className="space-y-6">
              {[
                { 
                  icon: CheckCircle, 
                  text: "Simple, structured solutions can transform complex problems into manageable journeys",
                  color: "from-green-400 to-emerald-500"
                },
                { 
                  icon: CheckCircle, 
                  text: "Addressing the 'how' and 'when' is as important as the 'what' in user experience",
                  color: "from-emerald-500 to-cyan-500"
                },
                { 
                  icon: CheckCircle, 
                  text: "User research reveals the gap between existing solutions and real user needs",
                  color: "from-cyan-500 to-blue-500"
                },
                { 
                  icon: CheckCircle, 
                  text: "Product design, user research, and execution are interconnected skills that complement each other",
                  color: "from-blue-500 to-indigo-500"
                }
              ].map((learning, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="glass-card p-6 rounded-2xl micro-hover">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${learning.color} flex items-center justify-center flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <learning.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <p className="text-gray-300 leading-relaxed">{learning.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white display-font">Project Impact</h3>
            <div className="space-y-6">
              {[
                { 
                  icon: Lightbulb, 
                  text: "Demonstrated practical experience in product design and user research methodologies",
                  color: "from-yellow-400 to-orange-500"
                },
                { 
                  icon: Users, 
                  text: "Highlighted importance of roadmap prioritization and systematic execution",
                  color: "from-orange-500 to-red-500"
                },
                { 
                  icon: Target, 
                  text: "Showed how addressing student problems creates genuine value and positive impact",
                  color: "from-red-500 to-pink-500"
                },
                { 
                  icon: TrendingUp, 
                  text: "Proved that making the journey as important as the destination matters for user success",
                  color: "from-pink-500 to-purple-500"
                }
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="glass-card p-6 rounded-2xl micro-hover">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${impact.color} flex items-center justify-center flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <impact.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <p className="text-gray-300 leading-relaxed">{impact.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearningsNextSteps;
