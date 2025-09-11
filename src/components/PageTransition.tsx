import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, isLoading = false }) => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    in: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
    out: { 
      opacity: 0, 
      y: -20,
      scale: 1.02
    }
  };

  const loadingVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  const spinnerVariants = {
    animate: {
      rotate: 360
    }
  };

  const dotVariants = {
    animate: {
      y: [0, -10, 0]
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {(isInitialLoad || isLoading) && (
          <motion.div
            key="loading"
            variants={loadingVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900"
          >
            <div className="text-center">
              {/* Animated Logo */}
              <motion.div
                className="mb-8"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-6xl font-black gradient-text display-font">
                  PathByte
                </h1>
              </motion.div>

              {/* Elegant Loading Spinner */}
              <motion.div
                className="w-16 h-16 mx-auto mb-6"
                variants={spinnerVariants}
                animate="animate"
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-full h-full border-4 border-cyan-400/20 border-t-cyan-400 rounded-full" />
              </motion.div>

              {/* Loading Dots */}
              <div className="flex justify-center space-x-2">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-3 h-3 bg-cyan-400 rounded-full"
                    variants={dotVariants}
                    animate="animate"
                    transition={{ 
                      delay: index * 0.2,
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Loading Text */}
              <motion.p
                className="mt-6 text-gray-400 mono-font"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Loading amazing content...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isInitialLoad && !isLoading && (
          <motion.div
            key="content"
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{
              duration: 0.6,
              ease: "easeOut",
              staggerChildren: 0.1
            }}
            className="min-h-screen"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
