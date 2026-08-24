import { Reveal } from "@/components/reveal";
import { WHATSAPP_NUMERO } from "@/lib/config";
import { PuenteColor } from "@/components/puente-color";

const linkWhatsapp = WHATSAPP_NUMERO ? (
  <a
    href={`https://wa.me/${WHATSAPP_NUMERO}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold underline underline-offset-2 hover:text-cream"
  >
    Whatsapp
  </a>
) : (
  "Whatsapp"
);

// Placeholder editable: ajustar respuestas con datos reales (envío, plazos, etc.).
const PREGUNTAS = [
  {
    q: "¿Por qué la web está abierta solo 24 horas?",
    a: "Es una preventa de la primera tanda nacional. Producimos según lo que se venda en esta ventana, y quienes compren se llevan el Ticket de Fundador. Pasadas las 24 horas, la tienda se cierra.",
  },
  {
    q: "¿Cuándo me llega el pedido?",
    a: "Es una preventa: producimos cada frasco (y cada caja) recién después de que cierra la ventana de venta. Te vamos a ir avisando el estado por email.",
  },
  {
    q: "¿Hacen envíos a todo el país?",
    a: "Sí. Por primera vez, enviamos a toda la Argentina. El costo y el plazo dependen de tu localidad, y los ves al finalizar la compra.",
  },
  {
    q: "¿Puedo hacer seguimiento de mi pedido?",
    a: "Sí. Apenas despachamos tu pedido, te mandamos el número de seguimiento por mail para que lo puedas rastrear.",
  },
  {
    q: "¿Qué pasa si mi pedido llega roto o dañado?",
    a: (
      <>
        Es muy poco común, pero si llega a pasar escribinos apenas lo recibís (con una foto) por
        Instagram (@giapura.mani) o por {linkWhatsapp} y lo resolvemos sin costo: reenvío o
        reembolso, como prefieras.
      </>
    ),
  },
  {
    q: "¿Qué es el Ticket de Fundador?",
    a: "Es el beneficio exclusivo para quienes compran en estas 24 horas. Después del cierre, deja de existir.",
  },
  {
    q: "¿Por qué se separó el aceite en el frasco? ¿Está vencido?",
    a: "No, es normal: nuestra pasta de maní no tiene estabilizantes ni conservantes agregados, así que un poco de aceite natural puede separarse arriba. Mezclá con una cuchara antes de usar y vuelve a su textura cremosa.",
  },
  {
    q: "¿Cuánto dura el producto?",
    a: "12 meses desde su elaboración. La fecha exacta de vencimiento está impresa en la etiqueta de cada frasco. Se conserva en un lugar fresco y seco, sin necesidad de heladera.",
  },
  {
    q: "¿Cómo pago?",
    a: "El pago es a través de nuestra tienda, con los medios habituales (tarjeta, Mercado Pago). Al tocar “Quiero el mío” te llevamos directo al checkout.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden px-6 pb-24 pt-32">
      {/* Sin borde duro: el crema de Testimonios se disuelve en el beige. */}
      <PuenteColor desde="bg-2" posicion="arriba" altura={130} />

      <div className="relative mx-auto max-w-3xl">
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
