import { Reveal } from "@/components/reveal";

// TODO: reemplazar el copy del beneficio cuando el usuario lo defina.
const BENEFICIOS = [
  {
    titulo: "Precio de fundador",
    texto: "El precio de esta preventa no se vuelve a repetir. Lo conseguís solo hoy.",
  },
  {
    titulo: "Edición numerada",
    texto: "Tu pack de la primera tanda nacional viene identificado como fundador.",
  },
  {
    titulo: "Primero en la fila",
    texto: "Acceso anticipado a los próximos lanzamientos, antes que nadie.",
  },
];

export function TicketFundador() {
  return (
    <section className="relative border-y border-line bg-bg-2 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-block rounded-full border border-gold/40 px-4 py-1 text-xs uppercase tracking-widest text-gold">
            Solo en estas 24 horas
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display mt-6 text-4xl font-semibold sm:text-5xl">
            El <span className="text-gradient-gold">Ticket de Fundador</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-2xl text-cream-dim">
            Los que compren durante la preventa no se llevan solo el producto. Se llevan
            un lugar en la historia de Giapura — y beneficios que después dejan de existir.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {BENEFICIOS.map((b, i) => (
            <Reveal key={b.titulo} delay={0.15 + i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-bg-3/60 p-6 text-left">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                  ★
                </div>
                <h3 className="font-display text-lg font-semibold text-cream">{b.titulo}</h3>
                <p className="mt-2 text-sm text-muted">{b.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-10 text-sm text-muted">
            Cuando el contador llegue a cero, el Ticket de Fundador desaparece para siempre.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
