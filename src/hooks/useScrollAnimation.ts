import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  root?: Element | null;
  freezeOnceVisible?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0,
    root = null,
    freezeOnceVisible = false
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (entry.isIntersecting) {
      if (delay > 0) {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(true);
          setHasBeenVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        }, delay);
      } else {
        setIsVisible(true);
        setHasBeenVisible(true);
        if (triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      }
    } else if (!triggerOnce && !freezeOnceVisible) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsVisible(false);
    }
  }, [threshold, rootMargin, triggerOnce, delay, freezeOnceVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      handleIntersection(entries, observer);
    }, {
      threshold,
      rootMargin,
      root
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleIntersection, threshold, rootMargin, root]);

  // Reset visibility when triggerOnce is false and element goes out of view
  useEffect(() => {
    if (!triggerOnce && !freezeOnceVisible && hasBeenVisible) {
      const handleScroll = () => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          if (!isInViewport) {
            setIsVisible(false);
          }
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [triggerOnce, freezeOnceVisible, hasBeenVisible]);

  return [ref, isVisible, hasBeenVisible] as const;
};

export default useScrollAnimation;
