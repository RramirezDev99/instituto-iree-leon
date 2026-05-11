"use client";

import { motion } from "framer-motion";
import { Heart, HandHeart, Gift, Users, ArrowRight, MessageCircle } from "lucide-react";

const ways = [
  {
    icon: Heart,
    title: "DONATIVO ÚNICO",
    text: "Aporta una cantidad puntual y deducible de impuestos. Cada peso se transforma en oportunidad.",
    cta: "Donar ahora"
  },
  {
    icon: Gift,
    title: "DONATIVO MENSUAL",
    text: "Conviértete en padrino o madrina. Una aportación recurrente sostiene programas a largo plazo.",
    cta: "Quiero apadrinar"
  },
  {
    icon: HandHeart,
    title: "VOLUNTARIADO",
    text: "Comparte tu tiempo y talento. Eventos, talleres, terapias o áreas administrativas.",
    cta: "Ser voluntario"
  },
  {
    icon: Users,
    title: "EMPRESAS ALIADAS",
    text: "Genera impacto social desde tu empresa con alianzas, patrocinios o responsabilidad social.",
    cta: "Hagamos alianza"
  }
];

export default function Donate() {
  return (
    <section
      id="donar"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-brand-50/50 to-white overflow-hidden"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-brand-300/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500 text-white text-sm font-bold mb-5">
            <Heart className="w-4 h-4" fill="currentColor" />
            CÓMO AYUDAR
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-ink-900 leading-tight tracking-tight text-balance uppercase">
            TU APOYO{" "}
            <span className="gradient-text">CAMBIA VIDAS</span> TODOS LOS DÍAS
          </h2>
          <p className="mt-5 text-lg text-ink-700 text-balance font-medium">
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
              className="group relative p-7 rounded-3xl bg-white border-2 border-ink-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-brand-400 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/30 mb-5 group-hover:scale-110 transition-transform">
                <w.icon className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <h3 className="font-display text-xl text-ink-900 mb-2 uppercase">
                {w.title}
              </h3>
              <p className="text-ink-700 text-sm leading-relaxed mb-5 font-medium">
                {w.text}
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-1.5 text-sm font-display text-brand-600 hover:text-brand-700 group-hover:gap-2.5 transition-all uppercase"
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
          className="mt-16 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-700 to-ink-950 p-10 sm:p-14 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl" />
          <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
            <div className="max-w-2xl">
              <h3 className="font-display text-3xl sm:text-4xl text-white leading-tight uppercase">
                Sé parte del corazón del IREE.
              </h3>
              <p className="mt-4 text-brand-50 text-lg font-medium">
                Hablemos. Te contamos cómo tu donativo, tiempo o alianza
                construye un futuro digno para nuestras niñas, niños y jóvenes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/524772566524?text=Hola%2C%20quisiera%20donar%20al%20Instituto%20IREE%20Le%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-brand-700 font-display rounded-full shadow-xl hover:scale-105 transition-transform uppercase"
              >
                <MessageCircle className="w-5 h-5" />
                Donar por WhatsApp
              </a>
              <a
                href="tel:+524777123244"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 backdrop-blur text-white font-display rounded-full border-2 border-white/30 hover:bg-white/20 transition-colors uppercase"
              >
                477 712 32 44
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
