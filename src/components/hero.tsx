"use client";

import { motion } from "motion/react";
import { ContadorVivo } from "@/components/contador-vivo";
import { Countdown } from "@/components/countdown";
import { BotonComprar } from "@/components/boton-comprar";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { delay, duration: 0.7 },
});

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <motion.p {...fade(0)} className="mb-6 text-sm text-cream-dim">
        Después de 6 meses sin poder hacer envíos, hoy llega el día.
      </motion.p>

      <motion.h1
        {...fade(0.1)}
        className="font-display max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
      >
        La primer tanda <span className="text-gradient-gold">Nacional</span> de Giapura
      </motion.h1>

      <motion.p {...fade(0.2)} className="mt-6 max-w-xl text-base text-cream-dim sm:text-lg">
        Durante 6 meses, hubo gente de todo el país que quiso probar Giapura y no
        pudo. Hoy, por primera vez, llega a todas partes.
      </motion.p>

      <motion.div {...fade(0.3)} className="mt-12 w-full">
        <ContadorVivo />
      </motion.div>

      <motion.div {...fade(0.4)} className="mt-10 flex flex-col items-center gap-3">
        <BotonComprar />
        <Countdown />
      </motion.div>
    </section>
  );
}
