"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#impacto", label: "Impacto" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-sm border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform">
            <span className="font-display font-extrabold text-white text-lg">
              I
            </span>
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent-500 ring-2 ring-white" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-base sm:text-lg text-slate-900">
              Instituto IREE
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wider uppercase">
              León, Guanajuato
            </div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 rounded-full hover:bg-brand-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#donar"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 hover:scale-105 transition-all"
          >
            <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" />
            Donar
          </a>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 rounded-xl bg-white/70 backdrop-blur border border-slate-200 flex items-center justify-center"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-slate-200"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 rounded-xl"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#donar"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/30"
              >
                <Heart className="w-4 h-4" fill="currentColor" />
                Donar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
