"use client";

import { motion } from "framer-motion";
import { Target, Eye, Sparkles, Heart, Users, Building2 } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Misión",
    text: "Rehabilitar y educar a personas con discapacidad intelectual, contribuyendo a su mejor adaptación social, familiar y laboral.",
    color: "from-brand-500 to-brand-700"
  },
  {
    icon: Eye,
    title: "Visión",
    text: "Ser un instituto referente en México por la calidad humana y profesional con la que atendemos a cada persona y a su familia.",
    color: "from-accent-500 to-accent-700"
  },
  {
    icon: Sparkles,
    title: "Valores",
    text: "Inclusión, respeto, dignidad, compromiso, vocación de servicio, transparencia y amor por nuestra comunidad.",
    color: "from-emerald-500 to-emerald-700"
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold mb-5">
              <Building2 className="w-4 h-4" />
              Nuestra historia
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 leading-tight tracking-tight text-balance">
              Fundado en 1969 por{" "}
              <span className="gradient-text">padres y madres</span> de familia
            </h2>
            <div className="mt-6 space-y-4 text-slate-600 text-lg leading-relaxed">
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
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100">
                <div className="text-3xl font-display font-extrabold text-brand-700">
                  1969
                </div>
                <div className="text-xs text-slate-600 mt-1">Fundación</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-accent-50 to-white border border-accent-100">
                <div className="text-3xl font-display font-extrabold text-accent-600">
                  55+
                </div>
                <div className="text-xs text-slate-600 mt-1">Años</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
                <div className="text-3xl font-display font-extrabold text-emerald-700">
                  ONG
                </div>
                <div className="text-xs text-slate-600 mt-1">Sin fines de lucro</div>
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
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
                  alt="Educación inclusiva"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
                    alt="Aprendizaje"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 shadow-xl text-white flex flex-col justify-center aspect-square">
                  <Heart
                    className="w-10 h-10 mb-3 text-accent-300"
                    fill="currentColor"
                  />
                  <p className="text-sm leading-relaxed">
                    "Una Institución de corazón y sin fines de lucro"
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 rounded-full bg-accent-100" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 rounded-full bg-brand-100" />
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
              className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform`}
              >
                <p.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">
                {p.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
