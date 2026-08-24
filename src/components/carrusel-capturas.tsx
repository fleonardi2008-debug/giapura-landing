"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import type { Captura } from "@/components/testimonios";

/**
 * Carrusel de capturas para mobile. El scroll-snap solo no comunica que hay
 * más contenido al costado, así que suma flechas a los lados. Las flechas
 * además son el equivalente accesible del gesto de deslizar: un carrusel que
 * solo responde al swipe deja afuera a quien navega por teclado.
 */
export function CarruselCapturas({ capturas }: { capturas: readonly Captura[] }) {
  const pistaRef = useRef<HTMLDivElement>(null);
  const [indice, setIndice] = useState(0);

  const irA = useCallback((i: number) => {
    const pista = pistaRef.current;
    if (!pista) return;
    const destino = pista.children[i] as HTMLElement | undefined;
    if (!destino) return;
    pista.scrollTo({ left: destino.offsetLeft - pista.offsetLeft, behavior: "smooth" });
  }, []);

  // El índice se deriva del scroll real (no de un contador propio) para que
  // deslizar con el dedo y tocar las flechas nunca queden desincronizados.
  useEffect(() => {
    const pista = pistaRef.current;
    if (!pista) return;
    let frame = 0;
    const alScrollear = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const centro = pista.scrollLeft + pista.clientWidth / 2;
        let mejor = 0;
        let menorDist = Infinity;
        Array.from(pista.children).forEach((hijo, i) => {
          const el = hijo as HTMLElement;
          const c = el.offsetLeft - pista.offsetLeft + el.clientWidth / 2;
          const d = Math.abs(c - centro);
          if (d < menorDist) {
            menorDist = d;
            mejor = i;
          }
        });
        setIndice(mejor);
      });
    };
    pista.addEventListener("scroll", alScrollear, { passive: true });
    return () => {
      pista.removeEventListener("scroll", alScrollear);
      cancelAnimationFrame(frame);
    };
  }, []);

  const primera = indice === 0;
  const ultima = indice === capturas.length - 1;

  return (
    <div className="relative">
      <div
        ref={pistaRef}
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {capturas.map((c) => (
          <div
            key={c.file}
            className="flex h-[380px] w-[84vw] shrink-0 snap-center items-center justify-center"
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

      {/* Flechas: 44px de lado para cumplir el mínimo táctil. */}
      <Flecha
        lado="izquierda"
        onClick={() => irA(indice - 1)}
        deshabilitada={primera}
      />
      <Flecha lado="derecha" onClick={() => irA(indice + 1)} deshabilitada={ultima} />
    </div>
  );
}

function Flecha({
  lado,
  onClick,
  deshabilitada,
}: {
  lado: "izquierda" | "derecha";
  onClick: () => void;
  deshabilitada: boolean;
}) {
  const Icono = lado === "izquierda" ? CaretLeft : CaretRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={deshabilitada}
      aria-label={lado === "izquierda" ? "Ver la captura anterior" : "Ver la captura siguiente"}
      className={`absolute top-[170px] z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-2/90 text-cream shadow-[0_6px_20px_-8px_rgba(36,13,8,0.5)] backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-90 disabled:pointer-events-none disabled:opacity-0 ${
        lado === "izquierda" ? "-left-1" : "-right-1"
      }`}
    >
      <Icono size={20} weight="bold" aria-hidden />
    </button>
  );
}
