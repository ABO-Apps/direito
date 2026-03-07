import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Play, BookOpen } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function ParallaxHero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
  });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 2);
      mouseY.set((clientY / innerHeight - 0.5) * 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Obrigado pelo interesse! Entraremos em contato em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center px-4 lg:px-8 py-16 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black"
        style={{ y: y1, opacity }}
      />

      {/* Floating Chess Pieces with Parallax */}
      <motion.div
        className="absolute top-20 left-10 text-6xl md:text-8xl opacity-10 text-red-600"
        style={{ y: y2 }}
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ⚖️
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-16 text-5xl md:text-7xl opacity-10 text-red-700"
        style={{ y: y3 }}
        animate={{
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ♜
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 text-5xl md:text-7xl opacity-10 text-red-600"
        style={{ y: y1 }}
        animate={{
          x: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ♞
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4 text-4xl md:text-6xl opacity-10 text-red-500"
        style={{ y: y2 }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        📜
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/3 text-4xl md:text-6xl opacity-10 text-red-700"
        style={{ y: y3 }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ⚖️
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-10 text-5xl md:text-7xl opacity-10 text-red-600"
        style={{ y: y1 }}
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ♝
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-24 text-4xl md:text-6xl opacity-10 text-red-500"
        style={{ y: y2 }}
        animate={{
          rotate: [0, 20, -20, 0],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        🏛️
      </motion.div>

      {/* Giant Queen with 3D effect */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 blur-3xl bg-red-600/20 scale-150"></div>
          <div className="relative text-[20rem] md:text-[32rem] leading-none text-red-600/10 font-serif select-none">
            ♛
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-700/5 blur-2xl"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Main Content with 3D transform */}
      <motion.div
        className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10"
        style={{ opacity }}
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              <motion.span
                className="inline-block text-white"
                whileHover={{ scale: 1.05, color: '#dc2626' }}
                transition={{ duration: 0.3 }}
              >
                DIREITO
              </motion.span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
                AMF
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-red-400 font-light tracking-wide"
            >
              Pensar. Argumentar. Decidir.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            O curso de Direito da AMF forma profissionais preparados para compreender a sociedade,
            interpretar a lei e tomar decisões estratégicas com responsabilidade e inteligência.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative inline-block mx-auto lg:mx-0"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-700 rounded-lg blur opacity-25"></div>
            <p className="relative text-lg md:text-xl lg:text-2xl font-semibold text-white bg-black px-4 py-2 md:px-6 md:py-3 rounded-lg border border-red-500/30">
              No Direito, quem pensa melhor joga melhor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-4"
          >
            <motion.button
              className="cursor-hover group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <BookOpen className="size-5" />
                Conhecer o curso
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              className="cursor-hover group relative px-6 py-3 md:px-8 md:py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-red-500/50 overflow-hidden"
              whileHover={{ scale: 1.05, borderColor: '#dc2626' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Play className="size-5" />
                Assistir conteúdos
              </span>
              <motion.div
                className="absolute inset-0 bg-red-500/10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Form with 3D effect */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full max-w-lg mx-auto"
          whileHover={{ scale: 1.02 }}
          style={{
            rotateX: useTransform(mouseY, [-0.5, 0.5], [2, -2]),
            rotateY: useTransform(mouseX, [-0.5, 0.5], [-2, 2]),
          }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-red-700/30 rounded-2xl blur-xl"></div>
          <div className="relative bg-black/90 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 md:p-8 shadow-2xl">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl font-bold text-white mb-6 text-center"
            >
              Faça sua jogada estratégica
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-2"
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  placeholder="Seu nome completo"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-2"
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  placeholder="seu.email@exemplo.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="space-y-2"
              >
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  placeholder="(00) 00000-0000"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="space-y-2">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-300">
                    Estado
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                    placeholder="UF"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-300">
                    Cidade
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                    placeholder="Sua cidade"
                  />
                </div>
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="cursor-hover w-full py-3 md:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg transition-all"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                Quero conhecer o curso de Direito
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-xs text-gray-400 text-center leading-relaxed"
              >
                Receba informações sobre carreira jurídica, eventos e oportunidades.
              </motion.p>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
