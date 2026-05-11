"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-white" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] opacity-30" />

      {/* Blobs verdes */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-brand-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div
        className="absolute top-40 right-0 w-96 h-96 bg-brand-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute -bottom-20 left-1/3 w-96 h-96 bg-brand-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-brand-200 mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span className="text-sm font-bold text-ink-900">
                Más de 55 años transformando vidas
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ink-900 leading-[1.05] tracking-tight text-balance uppercase"
            >
              UNA INSTITUCIÓN{" "}
              <span className="gradient-text">DE CORAZÓN</span>, DEDICADA A
              CAMBIAR VIDAS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-ink-700 max-w-xl leading-relaxed text-balance font-medium"
            >
              Desde 1969 rehabilitamos y educamos a personas con discapacidad
              intelectual en León, Guanajuato, contribuyendo a su adaptación
              social y laboral.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#donar"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-500 hover:bg-brand-600 text-white font-display rounded-full shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.03] transition-all"
              >
                <Heart
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                />
                APOYA NUESTRA CAUSA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-ink-900 font-display rounded-full border-2 border-ink-900 shadow-sm hover:shadow-md hover:bg-ink-900 hover:text-white transition-all"
              >
                NUESTROS SERVICIOS
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-700 font-bold"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                <span>Atención de 8:00 a 14:00 hrs</span>
              </div>
              <a
                href="tel:+524777123244"
                className="flex items-center gap-2 hover:text-brand-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                477 712 32 44
              </a>
              <a
                href="https://wa.me/524772566524"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-brand-600" />
                WhatsApp 477 256 65 24
              </a>
            </motion.div>
          </div>

          {/* Visual / Stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[5/6] sm:aspect-[4/5] max-w-md mx-auto">
              {/* Main image */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1597392582469-a697322d5c16?auto=format&fit=crop&w=900&q=80"
                  alt="Personas sonriendo en actividad inclusiva"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
              </div>

              {/* Floating card 1 */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 sm:-left-10 top-12 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-2xl font-display text-ink-900">
                      55+
                    </div>
                    <div className="text-xs text-ink-700 font-bold">Años de servicio</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -right-4 sm:-right-10 bottom-16 glass rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-ink-900 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-display text-ink-900">
                      Sin fines
                    </div>
                    <div className="text-xs text-ink-700 font-bold">de lucro · ONG</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative rings */}
              <div className="absolute -z-10 -bottom-8 -right-8 w-48 h-48 rounded-full border-8 border-brand-200/60" />
              <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 rounded-full border-8 border-brand-300/60" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}
