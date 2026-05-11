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
    title: "EDUCACIÓN ESPECIAL",
    description:
      "Programas educativos adaptados, con planes individualizados que respetan los tiempos y capacidades de cada estudiante.",
    features: ["Currículo adaptado", "Atención personalizada", "Grupos reducidos"],
    tone: "bg-brand-500"
  },
  {
    icon: HeartPulse,
    title: "TERAPIA DE REHABILITACIÓN",
    description:
      "Terapias físicas, ocupacionales y de lenguaje para fomentar la autonomía y mejorar la calidad de vida.",
    features: ["Terapia física", "Terapia de lenguaje", "Terapia ocupacional"],
    tone: "bg-brand-700"
  },
  {
    icon: Stethoscope,
    title: "ATENCIÓN MÉDICA",
    description:
      "Acompañamiento médico y nutricional para asegurar el bienestar integral de cada usuaria y usuario del instituto.",
    features: ["Valoración médica", "Nutrición", "Seguimiento integral"],
    tone: "bg-ink-900"
  },
  {
    icon: Briefcase,
    title: "CAPACITACIÓN LABORAL",
    description:
      "Desarrollo de habilidades para la vida laboral, ayudando a la inserción y autonomía económica de los jóvenes.",
    features: ["Talleres productivos", "Habilidades sociales", "Vinculación con empresas"],
    tone: "bg-brand-500"
  },
  {
    icon: Users2,
    title: "APOYO A FAMILIAS",
    description:
      "Orientación, talleres y red de apoyo para padres, madres y cuidadores que acompañan el proceso.",
    features: ["Asesoría psicológica", "Talleres", "Comunidad"],
    tone: "bg-brand-700"
  },
  {
    icon: Palette,
    title: "ARTE Y DEPORTE",
    description:
      "Actividades culturales, artísticas y deportivas que estimulan el desarrollo motor, social y emocional.",
    features: ["Música y arte", "Deportes adaptados", "Eventos comunitarios"],
    tone: "bg-ink-900"
  }
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-brand-50/50 to-white overflow-hidden"
    >
      {/* decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-brand-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500 text-white text-sm font-bold mb-5">
            NUESTROS SERVICIOS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-ink-900 leading-tight tracking-tight text-balance uppercase">
            ATENCIÓN INTEGRAL{" "}
            <span className="gradient-text">EN UN SOLO LUGAR</span>
          </h2>
          <p className="mt-5 text-lg text-ink-700 text-balance font-medium">
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
              className="group relative bg-white p-7 rounded-3xl border-2 border-ink-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-brand-400 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-50 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-2xl ${s.tone} flex items-center justify-center shadow-lg mb-5 group-hover:rotate-6 transition-transform`}
                >
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl text-ink-900 mb-2 uppercase">
                  {s.title}
                </h3>
                <p className="text-ink-700 text-sm leading-relaxed mb-4 font-medium">
                  {s.description}
                </p>
                <ul className="space-y-1.5">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-ink-900 font-bold"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
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
