import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { BotonComprar } from "@/components/boton-comprar";
import { Countdown } from "@/components/countdown";
import { Leaf, ShieldCheck, Heart, Barbell } from "@phosphor-icons/react/dist/ssr";
import { IconMani, IconSinAzucar } from "@/components/icon-mani";

// Iconos SVG (Phosphor) en vez de emoji: escalan bien, se controlan por
// diseño (color/peso) y no dependen de la fuente del sistema operativo.
// Nota: Phosphor no tiene maní ni "sin azúcar" en este estilo, así que
// esos dos usan íconos propios (icon-mani.tsx).
const CARACTERISTICAS = [
  { Icon: IconMani, texto: "100% maní seleccionado" },
  { Icon: Barbell, texto: "Energía real, sin atajos" },
  { Icon: IconSinAzucar, texto: "Sin azúcar agregada" },
  { Icon: Leaf, texto: "Sin conservantes" },
  { Icon: ShieldCheck, texto: "Libre de gluten" },
  { Icon: Heart, texto: "La misma receta de siempre" },
];

export function Comprar() {
  return (
    <section id="comprar" className="relative px-6 pb-12 pt-6 sm:py-12">
      <div className="mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-2">
        <Reveal className="flex justify-center">
          <Image
            src="/frasco-natural.png"
            alt="Pasta de maní Giapura Natural"
            width={597}
            height={1059}
            className="h-auto w-full max-w-md"
          />
        </Reveal>

        <div className="text-center lg:text-left">
          <Reveal delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Natural · Con cacao
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-display mt-3 text-5xl font-semibold leading-[0.98] sm:text-6xl">
              Volvé a lo <span className="text-gradient-gold">simple y real</span>.
            </h2>
          </Reveal>

          <ul className="mt-8 grid grid-cols-2 gap-3">
            {CARACTERISTICAS.map((c, i) => (
              <Reveal key={c.texto} delay={0.1 + i * 0.05}>
                <li className="flex h-full flex-col items-center gap-2 rounded-2xl border border-line bg-bg-2 px-3 py-4 text-center lg:items-start lg:text-left">
                  <c.Icon size={24} weight="bold" className="text-gold" aria-hidden />
                  <span className="text-sm leading-snug text-cream-dim">{c.texto}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.45}>
            <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
              <BotonComprar />
              <Countdown />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
