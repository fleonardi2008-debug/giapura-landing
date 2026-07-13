"use client";

import { motion } from "motion/react";
import { ProductoVisual } from "@/components/producto-visual";

/**
 * Intro de entrada: el frasco aparece con una animación y una frase, antes del hero.
 * Placeholder del producto (SVG) hasta tener el render 3D real.
 */
export function Intro() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[120px]" />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8 text-xs uppercase tracking-[0.4em] text-muted"
      >
        Giapura presenta
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.4, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="animate-float-slow">
          <ProductoVisual className="h-64 w-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] sm:h-80" />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.9 }}
        className="font-display mt-10 max-w-lg text-2xl font-medium text-cream sm:text-3xl"
      >
        Seis meses de espera.
        <br />
        <span className="text-gradient-gold">Un solo día para tenerla.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs uppercase tracking-widest">Deslizá</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
