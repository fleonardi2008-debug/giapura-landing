"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Logo } from "@/components/logo";
import { Countdown } from "@/components/countdown";
import { BotonComprar } from "@/components/boton-comprar";

const LINKS = [
  { href: "#por-que", label: "¿Por qué?" },
  { href: "#fundador", label: "Fundador" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#envios", label: "Envíos" },
];

/**
 * Barra fija superior: aparece al pasar el hero. Logo, navegación por secciones,
 * countdown y un botón "Comprar" siempre a mano. Arriba, barra de progreso.
 */
export function BarraFija() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0.1, 0.16], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.16], [-24, 0]);
  const pointer = useTransform(scrollYProgress, (v) => (v > 0.12 ? "auto" : "none"));

  return (
    <>
      {/* Progreso de lectura */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-gold to-gold-bright"
      />

      {/* Barra sólida */}
      <motion.div
        style={{ opacity, y, pointerEvents: pointer }}
        className="fixed inset-x-0 top-0 z-[65] border-b border-line bg-bg shadow-[0_6px_24px_-12px_rgba(36,13,8,0.25)]"
      >
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
          <a href="#top" className="shrink-0">
            <Logo className="h-6 w-auto" />
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-7 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm font-medium text-cream-dim transition-colors hover:text-cream"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4 md:ml-0">
            <div className="hidden lg:block">
              <Countdown />
            </div>
            <BotonComprar label="Comprar" className="px-6 py-2.5 text-sm" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
