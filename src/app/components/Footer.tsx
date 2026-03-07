import { motion } from 'motion/react';
import { Instagram, Globe, Calendar, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black overflow-hidden">
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        {/* Circuit-like legal pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="legal-circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M 0 100 L 50 100 L 50 50 L 100 50" stroke="white" strokeWidth="1" fill="none" />
              <path d="M 100 50 L 150 50 L 150 100 L 200 100" stroke="white" strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="3" fill="white" />
              <circle cx="150" cy="50" r="3" fill="white" />
              <circle cx="100" cy="100" r="3" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#legal-circuit)" />
        </svg>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        
        {/* Animated red accent */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating legal symbols */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-[0.03] text-white"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ⚖️
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-5xl opacity-[0.03] text-red-600"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        ♛
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">♔</span>
              <h3 className="text-2xl font-bold font-display">
                <span className="text-white">AMF</span>
                <span className="text-red-600"> Direito</span>
              </h3>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs font-body">
              Formando estrategistas jurídicos que pensam além do convencional.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-neutral-400 hover:text-red-600 transition-colors text-sm"
              >
                Sobre o curso
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-red-600 transition-colors text-sm"
              >
                Áreas jurídicas
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-red-600 transition-colors text-sm"
              >
                Processo seletivo
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-red-600 transition-colors text-sm"
              >
                Eventos
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-3 text-neutral-400 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 flex-shrink-0 text-red-600" />
                <p>Recanto Maestro<br />Restinga Sêca - RS</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 flex-shrink-0 text-red-600" />
                <p>contato@amf.edu.br</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 flex-shrink-0 text-red-600" />
                <p>(55) 3289-1100</p>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-red-600 hover:bg-red-600/10 transition-all group"
              >
                <Instagram className="size-5 text-neutral-400 group-hover:text-red-600 transition-colors" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-red-600 hover:bg-red-600/10 transition-all group"
              >
                <Globe className="size-5 text-neutral-400 group-hover:text-red-600 transition-colors" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-red-600 hover:bg-red-600/10 transition-all group"
              >
                <Calendar className="size-5 text-neutral-400 group-hover:text-red-600 transition-colors" />
              </a>
            </div>

            <div className="pt-4">
              <p className="text-xs text-neutral-500 italic border-l-2 border-red-600/50 pl-3 font-accent">
                "Cada movimento conta no jogo do Direito"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-neutral-500 text-sm">
              © 2026 Antonio Meneghetti Faculdade. Todos os direitos reservados.
            </p>

            <div className="flex gap-6 text-sm text-neutral-500">
              <a href="#" className="hover:text-red-600 transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                Termos de uso
              </a>
            </div>
          </div>
        </motion.div>

        {/* Decorative chess piece */}
        <motion.div
          className="absolute bottom-8 right-8 text-6xl opacity-[0.04] text-white hidden lg:block"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ♛
        </motion.div>
      </div>
    </footer>
  );
}