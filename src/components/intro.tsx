"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ProductoVisual } from "@/components/producto-visual";
import { Wordmark } from "@/components/wordmark";
import { CountdownGrande } from "@/components/countdown";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Intro cinematográfica: el frasco entra con drama y acompaña el scroll (estilo
 * Unreal Water). Temporizador arriba, logo pisando la base del frasco, subtítulo
 * debajo. Al bajar, el frasco crece/rota y se revela el título de la primera tanda.
 */
export function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const jarY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const jarScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const jarRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const glow = useTransform(scrollYProgress, [0, 1], [0.9, 1.5]);

  const introOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  // El título aparece temprano (0.3→0.45) y se queda visible hasta el final del
  // tramo pegajoso, así no desaparece apenas termina de aparecer.
  const tituloOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const tituloY = useTransform(scrollYProgress, [0.3, 0.45], [40, 0]);
  const tituloScale = useTransform(scrollYProgress, [0.3, 0.45], [0.92, 1]);

  return (
    <section ref={ref} className="relative h-[240vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Spotlight que respira detrás del frasco */}
        <motion.div
          style={{ scale: glow }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[140px]"
        />

        {/* Temporizador arriba */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: EASE }}
          style={{ opacity: introOpacity }}
          className="absolute top-14"
        >
          <CountdownGrande />
        </motion.div>

        {/* Frasco + logo + subtítulo */}
        <motion.div style={{ opacity: introOpacity }} className="flex flex-col items-center">
          <motion.div style={{ y: jarY, scale: jarScale, rotate: jarRotate }} className="relative z-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 1.3, ease: EASE }}
              className="animate-float-slow"
            >
              <ProductoVisual className="h-72 w-auto drop-shadow-[0_50px_80px_rgba(109,41,0,0.25)] sm:h-[26rem]" />
            </motion.div>
          </motion.div>

          {/* Logo pisando la base del frasco */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: EASE }}
            className="relative z-10 -mt-12 sm:-mt-16"
          >
            <Wordmark className="text-6xl sm:text-8xl" />
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-8 max-w-md text-base text-cream-dim sm:text-lg"
          >
            Después de 6 meses sin poder hacer envíos, llegó el día.
          </motion.p>
        </motion.div>

        {/* Título revelado al scrollear */}
        <motion.h1
          style={{ opacity: tituloOpacity, y: tituloY, scale: tituloScale }}
          className="font-display absolute bottom-24 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-tight sm:text-7xl"
        >
          La primer tanda <span className="text-gradient-gold">Nacional</span> de Giapura
        </motion.h1>

        {/* Hint de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1 }}
          style={{ opacity: introOpacity }}
          className="absolute bottom-8 flex flex-col items-center gap-1 text-muted"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Deslizá</span>
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
