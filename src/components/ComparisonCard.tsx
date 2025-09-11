import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star } from 'lucide-react';

interface ComparisonCardProps {
  platform: string;
  focus: string;
  strengths: string[];
  weaknesses: string[];
  score: number;
  isHighlighted?: boolean;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  platform,
  focus,
  strengths,
  weaknesses,
  score,
  isHighlighted = false
}) => {
  return (
    <motion.div
      className={`glass-card p-6 rounded-2xl micro-hover w-full ${
        isHighlighted ? 'ring-2 ring-blue-500/50' : ''
      }`}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-xl font-bold ${isHighlighted ? 'gradient-text' : 'text-white'}`}>
          {platform}
        </h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(score / 20) ? 'text-yellow-400 fill-current' : 'text-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
      
      <p className="text-gray-400 mb-4">{focus}</p>
      
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Overall Score</span>
          <span>{score}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className={`h-2 rounded-full ${
              isHighlighted ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gray-500'
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: `${score}%` }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
      
      {/* Strengths */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-2">
          <Check className="w-4 h-4" />
          Strengths
        </h4>
        <ul className="space-y-1">
          {strengths.map((strength, index) => (
            <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
              <div className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0" />
              {strength}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Weaknesses */}
      <div>
        <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
          <X className="w-4 h-4" />
          Gaps
        </h4>
        <ul className="space-y-1">
          {weaknesses.map((weakness, index) => (
            <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
              <div className="w-1 h-1 bg-red-400 rounded-full mt-2 flex-shrink-0" />
              {weakness}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ComparisonCard;
