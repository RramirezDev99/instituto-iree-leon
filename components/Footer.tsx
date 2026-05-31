"use client";

import Link from "next/link";
import { Heart, Facebook, Youtube, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { site, waLink, telLink, mailLink } from "@/data/site";

const sections = [
  {
    title: "NAVEGACIÓN",
    links: [
      { label: "Inicio", href: "/#inicio" },
      { label: "Nosotros", href: "/#nosotros" },
      { label: "Servicios", href: "/#servicios" },
      { label: "Impacto", href: "/#impacto" },
      { label: "Galería", href: "/#galeria" }
    ]
  },
  {
    title: "APOYA",
    links: [
      { label: "Donar", href: "/#donar" },
      { label: "Voluntariado", href: "/#donar" },
      { label: "Empresas aliadas", href: "/#donar" },
      { label: "Contacto", href: "/#contacto" }
    ]
  },
  {
    title: "INSTITUCIONAL",
    links: [
      { label: "Aviso de Privacidad", href: "/aviso-de-privacidad" },
      { label: "Misión y visión", href: "/#nosotros" },
      { label: "Historia", href: "/#nosotros" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 text-ink-100 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="white" className="mb-5" />
            <p className="max-w-md text-sm leading-relaxed text-ink-200 font-medium">
              Desde {site.foundedYear}, rehabilitamos y educamos a personas con
              discapacidad intelectual. {site.tagline}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-brand-500 hover:bg-brand-600 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-brand-500 hover:bg-brand-600 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-brand-500 hover:bg-brand-600 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="font-display text-white mb-4">{s.title}</h4>
              <ul className="space-y-2.5">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-200 hover:text-brand-400 transition-colors font-medium"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 grid md:grid-cols-2 lg:grid-cols-4 gap-5 text-sm text-ink-200 font-medium">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-400" />
            <span>
              {site.contact.address.street}, {site.contact.address.neighborhood},{" "}
              {site.contact.address.city}
            </span>
          </div>
          <a
            href={telLink}
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 shrink-0 text-brand-400" />
            <span>{site.contact.phone}</span>
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4 shrink-0 text-brand-400" />
            <span>WhatsApp {site.contact.whatsapp}</span>
          </a>
          <a
            href={mailLink}
            className="flex items-center gap-3 hover:text-white transition-colors break-all"
          >
            <Mail className="w-4 h-4 shrink-0 text-brand-400" />
            <span>{site.contact.email}</span>
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-ink-300 font-medium text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {site.legalName}. Todos los derechos
            reservados.
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/aviso-de-privacidad"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Aviso de Privacidad
            </Link>
            <span className="flex items-center gap-1.5">
              Hecho con
              <Heart className="w-3.5 h-3.5 text-brand-400" fill="currentColor" />
              para nuestra comunidad
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
