"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ProductoVisual } from "@/components/producto-visual";
import { Wordmark } from "@/components/wordmark";
import { CountdownGrande } from "@/components/countdown";

/**
 * Intro: el frasco es el protagonista y acompaña el scroll (estilo Unreal Water).
 * Arriba un temporizador. El logo "giapura" se superpone sobre la base del frasco,
 * y el subtítulo va debajo. Al bajar, se revela el título de la primera tanda.
 */
export function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const jarY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const jarScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // El bloque de intro (frasco + logo + subtítulo) se desvanece; el título aparece.
  const introOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const tituloOpacity = useTransform(scrollYProgress, [0.45, 0.8], [0, 1]);
  const tituloY = useTransform(scrollYProgress, [0.45, 0.8], [30, 0]);

  return (
    <section ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[130px]" />

        {/* Temporizador arriba */}
        <motion.div style={{ opacity: introOpacity }} className="absolute top-14">
          <CountdownGrande />
        </motion.div>

        {/* Frasco + logo superpuesto + subtítulo */}
        <motion.div style={{ opacity: introOpacity }} className="flex flex-col items-center">
          <motion.div style={{ y: jarY, scale: jarScale }} className="relative z-0">
            <ProductoVisual className="h-72 w-auto drop-shadow-[0_40px_70px_rgba(109,41,0,0.22)] sm:h-96" />
          </motion.div>

          {/* Logo pisando la base del frasco */}
          <Wordmark className="relative z-10 -mt-12 text-6xl sm:-mt-16 sm:text-7xl" />

          {/* Subtítulo, después del logo */}
          <p className="mt-8 max-w-md text-base text-cream-dim sm:text-lg">
            Después de 6 meses sin poder hacer envíos, llegó el día.
          </p>
        </motion.div>

        {/* Título revelado al scrollear */}
        <motion.h1
          style={{ opacity: tituloOpacity, y: tituloY }}
          className="font-display absolute bottom-24 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
        >
          La primer tanda <span className="text-gradient-gold">Nacional</span> de Giapura
        </motion.h1>

        {/* Hint de scroll */}
        <motion.div style={{ opacity: introOpacity }} className="absolute bottom-8 text-muted">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="inline-block text-lg"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
