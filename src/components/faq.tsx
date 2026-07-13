import { Reveal } from "@/components/reveal";

// Placeholder editable: ajustar respuestas con datos reales (envío, plazos, etc.).
const PREGUNTAS = [
  {
    q: "¿Por qué la web está abierta solo 24 horas?",
    a: "Es una preventa de la primera tanda nacional. Producimos según lo que se venda en esta ventana, y quienes compren se llevan el Ticket de Fundador. Pasadas las 24 horas, la tienda se cierra.",
  },
  {
    q: "¿Cuándo me llega el pedido?",
    a: "Como es preventa, coordinamos el envío una vez cerrada la ventana y producida la tanda. Te vamos avisando el estado por email.",
  },
  {
    q: "¿Hacen envíos a todo el país?",
    a: "Sí. Por primera vez, enviamos a toda la Argentina. El costo y el plazo dependen de tu localidad, y los ves al finalizar la compra.",
  },
  {
    q: "¿Qué es el Ticket de Fundador?",
    a: "Es el beneficio exclusivo para quienes compran en estas 24 horas. Después del cierre, deja de existir.",
  },
  {
    q: "¿Cómo pago?",
    a: "El pago es a través de nuestra tienda, con los medios habituales (tarjeta, Mercado Pago). Al tocar “Quiero el mío” te llevamos directo al checkout.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-display text-center text-4xl font-semibold sm:text-5xl">
            Preguntas <span className="text-gradient-gold">frecuentes</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {PREGUNTAS.map((p, i) => (
            <Reveal key={p.q} delay={i * 0.05}>
              <details className="group rounded-2xl border border-line bg-bg-2 p-5 [&_summary]:cursor-pointer">
                <summary className="flex items-center justify-between gap-4 font-medium text-cream marker:content-['']">
                  {p.q}
                  <span className="text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
