import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Play, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
  });

  // Mouse tracking for chess queen
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the queen movement
  const springConfig = { damping: 25, stiffness: 100 };
  const queenX = useSpring(useTransform(mouseX, [0, window.innerWidth], [-30, 30]), springConfig);
  const queenY = useSpring(useTransform(mouseY, [0, window.innerHeight], [-30, 30]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
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
    <section className="relative min-h-screen flex items-center px-4 lg:px-8 py-24 overflow-hidden bg-neutral-950">
      {/* Animated gradient background - fog effect */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving fog/smoke effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-1/4 top-0 w-1/2 h-full bg-gradient-to-r from-red-950/10 via-red-900/5 to-transparent blur-3xl"
          animate={{
            x: ['0%', '150%'],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-0 w-1/2 h-full bg-gradient-to-l from-neutral-800/10 via-neutral-900/5 to-transparent blur-3xl"
          animate={{
            x: ['0%', '-150%'],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Sophisticated chessboard pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_2px,transparent_2px),linear-gradient(to_bottom,#ffffff02_2px,transparent_2px)] bg-[size:160px_160px]"></div>
      </div>

      {/* Diagonal strategic lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent"
          style={{ top: '20%' }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/10 to-transparent"
          style={{ top: '60%' }}
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-600/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Strategic Queen following mouse */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
        style={{
          x: queenX,
          y: queenY,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          {/* Glow behind queen */}
          <div className="absolute inset-0 blur-[100px] bg-red-600/5"></div>
          <div className="text-[28rem] leading-none text-white/[0.03] font-serif select-none">
            ♛
          </div>
        </motion.div>
      </motion.div>

      {/* Floating strategic pieces with parallax effect */}
      <motion.div
        className="absolute top-20 right-16 text-7xl opacity-[0.1] text-red-600"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ♜
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20 text-6xl opacity-[0.08] text-white"
        animate={{
          y: [0, 25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ♞
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4 text-5xl opacity-[0.06] text-red-700"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        ⚖️
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/3 text-6xl opacity-[0.07] text-neutral-400"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ♝
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20 text-4xl opacity-[0.05] text-red-500"
        animate={{
          x: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ♟
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Content - Strategic & Powerful */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left w-full"
        >
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
            >
              <p className="text-sm font-medium text-neutral-400">AMF Faculdade de Direito</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] font-display"
            >
              <span className="text-white">Cada jogada</span>
              <br />
              <span className="text-white">conta no</span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
                Direito
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
              <p className="text-lg md:text-xl text-neutral-300 font-light tracking-wide font-heading">
                Pensar. Argumentar. Decidir.
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-body"
          >
            No Direito, como no xadrez, a estratégia define o resultado. 
            Forme-se com quem entende que cada movimento jurídico é decisivo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
          >
            <button className="group relative px-7 py-4 bg-red-600 text-white font-semibold rounded-lg overflow-hidden transition-all hover:bg-red-700">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <BookOpen className="size-5" />
                Conhecer o curso
              </span>
            </button>

            <button className="group px-7 py-4 bg-transparent text-white font-semibold rounded-lg border border-white/20 transition-all hover:bg-white/5 hover:border-white/30">
              <span className="flex items-center justify-center gap-2">
                <Play className="size-5" />
                Ver conteúdos
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="inline-block"
          >
            <p className="text-sm text-neutral-500 italic border-l-2 border-red-600/50 pl-4 font-accent">
              "No jogo do Direito, quem pensa estrategicamente vence."
            </p>
          </motion.div>
        </motion.div>

        {/* Form - Strategic Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-lg mx-auto"
        >
          {/* Subtle red accent */}
          <div className="absolute -top-px left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl">♔</div>
              <h3 className="text-xl font-bold text-white">Faça sua jogada</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-950 border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600/50 focus:ring-1 focus:ring-red-600/50 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-950 border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600/50 focus:ring-1 focus:ring-red-600/50 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-300">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-950 border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600/50 focus:ring-1 focus:ring-red-600/50 transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label htmlFor="state" className="block text-sm font-medium text-neutral-300">
                    Estado
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-950 border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600/50 focus:ring-1 focus:ring-red-600/50 transition-all"
                    placeholder="UF"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="city" className="block text-sm font-medium text-neutral-300">
                    Cidade
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-950 border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600/50 focus:ring-1 focus:ring-red-600/50 transition-all"
                    placeholder="Sua cidade"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-red-600 text-white font-semibold rounded-lg transition-all hover:bg-red-700 mt-6"
              >
                Iniciar jornada jurídica
              </button>

              <p className="text-xs text-neutral-500 text-center leading-relaxed">
                Ao enviar, você receberá informações estratégicas sobre o curso.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}