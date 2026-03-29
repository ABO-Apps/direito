import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Send } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    estado: '',
    cidade: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const webhookUrl = import.meta.env.VITE_GSHEETS_WEBHOOK_URL?.trim();
    const token = import.meta.env.VITE_GSHEETS_TOKEN?.trim();
    const sheetName = import.meta.env.VITE_SHEET_NAME?.trim() || 'Leads';

    if (import.meta.env.DEV) {
      const tokenPreview = token ? `${token.slice(0, 8)}...` : 'missing';
      console.log('[gsheets] submitting', { webhookUrl, tokenPreview, sheetName });
    }

    if (!webhookUrl || !token) {
      const missingVars = [
        !webhookUrl ? 'VITE_GSHEETS_WEBHOOK_URL' : null,
        !token ? 'VITE_GSHEETS_TOKEN' : null,
      ]
        .filter(Boolean)
        .join(', ');
      setSubmitError(`Configuração ausente: ${missingVars}.`);
      return;
    }

    if (token.startsWith('$2') && !/^\$2[aby]\$\d{2}\$/.test(token)) {
      setSubmitError('Token inválido no .env. Escape "$" como "\\$" e reinicie o Vite.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new URLSearchParams({
        token,
        sheet_name: sheetName,
        submittedAt: new Date().toISOString(),
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        estado: formData.estado,
        cidade: formData.cidade,
      });
      const payloadString = payload.toString();

      await fetch(`${webhookUrl}?${payloadString}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        // Duplicate params in URL to ensure Apps Script e.parameter is populated.
        body: payloadString,
      });

      setFormData({ nome: '', telefone: '', email: '', estado: '', cidade: '' });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Falha ao enviar formulário.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center px-4 lg:px-8 py-24 overflow-hidden bg-neutral-950">
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
          ease: 'easeInOut',
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
            ease: 'easeInOut',
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
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Chessboard pattern */}
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
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/10 to-transparent"
          style={{ top: '60%' }}
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
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
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Queen following mouse */}
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
          <div className="text-[28rem] leading-none text-white/[0.03] font-serif select-none">♛</div>
        </motion.div>
      </motion.div>

      {/* Floating pieces with parallax effect */}
      <motion.div
        className="absolute top-20 right-16 text-7xl opacity-[0.1] text-red-600"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
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
          ease: 'easeInOut',
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
          ease: 'linear',
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
          ease: 'easeInOut',
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
          ease: 'easeInOut',
        }}
      >
        ♟
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full space-y-6 text-center lg:space-y-8 lg:text-left"
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              <span className="text-white">Bem-vindo</span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
                ao Xeque-Mate
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-3 lg:justify-start"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-red-600 sm:w-12"></div>
              <p className="font-heading text-base font-light tracking-wide text-neutral-200 sm:text-lg md:text-xl">
                O lugar onde o Direito sai da teoria e entra no jogo.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto max-w-xl space-y-3 font-body text-sm leading-relaxed text-neutral-300 sm:text-base md:text-lg lg:mx-0"
          >
            <p>
              Aqui, cada conversa é uma jogada estratégica: exploramos cases, carreira e discussões que mostram o Direito no dia a dia.
            </p>
            <p>
              Mais do que decorar leis, entender o Direito é saber jogar o jogo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-block"
          >
            <p className="text-sm text-neutral-500 italic border-l-2 border-red-600/50 pl-4 font-accent">
              "No jogo do Direito, estratégia também é leitura de cenário."
            </p>
          </motion.div>
        </motion.div>

        {/* Form - Sheets integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -top-px left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

          <div className="bg-stone-950/80 backdrop-blur-md border border-stone-700/60 rounded-[28px] p-6 md:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl text-red-500">♞</div>
              <h3 className="text-xl font-bold text-white">Receba novidades do Xeque-Mate</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nome" className="mb-2 block text-sm font-medium text-stone-200">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-stone-700 bg-stone-900/80 px-4 py-3 text-white transition-colors placeholder:text-stone-500 focus:border-red-500 focus:outline-none"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-200">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-stone-700 bg-stone-900/80 px-4 py-3 text-white transition-colors placeholder:text-stone-500 focus:border-red-500 focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="mb-2 block text-sm font-medium text-stone-200">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-stone-700 bg-stone-900/80 px-4 py-3 text-white transition-colors placeholder:text-stone-500 focus:border-red-500 focus:outline-none"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="estado" className="mb-2 block text-sm font-medium text-stone-200">
                    Estado
                  </label>
                  <input
                    type="text"
                    id="estado"
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-stone-700 bg-stone-900/80 px-4 py-3 text-white uppercase transition-colors placeholder:text-stone-500 focus:border-red-500 focus:outline-none"
                    placeholder="UF"
                    maxLength={2}
                  />
                </div>
                <div>
                  <label htmlFor="cidade" className="mb-2 block text-sm font-medium text-stone-200">
                    Cidade
                  </label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-stone-700 bg-stone-900/80 px-4 py-3 text-white transition-colors placeholder:text-stone-500 focus:border-red-500 focus:outline-none"
                    placeholder="Sua cidade"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span>{isSubmitting ? 'Enviando...' : 'Quero receber novidades'}</span>
                <Send className="w-4 h-4" />
              </motion.button>

              {submitError && (
                <p className="mt-2 text-center text-xs text-red-400">
                  {submitError}
                </p>
              )}

              <p className="mt-4 text-center text-xs text-stone-500">
                Seus dados serão usados apenas para contato sobre conteúdos e novidades.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
