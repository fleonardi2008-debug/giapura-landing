import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { BotonComprar } from "@/components/boton-comprar";
import { Countdown } from "@/components/countdown";
import { PLAZO_ENTREGA } from "@/lib/config";

const CARACTERISTICAS = [
  { emoji: "🥜", texto: "100% maní seleccionado. Calidad premium." },
  { emoji: "⚡", texto: "Energía real. Sin atajos." },
  { emoji: "🚫", texto: "Sin azúcar agregada." },
  { emoji: "🌿", texto: "Sin conservantes." },
  { emoji: "🛡️", texto: "Libre de gluten." },
  { emoji: "❤️", texto: "La misma receta que nació en mi cocina." },
];

// Ficha técnica (solo desktop): mismas características, en formato callout
// corto con línea fina apuntando al frasco. y = posición vertical (0-100).
const CALLOUTS = [
  { side: "left" as const, y: 15, texto: "100% maní seleccionado" },
  { side: "right" as const, y: 15, texto: "Sin azúcar agregada" },
  { side: "left" as const, y: 50, texto: "Sin conservantes" },
  { side: "right" as const, y: 50, texto: "Libre de gluten" },
  { side: "left" as const, y: 85, texto: "Energía real, sin atajos" },
  { side: "right" as const, y: 85, texto: "La misma receta de siempre" },
];

const GOLD = "#6d2900";

function DiagramaFrasco() {
  return (
    <div className="relative mx-auto aspect-[3/2] w-full max-w-3xl">
      {/* Frasco, centrado, ocupa una franja angosta para dejar lugar a los callouts */}
      <div className="absolute left-[31%] top-[8%] h-[84%] w-[38%]">
        <Image
          src="/frasco-natural.png"
          alt="Pasta de maní Giapura Natural"
          fill
          className="object-contain"
          sizes="(min-width: 1024px) 40vw, 0px"
        />
      </div>

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        {CALLOUTS.map((c, i) => {
          const x1 = c.side === "left" ? 23 : 77;
          const x2 = c.side === "left" ? 31 : 69;
          return (
            <g key={i}>
              <line x1={x1} y1={c.y} x2={x2} y2={c.y} stroke={GOLD} strokeWidth="0.25" />
              <circle cx={x2} cy={c.y} r="0.6" fill={GOLD} />
            </g>
          );
        })}
      </svg>

      {CALLOUTS.map((c, i) => (
        <p
          key={i}
          className="font-display absolute w-[22%] -translate-y-1/2 text-sm leading-tight text-cream-dim"
          style={{
            top: `${c.y}%`,
            left: c.side === "left" ? 0 : undefined,
            right: c.side === "right" ? 0 : undefined,
            textAlign: c.side === "left" ? "right" : "left",
          }}
        >
          {c.texto}
        </p>
      ))}
    </div>
  );
}

export function Comprar() {
  return (
    <section id="comprar" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Natural · Con cacao
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display mt-3 text-5xl font-semibold leading-[0.98] sm:text-6xl">
            Volvé a lo <span className="text-gradient-gold">simple y real</span>.
          </h2>
        </Reveal>

        {/* Desktop: ficha técnica con flechas */}
        <Reveal delay={0.15} className="mt-14 hidden lg:block">
          <DiagramaFrasco />
        </Reveal>

        {/* Mobile/tablet: frasco + lista simple */}
        <div className="mt-10 lg:hidden">
          <Reveal className="flex justify-center">
            <Image
              src="/frasco-natural.png"
              alt="Pasta de maní Giapura Natural"
              width={1024}
              height={1536}
              className="h-auto w-full max-w-sm"
            />
          </Reveal>

          <ul className="mx-auto mt-10 flex max-w-md flex-col gap-4">
            {CARACTERISTICAS.map((c, i) => (
              <Reveal key={c.texto} delay={0.06 * i}>
                <li className="flex items-center justify-center gap-3 rounded-2xl border border-line bg-bg-2 px-5 py-3.5 text-left">
                  <span className="text-xl grayscale contrast-125 brightness-125">{c.emoji}</span>
                  <span className="text-cream-dim">{c.texto}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.45}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <BotonComprar />
            <Countdown />
            <p className="text-xs text-muted">Es preventa: tu pedido llega en {PLAZO_ENTREGA}.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
