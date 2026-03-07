import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LawArea {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const lawAreas: LawArea[] = [
  {
    title: 'Direito Empresarial',
    description: 'Estratégia corporativa e governança empresarial de alto impacto.',
    image: 'https://images.unsplash.com/photo-1758518727343-e578b7795ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MjY0NjA0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: '♔',
  },
  {
    title: 'Direito Penal',
    description: 'Defesa técnica e acusação estratégica no campo criminal.',
    image: 'https://images.unsplash.com/photo-1769029265788-d7921a103403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmltaW5hbCUyMGp1c3RpY2UlMjBjb3VydHJvb218ZW58MXx8fHwxNzcyNjQ2MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: '♜',
  },
  {
    title: 'Direito Constitucional',
    description: 'Estruturas de poder, direitos fundamentais e controle de constitucionalidade.',
    image: 'https://images.unsplash.com/photo-1760829130145-2ea0ac80f8b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdGl0dXRpb24lMjBnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcyNjQ2MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: '♛',
  },
  {
    title: 'Direito Civil',
    description: 'Relações contratuais, obrigações e responsabilidade civil.',
    image: 'https://images.unsplash.com/photo-1666018215790-867b14fe4822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGxhdyUyMGNvbnRyYWN0JTIwc2lnbmluZ3xlbnwxfHx8fDE3NzI1Mzk4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: '♞',
  },
  {
    title: 'Direito Internacional',
    description: 'Negociações globais e relações jurídicas transnacionais.',
    image: 'https://images.unsplash.com/photo-1664785658580-07f819ce49cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwZGlwbG9tYWN5JTIwZmxhZ3N8ZW58MXx8fHwxNzcyNjQ2MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: '♝',
  },
  {
    title: 'Direito Público',
    description: 'Administração pública, licitações e contratos governamentais.',
    image: 'https://images.unsplash.com/photo-1764931806432-a85ecbbece40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBhZG1pbmlzdHJhdGlvbiUyMG1vZGVybiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MjY0NjA0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: '♖',
  },
];

function Card({ area, index }: { area: LawArea; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="relative h-[500px] md:h-[600px] mb-8 md:mb-12"
    >
      <motion.div
        className="cursor-hover sticky top-20 group h-full"
        style={{ rotateX, transformPerspective: 1000 }}
        whileHover={{ scale: 1.02, z: 50 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative h-full rounded-2xl overflow-hidden border border-red-500/20 group-hover:border-red-500/50 transition-all duration-300">
          {/* Image */}
          <ImageWithFallback
            src={area.image}
            alt={area.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>

          {/* Chess piece icon floating */}
          <motion.div
            className="absolute top-8 right-8 text-6xl md:text-8xl text-red-500/20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {area.icon}
          </motion.div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="text-4xl md:text-5xl"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {area.icon}
                </motion.div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {area.title}
                </h3>
              </div>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                {area.description}
              </p>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent rounded-full"
              />
            </motion.div>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-red-600/5 pointer-events-none"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ScrollRevealCards() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-20 left-10 text-7xl opacity-5 text-red-600"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        ⚖️
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-7xl opacity-5 text-red-700"
        animate={{
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        📜
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 space-y-4 px-4"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Áreas de{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Domínio Jurídico
            </span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cada área do Direito é uma jogada estratégica. Domine todas.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-0">
          {lawAreas.map((area, index) => (
            <Card key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
