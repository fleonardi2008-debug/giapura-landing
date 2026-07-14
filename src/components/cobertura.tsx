import { Reveal } from "@/components/reveal";
import { AR_MAIN, AR_TDF } from "@/lib/argentina-path";

export function Cobertura() {
  return (
    <section id="envios" className="border-y border-line bg-bg-2 px-6 py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              ¿Hasta dónde llegamos?
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
              Ahora sí, <span className="text-gradient-gold">a todo el país</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-cream-dim">
              De Jujuy a Ushuaia. Por primera vez, no importa dónde estés: Giapura llega
              hasta tu puerta con envíos a toda la Argentina.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex gap-10">
              <div>
                <p className="font-display text-3xl font-semibold text-gradient-gold">24</p>
                <p className="text-xs uppercase tracking-widest text-muted">Provincias</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-gradient-gold">48h</p>
                <p className="text-xs uppercase tracking-widest text-muted">Promedio de envío</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex justify-center">
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[90px]" />
            <svg
              viewBox="0 0 1024 1024"
              className="relative h-[26rem] w-auto"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Mapa de Argentina"
            >
              <defs>
                <linearGradient id="ar-fill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#f5cf89" />
                  <stop offset="1" stopColor="#c88a3c" />
                </linearGradient>
              </defs>
              <g
                transform="translate(0,1024) scale(0.1,-0.1)"
                fill="url(#ar-fill)"
                stroke="#6d2900"
                strokeWidth="22"
                strokeOpacity="0.35"
                strokeLinejoin="round"
              >
                <path d={AR_MAIN} />
                <path d={AR_TDF} />
              </g>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
