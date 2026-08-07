import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { BotonComprar } from "@/components/boton-comprar";
import { Countdown } from "@/components/countdown";

const CARACTERISTICAS = [
  { emoji: "🥜", texto: "100% maní seleccionado. Calidad premium." },
  { emoji: "⚡", texto: "Energía real. Sin atajos." },
  { emoji: "🚫", texto: "Sin azúcar agregada." },
  { emoji: "🌿", texto: "Sin conservantes." },
  { emoji: "🛡️", texto: "Libre de gluten." },
  { emoji: "❤️", texto: "La misma receta que nació en mi cocina." },
];

export function Comprar() {
  return (
    <section id="comprar" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-2">
        <Reveal className="flex justify-center">
          <Image
            src="/frasco-natural.png"
            alt="Pasta de maní Giapura Natural"
            width={1024}
            height={1536}
            className="h-auto w-full max-w-sm"
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

          <ul className="mt-10 flex flex-col gap-4">
            {CARACTERISTICAS.map((c, i) => (
              <Reveal key={c.texto} delay={0.18 + i * 0.06}>
                <li className="flex items-center justify-center gap-3 rounded-2xl border border-line bg-bg-2 px-5 py-3.5 text-left lg:justify-start">
                  <span className="text-xl grayscale contrast-125 brightness-125">{c.emoji}</span>
                  <span className="text-cream-dim">{c.texto}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.45}>
            <div className="mt-10 flex flex-col items-center gap-4 lg:items-start">
              <BotonComprar />
              <Countdown />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
