import { Reveal } from "@/components/reveal";
import { TicketVisual } from "@/components/ticket-visual";
import { BotonComprar } from "@/components/boton-comprar";

export function TicketFundador() {
  return (
    <section id="fundador" className="px-6 py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Para los primeros</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display mt-8 text-4xl font-semibold leading-tight sm:text-5xl">
            No estás por comprar solo una pasta de maní.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream-dim">
            Durante las primeras 24 horas, todas las personas que compren Giapura van a
            recibir un <span className="font-medium text-cream">Ticket de Fundador</span>.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-cream-dim">
            Cada Ticket de Fundador está numerado. Y ese número va a ser tuyo para siempre.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mx-auto mt-16 max-w-md">
        <TicketVisual />
      </Reveal>

      <div className="mx-auto mt-28 max-w-2xl space-y-24 text-center">
        <div>
          <Reveal>
            <h3 className="font-display text-3xl font-semibold sm:text-4xl">
              ¿Qué significa ser <span className="text-gradient-gold">fundador</span>?
            </h3>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream-dim">
              Significa haber confiado cuando todo esto recién empezaba. Y esa confianza
              nunca va a pasar desapercibida.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream-dim">
              A partir de ahora, cada tanto voy a abrir oportunidades reservadas únicamente
              para quienes tengan un Ticket de Fundador. A veces será un acceso anticipado.
              Otras, un beneficio exclusivo. O la posibilidad de participar en decisiones
              importantes para la marca.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream">
              Nunca va a ser exactamente lo mismo. Pero siempre va a ser solo para ustedes.
            </p>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <h3 className="font-display text-3xl font-semibold sm:text-4xl">
              Pero hay una condición.
            </h3>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream-dim">
              Solo existen durante las primeras 24 horas. Cuando termine esta primera
              tanda, no va a haber forma de conseguir uno.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream">
              Dentro de unos años, quiero que ese número siga significando una sola cosa:
              que vos estuviste acá cuando todo recién empezaba.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-12">
              <BotonComprar label="Quiero ser fundador" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
