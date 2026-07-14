import { Reveal } from "@/components/reveal";
import { BotonComprar } from "@/components/boton-comprar";

// Placeholder tipo captura de DM — reemplazar por las capturas reales.
const MENSAJES = [
  { u: "caro.fit", i: "CF", t: "che, es LA mejor pasta de maní que probé. lejos 🥜", h: "12:04", react: "❤️" },
  { u: "martin.rosario", i: "MR", t: "no tiene nada que ver con las del super, se nota la diferencia", h: "09:21" },
  { u: "lu.entrena", i: "LU", t: "la terminé en dos días jajaja necesito más ya", h: "20:47", react: "🔥" },
  { u: "fede.mdq", i: "FM", t: "por fin algo real, sin azúcar ni cosas raras 🙌", h: "14:10" },
  { u: "juli.cocina", i: "JC", t: "la comparé con las marcas grandes y les pasa el trapo", h: "11:33", react: "❤️" },
  { u: "nacho.gym", i: "NG", t: "¿cuándo llega al interior? la quiero sí o sí", h: "18:02" },
];

function Avatar({ i }: { i: string }) {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-[#8a3d10] text-[11px] font-semibold text-paper">
      {i}
    </div>
  );
}

export function Testimonios() {
  return (
    <section className="bg-bg-2 px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-center text-5xl font-semibold leading-[0.98] sm:text-6xl">
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
          {MENSAJES.map((m, idx) => (
            <Reveal key={idx} delay={0.05 + (idx % 3) * 0.06} className="mb-4 break-inside-avoid">
              <div className="rounded-2xl border border-line bg-bg p-4 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(109,41,0,0.3)]">
                {/* header estilo DM */}
                <div className="mb-3 flex items-center gap-2">
                  <Avatar i={m.i} />
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-cream">@{m.u}</p>
                    <p className="text-[11px] text-muted">Instagram · {m.h}</p>
                  </div>
                </div>
                {/* burbuja entrante */}
                <div className="relative w-fit max-w-full rounded-2xl rounded-tl-md bg-bg-3 px-4 py-2.5 text-[15px] leading-relaxed text-cream">
                  {m.t}
                  {m.react && (
                    <span className="absolute -bottom-2 -right-1 rounded-full border border-line bg-bg px-1.5 py-0.5 text-xs shadow-sm">
                      {m.react}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex justify-center">
            <BotonComprar label="Quiero el mío" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
