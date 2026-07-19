"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Logo } from "@/components/logo";
import { CountdownGrande } from "@/components/countdown";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Hero sobre fondo blanco: el frasco en primer plano y el wordmark "giapura"
 * delante de él, con anchos parecidos (el logo apenas más ancho). Detrás del
 * logo el frasco se desvanece en blanco, para que la etiqueta no se cuele entre
 * las letras. Sin animaciones de scroll: sólo la entrada suave al cargar.
 */
export function Intro() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 text-center">
      {/* Halo cálido detrás del frasco (sutil sobre blanco) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-bright/20 blur-[110px]" />

      {/* Temporizador arriba */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.9, ease: EASE }}
        className="absolute top-12 z-20"
      >
        <CountdownGrande />
      </motion.div>

      {/* Composición: frasco en primer plano + logo delante */}
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          {/* Frasco (capa de atrás) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1.3, ease: EASE }}
            className="relative z-0 shrink-0"
          >
            <Image
              src="/frasco-recortado.png"
              alt="Frasco de pasta de maní Giapura Natural"
              width={528}
              height={939}
              priority
              className="h-[66vh] w-auto object-contain drop-shadow-[0_36px_46px_rgba(60,30,10,0.26)]"
            />
          </motion.div>

          {/* Velo blanco: desvanece el frasco justo detrás del logo */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-[5] h-[210px] w-[480px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.97) 34%, rgba(255,255,255,0.85) 52%, rgba(255,255,255,0) 74%)",
            }}
          />

          {/* Wordmark "giapura" delante, apenas más ancho que el frasco */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: EASE }}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <Logo priority className="h-auto w-[62vw] max-w-[320px]" />
          </motion.div>
        </div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 max-w-md text-base text-cream-dim sm:text-lg"
        >
          Después de 6 meses sin poder hacer envíos, llegó el día.
        </motion.p>
      </div>

      {/* Hint de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
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

      {/* Empalme suave hacia el beige de la sección siguiente */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-bg" />
    </section>
  );
}
