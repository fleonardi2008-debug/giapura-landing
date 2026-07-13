import { Reveal } from "@/components/reveal";
import { ProductoVisual } from "@/components/producto-visual";
import { BotonComprar } from "@/components/boton-comprar";

const PUNTOS = [
  "100% maní, sin aceites ni azúcar agregada",
  "Textura cremosa, sabor real a maní tostado",
  "Hecha en Argentina, en tandas cuidadas",
];

export function Producto() {
  return (
    <section id="producto" className="px-6 py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <Reveal className="flex justify-center">
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[90px]" />
            <div className="animate-float-slow">
              <ProductoVisual className="relative h-80 w-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]" />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">
              Nada más que <span className="text-gradient-gold">maní</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-cream-dim">
              La misma pasta de maní que se volvió viral. Sin vueltas, sin ingredientes
              raros. La que la gente de todo el país venía pidiendo hace meses.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-3">
            {PUNTOS.map((p, i) => (
              <Reveal key={p} delay={0.15 + i * 0.08}>
                <li className="flex items-start gap-3 text-cream">
                  <span className="mt-0.5 text-gold">✓</span>
                  <span>{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.4}>
            <div className="mt-10">
              <BotonComprar />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
