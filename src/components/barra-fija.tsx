"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Wordmark } from "@/components/wordmark";
import { Countdown } from "@/components/countdown";
import { BotonComprar } from "@/components/boton-comprar";

/**
 * Barra fija superior: aparece al pasar el hero. Muestra logo, countdown y un botón
 * "Comprar" siempre a mano. Arriba de todo, una barrita de progreso de lectura.
 */
export function BarraFija() {
  const { scrollYProgress } = useScroll();

  // Aparece después de ~12% de scroll (pasado el primer viewport).
  const opacity = useTransform(scrollYProgress, [0.1, 0.16], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.16], [-24, 0]);

  return (
    <>
      {/* Progreso de lectura */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-gold to-gold-bright"
      />

      {/* Barra */}
      <motion.div
        style={{ opacity, y }}
        className="fixed inset-x-0 top-0 z-[65] border-b border-line bg-bg/80 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Wordmark className="text-xl" />
          <div className="hidden sm:block">
            <Countdown />
          </div>
          <BotonComprar label="Comprar" className="px-6 py-2.5 text-sm" />
        </div>
      </motion.div>
    </>
  );
}
