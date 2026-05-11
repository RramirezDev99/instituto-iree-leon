"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    alt: "Estudiantes en taller",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
    alt: "Aprendizaje"
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80",
    alt: "Lectura"
  },
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80",
    alt: "Trabajo en equipo"
  },
  {
    src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=700&q=80",
    alt: "Creatividad",
    span: "md:col-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1607582544638-72b4e0acdf4e?auto=format&fit=crop&w=700&q=80",
    alt: "Inclusión"
  },
  {
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=700&q=80",
    alt: "Música"
  }
];

export default function Gallery() {
  return (
    <section id="galeria" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500 text-white text-sm font-bold mb-5">
            <Camera className="w-4 h-4" />
            NUESTRA COMUNIDAD
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-ink-900 leading-tight tracking-tight text-balance uppercase">
            MOMENTOS QUE LLENAN{" "}
            <span className="gradient-text">DE ORGULLO</span>
          </h2>
          <p className="mt-5 text-lg text-ink-700 font-medium">
            Sonrisas, logros y aprendizajes que ocurren cada día en el IREE.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                <span className="text-white font-display uppercase">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
