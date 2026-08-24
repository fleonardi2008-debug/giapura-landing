"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { NEWSLETTER_URL } from "@/lib/config";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState<"idle" | "cargando" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (estado === "cargando") return;
    setEstado("cargando");
    try {
      const res = await fetch(NEWSLETTER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setEstado("ok");
    } catch {
      setEstado("error");
    }
  }

  return (
    <section id="newsletter" className="border-t border-line bg-bg-2 px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            ¿Te quedaste con <span className="text-gradient-gold">ganas</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mx-auto mt-5 max-w-md text-cream-dim">
            Dejanos tu mail y vas a ser de los primeros en enterarte cuando abra la próxima
            tanda — antes que nadie más.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-8">
          {estado === "ok" ? (
            <p className="font-medium text-cream">¡Listo! Te vamos a avisar. 🎉</p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@mail.com"
                className="flex-1 rounded-full border border-line bg-bg px-5 py-3 text-cream outline-none transition-colors focus:border-gold"
              />
              <button
                type="submit"
                disabled={estado === "cargando"}
                className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-btn px-7 py-3 text-sm font-medium text-paper transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:bg-btn-hover active:translate-y-0 active:scale-95 disabled:opacity-60"
              >
                <span className="shine" aria-hidden />
                <span className="relative">{estado === "cargando" ? "Enviando..." : "Avisame"}</span>
              </button>
            </form>
          )}
          {estado === "error" && (
            <p className="mt-3 text-sm text-red-500">
              Algo falló. Probá de nuevo en un rato.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
