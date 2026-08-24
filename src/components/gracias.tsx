import { Reveal } from "@/components/reveal";
import { BotonComprar } from "@/components/boton-comprar";
import { Wordmark } from "@/components/wordmark";
import { Aurora } from "@/components/aurora";
import { PuenteColor } from "@/components/puente-color";

export function Gracias() {
  return (
    <section
      id="gracias"
      className="relative overflow-hidden bg-dark px-6 pb-32 pt-40 text-center text-paper"
    >
      {/* Entrada al marrón desde el crema de Cobertura. */}
      <PuenteColor desde="bg-2" posicion="arriba" altura={200} />
      <Aurora tone="dark" />

      <div className="relative z-10">
      <Reveal>
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-bright">
          Gracias
        </span>
      </Reveal>

      <div className="mx-auto mt-10 max-w-xl space-y-6 text-lg leading-relaxed text-paper/85">
        <Reveal delay={0.05}>
          <p>Si llegaste hasta acá, es porque decidiste ser parte de esta historia.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p>
            Hace seis meses esto era una idea. Hoy puedo hacer envíos a{" "}
            <span className="font-semibold text-paper">todo el país</span>.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-display text-2xl leading-snug text-gold-bright sm:text-3xl">
            Ojalá dentro de unos años podamos mirar para atrás y decir: “qué locura haber
            estado desde el principio”.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-semibold text-paper">Gracias por confiar.</p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="font-display text-2xl text-paper">— Fran</p>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <div className="mt-14">
          <BotonComprar label="Quiero ser parte" variant="outline" className="px-10 py-5 text-lg" />
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="mt-24 border-t border-paper/15 pt-8 text-sm text-paper/75">
          <Wordmark className="text-xl text-gold-bright" />
          <p className="mt-3">
            ¿Dudas? Escribinos a{" "}
            <a
              href="https://instagram.com/giapura"
              className="font-semibold text-gold-bright hover:underline"
            >
              @giapura
            </a>{" "}
            en Instagram.
          </p>
          <p className="mt-4 text-xs text-paper/55">
            © {new Date().getFullYear()} Giapura. Hecho en Argentina.
          </p>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
