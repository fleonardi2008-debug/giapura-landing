"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Logo } from "@/components/logo";
import { CountdownGrande } from "@/components/countdown";
import { BotonComprar } from "@/components/boton-comprar";
import { useFase } from "@/lib/useFase";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Hero: la foto macro de la pasta de maní a pantalla completa, con un velo
 * marrón oscuro uniforme para legibilidad. Una sola columna vertical
 * centrada y compacta — logo, subtítulo discreto, título grande, botón
 * Comprar — todo sobre el mismo eje. La navbar (BarraFija) está transparente
 * al cargar y aparece recién al scrollear, para no competir con el logo.
 */
export function Intro() {
  const fase = useFase();

  const frase =
    fase === "recurrente"
      ? { grande: "Pasta de maní de verdad. Pedí el tuyo y te llega a casa." }
      : { grande: "La primera tanda nacional." };

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden text-center">
      {/* La foto viene bastante apagada de origen: le subimos exposición y algo
          de saturación por CSS para que la pasta se vea apetecible. */}
      <Image
        src="/textura-mani.jpg"
        alt="Textura de la pasta de maní Giapura"
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-[1.28] contrast-[1.06] saturate-[1.12]"
      />
      {/* Velo marrón oscuro de marca, uniforme (no degradé): garantiza que el
          texto blanco se lea sobre la foto en toda la superficie. Se alivianó
          junto con la subida de exposición para no anular la ganancia. */}
      <div className="pointer-events-none absolute inset-0 bg-dark/28" />

      {/* Countdown, arriba (la navbar está transparente al principio, así que
          solo tiene que despejar la barra de envío gratis). */}
      <div className="relative z-10 flex justify-center pt-14 pb-2 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: EASE }}
          className="rounded-full bg-dark/50 px-5 py-2 backdrop-blur-sm [&_*]:!text-paper"
        >
          <CountdownGrande />
        </motion.div>
      </div>

      {/* Columna central: logo + textos + CTA, en un solo bloque compacto,
          todo sobre el mismo eje vertical */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-start px-6 pt-20 sm:justify-center sm:py-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: EASE }}
          className="relative isolate"
        >
          {/* Halo cálido detrás del logo: lo despega de la foto y evita que
              quede plano. Respira con una animación CSS muy lenta. */}
          <span
            aria-hidden
            className="animate-halo pointer-events-none absolute left-1/2 top-1/2 -z-10 block h-[260%] w-[180%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
          />
          <Logo
            priority
            variant="blanco"
            className="relative z-10 h-[77px] w-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.45)] sm:h-32"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 1, ease: EASE }}
          className="font-display mt-1 max-w-[220px] text-3xl font-semibold leading-[1.15] text-paper drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:mt-1.5 sm:max-w-2xl sm:text-6xl"
        >
          {frase.grande}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: EASE }}
          className="mt-4 flex flex-col items-center gap-2 sm:mt-5"
        >
          <BotonComprar variant="crema" label="Comprar" />
        </motion.div>
      </div>

      {/* Salida del hero: la foto se disuelve en el beige de la sección
          siguiente, así el corte foto → color no queda seco. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-b from-transparent to-bg sm:h-36"
      />

      {/* Ilustración de tapa (línea blanca), de acento en la esquina — solo
          en mobile, el logo ya cumple esa función en desktop. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: EASE }}
        className="pointer-events-none absolute -bottom-6 left-0 z-10 w-[66vw] max-w-72 sm:hidden"
      >
        <Image
          src="/hero-ilustracion.webp"
          alt=""
          width={480}
          height={589}
          className="h-auto w-full"
        />
      </motion.div>
    </section>
  );
}
