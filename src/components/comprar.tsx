import { Reveal } from "@/components/reveal";
import { ProductoVisual } from "@/components/producto-visual";
import { BotonComprar } from "@/components/boton-comprar";
import { Countdown } from "@/components/countdown";

export function Comprar() {
  return (
    <section id="comprar" className="relative px-6 py-28 text-center">
      <Reveal className="flex justify-center">
        {/* FOTO DE LOS FRASCOS — placeholder hasta tener la foto real */}
        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />
          <div className="flex items-end justify-center gap-2">
            <div className="animate-float-slow">
              <ProductoVisual className="h-72 w-auto drop-shadow-[0_30px_60px_rgba(109,41,0,0.2)] sm:h-96" />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="font-display mt-12 text-4xl font-semibold sm:text-5xl">
          Comprar <span className="text-gradient-gold">Giapura</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-col items-center gap-4">
          <BotonComprar />
          <Countdown />
        </div>
      </Reveal>
    </section>
  );
}
