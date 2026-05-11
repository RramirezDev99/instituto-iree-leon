import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap"
});

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
  openGraph: {
    title: "Instituto IREE León | Más de 55 años transformando vidas",
    description:
      "Educamos, rehabilitamos y capacitamos a personas con discapacidad intelectual desde 1969 en León, Guanajuato.",
    type: "website",
    locale: "es_MX",
    siteName: "Instituto IREE León"
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituto IREE León",
    description: "Rehabilitando y educando con corazón desde 1969."
  },
  metadataBase: new URL("https://institutoireeleon.com.mx")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
