import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { BotonComprar } from "@/components/boton-comprar";
import { PuenteColor } from "@/components/puente-color";
import { CarruselCapturas } from "@/components/carrusel-capturas";

export type Captura = { file: string; w: number; h: number };

// Capturas reales de WhatsApp de clientes. Dimensiones intrínsecas (ya
// corregidas por orientación EXIF) para que next/image evite layout shift.
const CAPTURAS: readonly Captura[] = [
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
    <section id="opiniones" className="relative overflow-hidden bg-bg-2 px-6 pb-6 pt-36">
      {/* Salida del marrón de Fundador hacia el crema, sin corte seco. */}
      <PuenteColor desde="dark" posicion="arriba" altura={180} />

      <div className="relative mx-auto max-w-6xl">
        {/* El titular carga todo el peso; el párrafo largo que había debajo
            competía con él y no dejaba que nada resaltara. */}
        <Reveal>
          <h2 className="font-display text-center text-[3.25rem] font-semibold leading-[0.95] sm:text-7xl">
            No hace falta que me <span className="text-gradient-gold">creas a mí</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-md text-center text-lg font-medium text-cream-dim">
            Capturas reales de clientes que ya la probaron.
          </p>
        </Reveal>

        {/* Mobile: carrusel horizontal con scroll-snap + flechas, para que se
            entienda que hay más contenido a los costados. */}
        <Reveal delay={0.12} className="mt-8 sm:hidden">
          <CarruselCapturas capturas={CAPTURAS} />
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
          <div className="mt-4 flex justify-center">
            <BotonComprar label="Yo también quiero" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
