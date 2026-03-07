import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ScrollRipple() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1.5, 0]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 0]);
  const scale3 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2.5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.5, 0]);

  return (
    <div ref={ref} className="relative h-64 flex items-center justify-center overflow-hidden">
      {/* Ripple effect */}
      <div className="relative">
        <motion.div
          style={{ scale: scale1, opacity }}
          className="absolute inset-0 w-32 h-32 border-2 border-red-600/30 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        />
        <motion.div
          style={{ scale: scale2, opacity }}
          className="absolute inset-0 w-32 h-32 border-2 border-red-600/20 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        />
        <motion.div
          style={{ scale: scale3, opacity }}
          className="absolute inset-0 w-32 h-32 border-2 border-red-600/10 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        />

        {/* Center icon */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 360 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-4xl text-red-600"
        >
          ♛
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />
    </div>
  );
}
