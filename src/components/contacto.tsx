import { Reveal } from "@/components/reveal";
import { BotonComprar } from "@/components/boton-comprar";
import { Countdown } from "@/components/countdown";

export function Contacto() {
  return (
    <section id="contacto" className="relative overflow-hidden px-6 py-28 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <Reveal>
        <h2 className="font-display mx-auto max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
          No la vuelvas a dejar pasar.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto mt-5 max-w-lg text-cream-dim">
          La esperaste 6 meses. Ahora está a un clic — pero solo por hoy.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-col items-center gap-3">
          <BotonComprar className="px-10 py-5 text-lg" />
          <Countdown />
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-20 border-t border-line pt-8 text-sm text-muted">
          <p className="font-display text-lg text-cream">giapura</p>
          <p className="mt-2">
            ¿Dudas? Escribinos a{" "}
            <a href="https://instagram.com/giapura" className="text-gold hover:underline">
              @giapura
            </a>{" "}
            en Instagram.
          </p>
          <p className="mt-4 text-xs text-muted/60">
            © {new Date().getFullYear()} Giapura. Hecho en Argentina.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
