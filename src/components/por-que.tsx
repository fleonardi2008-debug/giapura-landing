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
    <section className="bg-dark px-6 py-32 text-paper">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.35em] text-gold-bright">
            ¿Por qué Giapura?
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display mt-6 max-w-3xl text-5xl font-semibold leading-[0.98] sm:text-7xl">
            Porque hacer las cosas bien lleva más tiempo.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.titulo} delay={0.1 + i * 0.1}>
              <div className="h-full rounded-3xl border border-paper/15 bg-paper/[0.04] p-8">
                <div className="text-3xl">{c.emoji}</div>
                <h3 className="font-display mt-6 text-2xl font-semibold text-paper">
                  {c.titulo}
                </h3>
                <p className="mt-3 leading-relaxed text-paper/60">{c.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
