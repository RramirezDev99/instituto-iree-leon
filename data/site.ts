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
    email: "i.r.e.e_ac@hotmail.com",
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
    responsable: "Instituto de Rehabilitación y Educación Especial de León, Gto. A.C.",
    lastPrivacyUpdate: "Mayo 2026"
  }
} as const;

/**
 * Fotos reales del IREE (extraídas de "Memoria Fotográfica IREE").
 * Si quieres reemplazar/agregar/quitar fotos, edita esta sección.
 * Las fotos viven en /public/photos/.
 */
export const photos = {
  // Foto principal del Hero — escena amplia con ambiente del IREE
  hero: {
    src: "/photos/iree-11.jpg",
    alt: "Alumnos y maestras del IREE en clase",
    isPlaceholder: false
  },
  // 2 fotos para la sección "Nosotros / Historia"
  about: [
    {
      src: "/photos/iree-19.jpg",
      alt: "Estudiante del IREE en clase de computación",
      isPlaceholder: false
    },
    {
      src: "/photos/iree-22.jpg",
      alt: "Capacitación laboral en jardinería",
      isPlaceholder: false
    }
  ],
  // Galería — selección variada de actividades, talleres y momentos
  gallery: [
    {
      src: "/photos/iree-11.jpg",
      alt: "Salón de clases del IREE",
      span: "md:col-span-2 md:row-span-2",
      isPlaceholder: false
    },
    { src: "/photos/iree-19.jpg", alt: "Clase de computación", isPlaceholder: false },
    { src: "/photos/iree-22.jpg", alt: "Taller de jardinería", isPlaceholder: false },
    { src: "/photos/iree-20.jpg", alt: "Actividades grupales", isPlaceholder: false },
    {
      src: "/photos/iree-26.jpg",
      alt: "Convivencia",
      span: "md:col-span-2",
      isPlaceholder: false
    },
    { src: "/photos/iree-29.jpg", alt: "Aprendizaje cotidiano", isPlaceholder: false },
    { src: "/photos/iree-32.jpg", alt: "Momentos del IREE", isPlaceholder: false },
    { src: "/photos/iree-34.jpg", alt: "Comunidad IREE", isPlaceholder: false }
  ]
};

// Helpers
export const waLink = (msg?: string) =>
  `https://wa.me/${site.contact.whatsappInternational}${
    msg ? `?text=${encodeURIComponent(msg)}` : ""
  }`;

export const telLink = `tel:${site.contact.phoneInternational}`;
export const mailLink = `mailto:${site.contact.email}`;
