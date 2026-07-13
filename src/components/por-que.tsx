import { Reveal } from "@/components/reveal";

const CARDS = [
  {
    emoji: "🟤",
    titulo: "Maní seleccionado",
    texto: "Hecha con maní seleccionado calidad premium.",
  },
  {
    emoji: "🥜",
    titulo: "Solo lo necesario",
    texto: "Sin azúcar, sin conservantes ni agregados innecesarios.",
  },
  {
    emoji: "❤️",
    titulo: "La misma receta",
    texto: "La que empezó en mi cocina. Ahora llegando a toda Argentina.",
  },
];

export function PorQue() {
  return (
    <section className="border-y border-line bg-bg-2 px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            ¿Por qué <span className="text-gradient-gold">Giapura</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-4 max-w-lg text-lg text-cream-dim">
            Porque hacer las cosas bien lleva más tiempo.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.titulo} delay={0.12 + i * 0.1}>
              <div className="h-full rounded-3xl border border-line bg-bg p-8 text-left">
                <div className="text-3xl">{c.emoji}</div>
                <h3 className="font-display mt-5 text-xl font-semibold text-cream">
                  {c.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-dim">{c.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
