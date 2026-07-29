import { Reveal } from "@/components/reveal";
import { TicketVisual } from "@/components/ticket-visual";
import { BotonComprar } from "@/components/boton-comprar";
import { BarraTickets } from "@/components/barra-tickets";

export function TicketFundador() {
  return (
    <section id="fundador" className="px-6 py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Para los primeros
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display mt-8 text-4xl font-semibold leading-tight sm:text-5xl">
            No estás por comprar solo una pasta de maní.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-cream-dim">
            Solo los <span className="font-medium text-cream">primeros 1000</span> que
            compren en las primeras 24 horas se llevan un{" "}
            <span className="font-medium text-cream">Ticket de Fundador</span>.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 text-lg text-cream-dim">
            Cada ticket está numerado. Y ese número va a ser tuyo para siempre.
          </p>
        </Reveal>
      </div>

      {/* Barra de progreso en vivo de los tickets */}
      <Reveal delay={0.1} className="mx-auto mt-14 max-w-md px-2">
        <BarraTickets />
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-16 max-w-md">
        <TicketVisual />
      </Reveal>

      <div className="mx-auto mt-32 max-w-2xl text-center">
        <Reveal>
          <h3 className="font-display text-3xl font-semibold sm:text-4xl">
            ¿Qué significa ser <span className="text-gradient-gold">fundador</span>?
          </h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-cream-dim">
            Significa haber confiado cuando todo esto recién empezaba.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 text-lg text-cream">Y esa confianza va a tener recompensas.</p>
        </Reveal>

        <div className="mx-auto mt-10 flex max-w-xs flex-col gap-3">
          {["Accesos anticipados.", "Beneficios exclusivos.", "Y cosas que voy a ir revelando con el tiempo."].map(
            (t, i) => (
              <Reveal key={t} delay={0.2 + i * 0.08}>
                <p className="rounded-full border border-line bg-bg-2 px-5 py-3 text-cream transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-gold/40 hover:bg-bg-3">
                  {t}
                </p>
              </Reveal>
            )
          )}
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-2xl text-center">
        <Reveal>
          <h3 className="font-display text-3xl font-semibold sm:text-4xl">
            Pero hay una condición.
          </h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-cream-dim">
            Son solo 1000, y únicamente durante las primeras 24 horas. Cuando se reclama
            el último —o se cumplen las 24hs, lo que pase primero—...
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-display mx-auto mt-2 text-2xl font-semibold text-cream sm:text-3xl">
            No va a haber forma de conseguir uno.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="mt-14">
            <BotonComprar label="Quiero ser fundador" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
