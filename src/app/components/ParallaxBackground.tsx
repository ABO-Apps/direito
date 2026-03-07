import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function ParallaxBackground({ children, className = '' }: ParallaxBackgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Create parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Parallax layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layer 1 - Slow */}
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute inset-0"
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-600/5 rounded-full blur-3xl" />
        </motion.div>

        {/* Layer 2 - Fast */}
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-white/5 rounded-full blur-2xl" />
        </motion.div>

        {/* Layer 3 - Scale */}
        <motion.div
          style={{ scale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-96 h-96 bg-gradient-radial from-red-600/5 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
