import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Stat {
  value: string;
  label: string;
  target: number;
  compact?: boolean;
}

const stats: Stat[] = [
  { value: 'OAB', label: 'OAB Recomenda', target: 0 },
  { value: '5', label: 'Anos de curso', target: 5 },
  { value: 'Prática', label: 'Desde o início', target: 0, compact: true },
  { value: 'Global', label: 'Debates internacionais', target: 0, compact: true },
];

function AnimatedCounter({ target, suffix = '+' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const [inView, setInView] = useState(false);

  return (
    <section id="numeros" className="relative py-20 md:py-32 px-4 overflow-hidden bg-neutral-950 border-y border-white/5">
      {/* Radial gradient pulse */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.08) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.12) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.08) 0%, transparent 70%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hexagonal pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
              <path d="M25 0l12.5 7.2v14.3L25 28.9 12.5 21.6V7.2z" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Strategic connecting lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.svg
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.line
            x1="10%"
            y1="30%"
            x2="90%"
            y2="30%"
            stroke="rgba(220, 38, 38, 0.1)"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="10%"
            y1="70%"
            x2="90%"
            y2="70%"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
          />
        </motion.svg>
      </div>

      {/* Orbiting strategic pieces */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-9xl opacity-[0.04] text-white"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        ♛
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 text-8xl opacity-[0.05] text-red-600"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        ♔
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/3 text-7xl opacity-[0.04] text-neutral-500"
        animate={{ 
          x: [0, 25, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        ♖
      </motion.div>

      {/* Pulsing dots for network effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-600/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center md:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-2xl">♔</span>
            <h2 className="text-2xl font-bold text-white font-display sm:text-3xl md:text-4xl">
              Números que <span className="text-red-600">impressionam</span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setInView(true)}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group text-center rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-6"
            >
              {/* Stat Value */}
              <div
                className={`relative mb-3 bg-gradient-to-br from-white to-neutral-400 bg-clip-text font-display font-bold text-transparent ${
                  stat.compact
                    ? 'text-3xl leading-[1.02] sm:text-4xl lg:text-[3.2rem]'
                    : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
                }`}
              >
                {inView && stat.value.includes('+') ? (
                  <>
                    <AnimatedCounter target={stat.target} suffix="+" />
                  </>
                ) : inView && stat.target === 5 ? (
                  <>
                    <AnimatedCounter target={stat.target} suffix="" />
                  </>
                ) : (
                  stat.value
                )}
              </div>

              {/* Stat Label */}
              <div className="relative font-body text-sm font-medium text-neutral-400 md:text-base">
                {stat.label}
              </div>

              {/* Red accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className="mt-4 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-red-600 to-transparent"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
