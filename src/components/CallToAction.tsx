import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Mail, FileText, Heart } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-cyan-900/20 via-gray-900/30 to-blue-900/20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="mono-font text-sm text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
              Get In Touch
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 display-font gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Want to know more about PathByte or collaborate with me? I'd love to hear from you and discuss 
            how we can create amazing experiences together!
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="https://www.linkedin.com/in/harshit-patel-900729205/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-premium px-8 py-4 rounded-full flex items-center gap-3 float-hover group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">LinkedIn</span>
              <motion.div
                className="w-4 h-4"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </motion.div>
            </motion.a>
            <motion.a
              href="mailto:Harshit.mzp888@gmail.com"
              className="glass-card px-8 py-4 rounded-full flex items-center gap-3 micro-hover group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">Email</span>
              <motion.div
                className="w-4 h-4"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </motion.div>
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-8 py-4 rounded-full flex items-center gap-3 micro-hover group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <FileText className="w-5 h-5 text-purple-400" />
              <span className="font-semibold">Resume</span>
              <motion.div
                className="w-4 h-4"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <ArrowRight className="w-4 h-4 text-purple-400" />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="glass-card-premium p-8 rounded-3xl max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-white display-font">Thank You!</h3>
            <p className="text-gray-300 leading-relaxed">
              Thank you for taking the time to explore PathByte. This project represents my passion for creating 
              meaningful solutions that make a real difference in people's learning journeys. I'm always excited 
              to connect with fellow developers, designers, and innovators who share the same vision of making 
              technology education more accessible and effective.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
