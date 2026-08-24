import { Reveal } from "@/components/reveal";
import { TicketVisual } from "@/components/ticket-visual";
import { BotonComprar } from "@/components/boton-comprar";
import { CountdownGrande } from "@/components/countdown";
import { PatronMani } from "@/components/patron-mani";
import { PuenteColor } from "@/components/puente-color";

const BENEFICIOS = [
  "Accesos anticipados.",
  "Beneficios exclusivos.",
  "Y cosas que voy a ir revelando con el tiempo.",
];

export function TicketFundador() {
  return (
    <section
      id="fundador"
      className="relative overflow-hidden bg-dark px-6 pb-48 pt-40 text-paper"
    >
      {/* Las dos transiciones de esta sección viven acá adentro, no en las
          secciones vecinas: el patrón solo existe dentro de la sección, así
          que si el degradé estuviera afuera los maníes se cortarían en el
          borde y el color seguiría solo. */}
      <PuenteColor desde="bg" posicion="arriba" altura={200} />
      <PuenteColor desde="bg-2" posicion="abajo" altura={200} />

      {/* Tres capas del mismo tile, todas ancladas arriba y por lo tanto en
          fase entre sí y con las cáscaras de la sección anterior. La marrón
          entra en los dos bordes claros y la crema ocupa el medio oscuro:
          la cáscara nunca desaparece, solo cambia de color al cruzar. */}
      <PatronMani variante="marron" borde="cruceSale" anclaje="top" opacidad={0.17} />
      <PatronMani variante="crema" borde="cruceEntra" anclaje="top" opacidad={0.13} />
      <PatronMani variante="marron" borde="salidaEntra" anclaje="top" opacidad={0.17} />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-bright">
            Para los primeros
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display mt-8 text-4xl font-semibold leading-tight sm:text-5xl">
            No estás por comprar solo una pasta de maní.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-paper/85">
            Todos los que compren durante las primeras 24 horas se llevan un{" "}
            <span className="font-semibold text-gold-bright">Ticket de Fundador</span>.
          </p>
        </Reveal>
      </div>

      {/* Cuenta regresiva: la condición ahora es solo el tiempo, no una cantidad */}
      <Reveal delay={0.1} className="relative z-10 mt-14 flex justify-center [&_*]:!text-paper">
        <CountdownGrande />
      </Reveal>

      <Reveal delay={0.1} className="relative z-10 mx-auto mt-16 max-w-lg">
        <TicketVisual />
      </Reveal>

      <div className="relative z-10 mx-auto mt-24 max-w-2xl text-center">
        <Reveal>
          <h3 className="font-display text-3xl font-semibold sm:text-4xl">
            ¿Qué significa ser <span className="text-gradient-gold">fundador</span>?
          </h3>
        </Reveal>

        {/* La jerarquía la marca el peso y el tamaño, no bajarle opacidad. */}
        <div className="mx-auto mt-10 max-w-xl space-y-5">
          <Reveal delay={0.08}>
            <p className="text-lg leading-relaxed text-paper/85">
              Significa haber confiado cuando todo esto recién empezaba.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="font-display text-2xl font-semibold text-gold-bright sm:text-3xl">
              Y esa confianza va a tener recompensas.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 flex max-w-xs flex-col gap-3">
          {BENEFICIOS.map((t, i) => (
            <Reveal key={t} delay={0.26 + i * 0.08}>
              <p
                className="chip-flota group flex items-center gap-3 rounded-full border border-paper/15 bg-paper/[0.04] px-5 py-3 text-left text-paper transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-gold-bright/50 hover:bg-paper/[0.09]"
                style={{ animationDelay: `${i * 0.9}s` }}
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-bright transition-transform duration-300 group-hover:scale-150"
                />
                <span className="font-medium">{t}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-24 max-w-2xl text-center">
        <Reveal>
          <h3 className="font-display text-3xl font-semibold sm:text-4xl">
            Pero hay una condición.
          </h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-paper/85">
            Los Tickets de Fundador solo existen durante las{" "}
            <span className="font-semibold text-paper">primeras 24 horas</span>.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 text-lg uppercase tracking-[0.3em] text-gold-bright">
            Después
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-display mx-auto mt-3 text-3xl font-semibold text-paper sm:text-4xl">
            No va a haber forma de conseguir uno.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="mt-12">
            <BotonComprar label="Quiero ser fundador" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
