"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Stethoscope,
  Briefcase,
  HeartPulse,
  Users2,
  Palette
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Educación Especial",
    description:
      "Programas educativos adaptados, con planes individualizados que respetan los tiempos y capacidades de cada estudiante.",
    features: ["Currículo adaptado", "Atención personalizada", "Grupos reducidos"],
    color: "from-brand-500 to-brand-700",
    bg: "bg-brand-50"
  },
  {
    icon: HeartPulse,
    title: "Terapia de Rehabilitación",
    description:
      "Terapias físicas, ocupacionales y de lenguaje para fomentar la autonomía y mejorar la calidad de vida.",
    features: ["Terapia física", "Terapia de lenguaje", "Terapia ocupacional"],
    color: "from-rose-500 to-rose-700",
    bg: "bg-rose-50"
  },
  {
    icon: Stethoscope,
    title: "Atención Médica",
    description:
      "Acompañamiento médico y nutricional para asegurar el bienestar integral de cada usuaria y usuario del instituto.",
    features: ["Valoración médica", "Nutrición", "Seguimiento integral"],
    color: "from-emerald-500 to-emerald-700",
    bg: "bg-emerald-50"
  },
  {
    icon: Briefcase,
    title: "Capacitación Laboral",
    description:
      "Desarrollo de habilidades para la vida laboral, ayudando a la inserción y autonomía económica de los jóvenes.",
    features: ["Talleres productivos", "Habilidades sociales", "Vinculación con empresas"],
    color: "from-accent-500 to-accent-700",
    bg: "bg-accent-50"
  },
  {
    icon: Users2,
    title: "Apoyo a Familias",
    description:
      "Orientación, talleres y red de apoyo para padres, madres y cuidadores que acompañan el proceso.",
    features: ["Asesoría psicológica", "Talleres", "Comunidad"],
    color: "from-violet-500 to-violet-700",
    bg: "bg-violet-50"
  },
  {
    icon: Palette,
    title: "Arte y Deporte",
    description:
      "Actividades culturales, artísticas y deportivas que estimulan el desarrollo motor, social y emocional.",
    features: ["Música y arte", "Deportes adaptados", "Eventos comunitarios"],
    color: "from-sky-500 to-sky-700",
    bg: "bg-sky-50"
  }
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 border border-accent-100 text-accent-700 text-sm font-semibold mb-5">
            Nuestros servicios
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 leading-tight tracking-tight text-balance">
            Atención integral{" "}
            <span className="gradient-text">en un solo lugar</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 text-balance">
            Combinamos educación, salud, terapia y capacitación para potenciar
            las capacidades de cada persona y abrir nuevas puertas para su
            futuro.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute -top-12 -right-12 w-40 h-40 ${s.bg} rounded-full group-hover:scale-150 transition-transform duration-500`}
              />
              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg mb-5 group-hover:rotate-6 transition-transform`}
                >
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {s.description}
                </p>
                <ul className="space-y-1.5">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
