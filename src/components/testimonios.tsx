import { Reveal } from "@/components/reveal";
import { BotonComprar } from "@/components/boton-comprar";

// Placeholder tipo mensajes de chat — reemplazar por las capturas reales de DMs.
const MENSAJES = [
  "che, es LA mejor pasta de maní que probé. lejos.",
  "no tiene nada que ver con las del super, se nota la diferencia",
  "la terminé en dos días jajaja necesito más",
  "por fin algo real, sin azúcar ni cosas raras",
  "la comparé con las marcas grandes y les pasa el trapo",
  "¿cuándo llega al interior? la quiero sí o sí",
];

export function Testimonios() {
  return (
    <section className="border-y border-line bg-bg-2 px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-center text-4xl font-semibold leading-tight sm:text-5xl">
            No hace falta que me <span className="text-gradient-gold">creas a mí</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-center text-cream-dim">
            Durante estos meses me llegaron cientos de mensajes. Esto es lo que dice la
            gente que ya la probó.
          </p>
        </Reveal>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {MENSAJES.map((m, i) => (
            <Reveal key={i} delay={0.05 + (i % 3) * 0.06} className="mb-4 break-inside-avoid">
              <div className="rounded-2xl rounded-tl-sm border border-line bg-bg px-5 py-4 text-cream shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_18px_40px_-16px_rgba(109,41,0,0.3)]">
                <p className="leading-relaxed">{m}</p>
                <p className="mt-2 text-[11px] text-muted">vía Instagram · 12:0{i}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <BotonComprar label="Quiero el mío" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
