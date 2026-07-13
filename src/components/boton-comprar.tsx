"use client";

import { TIENDA_URL } from "@/lib/config";
import { useContador } from "@/lib/useContador";

export function BotonComprar({
  className = "",
  label = "Quiero el mío",
}: {
  className?: string;
  label?: string;
}) {
  const { data } = useContador();
  // Mientras no hay data todavía, dejamos comprar (optimista). Solo bloqueamos
  // cuando el ERP confirma que la preventa está cerrada.
  const cerrada = data !== null && !data.abierta;

  if (cerrada) {
    return (
      <button
        disabled
        className={`inline-flex cursor-not-allowed items-center justify-center rounded-full bg-bg-3 px-8 py-4 text-base font-semibold text-muted ring-1 ring-line ${className}`}
      >
        Preventa cerrada
      </button>
    );
  }

  return (
    <a
      href={TIENDA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-bright px-8 py-4 text-base font-semibold text-bg shadow-[0_10px_40px_-10px_rgba(217,164,65,0.6)] transition-transform hover:scale-[1.03] active:scale-95 ${className}`}
    >
      {label}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}
