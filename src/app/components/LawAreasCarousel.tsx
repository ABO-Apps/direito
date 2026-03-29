import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LawArea {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const lawAreas: LawArea[] = [
  {
    title: 'Temas atuais do Direito',
    description: 'Discussões que conectam teoria, atualidade e decisões reais.',
    image: 'https://images.unsplash.com/photo-1769029265788-d7921a103403?auto=format&fit=crop&w=1200&q=80',
    icon: '♔',
  },
  {
    title: 'Cases e prática',
    description: 'Situações concretas para mostrar como o Direito entra em cena.',
    image: 'https://images.unsplash.com/photo-1666018215790-867b14fe4822?auto=format&fit=crop&w=1200&q=80',
    icon: '♜',
  },
  {
    title: 'Carreira jurídica',
    description: 'Possibilidades, caminhos e estratégias para construir trajetória.',
    image: 'https://images.unsplash.com/photo-1758518727343-e578b7795ad5?auto=format&fit=crop&w=1200&q=80',
    icon: '♛',
  },
  {
    title: 'Direito no dia a dia',
    description: 'Aplicações reais que tornam a área próxima, viva e relevante.',
    image: 'https://images.unsplash.com/photo-1764931806432-a85ecbbece40?auto=format&fit=crop&w=1200&q=80',
    icon: '♞',
  },
  {
    title: 'Leitura de cenário',
    description: 'Análises que ajudam a entender contexto, impacto e estratégia.',
    image: 'https://images.unsplash.com/photo-1664785658580-07f819ce49cd?auto=format&fit=crop&w=1200&q=80',
    icon: '♝',
  },
  {
    title: 'Quem vive o jogo',
    description: 'Insights, vivências e repertório de quem atua na prática.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
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
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <section id="areas" className="relative overflow-hidden bg-neutral-900 px-4 py-16 md:py-32">
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
          className="mb-10 space-y-4 px-2 text-center md:mb-16 md:space-y-5 md:px-4"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-red-600 md:w-12"></div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red-600 md:text-sm md:tracking-wider">Tabuleiro Jurídico</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-red-600 md:w-12"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-white font-display sm:text-4xl md:text-5xl lg:text-6xl">
            O Direito em <span className="text-red-600">movimento</span>
          </h2>
          
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-neutral-400 font-body sm:text-base md:max-w-2xl md:text-xl">
            Conteúdos pensados para mostrar que aprender Direito também é saber ler o jogo.
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
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-neutral-900 to-transparent md:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-neutral-900 to-transparent md:block" />

          <Slider ref={sliderRef} {...settings} afterChange={(index) => setCurrentSlide(index)}>
            {lawAreas.map((area, index) => (
              <div key={area.title} className="px-0 md:px-3">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group cursor-pointer h-[22rem] overflow-hidden rounded-xl md:h-[27rem]"
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
                  <div className="absolute bottom-0 left-0 right-0 space-y-2 p-5 md:p-6">
                    <h3 className="font-heading text-xl font-bold text-white transition-colors duration-300 group-hover:text-red-400 md:text-2xl lg:text-3xl">
                      {area.title}
                    </h3>
                    
                    {/* Description - appears on hover */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="font-body text-sm text-neutral-300 opacity-100 transition-all duration-300 md:text-base md:opacity-0 md:group-hover:opacity-100"
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 flex items-center justify-center gap-2 md:mt-8 md:gap-3"
        >
          {lawAreas.map((area, index) => (
            <button
              key={area.title}
              type="button"
              onClick={() => sliderRef.current?.slickGoTo(index)}
              aria-label={`Ir para ${area.title}`}
              className="group flex items-center"
            >
              <span
                className={`block h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-8 bg-red-600' : 'w-2.5 bg-white/25 group-hover:bg-white/45'
                }`}
              />
            </button>
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

          .carousel-container .slick-track {
            display: flex;
          }

          .carousel-container .slick-slide > div {
            height: 100%;
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
