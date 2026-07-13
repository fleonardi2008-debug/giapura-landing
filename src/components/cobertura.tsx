"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";

// Silueta estilizada de Argentina (no cartográficamente exacta) + puntos de llegada.
const CIUDADES = [
  { x: 96, y: 70, n: "Salta" },
  { x: 120, y: 120, n: "Córdoba" },
  { x: 138, y: 150, n: "Buenos Aires" },
  { x: 150, y: 118, n: "Rosario" },
  { x: 100, y: 190, n: "Neuquén" },
  { x: 110, y: 250, n: "Comodoro" },
  { x: 96, y: 320, n: "Ushuaia" },
  { x: 78, y: 40, n: "Jujuy" },
];

export function Cobertura() {
  return (
    <section className="border-y border-line bg-bg-2 px-6 py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-gold">
              ¿Hasta dónde llegamos?
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
              Ahora sí, <span className="text-gradient-gold">a todo el país</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-cream-dim">
              De Jujuy a Ushuaia. Por primera vez, no importa dónde estés: Giapura llega
              hasta tu puerta con envíos a toda la Argentina.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="font-display text-3xl font-semibold text-gradient-gold">24</p>
                <p className="text-xs uppercase tracking-widest text-muted">Provincias</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-gradient-gold">48h</p>
                <p className="text-xs uppercase tracking-widest text-muted">Promedio de envío</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex justify-center">
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[80px]" />
            <svg viewBox="0 0 220 360" className="relative h-96 w-auto" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M78 24 C92 20 104 30 108 44 C120 48 130 56 128 72 C142 84 150 100 146 118 C160 128 166 146 156 160 C168 176 160 196 150 206 C158 224 150 246 138 258 C142 278 132 296 120 306 C124 322 114 336 104 344 C98 352 92 348 92 338 C86 330 90 318 88 308 C80 296 84 280 82 268 C74 252 80 232 82 220 C72 204 78 184 84 172 C74 156 80 136 88 126 C78 112 82 92 90 82 C80 72 78 52 82 42 C80 34 72 28 78 24 Z"
                fill="var(--bg-3)"
                stroke="var(--gold)"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
              {CIUDADES.map((c, i) => (
                <motion.g
                  key={c.n}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
                >
                  <circle cx={c.x} cy={c.y} r="7" fill="var(--gold)" opacity="0.25">
                    <animate
                      attributeName="r"
                      values="4;10;4"
                      dur="2.4s"
                      begin={`${i * 0.3}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx={c.x} cy={c.y} r="3" fill="var(--gold-bright)" />
                </motion.g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
