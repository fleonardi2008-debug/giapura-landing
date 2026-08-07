import { Reveal } from "@/components/reveal";
import { TicketVisual } from "@/components/ticket-visual";
import { BotonComprar } from "@/components/boton-comprar";
import { CountdownGrande } from "@/components/countdown";

export function TicketFundador() {
  return (
    <section id="fundador" className="bg-dark px-6 py-32 text-paper">
      <div className="mx-auto max-w-2xl text-center">
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
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-paper/70">
            Todos los que compren durante las primeras 24 horas se llevan un{" "}
            <span className="font-medium text-paper">Ticket de Fundador</span>.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 text-lg text-paper/70">
            Cada ticket está numerado. Y ese número va a ser tuyo para siempre.
          </p>
        </Reveal>
      </div>

      {/* Cuenta regresiva: la condición ahora es solo el tiempo, no una cantidad */}
      <Reveal delay={0.1} className="mt-14 flex justify-center [&_*]:!text-paper">
        <CountdownGrande />
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
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-paper/70">
            Significa haber confiado cuando todo esto recién empezaba.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 text-lg text-paper">Y esa confianza va a tener recompensas.</p>
        </Reveal>

        <div className="mx-auto mt-10 flex max-w-xs flex-col gap-3">
          {["Accesos anticipados.", "Beneficios exclusivos.", "Y cosas que voy a ir revelando con el tiempo."].map(
            (t, i) => (
              <Reveal key={t} delay={0.2 + i * 0.08}>
                <p className="rounded-full border border-paper/15 bg-paper/[0.04] px-5 py-3 text-paper transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-gold-bright/40 hover:bg-paper/[0.07]">
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
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-paper/70">
            Los Tickets de Fundador solo existen durante las primeras 24 horas.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-8 text-xl text-paper/50">Después...</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-display mx-auto mt-2 text-2xl font-semibold text-paper sm:text-3xl">
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
