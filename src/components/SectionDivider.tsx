import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider: React.FC = () => {
  return (
    <motion.div
      className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-20"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    />
  );
};

export default SectionDivider;
