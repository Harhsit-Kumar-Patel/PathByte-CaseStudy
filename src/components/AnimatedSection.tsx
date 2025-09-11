import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'fade-in' | 'scale-in' | 'slide-up' | 'slide-down' | 'zoom-in' | 'stagger-children' | 'flip-in' | 'slide-in-rotate' | 'bounce-in' | 'elastic-in' | 'reveal-up' | 'parallax-reveal';
  delay?: number;
  id?: string;
  duration?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'fade-in-up',
  delay = 0,
  id,
  duration = 0.8,
  staggerChildren = false,
  staggerDelay = 0.1
}) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px -50px 0px",
    amount: 0.1
  });

  const getAnimationVariants = (): Variants => {
    // Return minimal variants if reduced motion is preferred
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1 }
      };
    }

    const baseVariants: Variants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1
      }
    };

    switch (animationType) {
      case 'fade-in-up':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0
          }
        };
      case 'fade-in-left':
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { 
            opacity: 1, 
            x: 0
          }
        };
      case 'fade-in-right':
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { 
            opacity: 1, 
            x: 0
          }
        };
      case 'scale-in':
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { 
            opacity: 1, 
            scale: 1
          }
        };
      case 'slide-up':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0
          }
        };
      case 'slide-down':
        return {
          hidden: { opacity: 0, y: -100 },
          visible: { 
            opacity: 1, 
            y: 0
          }
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.5 },
          visible: { 
            opacity: 1, 
            scale: 1
          }
        };
      case 'stagger-children':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1
          }
        };
      case 'flip-in':
        return {
          hidden: { opacity: 0, rotateY: -90, scale: 0.8 },
          visible: { 
            opacity: 1, 
            rotateY: 0,
            scale: 1
          }
        };
      case 'slide-in-rotate':
        return {
          hidden: { opacity: 0, x: -100, rotate: -15 },
          visible: { 
            opacity: 1, 
            x: 0,
            rotate: 0
          }
        };
      case 'bounce-in':
        return {
          hidden: { opacity: 0, scale: 0.3, y: -50 },
          visible: { 
            opacity: 1, 
            scale: 1,
            y: 0
          }
        };
      case 'elastic-in':
        return {
          hidden: { opacity: 0, scale: 0.1, y: 50 },
          visible: { 
            opacity: 1, 
            scale: 1,
            y: 0
          }
        };
      case 'reveal-up':
        return {
          hidden: { opacity: 0, y: 80, filter: "blur(10px)" },
          visible: { 
            opacity: 1, 
            y: 0,
            filter: "blur(0px)"
          }
        };
      case 'parallax-reveal':
        return {
          hidden: { opacity: 0, y: 100, scale: 0.9, filter: "blur(5px)" },
          visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            filter: "blur(0px)"
          }
        };
      default:
        return baseVariants;
    }
  };

  const variants = getAnimationVariants();

  // Create transition object with custom easing for different animation types
  const getTransitionEasing = () => {
    switch (animationType) {
      case 'bounce-in':
        return [0.68, -0.55, 0.265, 1.55] as const;
      case 'elastic-in':
        return [0.175, 0.885, 0.32, 1.275] as const;
      case 'flip-in':
        return [0.25, 0.46, 0.45, 0.94] as const;
      case 'slide-in-rotate':
        return [0.25, 0.46, 0.45, 0.94] as const;
      case 'reveal-up':
        return [0.25, 0.46, 0.45, 0.94] as const;
      case 'parallax-reveal':
        return [0.25, 0.46, 0.45, 0.94] as const;
      default:
        return "easeOut" as const;
    }
  };

  const transition = {
    duration,
    delay,
    ease: getTransitionEasing(),
    ...(animationType === 'stagger-children' && { staggerChildren: staggerDelay })
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={transition}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;