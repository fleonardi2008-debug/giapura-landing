import { Reveal } from "@/components/reveal";
import { BotonComprar } from "@/components/boton-comprar";
import { Wordmark } from "@/components/wordmark";

export function Gracias() {
  return (
    <section id="gracias" className="relative overflow-hidden bg-dark px-6 py-32 text-center text-paper">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-bright/10 blur-[130px]" />

      <Reveal>
        <span className="text-xs uppercase tracking-[0.4em] text-gold-bright">Gracias</span>
      </Reveal>

      <div className="mx-auto mt-10 max-w-xl space-y-6 text-lg leading-relaxed text-paper/70">
        <Reveal delay={0.05}>
          <p>Si llegaste hasta acá, es porque decidiste ser parte de esta historia.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p>Hace seis meses esto era una idea. Hoy puedo hacer envíos a todo el país.</p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-paper">
            Ojalá dentro de unos años podamos mirar para atrás y decir: “qué locura haber
            estado desde el principio”.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p>Gracias por confiar.</p>
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
        <div className="mt-24 border-t border-paper/15 pt-8 text-sm text-paper/50">
          <Wordmark className="text-xl text-gold-bright" />
          <p className="mt-3">
            ¿Dudas? Escribinos a{" "}
            <a href="https://instagram.com/giapura" className="text-gold-bright hover:underline">
              @giapura
            </a>{" "}
            en Instagram.
          </p>
          <p className="mt-4 text-xs text-paper/30">
            © {new Date().getFullYear()} Giapura. Hecho en Argentina.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
