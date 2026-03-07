import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LawArea {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const lawAreas: LawArea[] = [
  {
    title: 'Direito Empresarial',
    description: 'Estratégias corporativas e governança jurídica para negócios',
    image: 'https://images.unsplash.com/photo-1758518727343-e578b7795ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MjY0NjA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: '♔',
  },
  {
    title: 'Direito Penal',
    description: 'Defesa estratégica e acusação no sistema criminal',
    image: 'https://images.unsplash.com/photo-1769029265788-d7921a103403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmltaW5hbCUyMGp1c3RpY2UlMjBjb3VydHJvb218ZW58MXx8fHwxNzcyNjQ2MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: '♜',
  },
  {
    title: 'Direito Constitucional',
    description: 'Fundamentos do poder e garantias fundamentais',
    image: 'https://images.unsplash.com/photo-1760829130145-2ea0ac80f8b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdGl0dXRpb24lMjBnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcyNjQ2MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: '♛',
  },
  {
    title: 'Direito Civil',
    description: 'Relações privadas, contratos e patrimônio',
    image: 'https://images.unsplash.com/photo-1666018215790-867b14fe4822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGxhdyUyMGNvbnRyYWN0JTIwc2lnbmluZ3xlbnwxfHx8fDE3NzI1Mzk4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: '♞',
  },
  {
    title: 'Direito Internacional',
    description: 'Estratégias globais e diplomacia jurídica',
    image: 'https://images.unsplash.com/photo-1664785658580-07f819ce49cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwZGlwbG9tYWN5JTIwZmxhZ3N8ZW58MXx8fHwxNzcyNjQ2MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: '♝',
  },
  {
    title: 'Direito Público',
    description: 'Administração, controle e poder estatal',
    image: 'https://images.unsplash.com/photo-1764931806432-a85ecbbece40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBhZG1pbmlzdHJhdGlvbiUyMG1vZGVybiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MjY0NjA0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: '♖',
  },
];

export function LawAreasCarousel() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
    ],
  };

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-neutral-900">
      {/* Diagonal mesh gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, transparent 50%, rgba(220, 38, 38, 0.05) 100%)',
              'linear-gradient(135deg, transparent 0%, rgba(220, 38, 38, 0.05) 50%, transparent 100%)',
              'linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, transparent 50%, rgba(220, 38, 38, 0.05) 100%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]"
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Strategic light beams */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-px h-full left-1/4 bg-gradient-to-b from-transparent via-red-600/10 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-px h-full right-1/3 bg-gradient-to-b from-transparent via-white/5 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Floating chess pieces with depth */}
      <motion.div
        className="absolute top-20 left-10 text-8xl opacity-[0.06] text-white blur-[1px]"
        animate={{ 
          rotate: [0, 15, -15, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        ♜
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-16 text-7xl opacity-[0.07] text-red-600 blur-[1px]"
        animate={{ 
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        ♞
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/3 text-6xl opacity-[0.05] text-neutral-400"
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        ♔
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 text-5xl opacity-[0.06] text-red-700"
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        ⚖️
      </motion.div>

      {/* Floating particles for depth */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-red-600/20 rounded-full blur-sm"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 space-y-5 px-4"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
            <span className="text-sm uppercase tracking-wider text-red-600 font-semibold">Tabuleiro Jurídico</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display">
            Áreas de <span className="text-red-600">domínio</span>
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-body">
            Cada área é uma peça estratégica no jogo jurídico
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="carousel-container relative"
        >
          {/* Navigation Arrows */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => sliderRef.current?.slickPrev()}
              className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-full hover:bg-red-600/20 hover:border-red-600/50 transition-all group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="size-6 text-white group-hover:text-red-400 transition-colors" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-full hover:bg-red-600/20 hover:border-red-600/50 transition-all group"
              aria-label="Next slide"
            >
              <ChevronRight className="size-6 text-white group-hover:text-red-400 transition-colors" />
            </motion.button>
          </div>

          <Slider ref={sliderRef} {...settings} afterChange={(index) => setCurrentSlide(index)}>
            {lawAreas.map((area, index) => (
              <div key={area.title} className="px-2 md:px-3">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group cursor-pointer h-80 md:h-96 rounded-xl overflow-hidden"
                >
                  {/* Image */}
                  <ImageWithFallback
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  {/* Hover red accent */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-red-950/40 via-transparent to-transparent"
                  />

                  {/* Red border on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 border-2 border-red-600/50 rounded-xl"
                  />

                  {/* Chess icon in top corner */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 text-4xl md:text-5xl opacity-20 group-hover:opacity-100 text-white group-hover:text-red-400 transition-all duration-300"
                  >
                    {area.icon}
                  </motion.div>

                  {/* Title and Description */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 font-heading">
                      {area.title}
                    </h3>
                    
                    {/* Description - appears on hover */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="text-sm md:text-base text-neutral-300 font-body opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      {area.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.4 }}
                      className="h-0.5 bg-gradient-to-r from-red-600 to-transparent mt-3"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Custom Progress Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center gap-3 mt-8 md:mt-12"
        >
          {lawAreas.map((area, index) => (
            <motion.button
              key={index}
              onClick={() => sliderRef.current?.slickGoTo(index)}
              className="group relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to ${area.title}`}
            >
              {/* Dot */}
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-red-600 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
              
              {/* Active indicator line */}
              {currentSlide === index && (
                <motion.div
                  layoutId="activeSlide"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-px w-8 bg-red-600"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Tooltip on hover */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-900 border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs text-white pointer-events-none">
                {area.icon} {area.title}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Custom styling for slick carousel */}
        <style dangerouslySetInnerHTML={{__html: `
          .carousel-container .slick-slide {
            padding: 0 8px;
          }
          
          .carousel-container .slick-list {
            margin: 0 -8px;
          }

          @media (max-width: 640px) {
            .carousel-container .slick-slide {
              padding: 0 4px;
            }
            
            .carousel-container .slick-list {
              margin: 0 -4px;
            }
          }
        `}} />
      </div>
    </section>
  );
}