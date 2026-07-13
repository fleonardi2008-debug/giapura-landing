import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
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
    <html lang="es" className={`${geist.variable} ${fraunces.variable}`}>
      <body className="grain min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
