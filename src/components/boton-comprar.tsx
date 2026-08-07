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
  /** solid: pill marrón sobre fondo claro · outline: pill con borde para fondos oscuros ·
   * crema: colores de marca (#F5CF89 fondo / #753b18 texto), sin borde (para fotos oscuras) */
  variant?: "solid" | "outline" | "crema";
}) {
  const { data } = useContador();
  const inicioMs = data?.inicioAt ? new Date(data.inicioAt).getTime() : null;
  // Solo se deshabilita ANTES de arrancar. Una vez pasada la ventana, la web queda
  // en modo recompra y el botón sigue activo (lleva a la tienda).
  const proximamente = inicioMs !== null && Date.now() < inicioMs;

  if (proximamente) {
    const fecha = data!.inicioAt
      ? new Date(data!.inicioAt).toLocaleDateString("es-AR", {
          day: "numeric",
          month: "long",
        })
      : "";
    const disabledEstilo =
      variant === "outline" || variant === "crema"
        ? "border-paper/40 text-paper"
        : "border-line text-cream";
    return (
      <button
        disabled
        className={`inline-flex cursor-not-allowed items-center justify-center rounded-full border px-8 py-4 text-base font-medium opacity-60 ${disabledEstilo} ${className}`}
      >
        Disponible el {fecha}
      </button>
    );
  }

  const estilo =
    variant === "outline"
      ? "border border-paper/40 text-paper hover:border-paper hover:shadow-[0_16px_40px_-12px_rgba(245,238,223,0.35)]"
      : variant === "crema"
        ? "bg-[#F5CF89] text-[#753b18] hover:bg-[#f7d89e] shadow-[0_10px_30px_-10px_rgba(36,13,8,0.4)] hover:shadow-[0_22px_55px_-12px_rgba(36,13,8,0.55)]"
        : "bg-btn text-paper hover:bg-[#6d2900] shadow-[0_10px_30px_-10px_rgba(109,41,0,0.5)] hover:shadow-[0_22px_55px_-12px_rgba(109,41,0,0.75)]";

  return (
    <a
      href={TIENDA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-shine group inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 active:translate-y-0 active:scale-95 ${estilo} ${className}`}
    >
      <span className="shine" aria-hidden />
      <span className="relative">{label}</span>
      <span className="relative transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
        →
      </span>
    </a>
  );
}
