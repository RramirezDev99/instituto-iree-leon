import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instituto IREE León | Rehabilitación y Educación Especial",
  description:
    "Desde 1969 transformamos vidas. Instituto de Rehabilitación y Educación Especial de León, Guanajuato. Educamos, rehabilitamos y capacitamos a personas con discapacidad intelectual.",
  keywords: [
    "IREE",
    "Instituto IREE León",
    "Educación Especial",
    "Rehabilitación",
    "Discapacidad Intelectual",
    "León Guanajuato",
    "ONG México"
  ],
  authors: [{ name: "Instituto IREE León" }],
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "Instituto IREE León | Más de 55 años transformando vidas",
    description:
      "Educamos, rehabilitamos y capacitamos a personas con discapacidad intelectual desde 1969 en León, Guanajuato.",
    type: "website",
    locale: "es_MX",
    siteName: "Instituto IREE León",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Instituto IREE León"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituto IREE León",
    description: "Rehabilitando y educando con corazón desde 1969.",
    images: ["/og-image.png"]
  },
  metadataBase: new URL("https://institutoireeleon.com.mx")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <body className="antialiased">{children}</body>
    </html>
  );
}
