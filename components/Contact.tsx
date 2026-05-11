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
  CheckCircle2,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

const info = [
  {
    icon: MapPin,
    label: "DIRECCIÓN",
    value: "Donizetti s/n, entrada por Guty Cárdenas",
    sub: "Col. León Moderno, León, Gto."
  },
  {
    icon: Phone,
    label: "TELÉFONO",
    value: "477 712 32 44",
    href: "tel:+524777123244"
  },
  {
    icon: MessageCircle,
    label: "WHATSAPP",
    value: "477 256 65 24",
    href: "https://wa.me/524772566524"
  },
  {
    icon: Mail,
    label: "CORREO",
    value: "ireeleon@gmail.com",
    href: "mailto:ireeleon@gmail.com"
  },
  {
    icon: Clock,
    label: "HORARIO",
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
      className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-brand-50/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500 text-white text-sm font-bold mb-5">
            CONTÁCTANOS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-ink-900 leading-tight tracking-tight text-balance uppercase">
            ESTAMOS PARA{" "}
            <span className="gradient-text">ESCUCHARTE</span>
          </h2>
          <p className="mt-5 text-lg text-ink-700 text-balance font-medium">
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
            className="lg:col-span-2 space-y-3"
          >
            {info.map((it) => (
              <div
                key={it.label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border-2 border-ink-100 shadow-sm hover:shadow-md hover:border-brand-300 transition-all"
              >
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
                  <it.icon className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs tracking-wider text-brand-700 font-display">
                    {it.label}
                  </div>
                  {it.href ? (
                    <a
                      href={it.href}
                      target={it.href.startsWith("http") ? "_blank" : undefined}
                      rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-ink-900 font-bold hover:text-brand-600 transition-colors break-words"
                    >
                      {it.value}
                    </a>
                  ) : (
                    <div className="text-ink-900 font-bold break-words">
                      {it.value}
                    </div>
                  )}
                  {it.sub && (
                    <div className="text-sm text-ink-700 mt-0.5 font-medium">{it.sub}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="p-5 rounded-2xl bg-ink-900 text-white shadow-lg">
              <div className="text-sm font-display mb-3">SÍGUENOS</div>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-xl bg-brand-500 hover:bg-brand-600 flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-xl bg-brand-500 hover:bg-brand-600 flex items-center justify-center transition-colors"
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
              className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-ink-100 shadow-xl space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-display text-ink-900 mb-2 uppercase">
                    Nombre
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl border-2 border-ink-100 bg-brand-50/50 focus:bg-white focus:border-brand-400 focus:ring-4 focus:ring-brand-100 outline-none transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-display text-ink-900 mb-2 uppercase">
                    Correo
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-ink-100 bg-brand-50/50 focus:bg-white focus:border-brand-400 focus:ring-4 focus:ring-brand-100 outline-none transition-all font-medium"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-display text-ink-900 mb-2 uppercase">
                  Asunto
                </label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-ink-100 bg-brand-50/50 focus:bg-white focus:border-brand-400 focus:ring-4 focus:ring-brand-100 outline-none transition-all font-medium">
                  <option>Información general</option>
                  <option>Quiero donar</option>
                  <option>Voluntariado</option>
                  <option>Alianza empresarial</option>
                  <option>Inscripciones</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-display text-ink-900 mb-2 uppercase">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-ink-100 bg-brand-50/50 focus:bg-white focus:border-brand-400 focus:ring-4 focus:ring-brand-100 outline-none transition-all resize-none font-medium"
                />
              </div>
              <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-500 hover:bg-brand-600 text-white font-display rounded-full shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02] transition-all uppercase"
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
          className="mt-12 rounded-3xl overflow-hidden shadow-xl border-2 border-ink-100"
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
