import React from 'react';
import { motion, useMotionValue, useSpring, Variants } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface MicroInteractionProps {
  children: React.ReactNode;
  type?: 'hover-lift' | 'hover-scale' | 'hover-glow' | 'hover-tilt' | 'hover-rotate' | 'magnetic' | 'ripple' | 'hover-slide' | 'hover-bounce' | 'hover-elastic' | 'hover-flip' | 'hover-blur' | 'hover-gradient' | 'hover-3d';
  intensity?: 'subtle' | 'medium' | 'strong';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const MicroInteraction: React.FC<MicroInteractionProps> = ({
  children,
  type = 'hover-lift',
  intensity = 'medium',
  className = '',
  onClick,
  disabled = false
}) => {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const getIntensityValues = () => {
    switch (intensity) {
      case 'subtle':
        return { scale: 1.01, y: -1, glow: '0 4px 15px rgba(6, 182, 212, 0.1)' };
      case 'medium':
        return { scale: 1.02, y: -2, glow: '0 6px 20px rgba(6, 182, 212, 0.15)' };
      case 'strong':
        return { scale: 1.03, y: -3, glow: '0 8px 25px rgba(6, 182, 212, 0.2)' };
      default:
        return { scale: 1.02, y: -2, glow: '0 6px 20px rgba(6, 182, 212, 0.15)' };
    }
  };

  const intensityValues = getIntensityValues();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (type === 'magnetic' && !disabled && !prefersReducedMotion) {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;
      
      x.set(distanceX * 0.1);
      y.set(distanceY * 0.1);
    }
  };

  const handleMouseLeave = () => {
    if (type === 'magnetic') {
      x.set(0);
      y.set(0);
    }
  };

  const getVariants = (): Variants => {
    // Return minimal variants if reduced motion is preferred
    if (prefersReducedMotion) {
      return {
        hover: {},
        tap: {}
      };
    }

    switch (type) {
      case 'hover-lift':
        return {
          hover: { 
            y: -intensityValues.y, 
            scale: intensityValues.scale
          },
          tap: { scale: 0.95 }
        };
      case 'hover-scale':
        return {
          hover: { 
            scale: intensityValues.scale
          },
          tap: { scale: 0.95 }
        };
      case 'hover-glow':
        return {
          hover: { 
            boxShadow: intensityValues.glow,
            scale: intensityValues.scale
          },
          tap: { scale: 0.95 }
        };
      case 'hover-tilt':
        return {
          hover: { 
            rotateX: 5,
            rotateY: 5,
            scale: intensityValues.scale
          },
          tap: { scale: 0.95 }
        };
      case 'hover-rotate':
        return {
          hover: { 
            rotate: 5,
            scale: intensityValues.scale
          },
          tap: { scale: 0.95 }
        };
      case 'magnetic':
        return {
          hover: { 
            scale: intensityValues.scale
          },
          tap: { scale: 0.95 }
        };
      case 'ripple':
        return {
          hover: { 
            scale: intensityValues.scale
          },
          tap: { scale: 0.95 }
        };
      case 'hover-slide':
        return {
          hover: { 
            x: intensityValues.y * 2,
            scale: intensityValues.scale
          },
          tap: { scale: 0.95 }
        };
      case 'hover-bounce':
        return {
          hover: { 
            y: -intensityValues.y * 2,
            scale: intensityValues.scale
          },
          tap: { scale: 0.95 }
        };
      case 'hover-elastic':
        return {
          hover: { 
            scale: intensityValues.scale * 1.1,
            rotate: 2
          },
          tap: { scale: 0.95 }
        };
      case 'hover-flip':
        return {
          hover: { 
            rotateY: 180,
            scale: intensityValues.scale
          },
          tap: { scale: 0.95 }
        };
      case 'hover-blur':
        return {
          hover: { 
            filter: "blur(2px)",
            scale: intensityValues.scale
          },
          tap: { scale: 0.95 }
        };
      case 'hover-gradient':
        return {
          hover: { 
            background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
            scale: intensityValues.scale
          },
          tap: { scale: 0.95 }
        };
      case 'hover-3d':
        return {
          hover: { 
            rotateX: 10,
            rotateY: 10,
            scale: intensityValues.scale,
            z: 50
          },
          tap: { scale: 0.95 }
        };
      default:
        return {
          hover: { 
            y: -intensityValues.y, 
            scale: intensityValues.scale
          },
          tap: { scale: 0.95 }
        };
    }
  };

  const variants = getVariants();
  const transition = { type: "spring" as const, stiffness: 300, damping: 30 };

  if (type === 'magnetic') {
    return (
      <motion.div
        className={className}
        style={prefersReducedMotion ? {} : { x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover="hover"
        whileTap="tap"
        variants={variants}
        transition={transition}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'ripple') {
    return (
      <motion.div
        className={`relative overflow-hidden ${className}`}
        whileHover="hover"
        whileTap="tap"
        variants={variants}
        transition={transition}
        onClick={onClick}
      >
        {children}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ 
              scale: 2, 
              opacity: [0, 0.3, 0],
              transition: { duration: 0.6 }
            }}
          />
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      transition={transition}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default MicroInteraction;
