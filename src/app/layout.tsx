import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giapura — La primer tanda Nacional",
  description:
    "Después de 6 meses, Giapura llega por primera vez a todo el país. Preventa por 24 horas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="grain min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
