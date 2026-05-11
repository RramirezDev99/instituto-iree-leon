"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Youtube,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";

const info = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Donizetti s/n, entrada por Guty Cárdenas",
    sub: "Col. León Moderno, León, Gto."
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+52 477 712 3244",
    href: "tel:+524777123244"
  },
  {
    icon: Mail,
    label: "Correo",
    value: "contacto@institutoireeleon.com.mx",
    href: "mailto:contacto@institutoireeleon.com.mx"
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun – Vie · 8:00 a 14:00 hrs"
  }
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contacto"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-semibold mb-5">
            Contáctanos
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 leading-tight tracking-tight text-balance">
            Estamos para{" "}
            <span className="gradient-text">escucharte</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 text-balance">
            ¿Tienes preguntas, quieres visitarnos o sumarte como aliado?
            Escríbenos y con gusto te respondemos.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {info.map((it) => (
              <div
                key={it.label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30">
                  <it.icon className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    {it.label}
                  </div>
                  {it.href ? (
                    <a
                      href={it.href}
                      className="text-slate-900 font-medium hover:text-brand-700 transition-colors break-words"
                    >
                      {it.value}
                    </a>
                  ) : (
                    <div className="text-slate-900 font-medium break-words">
                      {it.value}
                    </div>
                  )}
                  {it.sub && (
                    <div className="text-sm text-slate-500 mt-0.5">{it.sub}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-lg">
              <div className="text-sm font-semibold mb-3">Síguenos</div>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 relative"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-100 shadow-xl space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nombre
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-400 focus:ring-4 focus:ring-brand-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Correo
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-400 focus:ring-4 focus:ring-brand-100 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Asunto
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-400 focus:ring-4 focus:ring-brand-100 outline-none transition-all">
                  <option>Información general</option>
                  <option>Quiero donar</option>
                  <option>Voluntariado</option>
                  <option>Alianza empresarial</option>
                  <option>Inscripciones</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-400 focus:ring-4 focus:ring-brand-100 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-brand-600 to-brand-800 text-white font-semibold rounded-full shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02] transition-all"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" /> ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-slate-200"
        >
          <iframe
            title="Mapa Instituto IREE"
            src="https://www.google.com/maps?q=Instituto+IREE+Le%C3%B3n+Guanajuato+Donizetti&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
