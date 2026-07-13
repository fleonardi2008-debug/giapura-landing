"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ProductoVisual } from "@/components/producto-visual";
import { Wordmark } from "@/components/wordmark";
import { CountdownGrande } from "@/components/countdown";

/**
 * Intro: el frasco es el protagonista y acompaña el scroll (estilo Unreal Water).
 * Arriba un temporizador (no "giapura presenta"). Al bajar, el frasco se transforma
 * y aparece el título de la primera tanda nacional.
 */
export function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // El frasco baja, se agranda un poco y rota suave a medida que se scrollea.
  const jarY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const jarScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const jarRotate = useTransform(scrollYProgress, [0, 1], [0, 6]);

  // La intro (temporizador + subtítulo) se desvanece; el título aparece.
  const introOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const tituloOpacity = useTransform(scrollYProgress, [0.4, 0.75], [0, 1]);
  const tituloY = useTransform(scrollYProgress, [0.4, 0.75], [30, 0]);

  return (
    <section ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[130px]" />

        {/* Temporizador arriba (reemplaza "giapura presenta") */}
        <motion.div style={{ opacity: introOpacity }} className="absolute top-16">
          <CountdownGrande />
        </motion.div>

        {/* Frasco protagonista */}
        <motion.div style={{ y: jarY, scale: jarScale, rotate: jarRotate }} className="relative">
          <ProductoVisual className="h-72 w-auto drop-shadow-[0_40px_70px_rgba(109,41,0,0.22)] sm:h-96" />
          <div className="mt-6 flex justify-center">
            <Wordmark className="text-3xl sm:text-4xl" />
          </div>
        </motion.div>

        {/* Subtítulo intro */}
        <motion.p
          style={{ opacity: introOpacity }}
          className="absolute bottom-28 max-w-md text-base text-cream-dim sm:text-lg"
        >
          Después de 6 meses sin poder hacer envíos, llegó el día.
        </motion.p>

        {/* Título revelado al scrollear */}
        <motion.h1
          style={{ opacity: tituloOpacity, y: tituloY }}
          className="font-display absolute bottom-24 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
        >
          La primer tanda <span className="text-gradient-gold">Nacional</span> de Giapura
        </motion.h1>

        {/* Hint de scroll */}
        <motion.div
          style={{ opacity: introOpacity }}
          className="absolute bottom-8 flex flex-col items-center gap-1 text-muted"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
