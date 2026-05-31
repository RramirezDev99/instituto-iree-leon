"use client";

import { motion } from "framer-motion";
import { Target, Eye, Sparkles, Heart, Building2 } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "MISIÓN",
    text: "Rehabilitar y educar a personas con discapacidad intelectual, contribuyendo a su mejor adaptación social, familiar y laboral.",
    tone: "bg-brand-500"
  },
  {
    icon: Eye,
    title: "VISIÓN",
    text: "Ser un instituto referente en México por la calidad humana y profesional con la que atendemos a cada persona y a su familia.",
    tone: "bg-brand-700"
  },
  {
    icon: Sparkles,
    title: "VALORES",
    text: "Inclusión, respeto, dignidad, compromiso, vocación de servicio, transparencia y amor por nuestra comunidad.",
    tone: "bg-ink-900"
  }
];

export default function About() {
  return (
    <section id="nosotros" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-bold mb-5">
              <Building2 className="w-4 h-4" />
              NUESTRA HISTORIA
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-ink-900 leading-tight tracking-tight text-balance uppercase">
              FUNDADO EN 1969 POR{" "}
              <span className="gradient-text">PADRES Y MADRES</span> DE FAMILIA
            </h2>
            <div className="mt-6 space-y-4 text-ink-700 text-lg leading-relaxed font-medium">
              <p>
                El Instituto de Rehabilitación y Educación Especial de León,
                Guanajuato (IREE) nació el <strong>6 de febrero de 1969</strong>{" "}
                como respuesta de un grupo de familias que buscaban opciones
                reales de educación y rehabilitación para sus hijas e hijos con
                discapacidad intelectual.
              </p>
              <p>
                Más de cinco décadas después, seguimos siendo una{" "}
                <strong>institución sin fines de lucro</strong>, sostenida por
                la comunidad, comprometida con el bienestar integral de cada
                persona que recibimos.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <div className="text-center p-4 rounded-2xl bg-brand-50 border border-brand-200">
                <div className="text-3xl font-display text-brand-700">1969</div>
                <div className="text-xs text-ink-700 mt-1 font-bold">Fundación</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-brand-500 text-white">
                <div className="text-3xl font-display">55+</div>
                <div className="text-xs mt-1 font-bold opacity-90">Años</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-ink-900 text-white">
                <div className="text-3xl font-display">ONG</div>
                <div className="text-xs mt-1 font-bold opacity-90">Sin fines de lucro</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl">
                <img
                  src="/photos/iree-19.jpg"
                  alt="Estudiante del IREE en clase de computación"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                  <img
                    src="/photos/iree-22.jpg"
                    alt="Capacitación laboral en jardinería"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl bg-brand-500 p-6 shadow-xl text-white flex flex-col justify-center aspect-square">
                  <Heart
                    className="w-10 h-10 mb-3 text-white"
                    fill="currentColor"
                  />
                  <p className="text-sm leading-relaxed font-bold">
                    &ldquo;Una Institución de corazón y sin fines de lucro&rdquo;
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 rounded-full bg-brand-100" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 rounded-full bg-brand-200" />
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="mt-24 grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white border-2 border-ink-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-brand-300 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${p.tone} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform`}
              >
                <p.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl text-ink-900 mb-3 uppercase">
                {p.title}
              </h3>
              <p className="text-ink-700 leading-relaxed font-medium">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
