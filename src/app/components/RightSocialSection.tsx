import { motion } from 'motion/react';
import {
  ArrowUpRight,
  BookOpen,
  Globe,
  GraduationCap,
  Instagram,
  Landmark,
  Trophy,
  Youtube,
} from 'lucide-react';
import diretorioDireito from '../assets/direteorio direito.jpg';
import palestraImage from '../assets/palestra.jpg';
import whatsappImage from '../assets/WhatsApp Image 2026-03-27 at 13.11.10.jpeg';

const socialLinks = [
  {
    title: 'Instagram',
    description: 'Atualizações e destaques do Direito em movimento.',
    href: 'https://www.instagram.com/direito.amf/',
    icon: Instagram,
  },
  {
    title: 'TikTok',
    description: 'Cortes, bastidores e jogadas rápidas.',
    href: 'https://www.tiktok.com/@emxequemate?lang=pt-BR',
    icon: Landmark,
  },
  {
    title: 'YouTube',
    description: 'Conversas, análises e conteúdos completos.',
    href: 'https://www.youtube.com/channel/UCV1BwLLJwrEbBHMyoZbHZRA',
    icon: Youtube,
  },
  {
    title: 'Podcast',
    description: 'Conteúdos e novidades do podcast nas redes.',
    href: 'https://www.instagram.com/podcastemxequemate/',
    icon: Instagram,
  },
  {
    title: 'Site Oficial de Direito',
    description: 'Informações institucionais e currículo.',
    href: 'https://www2.faculdadeam.edu.br/bacharelado-em-direito/',
    icon: Globe,
  },
  {
    title: 'Especialização',
    description: 'Aprofundamento e avanço de carreira.',
    href: 'https://especializacaodireitoamf.com.br/',
    icon: GraduationCap,
  },
  {
    title: 'DADAM',
    description: 'Representação estudantil e participação acadêmica.',
    href: 'https://www.instagram.com/dadam.amf/',
    icon: BookOpen,
  },
  {
    title: 'Atlética',
    description: 'Vida universitária além da sala de aula.',
    href: 'https://www.instagram.com/atleticadireitoamf/',
    icon: Trophy,
  },
];

const gallery = [
  {
    src: palestraImage,
    alt: 'Palestra de Direito',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: whatsappImage,
    alt: 'Vivência acadêmica do curso de Direito',
    className: '',
  },
  {
    src: diretorioDireito,
    alt: 'Diretório de Direito',
    className: '',
  },
];

export function RightSocialSection() {
  return (
    <section id="comunidade" className="relative overflow-hidden bg-neutral-900 px-4 py-16 md:py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl space-y-3"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-400">
            Comunidade
          </p>
          <h2 className="max-w-4xl text-3xl font-bold leading-[0.98] text-white sm:text-4xl md:text-5xl xl:text-6xl font-display text-balance">
            Tudo que conecta o <span className="text-red-500">Direito</span> em comunidade
          </h2>
        </motion.div>

        <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="grid gap-3 lg:grid-cols-[minmax(0,1.65fr)_minmax(240px,0.85fr)]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-black/20"
            >
              <img
                src={gallery[0].src}
                alt={gallery[0].alt}
                className="h-full min-h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:min-h-[320px] lg:min-h-[470px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute left-4 bottom-4">
                <span className="inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                  Direito
                </span>
              </div>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {gallery.slice(1).map((image, index) => (
                <motion.div
                  key={image.alt}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 + 0.08 }}
                  className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-black/20"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full min-h-[180px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:min-h-[220px] lg:min-h-[252px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute left-4 bottom-4">
                    <span className="inline-flex rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                      Direito
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[24px] border border-white/10 bg-black/25 p-4 md:rounded-[28px] md:p-5"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
                Comunidade e Redes
              </h3>
              <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-red-600" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    target="_blank"
                    rel="noreferrer"
                    className="group min-h-[92px] rounded-[16px] border border-white/10 bg-white/5 p-3.5 transition-colors hover:border-red-500/40 hover:bg-white/[0.07] sm:min-h-[116px] sm:rounded-[18px] sm:p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-red-600/15 text-red-400 sm:size-9 sm:rounded-xl">
                        <Icon className="size-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-start justify-between gap-3">
                          <h4 className="pr-1 text-sm font-semibold leading-snug text-white [overflow-wrap:anywhere] sm:text-base">
                            {item.title}
                          </h4>
                          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-neutral-500 transition-colors group-hover:text-red-400" />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
