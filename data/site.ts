/**
 * Datos centralizados del sitio.
 * Cuando recibas info nueva del cliente, sólo cambias aquí.
 */

export const site = {
  name: "Instituto IREE",
  legalName: "Instituto de Rehabilitación y Educación Especial de León, Gto. A.C.",
  shortName: "IREE",
  city: "León, Guanajuato",
  foundedYear: 1969,
  foundedDate: "6 de febrero de 1969",
  domain: "institutoireeleon.com.mx",
  url: "https://institutoireeleon.com.mx",
  tagline: "Una institución de corazón y sin fines de lucro",
  mission:
    "Rehabilitar y educar a personas con discapacidad intelectual, contribuyendo a una mejor adaptación.",

  contact: {
    email: "ireeleon@gmail.com",
    phone: "477 712 32 44",
    phoneInternational: "+524777123244",
    whatsapp: "477 256 65 24",
    whatsappInternational: "524772566524",
    address: {
      street: "Donizetti s/n, entrada por Guty Cárdenas",
      neighborhood: "Col. León Moderno",
      city: "León, Gto.",
      country: "México"
    },
    schedule: "Lunes a Viernes · 8:00 a 14:00 hrs"
  },

  social: {
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/"
  },

  legal: {
    // Responsable del tratamiento de datos (para Aviso de Privacidad)
    responsable: "Instituto de Rehabilitación y Educación Especial de León, Gto. A.C.",
    lastPrivacyUpdate: "Mayo 2026"
  }
} as const;

/**
 * Galería de fotos.
 * ⚠️ TEMPORAL: usando fotos de stock (Unsplash) hasta recibir el material oficial del IREE.
 * Para reemplazar: coloca las fotos reales en /public/photos/ y cambia los `src` aquí.
 */
export const photos = {
  hero: {
    src: "https://images.unsplash.com/photo-1597392582469-a697322d5c16?auto=format&fit=crop&w=900&q=80",
    alt: "Actividad inclusiva en el IREE",
    isPlaceholder: true
  },
  about: [
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      alt: "Educación inclusiva",
      isPlaceholder: true
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
      alt: "Momentos de aprendizaje",
      isPlaceholder: true
    }
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
      alt: "Estudiantes en taller",
      span: "md:col-span-2 md:row-span-2",
      isPlaceholder: true
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
      alt: "Aprendizaje",
      isPlaceholder: true
    },
    {
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80",
      alt: "Lectura",
      isPlaceholder: true
    },
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80",
      alt: "Trabajo en equipo",
      isPlaceholder: true
    },
    {
      src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=700&q=80",
      alt: "Creatividad",
      span: "md:col-span-2",
      isPlaceholder: true
    },
    {
      src: "https://images.unsplash.com/photo-1607582544638-72b4e0acdf4e?auto=format&fit=crop&w=700&q=80",
      alt: "Inclusión",
      isPlaceholder: true
    },
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=700&q=80",
      alt: "Música",
      isPlaceholder: true
    }
  ]
};

// Helpers
export const waLink = (msg?: string) =>
  `https://wa.me/${site.contact.whatsappInternational}${
    msg ? `?text=${encodeURIComponent(msg)}` : ""
  }`;

export const telLink = `tel:${site.contact.phoneInternational}`;
export const mailLink = `mailto:${site.contact.email}`;
