"use client";

import { Heart, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

const sections = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Servicios", href: "#servicios" },
      { label: "Impacto", href: "#impacto" },
      { label: "Galería", href: "#galeria" }
    ]
  },
  {
    title: "Apoya",
    links: [
      { label: "Donar", href: "#donar" },
      { label: "Voluntariado", href: "#donar" },
      { label: "Empresas aliadas", href: "#donar" },
      { label: "Contacto", href: "#contacto" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg">
                <span className="font-display font-extrabold text-white text-lg">
                  I
                </span>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent-500 ring-2 ring-slate-950" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg">
                  Instituto IREE
                </div>
                <div className="text-xs text-slate-400 tracking-wider uppercase">
                  León, Guanajuato
                </div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Desde 1969, rehabilitamos y educamos a personas con discapacidad
              intelectual. Una institución de corazón y sin fines de lucro.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="font-semibold text-white mb-4">{s.title}</h4>
              <ul className="space-y-2.5">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-5 text-sm text-slate-400">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-400" />
            <span>Donizetti s/n, Col. León Moderno, León, Gto.</span>
          </div>
          <a
            href="tel:+524777123244"
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 shrink-0 text-brand-400" />
            <span>+52 477 712 3244</span>
          </a>
          <a
            href="mailto:contacto@institutoireeleon.com.mx"
            className="flex items-center gap-3 hover:text-white transition-colors break-all"
          >
            <Mail className="w-4 h-4 shrink-0 text-brand-400" />
            <span>contacto@institutoireeleon.com.mx</span>
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Instituto IREE León. Todos los derechos
            reservados.
          </div>
          <div className="flex items-center gap-1.5">
            Hecho con
            <Heart className="w-3.5 h-3.5 text-accent-500" fill="currentColor" />
            para nuestra comunidad
          </div>
        </div>
      </div>
    </footer>
  );
}
