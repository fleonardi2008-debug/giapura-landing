import type { Metadata } from "next";
import { Playfair_Display, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Texto principal (títulos grandes, subtítulo del hero, "Muy pronto").
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

// Texto secundario (cuerpo/párrafos), en negrita. Aileron no está en Google
// Fonts: se auto-aloja localmente (licencia CC0 / dominio público, ver
// src/fonts/AILERON-LICENSE.txt).
const aileronBold = localFont({
  src: "../fonts/Aileron-Bold.otf",
  weight: "700",
  variable: "--font-aileron",
  display: "swap",
});

// Notas aside (hints, textos de ayuda chicos): manuscrita, aire Segoe Script.
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Giapura — La primer tanda Nacional",
  description:
    "Después de 6 meses, Giapura llega por primera vez a todo el país. Preventa por 24 horas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${playfairDisplay.variable} ${aileronBold.variable} ${caveat.variable}`}
    >
      <body className="grain min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
