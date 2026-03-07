import { HeroSection } from './components/HeroSection';
import { LawAreasCarousel } from './components/LawAreasCarousel';
import { StatsSection } from './components/StatsSection';
import { Footer } from './components/Footer';
import { ChessboardTransition } from './components/ChessboardTransition';
import { CursorSpotlight } from './components/CursorSpotlight';
import { motion, useScroll, useTransform } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  
  // Create global parallax background effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <div className="min-h-screen bg-neutral-950 overflow-x-hidden">
      {/* Cursor spotlight effect */}
      <CursorSpotlight />

      {/* Global animated background */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: backgroundY, opacity }}
      >
        {/* Moving gradient orbs */}
        <motion.div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]"
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[120px]"
          animate={{
            y: [0, -100, 0],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section with Form */}
        <HeroSection />

        {/* Chessboard Transition */}
        <ChessboardTransition />

        {/* Law Areas Carousel */}
        <LawAreasCarousel />

        {/* Section separator with reveal effect */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"
        />

        {/* Stats Section */}
        <StatsSection />

        {/* Footer */}
        <Footer />
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Cinematic vignette effect */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>
    </div>
  );
}
