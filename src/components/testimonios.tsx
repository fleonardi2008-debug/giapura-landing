import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { BotonComprar } from "@/components/boton-comprar";

// Capturas reales de WhatsApp de clientes. Dimensiones intrínsecas (ya
// corregidas por orientación EXIF) para que next/image evite layout shift.
const CAPTURAS = [
  { file: "t01.jpg", w: 1170, h: 555 },
  { file: "t02.jpg", w: 1170, h: 558 },
  { file: "t03.jpg", w: 1170, h: 403 },
  { file: "t04.jpg", w: 1170, h: 1445 },
  { file: "t05.jpg", w: 1170, h: 481 },
  { file: "t06.jpg", w: 1170, h: 1987 },
  { file: "t07.jpg", w: 1170, h: 1193 },
  { file: "t08.jpg", w: 1170, h: 2003 },
  { file: "t09.jpg", w: 1170, h: 1991 },
  { file: "t10.jpg", w: 1170, h: 1660 },
  { file: "t11.jpg", w: 1170, h: 374 },
  { file: "t12.jpg", w: 1170, h: 648 },
  { file: "t13.jpg", w: 866, h: 345 },
  { file: "t14.jpg", w: 1170, h: 1015 },
  { file: "t15.png", w: 1170, h: 2025 },
  { file: "t16.jpg", w: 1170, h: 1586 },
  { file: "t17.jpg", w: 1170, h: 1669 },
  { file: "t18.jpg", w: 1170, h: 822 },
  { file: "t19.jpg", w: 1170, h: 441 },
  { file: "t20.jpg", w: 969, h: 647 },
  { file: "t21.jpg", w: 1170, h: 1533 },
  { file: "t22.jpg", w: 1170, h: 330 },
  { file: "t23.jpg", w: 839, h: 571 },
  { file: "t24.jpg", w: 1170, h: 390 },
  { file: "t25.jpg", w: 1170, h: 942 },
  { file: "t26.jpg", w: 1170, h: 1120 },
  { file: "t27.jpg", w: 1170, h: 828 },
];

export function Testimonios() {
  return (
    <section id="opiniones" className="bg-bg-2 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-center text-5xl font-semibold leading-[0.98] sm:text-6xl">
            No hace falta que me <span className="text-gradient-gold">creas a mí</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-center text-cream-dim">
            Durante estos meses me llegaron cientos de mensajes. Estas son capturas reales
            de clientes que ya la probaron.
          </p>
        </Reveal>

        {/* Mobile: carrusel horizontal con scroll-snap (el usuario desliza) */}
        <Reveal delay={0.1} className="sm:hidden">
          <p className="mt-2 text-center text-xs uppercase tracking-[0.18em] text-muted">
            Deslizá para ver más →
          </p>
        </Reveal>
        <Reveal delay={0.14} className="mt-8 sm:hidden">
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CAPTURAS.map((c) => (
              <div
                key={c.file}
                className="flex h-[420px] w-[84vw] shrink-0 snap-center items-center justify-center"
              >
                <Image
                  src={`/testimonios/${c.file}`}
                  alt="Captura de WhatsApp de un cliente de Giapura"
                  width={c.w}
                  height={c.h}
                  sizes="84vw"
                  className="h-auto max-h-full w-auto max-w-full rounded-3xl"
                />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Desktop/tablet: grilla masonry */}
        <div className="mt-14 hidden sm:columns-2 sm:block lg:columns-3 xl:columns-4">
          {CAPTURAS.map((c, idx) => (
            <Reveal key={c.file} delay={0.03 + (idx % 4) * 0.05} className="mb-4 break-inside-avoid">
              <div className="overflow-hidden rounded-2xl border border-line bg-bg shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(109,41,0,0.3)]">
                <Image
                  src={`/testimonios/${c.file}`}
                  alt="Captura de WhatsApp de un cliente de Giapura"
                  width={c.w}
                  height={c.h}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex justify-center">
            <BotonComprar label="Yo también quiero" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
