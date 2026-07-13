import { Reveal } from "@/components/reveal";

// Placeholder: reemplazar por testimonios/capturas reales de Instagram.
const TESTIMONIOS = [
  { texto: "Hace meses que la sigo en Instagram esperando que llegue a mi ciudad. Por fin.", autor: "@caro.fit" },
  { texto: "La probé en Buenos Aires y no podía creer que no la vendieran en el interior. Ya era hora.", autor: "@martin.rosario" },
  { texto: "Adictiva. En serio. Es la única pasta de maní que vale la pena.", autor: "@lu.entrena" },
  { texto: "La estuve esperando 6 meses. Hoy caí a la web apenas abrió.", autor: "@fede.mdq" },
];

export function Testimonios() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display text-center text-4xl font-semibold sm:text-5xl">
            La venían <span className="text-gradient-gold">pidiendo</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-center text-cream-dim">
            No lo decimos nosotros. Lo dice la gente que llenó nuestros mensajes durante
            6 meses.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {TESTIMONIOS.map((t, i) => (
            <Reveal key={t.autor} delay={0.1 + i * 0.08}>
              <figure className="h-full rounded-2xl border border-line bg-bg-2 p-6">
                <div className="mb-3 text-gold">★★★★★</div>
                <blockquote className="text-cream">“{t.texto}”</blockquote>
                <figcaption className="mt-4 text-sm text-muted">{t.autor}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
