import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { BotonComprar } from "@/components/boton-comprar";
import { Countdown } from "@/components/countdown";

export function Comprar() {
  return (
    <section id="comprar" className="relative px-6 py-28 text-center">
      <Reveal className="flex justify-center">
        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[110px]" />
          <div className="overflow-hidden rounded-[2rem] shadow-[0_50px_90px_-30px_rgba(36,13,8,0.5)] ring-1 ring-line">
            <Image
              src="/frascos-duo.jpg"
              alt="Pasta de maní Giapura: Natural y Con cacao"
              width={2000}
              height={3000}
              className="h-[58vh] w-auto object-cover"
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
          Natural · Con cacao
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="font-display mt-3 text-5xl font-semibold sm:text-6xl">
          Volvé a lo <span className="text-gradient-gold">simple y real</span>.
        </h2>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-10 flex flex-col items-center gap-4">
          <BotonComprar />
          <Countdown />
        </div>
      </Reveal>
    </section>
  );
}
