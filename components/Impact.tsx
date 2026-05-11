"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

function Counter({
  to,
  suffix = "",
  duration = 2
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const value = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = Math.round(latest).toLocaleString("es-MX") + suffix;
        }
      }
    });
    return () => controls.stop();
  }, [inView, to, suffix, duration, value]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 55, suffix: "+", label: "Años de trayectoria" },
  { value: 1969, suffix: "", label: "Año de fundación" },
  { value: 100, suffix: "%", label: "Sin fines de lucro" },
  { value: 1000, suffix: "+", label: "Vidas impactadas" }
];

const testimonials = [
  {
    quote:
      "El IREE le devolvió a mi hijo la posibilidad de crecer, aprender y tener amigos. Es un lugar donde se siente la vocación en cada detalle.",
    author: "Familia Rodríguez",
    role: "Padres de usuario"
  },
  {
    quote:
      "Más que una institución, es una segunda casa. Las terapeutas y maestras transforman vidas todos los días con paciencia y amor.",
    author: "María Elena",
    role: "Madre de familia"
  },
  {
    quote:
      "Aquí mi hermana descubrió sus talentos y aprendió a desenvolverse. La capacitación laboral cambió su autoestima por completo.",
    author: "Carlos Méndez",
    role: "Hermano de usuaria"
  }
];

export default function Impact() {
  return (
    <section
      id="impacto"
      className="relative py-24 sm:py-32 bg-gradient-to-br from-brand-700 via-brand-800 to-ink-950 overflow-hidden"
    >
      {/* decorative */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-400 rounded-full blur-3xl animate-blob" />
        <div
          className="absolute bottom-10 right-10 w-72 h-72 bg-brand-300 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white text-sm font-bold mb-5">
            NUESTRO IMPACTO
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight tracking-tight text-balance uppercase">
            CIFRAS QUE CUENTAN{" "}
            <span className="text-brand-300">
              HISTORIAS REALES
            </span>
          </h2>
          <p className="mt-5 text-lg text-brand-50 text-balance font-medium">
            Cada número representa una persona, una familia, un sueño y un
            futuro mejor.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-3xl bg-white/10 backdrop-blur border border-white/15 hover:bg-white/15 hover:border-white/25 transition-all"
            >
              <div className="text-4xl sm:text-5xl font-display text-white mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm sm:text-base text-brand-100 font-bold">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 rounded-3xl bg-white/10 backdrop-blur border border-white/15 hover:bg-white/15 transition-all"
            >
              <Quote className="w-8 h-8 text-brand-300 mb-4" fill="currentColor" />
              <p className="text-white leading-relaxed mb-5 font-medium">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-brand-500 flex items-center justify-center font-display text-white">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-white text-sm uppercase">
                    {t.author}
                  </div>
                  <div className="text-brand-200 text-xs font-bold">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
