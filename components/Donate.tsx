"use client";

import { motion } from "framer-motion";
import { Heart, HandHeart, Gift, Users, ArrowRight } from "lucide-react";

const ways = [
  {
    icon: Heart,
    title: "Donativo único",
    text: "Aporta una cantidad puntual y deducible de impuestos. Cada peso se transforma en oportunidad.",
    cta: "Donar ahora"
  },
  {
    icon: Gift,
    title: "Donativo mensual",
    text: "Conviértete en padrino o madrina. Una aportación recurrente sostiene programas a largo plazo.",
    cta: "Quiero apadrinar"
  },
  {
    icon: HandHeart,
    title: "Voluntariado",
    text: "Comparte tu tiempo y talento. Eventos, talleres, terapias o áreas administrativas.",
    cta: "Ser voluntario"
  },
  {
    icon: Users,
    title: "Empresas aliadas",
    text: "Genera impacto social desde tu empresa con alianzas, patrocinios o responsabilidad social.",
    cta: "Hagamos alianza"
  }
];

export default function Donate() {
  return (
    <section
      id="donar"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-accent-50/50 to-white overflow-hidden"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-accent-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-100 border border-accent-200 text-accent-700 text-sm font-semibold mb-5">
            <Heart className="w-4 h-4" fill="currentColor" />
            Cómo ayudar
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 leading-tight tracking-tight text-balance">
            Tu apoyo{" "}
            <span className="gradient-text">cambia vidas</span> todos los días
          </h2>
          <p className="mt-5 text-lg text-slate-600 text-balance">
            Como institución sin fines de lucro, dependemos de la comunidad
            para sostener nuestros programas. Hay muchas formas de sumarte.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ways.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-7 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center shadow-lg shadow-accent-500/30 mb-5 group-hover:scale-110 transition-transform">
                <w.icon className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                {w.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {w.text}
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700 group-hover:gap-2.5 transition-all"
              >
                {w.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-10 sm:p-14 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl" />
          <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
            <div className="max-w-2xl">
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                Sé parte del corazón del IREE.
              </h3>
              <p className="mt-4 text-brand-100 text-lg">
                Hablemos. Te contamos cómo tu donativo, tiempo o alianza
                construye un futuro digno para nuestras niñas, niños y jóvenes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-accent-400 to-accent-500 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition-transform"
              >
                <Heart className="w-5 h-5" fill="currentColor" />
                Quiero donar
              </a>
              <a
                href="tel:+524777123244"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                Llámanos: 477 712 3244
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
