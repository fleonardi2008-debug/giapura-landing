"use client";

import { TIENDA_URL } from "@/lib/config";
import { useContador } from "@/lib/useContador";

export function BotonComprar({
  className = "",
  label = "Quiero el mío",
  variant = "solid",
}: {
  className?: string;
  label?: string;
  /** solid: pill marrón sobre fondo claro · outline: pill con borde para fondos oscuros */
  variant?: "solid" | "outline";
}) {
  const { data } = useContador();
  const cerrada = data !== null && !data.abierta;

  if (cerrada) {
    return (
      <button
        disabled
        className={`inline-flex cursor-not-allowed items-center justify-center rounded-full border border-line px-8 py-4 text-base font-medium opacity-50 ${className}`}
      >
        Preventa cerrada
      </button>
    );
  }

  const estilo =
    variant === "outline"
      ? "border border-paper/40 text-paper hover:bg-paper hover:text-dark"
      : "bg-btn text-paper hover:bg-[#6d2900] shadow-[0_12px_38px_-12px_rgba(109,41,0,0.5)]";

  return (
    <a
      href={TIENDA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium transition-all hover:scale-[1.03] active:scale-95 ${estilo} ${className}`}
    >
      {label}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}
